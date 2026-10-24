import useServices from "@services/useServices";
import styles from "./magneticForecastChart.module.scss";
import {
  Bar,
  BarChart,
  Rectangle,
  ResponsiveContainer,
  XAxis,
  YAxis,
  type BarRectangleItem,
  type LabelProps,
} from "recharts";
import { getMagneticFieldCategory } from "@utils/categories/categories";

const MagneticForecastChart = () => {
  const { getTodayHourlyData } = useServices();

  const renderBar = (props: BarRectangleItem) => {
    const { x, y, width, height, payload } = props;
    const category = getMagneticFieldCategory(payload.hourlyMagneticField);
    const isPast = (payload as { isPast?: boolean })?.isPast;

    return (
      <Rectangle
        x={x}
        y={y}
        width={width}
        height={height}
        radius={[4, 4, 0, 0]}
        fill={isPast ? "var(--color-light-grey-opacity-low)" : category.color}
      />
    );
  };

  const renderValueLabel = (props: LabelProps) => {
    const { x, width, value, index } = props;
    const isPast =
      index !== undefined ? getTodayHourlyData[index]?.isPast : false;

    return (
      <text
        x={(x as number) + (width as number) / 2}
        y={80}
        textAnchor="middle"
        fontSize={16}
        fontWeight={500}
        fill={isPast ? "var(--color-light-grey-opacity-low)" : ""}
      >
        {value}
      </text>
    );
  };

  return (
    <section className={styles.sectin_wrapper}>
      <div className={styles.title_wrapper}>
        <p className={styles.title}>Сегодня</p>
        <p className="small_grey_text">24 октября</p>
      </div>
      <div className={styles.chart_wrapper}>
        <ResponsiveContainer width="100%" height={127}>
          <BarChart data={getTodayHourlyData} barGap={0} barCategoryGap="6">
            <YAxis domain={[0, 9]} hide={true} tickCount={4} />
            <XAxis
              dataKey="timeToday"
              axisLine={{ stroke: "var(--color-light-grey)" }}
              tickLine={false}
              padding={{ left: 24, right: 24 }}
              tick={(props) => {
                const { x, y, payload } = props;

                return (
                  <text
                    x={x}
                    y={+y + 18}
                    textAnchor="middle"
                    fontSize={14}
                    fill="grey"
                  >
                    {payload.value}
                  </text>
                );
              }}
            />
            <Bar
              dataKey={"hourlyMagneticField"}
              shape={renderBar}
              label={renderValueLabel}
              minPointSize={3}
              style={{ cursor: "pointer", fontWeight: "var(--week-bold-text)" }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default MagneticForecastChart;
