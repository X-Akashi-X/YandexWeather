import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "@store/store";
import type { MonthlyDailyData } from "@ts/weather";

export const selectTodayData = (data: MonthlyDailyData[]) =>
  data.find((m) => m.isCurrentMonth)?.days.find((d) => d.isToday);

export const selectActiveMonthData = (
  state: RootState,
  data: MonthlyDailyData[],
) =>
  data.find((m) => m.monthlyIndex === state.moonCalendar.activeMonthIndex) ??
  data.find((m) => m.isCurrentMonth) ??
  data[0];

const selectDefaultDay = createSelector(
  [selectActiveMonthData],
  (activeMonth) =>
    activeMonth.isCurrentMonth
      ? (activeMonth.days.find((d) => d.isToday)?.day ?? 1)
      : 1,
);

const SelectedDayIndex = (state: RootState) => state.moonCalendar.selectedDay;

export const selectActiveDay = createSelector(
  [selectActiveMonthData, SelectedDayIndex, selectDefaultDay],
  (activeMonth, selectedDay, defaultDay) =>
    selectedDay?.monthlyIndex === activeMonth.monthlyIndex
      ? selectedDay.day
      : defaultDay,
);

export const selectActiveDayData = createSelector(
  [selectActiveMonthData, selectActiveDay],
  (activeMonth, activeDay) => activeMonth.days.find((d) => d.day === activeDay),
);
