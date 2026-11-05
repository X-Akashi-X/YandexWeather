import type { PressureChartItem } from "@ts/props";
import type { TwoWeekHourlyItem } from "@ts/weather";

export const pressureHourlyToChartItems = (
  hours: TwoWeekHourlyItem[],
): PressureChartItem[] =>
  hours.map((hour) => ({
    label: hour.twoWeekHourlyTime,
    value: hour.twoWeekHourlyPressure,
  }));
