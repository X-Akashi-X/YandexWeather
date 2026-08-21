import { weatherMap } from "./weatherMapper";

export function getWindDirection(deg: number) {
  const directions = ["С", "СВ", "В", "ЮВ", "Ю", "ЮЗ", "З", "СЗ"];

  const index = Math.round(deg / 45) % 8;
  return directions[index];
}

export function getAvgWeatherCode(arg: number[]) {
  if (!arg?.length) return 0;

  const groupCounts: Record<string, number> = {};

  for (const code of arg) {
    const groupName = Object.keys(weatherMap)
      .sort()
      .find((key) =>
        weatherMap[key as keyof typeof weatherMap].codes.includes(code),
      );
    if (groupName) groupCounts[groupName] = (groupCounts[groupName] || 0) + 1;
  }

  const currentGroup = Object.keys(groupCounts).sort(
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
