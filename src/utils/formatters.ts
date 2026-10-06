import {
  DEGREES_PER_DIRECTION,
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

export function getWindDirection(deg: number) {
  const index = Math.round(deg / DEGREES_PER_DIRECTION) % TOTAL_WIND_DIRECTIONS;
  return WIND_DIRECTIONS[index];
}

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

export function shouldShowPlus(value: number) {
  return value > 0 ? `+${value}` : String(value);
}

export function shouldShowDash(min: number, max: number) {
  return min === max ? String(min) : `${min}-${max}`;
}

export function getDetailedItemAttributes(i: number, weekend: number) {
  return {
    id: `day-${i}`,
    "data-detailed-today": i === TODAY,
    "data-detailed-tomorrow": i === TOMORROW,
    "data-detailed-midweek": i === MIDWEEK,
    "data-detailed-weekend": weekend === SATURDAY || weekend === SUNDAY,
  };
}

export function getDetailedItemDayLabel(i: number, weekday: string) {
  if (i === TODAY) return "Сегодня";
  if (i === TOMORROW) return "Завтра";
  return weekday;
}
