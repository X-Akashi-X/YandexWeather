import styles from "./pressureTimeLineChart.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import { LineChart, YAxis, XAxis, Line } from "recharts";

const PressureTimeLineChart = () => {
  return (
    <Swiper
      modules={[FreeMode, Navigation]}
      slidesPerView="auto"
      freeMode
      navigation
    >
      <SwiperSlide style={{ width: "100%" }}>
        <LineChart width="100%" height={170} data={items}>
          <defs>
            <linearGradient id="pressureGradient" x1="0" y1="0" x2="1" y2="0">
              {items.map((item, i) => (
                <stop
                  key={item.label}
                  offset={`${(i / (items.length - 1)) * 100}%`}
                  stopColor={getPressureCategory(item.value).color}
                />
              ))}
            </linearGradient>
          </defs>

          <YAxis hide domain={[735, 770]} />
          <XAxis
            xAxisId="time"
            dataKey="label"
            orientation="top" /* tick как у других графиков */
          />
          <XAxis
            xAxisId="value"
            dataKey="label"
            orientation="bottom" /* tick читает items[index].value */
          />

          <Line
            type="monotone"
            dataKey="value"
            xAxisId="time"
            stroke="url(#pressureGradient)"
            strokeWidth={3}
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
  );
};

export default PressureTimeLineChart;
