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
import type { MagneticChartItem, MagneticForecastChartProps } from "@ts/props";
import type {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";
import useIsMobile from "@hooks/useIsMobile";
import { TABLET_SCREEN } from "@constants/breakpoints";

/**
 * Renders a responsive geomagnetic activity bar chart with color-coded storm severity levels,
 * dimmed past intervals, value labels, and localized hover tooltips.
 *
 * @param props - Component properties.
 * @param props.data - Array of `MagneticChartItem` data points to plot.
 * @param props.title - Primary heading text displayed above the chart.
 * @param props.subTitle - Optional secondary subtitle displayed next to the title.
 * @returns The rendered `<section>` element containing the magnetic forecast chart.
 */
const MagneticForecastChart = ({
  data,
  title,
  subTitle,
}: MagneticForecastChartProps) => {
  const isMobile = useIsMobile(TABLET_SCREEN);
  const barCategoryGap = isMobile ? "2" : "6";
  const xAxispaddings = isMobile
    ? { left: 0, right: 0 }
    : { left: 24, right: 24 };
  const xAxisFontSize = isMobile ? 10 : 14;

  /**
   * Custom shape renderer for chart bars that applies storm category colors and reduces opacity for past intervals.
   *
   * @param props - Recharts bar item geometry and payload properties.
   * @returns A styled `<Rectangle>` SVG element.
   */
  const renderBar = (props: BarRectangleItem) => {
    const { x, y, width, height, payload } = props;
    const item = payload as MagneticChartItem;
    const category = getMagneticFieldCategory(item.value);

    return (
      <Rectangle
        x={x}
        y={y}
        width={width}
        height={height}
        radius={[4, 4, 0, 0]}
        fill={category.color}
        opacity={item.isPast ? "0.5" : ""}
        style={{ cursor: "pointer" }}
      />
    );
  };

  /**
   * Custom label renderer displaying the numeric geomagnetic index centered above each bar.
   *
   * @param props - Recharts label geometry, value, and item index properties.
   * @returns A centered SVG `<text>` element.
   */
  const renderValueLabel = (props: LabelProps) => {
    const { x, width, value, index } = props;
    const isPast = index !== undefined ? data[index]?.isPast : false;

    return (
      <text
        x={(x as number) + (width as number) / 2}
        y={80}
        textAnchor="middle"
        fontSize={16}
        fontWeight={500}
        opacity={isPast ? "0.5" : ""}
        style={{ cursor: "pointer" }}
      >
        {value}
      </text>
    );
  };

  /**
   * Custom tooltip renderer displaying the localized geomagnetic storm status text on hover.
   *
   * @param props - Recharts tooltip active state and payload properties.
   * @returns A `<p>` element with the storm status label, or `null` when inactive.
   */
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
        <p className={styles.title}>{title}</p>
        {subTitle && (
          <p className={`${styles.sub_title} small_grey_text`}>{subTitle}</p>
        )}
      </div>
      <div className={styles.chart_wrapper}>
        <ResponsiveContainer width="100%" height={127}>
          <BarChart data={data} barGap={0} barCategoryGap={barCategoryGap}>
            <YAxis domain={[0, 9]} hide={true} tickCount={4} />
            <XAxis
              dataKey="label"
              axisLine={{ stroke: "var(--color-light-grey)" }}
              tickLine={false}
              padding={xAxispaddings}
              interval={0}
              tick={(props) => {
                const { x, y, payload } = props;

                return (
                  <text
                    x={x}
                    y={+y + 18}
                    textAnchor="middle"
                    fontSize={xAxisFontSize}
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
              dataKey={"value"}
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
