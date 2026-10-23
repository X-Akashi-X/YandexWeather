import {
  Bar,
  BarChart,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  type BarRectangleItem,
  type TooltipContentProps,
} from "recharts";
import styles from "./allergiesWeekChart.module.scss";
import useServices from "@services/useServices";
import type { AllergiesStateActive } from "@ts/props";
import { getPollenCategory } from "@utils/categories/categories";
import type {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";

const AllergiesWeekChart = ({ active }: AllergiesStateActive) => {
  const { getWeekData } = useServices();
  const { weekAQData } = getWeekData;

  const renderBar = (props: BarRectangleItem) => {
    const { payload } = props;
    const dayValue = active ? payload[active.name] : 0;
    const color = getPollenCategory(dayValue);

    return (
      <Rectangle {...props} fill={color.colorAllergies} radius={[5, 5, 0, 0]} />
    );
  };

  const renderTooltip = ({
    active,
    payload,
  }: TooltipContentProps<ValueType, NameType>) => {
    if (!active || !payload || !payload.length) return null;

    const dayData = payload[0].payload;
    const dayValue = payload[0].value as number;
    const category = getPollenCategory(dayValue);

    return (
      <p className={styles.tooltip}>
        {dayData.formattedDate} {category.text}
      </p>
    );
  };

  return (
    <div className={styles.main_wrapper}>
      <ResponsiveContainer width="100%" height={138}>
        <BarChart data={weekAQData} barGap={0} barCategoryGap="30%">
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
                  fontSize={14}
                >
                  {payload.value}
                </text>
              );
            }}
          />
          <Tooltip
            content={renderTooltip}
            cursor={false}
            allowEscapeViewBox={{ x: true, y: false }}
          />
          <Bar
            dataKey={active?.name}
            shape={renderBar}
            minPointSize={3}
            style={{ cursor: "pointer", fontWeight: "var(--week-bold-text)" }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AllergiesWeekChart;
