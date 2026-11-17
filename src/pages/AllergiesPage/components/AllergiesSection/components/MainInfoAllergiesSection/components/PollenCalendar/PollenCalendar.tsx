import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  type BarShapeProps,
} from "recharts";
import { pollenCalendarConfig } from "./config";
import styles from "./pollenCalendar.module.scss";
import { POLLEN_SHORT_MONTH } from "@constants/weather";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";

/**
 * Renders a horizontal scrollable Gantt-style pollen blooming calendar.
 * Highlights the current month column and displays blooming duration bars for various allergenic plants.
 *
 * @returns The rendered `<section>` element containing the Swiper timeline and Recharts horizontal bar chart.
 */
const PollenCalendar = () => {
  const plants = pollenCalendarConfig.map((plant) => ({
    ...plant,
    duration: plant.end - plant.start,
  }));

  /**
   * Custom SVG shape renderer for a plant's blooming period bar with an inline plant name label.
   *
   * @param props - Recharts bar geometry and plant data payload properties.
   * @returns An SVG `<g>` group containing the rounded bar rectangle and centered text label.
   */
  function plantBar({ x, y, width, height, payload }: BarShapeProps) {
    return (
      <g>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          rx={12}
          fill="rgba(212,214,226, 1)"
        />
        <text x={x + 18} y={y + height / 2} dy="0.35em" fontWeight={600}>
          {payload.name}
        </text>
      </g>
    );
  }

  const currentMonth = new Date()
    .toLocaleDateString("ru-RU", { month: "short" })
    .replace(/\.$/, "")
    .toLowerCase();

  return (
    <section className={styles.section_wrapper}>
      <h3>Календарь цветения</h3>
      <Swiper
        modules={[FreeMode, Navigation]}
        slidesPerView="auto"
        freeMode={true}
        touchRatio={1}
        navigation
        className={styles.timeline}
      >
        <SwiperSlide>
          <div className={styles.timeline_lanes}>
            {POLLEN_SHORT_MONTH.map((month) => (
              <div className={styles.timeline_lane} key={month} />
            ))}
          </div>
          <div className={styles.timeline_months}>
            {POLLEN_SHORT_MONTH.map((month) => (
              <div
                className={`${styles.timeline_month} ${month.toLowerCase().replace(/\.$/, "") === currentMonth ? styles.current_month : ""}`}
                key={month}
              >
                {month}
              </div>
            ))}
          </div>
          <div className={styles.timeline_chart}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={plants} layout="vertical" barCategoryGap={2}>
                <XAxis type="number" domain={[0, 9]} hide />
                <YAxis type="category" dataKey="name" hide />
                <Bar
                  dataKey="start"
                  stackId="timeline"
                  fill="transparent"
                  stroke="transparent"
                />
                <Bar
                  dataKey="duration"
                  stackId="timeline"
                  shape={(props) => plantBar({ ...props })}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default PollenCalendar;
