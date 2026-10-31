import type { PressureChartItem } from "@ts/props";
import type { TwoWeekHourlyItem } from "@ts/weather";

export const pressureToChartitems = (
  hours: TwoWeekHourlyItem[],
): PressureChartItem[] =>
  hours.map((hour) => ({
    label: hour.twoWeekHourlyTime,
    value: hour.twoWeekHourlyPressure,
  }));
