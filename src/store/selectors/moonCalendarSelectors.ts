import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "@store/store";
import type { MonthlyDailyData } from "@ts/weather";

/**
 * Finds and returns the calendar data object for the current day (`isToday`) within the current month.
 *
 * @param data - Array of monthly lunar calendar data for the entire year.
 * @returns The day object for today, or `undefined` if not found.
 */
export const selectTodayData = (data: MonthlyDailyData[]) =>
  data.find((m) => m.isCurrentMonth)?.days.find((d) => d.isToday);

/**
 * Selects the currently active month data based on the Redux state (`activeMonthIndex`).
 * Falls back to the current month (`isCurrentMonth`) or the first month in the array if none is selected.
 *
 * @param state - The root Redux state.
 * @param data - Array of monthly lunar calendar data for the entire year.
 * @returns The active month's data object.
 */
export const selectActiveMonthData = (
  state: RootState,
  data: MonthlyDailyData[],
) =>
  data.find((m) => m.monthlyIndex === state.moonCalendar.activeMonthIndex) ??
  data.find((m) => m.isCurrentMonth) ??
  data[0];

/**
 * Memoized selector that determines the default day number for the active month.
 * Returns today's day number if the active month is the current month, otherwise defaults to `1`.
 */
const selectDefaultDay = createSelector(
  [selectActiveMonthData],
  (activeMonth) =>
    activeMonth.isCurrentMonth
      ? (activeMonth.days.find((d) => d.isToday)?.day ?? 1)
      : 1,
);

/**
 * Base input selector that retrieves the user-selected day object from the `moonCalendar` slice.
 *
 * @param state - The root Redux state.
 * @returns The selected day object containing `monthlyIndex` and `day`, or `null`.
 */
const SelectedDayIndex = (state: RootState) => state.moonCalendar.selectedDay;

/**
 * Memoized selector that determines the active day number to highlight.
 * Uses the user-selected day if it belongs to the currently active month, otherwise falls back to `selectDefaultDay`.
 */
export const selectActiveDay = createSelector(
  [selectActiveMonthData, SelectedDayIndex, selectDefaultDay],
  (activeMonth, selectedDay, defaultDay) =>
    selectedDay?.monthlyIndex === activeMonth.monthlyIndex
      ? selectedDay.day
      : defaultDay,
);

/**
 * Memoized selector that retrieves the full data object for the currently active day within the active month.
 */
export const selectActiveDayData = createSelector(
  [selectActiveMonthData, selectActiveDay],
  (activeMonth, activeDay) => activeMonth.days.find((d) => d.day === activeDay),
);
