import styles from "./UVIndexTimeLine.module.scss";
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
import useIsMobile from "@hooks/useIsMobile";
import { TABLET_SCREEN } from "@constants/breakpoints";
import type { TwoWeekHourlyItem } from "@ts/weather";
import { getUVCategory } from "@utils/categories/categories";

const UVIndexTimeLine = ({ data }: { data: TwoWeekHourlyItem[] }) => {
  const isMobile = useIsMobile(TABLET_SCREEN);
  const barCategoryGap = isMobile ? "1" : "6";
  const xAxispaddings = isMobile
    ? { left: 0, right: 0 }
    : { left: 24, right: 24 };
  const xAxisFontSize = isMobile ? 10 : 14;

  const renderBar = (props: BarRectangleItem) => {
    const { x, y, width, height, payload } = props;
    const item = payload as TwoWeekHourlyItem;
    const category = getUVCategory(item.twoWeekHourlyUV);

    return (
      <Rectangle
        x={x}
        y={y}
        width={width}
        height={height}
        radius={[4, 4, 0, 0]}
        fill={category.color}
        opacity={item.isPast ? "0.5" : ""}
      />
    );
  };

  const renderValueLabel = (props: LabelProps) => {
    const { x, width, value, index } = props;
    const isPast = index !== undefined ? data[index].isPast : false;

    return (
      <text
        x={(x as number) + (width as number) / 2}
        y="75%"
        textAnchor="middle"
        fontSize={16}
        fontWeight={500}
        opacity={isPast ? "0.5" : ""}
      >
        {value}
      </text>
    );
  };

  return (
    <section className={styles.section_wrapper}>
      <div className={styles.chart_wrapper}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={0} barCategoryGap={barCategoryGap}>
            <YAxis domain={[0, 11]} hide={true} tickCount={4} />
            <XAxis
              dataKey="twoWeekHourlyTime"
              axisLine={false}
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
            <Bar
              dataKey="twoWeekHourlyUV"
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

export default UVIndexTimeLine;
