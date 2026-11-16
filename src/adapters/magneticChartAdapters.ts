import type { MagneticChartItem } from "@ts/props";
import type { TenDaysItem, TwoWeekHourlyItem } from "@ts/weather";
import { isFirstOnMonthDay } from "@utils/formatters";

/**
 * Transforms hourly weather forecast items into data points for the geomagnetic activity chart.
 *
 * @param hours - Array of hourly forecast records (`TwoWeekHourlyItem`).
 * @returns An array of `MagneticChartItem` objects containing time labels, magnetic values, and past-time flags.
 */
export const hourlyToMagneticChartItems = (
  hours: TwoWeekHourlyItem[],
): MagneticChartItem[] =>
  hours.map((hour) => ({
    label: hour.twoWeekHourlyTime,
    value: hour.twoWeekHourlyMagnetic,
    isPast: hour.isPast,
  }));

/**
 * Transforms 10-day forecast records into data points for the geomagnetic activity chart,
 * formatting the first day of a month or the first list item with a short month label.
 *
 * @param days - Array of daily forecast records (`TenDaysItem`).
 * @returns An array of `MagneticChartItem` objects containing formatted date labels and daily magnetic field values.
 */
export const tenDaysToMagneticChartItems = (
  days: TenDaysItem[],
): MagneticChartItem[] =>
  days.map((day, i) => {
    const label = isFirstOnMonthDay({
      i,
      date: day.tenDaysDate,
      dateKey: day.tenDaysDateKey,
      localDateData: {
        day: "numeric",
        month: "short",
      },
      fallback: day.tenDaysDate,
      monthOnFirstItem: true,
    });

    return {
      label: label,
      value: day.tenDaysMagneticField,
    };
  });
