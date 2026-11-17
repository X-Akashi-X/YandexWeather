import { Pollen, Precipitation, Pressure, Snow, Temp, Wind } from ".";
export const maps = [
  {
    link: "/",
    bgURL: Precipitation,
    title: "Карта осадков",
    id: "Карта осадков",
  },
  { link: "/", bgURL: Pollen, title: "Пыльца", id: "Пыльца" },
  { link: "/", bgURL: Temp, title: "Температура", id: "Температура" },
  { link: "/", bgURL: Snow, title: "Глубина снега", id: "Глубина снега" },
  { link: "/", bgURL: Wind, title: "Ветер", id: "Ветер" },
  { link: "/", bgURL: Pressure, title: "Давление", id: "Давление" },
];
