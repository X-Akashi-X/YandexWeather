import {
  Bar,
  BarChart,
  Rectangle,
  ResponsiveContainer,
  XAxis,
  YAxis,
  type BarRectangleItem,
} from "recharts";
import styles from "./allergiesWeekChart.module.scss";
import useServices from "@services/useServices";
import type { AllergiesStateActive } from "@ts/props";
import { getPollenCategory } from "@utils/categories/categories";

const AllergiesWeekChart = ({ active }: AllergiesStateActive) => {
  const { getWeekData } = useServices();
  const { weekAQData } = getWeekData;

  const renderBar = (props: BarRectangleItem) => {
    const { payload } = props;
    const dayValue = active ? payload[active] : 0;
    const color = getPollenCategory(dayValue).colorAllergies;

    return <Rectangle {...props} fill={color} radius={[5, 5, 0, 0]} />;
  };

  return (
    <div className={styles.main_wrapper}>
      <ResponsiveContainer width="100%" height={138}>
        <BarChart data={weekAQData} barGap={0}>
          <YAxis domain={[0, 100]} hide={true} tickCount={4} />
          <XAxis
            dataKey="weekDay"
            axisLine={{ stroke: "var(--color-light-grey)" }}
            tickLine={false}
            tick={(props) => {
              const { x, y, payload } = props;
              const isFirst = payload.index === 0;

              return (
                <text
                  x={x}
                  y={+y + 14}
                  textAnchor="middle"
                  fill={isFirst ? "black" : "var(--color-light-grey)"}
                >
                  {payload.value}
                </text>
              );
            }}
          />
          <Bar
            dataKey={active ? active : ""}
            shape={renderBar}
            barSize={17}
            minPointSize={3}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AllergiesWeekChart;
