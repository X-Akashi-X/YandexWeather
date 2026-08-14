export function getWindDirection(deg: number) {
  const directions = ["С", "СВ", "В", "ЮВ", "Ю", "ЮЗ", "З", "СЗ"];

  const index = Math.round(deg / 45) % 8;
  return directions[index];
}

export function getAvgWeatherCode(arg: number[]) {
  const freq: Record<number, number> = {};

  for (const code of arg) {
    freq[code] = (freq[code] || 0) + 1;
  }

  const entries = Object.entries(freq).sort((a, b) => b[1] - a[1]);

  return Number(entries[0][0]);
}

export function shouldShowPlus(value: number) {
  return value > 0 ? `+${value}` : String(value);
}

export function shouldShowDash(min: number, max: number) {
  return min === max ? String(min) : `${min}-${max}`;
}
