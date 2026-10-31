import styles from "./pressureTimeLineChart.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import {
  LineChart,
  YAxis,
  XAxis,
  Line,
  ReferenceArea,
  type RectangleProps,
  Rectangle,
} from "recharts";
import type { PressureChartItem } from "@ts/props";
import { getPressureCategory } from "@utils/categories/categories";
import {
  PRESSURE_CHART_NORMAL_MAX,
  PRESSURE_CHART_NORMAL_MIN,
  PRESSURE_CHART_STEP,
} from "@constants/components/pressureTimeLineChart";
import { useSwiperStepScroll } from "@hooks/useSwiperStepScroll ";
import Arrow from "@assets/icons/arrowMore.svg";
import { useEffect } from "react";

const PressureTimeLineChart = ({
  items,
  dateKey,
}: {
  items: PressureChartItem[];
  dateKey: string;
}) => {
  const width = items.length * PRESSURE_CHART_STEP;
  const {
    swiper,
    setSwiper,
    scroll,
    isEnd,
    isStart,
    updateEdges,
    scrollToIndex,
  } = useSwiperStepScroll(PRESSURE_CHART_STEP, 4);

  useEffect(() => {
    if (!swiper) return;
    swiper.update();

    const now = new Date();
    const todayKey = now.toLocaleDateString("sv-SE");
    const index = dateKey === todayKey ? now.getHours() : 0;

    scrollToIndex(index);
  }, [swiper, dateKey, items.length]);

  const renderPressureNormalLine = (props: RectangleProps) => {
    const { x, y, width, height } = props;

    return (
      <Rectangle
        x={x}
        y={y}
        width={width}
        height={height}
        radius={6}
        fill="rgb(51, 193, 21)"
        fillOpacity={0.08}
      />
    );
  };
  return (
    <section className={styles.section_wrapper}>
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
          slidesPerView="auto"
          freeMode={true}
          touchRatio={1}
          onSwiper={(s) => {
            setSwiper(s);
            updateEdges(s);
          }}
          onProgress={updateEdges}
          onResize={updateEdges}
        >
          <SwiperSlide style={{ width }}>
            <LineChart
              width={width}
              height={170}
              data={items}
              style={{ cursor: "pointer" }}
            >
              <defs>
                <linearGradient
                  id="pressureGradient"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="0"
                >
                  {items.map((item, i) => (
                    <stop
                      key={item.label}
                      offset={`${(i / (items.length - 1)) * 100}%`}
                      stopColor={getPressureCategory(item.value).color}
                    />
                  ))}
                </linearGradient>
              </defs>

              <YAxis hide domain={[735, 780]} />
              <XAxis
                xAxisId="label"
                dataKey="label"
                orientation="top"
                tickLine={false}
                axisLine={false}
                interval={0}
                padding={{ left: 40, right: 40 }}
                tick={{
                  fill: "var(--color-light-grey)",
                  fontSize: 18,
                }}
              />
              <XAxis
                xAxisId="value"
                dataKey="value"
                orientation="bottom"
                tickLine={false}
                axisLine={false}
                interval={0}
                padding={{ left: 40, right: 40 }}
                tick={{
                  fill: "black",
                  fontSize: 18,
                  style: { fontWeight: "var(--week-bold-text)" },
                }}
              />
              <ReferenceArea
                xAxisId="time"
                y1={PRESSURE_CHART_NORMAL_MIN}
                y2={PRESSURE_CHART_NORMAL_MAX}
                shape={renderPressureNormalLine}
              />
              <Line
                type="monotone"
                dataKey="value"
                xAxisId="label"
                stroke="url(#pressureGradient)"
                strokeWidth={3}
                activeDot={false}
                dot={({ cx, cy, index }) => (
                  <circle
                    key={index}
                    cx={cx}
                    cy={cy}
                    r={5}
                    fill={getPressureCategory(items[index].value).color}
                  />
                )}
              />
            </LineChart>
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
      <div className={styles.category_wrapper}>
        <div className={styles.circle} />
        <p>Норма 731−751 мм рт. ст.</p>
      </div>
    </section>
  );
};

export default PressureTimeLineChart;
