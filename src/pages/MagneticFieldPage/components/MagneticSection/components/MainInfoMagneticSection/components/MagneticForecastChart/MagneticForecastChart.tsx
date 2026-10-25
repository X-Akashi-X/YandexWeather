import styles from "./magneticForecastChart.module.scss";
import {
  Bar,
  BarChart,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  type BarRectangleItem,
  type LabelProps,
  type TooltipContentProps,
} from "recharts";
import { getMagneticFieldCategory } from "@utils/categories/categories";
import type { MagneticForecastChartProps } from "@ts/props";
import { getDayItemDayLabel } from "@utils/formatters";
import type {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";

const MagneticForecastChart = ({
  data: { hours },
  index,
}: MagneticForecastChartProps) => {
  const renderBar = (props: BarRectangleItem) => {
    const { x, y, width, height, payload } = props;
    const category = getMagneticFieldCategory(payload.twoWeekHourlyMagnetic);
    const isPast = (payload as { isPast?: boolean })?.isPast;

    return (
      <Rectangle
        x={x}
        y={y}
        width={width}
        height={height}
        radius={[4, 4, 0, 0]}
        fill={isPast ? "var(--color-light-grey-opacity-low)" : category.color}
        style={{ cursor: "pointer" }}
      />
    );
  };

  const renderValueLabel = (props: LabelProps) => {
    const { x, width, value, index } = props;
    const isPast = index !== undefined ? hours[index]?.isPast : false;

    return (
      <text
        x={(x as number) + (width as number) / 2}
        y={80}
        textAnchor="middle"
        fontSize={16}
        fontWeight={500}
        fill={isPast ? "var(--color-light-grey-opacity-low)" : ""}
        style={{ cursor: "pointer" }}
      >
        {value}
      </text>
    );
  };

  const renderTooltip = ({
    active,
    payload,
  }: TooltipContentProps<ValueType, NameType>) => {
    if (!active || !payload || !payload.length) return null;

    const dayValue = payload[0].value as number;
    const category = getMagneticFieldCategory(dayValue);

    return <p className={styles.tooltip}>{category.text}</p>;
  };

  return (
    <section className={styles.section_wrapper}>
      <div className={styles.title_wrapper}>
        <p className={styles.title}>
          {getDayItemDayLabel(index, hours[0].twoWeekHourlyWeekday)}
        </p>
        <p className="small_grey_text">{hours[0].twoWeekHourlyDate}</p>
      </div>
      <div className={styles.chart_wrapper}>
        <ResponsiveContainer width="100%" height={127}>
          <BarChart data={hours} barGap={0} barCategoryGap="6">
            <YAxis domain={[0, 9]} hide={true} tickCount={4} />
            <XAxis
              dataKey="twoWeekHourlyTime"
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
            <Tooltip
              content={renderTooltip}
              cursor={false}
              allowEscapeViewBox={{ x: true, y: false }}
            />
            <Bar
              dataKey={"twoWeekHourlyMagnetic"}
              shape={renderBar}
              label={renderValueLabel}
              minPointSize={3}
              style={{ fontWeight: "var(--week-bold-text)" }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default MagneticForecastChart;
