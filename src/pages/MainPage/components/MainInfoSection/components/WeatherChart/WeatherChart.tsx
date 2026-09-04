import useServices from "@services/useServices";
import styles from "./weatherChart.module.scss";
import Arrow from "@assets/icons/arrowMore.svg";
import { Link } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { useState } from "react";
import { SATURDAY, SUNDAY, TODAY } from "@constants/daysCodes";

const WeatherChart = () => {
  const { getTenDaysData } = useServices();
  const data = getTenDaysData;

  const [active, setActive] = useState(false);

  function toggleDropdown() {
    setActive((prev) => !prev);
  }

  return (
    <>
      <div className={styles.main_wrapper}>
        <h2>Прогноз на 10 дней</h2>
        <button className={styles.dropdown_button} onClick={toggleDropdown}>
          <p>Краткий прогноз</p>
          <img
            src={Arrow}
            alt="Стрелка"
            className={active ? "rotate180" : ""}
          />
        </button>
        <div
          className={`${styles.main_chart_wrapper} ${active ? styles.active : ""}`}
        >
          <Link to="/" className={styles.days_wrapper}>
            {data.map(
              (
                {
                  tenDaysDateKey,
                  tenDaysWeatherEffect,
                  tenDaysWeekday,
                  tenDaysDate,
                  tenDaysWeekend,
                  tenDaysWeatherInfo,
                },
                i,
              ) => {
                return (
                  <div className={styles.day_wrapper} key={tenDaysDateKey}>
                    <p
                      className={
                        tenDaysWeekend === SATURDAY || tenDaysWeekend === SUNDAY
                          ? styles.weekend_day
                          : ""
                      }
                    >
                      {tenDaysWeekday}
                    </p>
                    <p className="small_grey_text">
                      {i === TODAY ? "Сегодня" : tenDaysDate}
                    </p>
                    <img src={tenDaysWeatherEffect} alt={tenDaysWeatherInfo} />
                  </div>
                );
              },
            )}
          </Link>
          <div className={styles.chart_wrapper}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={data}
                margin={{ top: 10, right: 25, left: 25, bottom: 10 }}
              >
                <YAxis
                  hide={true}
                  yAxisId="top"
                  domain={["dataMin - 10", "dataMax + 1"]}
                />
                <XAxis
                  dataKey="tenDaysMaxTemperature"
                  xAxisId="top"
                  orientation="top"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "black", fontSize: 20, fontWeight: 600 }}
                  tickFormatter={(value) => `${value}°`}
                />
                <Line
                  type="monotone"
                  activeDot={false}
                  yAxisId="top"
                  xAxisId="top"
                  dataKey="tenDaysMaxTemperature"
                  stroke="#5388D7"
                  strokeWidth={2}
                  dot={(props) => {
                    const { cx, cy, index } = props;

                    if (
                      cx === undefined ||
                      cy === undefined ||
                      index === undefined
                    )
                      return null;

                    if (index === 0) {
                      return (
                        <foreignObject
                          key={index}
                          x={cx - 22}
                          y={cy - 10}
                          width={45}
                          height={20}
                        >
                          <div
                            className={`${styles.frame} ${styles.frame_day}`}
                          >
                            День
                          </div>
                        </foreignObject>
                      );
                    }
                    return (
                      <circle
                        cx={cx}
                        cy={cy}
                        r={4}
                        fill="#5388D7"
                        key={index}
                      />
                    );
                  }}
                />
                <YAxis
                  hide={true}
                  yAxisId="bottom"
                  domain={["dataMin - 1", "dataMax + 10"]}
                />
                <Line
                  type="monotone"
                  activeDot={false}
                  dataKey="tenDaysMinTemperature"
                  xAxisId="bottom"
                  yAxisId="bottom"
                  stroke="#C5CCD4"
                  strokeWidth={2}
                  dot={(props) => {
                    const { cx, cy, index } = props;

                    if (
                      cx === undefined ||
                      cy === undefined ||
                      index === undefined
                    )
                      return null;

                    if (index === 0) {
                      return (
                        <foreignObject
                          key={index}
                          x={cx - 22}
                          y={cy - 10}
                          width={45}
                          height={20}
                        >
                          <div
                            className={`${styles.frame} ${styles.frame_night}`}
                          >
                            Ночь
                          </div>
                        </foreignObject>
                      );
                    }
                    return (
                      <circle
                        cx={cx}
                        cy={cy}
                        r={4}
                        fill="#C5CCD4"
                        key={index}
                      />
                    );
                  }}
                />
                <XAxis
                  dataKey="tenDaysMinTemperature"
                  xAxisId="bottom"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "black", fontSize: 20, fontWeight: 600 }}
                  tickFormatter={(value) => `${value}°`}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherChart;
