import useServices from "@services/useSrvices";
import styles from "./weatherChart.module.scss";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  LabelList,
} from "recharts";

const WeatherChart = () => {
  const { getTenDaysData } = useServices();
  const data = getTenDaysData();

  return (
    <div className={styles.main_wrapper}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 20, right: 20, left: 20, bottom: 40 }}
        >
          <XAxis
            dataKey="date"
            tick={(props) => {
              const { x, y, payload } = props;
              const item = payload.value;
              console.log(item);

              if (!item) return null;

              return (
                <g transform={`translate(${x}, ${y})`}>
                  <foreignObject x={-30} y={10} width={60} height={70}>
                    <div className={styles.day_wrapper}>
                      <p>{item.weekday}</p>
                      <p>{item.date}</p>
                    </div>
                  </foreignObject>
                </g>
              );
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeatherChart;
