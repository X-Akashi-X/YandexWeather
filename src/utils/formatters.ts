import {
  DEGREES_PER_DIRECTION,
  KNOWN_NEW_MOON,
  MS_IN_DAY,
  SYNODIC_MONTH,
  TOTAL_WIND_DIRECTIONS,
} from "@constants/conversions";
import { weatherMap } from "./weatherMapper/weatherMapper";
import { WIND_DIRECTIONS } from "@constants/weather";
import {
  MIDWEEK,
  SATURDAY,
  SUNDAY,
  TODAY,
  TOMORROW,
} from "@constants/daysCodes";
import type { isFirstOnMonthDay } from "@ts/utils";

/**
 * Converts a wind direction angle in degrees into a localized cardinal or intercardinal compass label.
 *
 * @param deg - Wind direction in degrees (0 to 360).
 * @returns The localized wind direction string from `WIND_DIRECTIONS`.
 */
export function getWindDirection(deg: number) {
  const index = Math.round(deg / DEGREES_PER_DIRECTION) % TOTAL_WIND_DIRECTIONS;
  return WIND_DIRECTIONS[index];
}

/**
 * Determines the dominant WMO weather code from an array of codes using weighted category scoring.
 *
 * @param arg - Array of numeric WMO weather codes.
 * @returns The representative primary WMO weather code of the highest-weighted weather group, or `0` if empty.
 */
export function getAvgWeatherCode(arg: number[]) {
  if (!arg?.length) return 0;

  const codeCounts: Record<number, { name: string; weight: number }> = {};
  const sortedKeys = Object.keys(weatherMap).toSorted();

  for (const key of sortedKeys) {
    const group = weatherMap[key as keyof typeof weatherMap];
    for (const code of group.codes) {
      codeCounts[code] = {
        name: key,
        weight: group.weight,
      };
    }
  }

  const groupCounts: Record<string, number> = {};

  for (const code of arg) {
    const result = codeCounts[code];
    if (result) {
      groupCounts[result.name] =
        (groupCounts[result.name] || 0) + result.weight;
    }
  }

  const currentGroup = Object.keys(groupCounts).toSorted(
    (a, b) => groupCounts[b] - groupCounts[a],
  )[0];

  return weatherMap[currentGroup as keyof typeof weatherMap].codes[0];
}

/**
 * Formats a numeric temperature value by prepending a `"+"` sign if it is strictly positive.
 *
 * @param value - The numeric value to format.
 * @returns A string with a leading `"+"` for positive numbers, or the plain string representation otherwise.
 */
export function shouldShowPlus(value: number) {
  return value > 0 ? `+${value}` : String(value);
}

/**
 * Formats a numeric range into a `"min-max"` string, or returns a single number string if both bounds are equal.
 *
 * @param min - The minimum value of the range.
 * @param max - The maximum value of the range.
 * @returns A formatted range string (e.g., `"5-10"` or `"5"`).
 */
export function shouldShowDash(min: number, max: number) {
  return min === max ? String(min) : `${min}-${max}`;
}

/**
 * Generates HTML id and data-attributes for a forecast day card based on its list index and day of the week.
 *
 * @param i - The zero-based index of the day in the forecast list.
 * @param weekend - The day of the week index (0 for Sunday through 6 for Saturday).
 * @returns An object containing `id` and boolean `data-detailed-*` attributes for styling hooks.
 */
export function getDayItemAttributes(i: number, weekend: number) {
  return {
    id: `day-${i}`,
    "data-detailed-today": i === TODAY,
    "data-detailed-tomorrow": i === TOMORROW,
    "data-detailed-midweek": i === MIDWEEK,
    "data-detailed-weekend": weekend === SATURDAY || weekend === SUNDAY,
  };
}

/**
 * Returns a localized day label (`"Сегодня"`, `"Завтра"`, or the weekday name) based on the item's forecast index.
 *
 * @param i - The zero-based index of the day in the forecast list.
 * @param weekday - The fallback localized weekday string.
 * @returns `"Сегодня"` for today, `"Завтра"` for tomorrow, or the provided `weekday` string.
 */
export function getDayItemDayLabel(i: number, weekday: string) {
  if (i === TODAY) return "Сегодня";
  if (i === TOMORROW) return "Завтра";
  return weekday;
}

/**
 * Formats a localized date label when a day marks the 1st of a month (or the first item if flagged), otherwise returns a fallback.
 *
 * @param params - Configuration object containing item index, day of month, ISO date string, date format options, fallback string, and first-item flag.
 * @returns The formatted Russian locale date string, or the `fallback` string.
 */
export function isFirstOnMonthDay({
  i,
  date,
  dateKey,
  localDateData,
  fallback,
  monthOnFirstItem = false,
}: isFirstOnMonthDay) {
  const isCurrentDay = i === 0;
  const isFirstOnMonthDay = date === 1;

  if (isFirstOnMonthDay || (monthOnFirstItem && isCurrentDay)) {
    return `${new Date(dateKey).toLocaleDateString("ru-RU", localDateData)}`;
  }
  return fallback;
}

/**
 * Calculates the astronomical lunar phase fraction (from 0.0 to 1.0) for a given calendar date at 12:00 UTC.
 *
 * @param year - The full year (e.g., 2026).
 * @param monthIndex - The zero-based month index (0 for January to 11 for December).
 * @param day - The day of the month (1 to 31).
 * @returns A normalized phase value between `0` and `1` representing progress through the synodic month.
 */
export const calcMoonPhase = (
  year: number,
  monthIndex: number,
  day: number,
) => {
  const target = Date.UTC(year, monthIndex, day, 12);
  const daysSince = (target - KNOWN_NEW_MOON) / MS_IN_DAY;
  const cycles = daysSince / SYNODIC_MONTH;

  return ((cycles % 1) + 1) % 1;
};
