import type { MagneticChartItem } from "@ts/props";
import type { TenDaysItem, TwoWeekHourlyItem } from "@ts/weather";

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
    const isCurrentDay = i === 0;
    const isFirstOfMonthDay = day.tenDaysDate === 1;

    const label =
      isCurrentDay || isFirstOfMonthDay
        ? `${new Date(day.tenDaysDateKey).toLocaleDateString("ru-RU", {
            day: "numeric",
            month: "short",
          })}`
        : day.tenDaysDate;

    return {
      label: label,
      value: day.tenDaysMagneticField,
    };
  });
