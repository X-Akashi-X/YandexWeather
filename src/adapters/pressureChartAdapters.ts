import type { PressureChartItem } from "@ts/props";
import type { TwoWeekHourlyItem } from "@ts/weather";

/**
 * Transforms hourly weather forecast records into data points for the atmospheric pressure chart.
 *
 * @param hours - Array of hourly forecast records (`TwoWeekHourlyItem`).
 * @returns An array of `PressureChartItem` objects containing time labels and pressure values in mmHg.
 */
export const pressureHourlyToChartItems = (
  hours: TwoWeekHourlyItem[],
): PressureChartItem[] =>
  hours.map((hour) => ({
    label: hour.twoWeekHourlyTime,
    value: hour.twoWeekHourlyPressure,
  }));
