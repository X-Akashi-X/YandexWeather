import styles from "./twoWeeksPressureChart.module.scss";
import {
  Bar,
  BarChart,
  ReferenceArea,
  Rectangle,
  XAxis,
  YAxis,
  type BarShapeProps,
} from "recharts";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import {
  PRESSURE_TW_CHART_NORMAL_MAX,
  PRESSURE_TW_CHART_NORMAL_MIN,
  PRESSURE_TW_CHART_SCROLL_BY,
  PRESSURE_TW_CHART_STEP,
} from "@constants/components/twoWeeksPressureChart";
import { useSwiperStepScroll } from "@hooks/useSwiperStepScroll ";
import { getPressureCategory } from "@utils/categories/categories";
import useServices from "@services/useServices";
import Arrow from "@assets/icons/arrowMore.svg";

const TwoWeeksPressureChart = () => {
  const { getTwoWeeksData } = useServices();
  const data = getTwoWeeksData;
  const { setSwiper, scroll, isStart, isEnd, updateEdges } =
    useSwiperStepScroll(PRESSURE_TW_CHART_STEP, PRESSURE_TW_CHART_SCROLL_BY);
  const width = data.length * PRESSURE_TW_CHART_STEP;

  const renderRange = ({
    x,
    y,
    width: barWidth,
    height,
    index,
  }: BarShapeProps) => {
    const item = data[index];
    const cx = x + barWidth / 2;
    const gradientId = `pressure-range-${index}`;

    return (
      <g>
        <rect
          x={cx - PRESSURE_TW_CHART_STEP / 2 + 4}
          y={0}
          width={PRESSURE_TW_CHART_STEP - 4}
          height={372}
          rx={16}
          fill="var(--grey-bg-opacity-low)"
        />

        <defs>
          <linearGradient
            id={gradientId}
            gradientUnits="userSpaceOnUse"
            x1={0}
            y1={y}
            x2={0}
            y2={y + height}
          >
            <stop
              offset="0%"
              stopColor={getPressureCategory(item.twoWeeksMaxPressure).color}
            />
            <stop
              offset="100%"
              stopColor={getPressureCategory(item.twoWeeksMinPressure).color}
            />
          </linearGradient>
        </defs>

        <Rectangle
          x={x}
          y={y}
          width={barWidth}
          height={height}
          radius={barWidth / 2}
          fill={`url(#${gradientId})`}
        />

        <text x={cx} y={32} textAnchor="middle" fontSize={16} fill="grey">
          {item.twoWeeksWeekday}
        </text>
        <text
          x={cx}
          y={y - 12}
          textAnchor="middle"
          fontSize={20}
          fontWeight="var(--week-bold-text)"
        >
          {item.twoWeeksMaxPressure}
        </text>
        <text
          x={cx}
          y={y + height + 28}
          textAnchor="middle"
          fontSize={20}
          fontWeight="var(--week-bold-text)"
        >
          {item.twoWeeksMinPressure}
        </text>
      </g>
    );
  };

  return (
    <section className={styles.section_wrapper}>
      <h3>Давление в Минске на 14 дней</h3>
      <div className={styles.main_wrapper}>
        <button
          className={styles.arrow_left}
          onClick={() => scroll(-1)}
          disabled={isStart}
        >
          <img src={Arrow} alt="" style={{ rotate: "89deg" }} />
        </button>

        <Swiper
          modules={[FreeMode]}
          onSwiper={(s) => {
            setSwiper(s);
            updateEdges(s);
          }}
          onProgress={updateEdges}
          onResize={updateEdges}
          slidesPerView="auto"
          freeMode
          key={width}
        >
          <SwiperSlide style={{ width }}>
            <BarChart
              width={width}
              height={372}
              data={data}
              margin={{ top: 70, bottom: 50, left: 0, right: 0 }}
              style={{ cursor: "pointer" }}
            >
              <YAxis hide domain={[735, 770]} />
              <XAxis hide dataKey="twoWeeksWeekday" />

              <ReferenceArea
                y1={PRESSURE_TW_CHART_NORMAL_MIN}
                y2={PRESSURE_TW_CHART_NORMAL_MAX}
                shape={(p: {
                  x: number;
                  y: number;
                  width: number;
                  height: number;
                }) => (
                  <Rectangle
                    x={p.x + 4}
                    y={p.y}
                    width={p.width - 4}
                    height={p.height}
                    radius={16}
                    fill="#33c115"
                    fillOpacity={0.08}
                  />
                )}
              />

              <Bar
                dataKey={(d) => [d.twoWeeksMinPressure, d.twoWeeksMaxPressure]}
                barSize={10}
                minPointSize={10}
                shape={renderRange}
              />
            </BarChart>
          </SwiperSlide>
        </Swiper>

        <button
          className={styles.arrow_right}
          onClick={() => scroll(1)}
          disabled={isEnd}
        >
          <img src={Arrow} alt="" style={{ rotate: "269deg" }} />
        </button>
      </div>
    </section>
  );
};

export default TwoWeeksPressureChart;
