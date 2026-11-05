import type { MagneticChartItem } from "@ts/props";
import type { TenDaysItem, TwoWeekHourlyItem } from "@ts/weather";
import { isFirstOnMonthDay } from "@utils/formatters";

export const hourlyToMagneticChartItems = (
  hours: TwoWeekHourlyItem[],
): MagneticChartItem[] =>
  hours.map((hour) => ({
    label: hour.twoWeekHourlyTime,
    value: hour.twoWeekHourlyMagnetic,
    isPast: hour.isPast,
  }));

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
