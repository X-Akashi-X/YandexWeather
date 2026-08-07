import useServices from "@services/useSrvices";
import styles from "./weatherChart.module.scss";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { getPlusOrNot, getWeatherEffect } from "@utils/weatherEffects";

const WeatherChart = () => {
  const data = useServices().getTenDaysData() || [];

  return (
    <div className={styles.main_wrapper}>
      <h2>Прогноз на 10 дней</h2>
      <a className={styles.days_wrapper}>
        {data.map((item, i) => {
          const { tenDaysWeatherCode, tenDaysWeekday, tenDaysDate } = item;
          const effect = getWeatherEffect(tenDaysWeatherCode);
          return (
            <div className={styles.day_wrapper} key={i}>
              <p>{tenDaysWeekday}</p>
              <p className="small_grey_text">{i === 0 ? "Сегодня" : tenDaysDate}</p>
              <img src={effect} alt="" />
            </div>
          );
        })}
      </a>
      <div className={styles.chart_wrapper}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 10, right: 52, left: 52, bottom: 10 }}
          >
            <YAxis
              hide={true}
              yAxisId="top"
              domain={["dataMin - 10", "dataMax + 1"]}
            />
            <XAxis
              dataKey="temp_max"
              xAxisId="top"
              orientation="top"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "black", fontSize: 20, fontWeight: 600 }}
              tickFormatter={(value) =>
                `${getPlusOrNot(value)}°`
              }
            />
            <Line
              type="monotone"
              activeDot={false}
              yAxisId="top"
              xAxisId="top"
              dataKey="temp_max"
              stroke="#5388D7"
              strokeWidth={2}
              dot={(props: { cx?: number; cy?: number; index?: number }) => {
                const { cx, cy, index } = props;

                if (!cx || !cy || !index) return null;

                if (index === 0) {
                  return (
                    <foreignObject
                      key={index}
                      x={cx - 22}
                      y={cy - 10}
                      width={45}
                      height={20}
                    >
                      <div className={`${styles.frame} ${styles.frame_day}`}>
                        День
                      </div>
                    </foreignObject>
                  );
                }
                return (
                  <circle cx={cx} cy={cy} r={4} fill="#5388D7" key={index} />
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
              dataKey="temp_min"
              xAxisId="bottom"
              yAxisId="bottom"
              stroke="#C5CCD4"
              strokeWidth={2}
              dot={(props) => {
                const { cx, cy, index } = props;

                if (!cx || !cy || !index) return null;

                if (index === 0) {
                  return (
                    <foreignObject
                      key={index}
                      x={cx - 22}
                      y={cy - 10}
                      width={45}
                      height={20}
                    >
                      <div className={`${styles.frame} ${styles.frame_night}`}>
                        Ночь
                      </div>
                    </foreignObject>
                  );
                }
                return (
                  <circle cx={cx} cy={cy} r={4} fill="#C5CCD4" key={index} />
                );
              }}
            />
            <XAxis
              dataKey="temp_min"
              xAxisId="bottom"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "black", fontSize: 20, fontWeight: 600 }}
              tickFormatter={(value) =>
                `${getPlusOrNot(value)}°`
              }
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WeatherChart;
