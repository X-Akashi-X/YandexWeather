export function getWindDirection(deg: () => number) {
  const directions = [
    "С",
    "ССВ",
    "СВ",
    "ВСВ",
    "В",
    "ВЮВ",
    "ЮВ",
    "ЮЮВ",
    "Ю",
    "ЮЮЗ",
    "ЮЗ",
    "ЗЮЗ",
    "З",
    "ЗСЗ",
    "СЗ",
    "ССЗ",
  ];

  const value = deg();

  const index = Math.round(value / 22.5) % 16;
  return directions[index];
}
