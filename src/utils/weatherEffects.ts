import clear from "@assets/icons/weatherEffects/clearIcon.svg";
import cloudy from "@assets/icons/weatherEffects/cloudyIcon.svg";
import fog from "@assets/icons/weatherEffects/fogIcon.svg";
import partly from "@assets/icons/weatherEffects/partlyIcon.svg";
import rain from "@assets/icons/weatherEffects/rainIcon.svg";
import snow from "@assets/icons/weatherEffects/snowIcon.svg";
import thunder from "@assets/icons/weatherEffects/thunderIcon.svg";

const weatherMap = {
  clear: { codes: [0], text: "Ясно", icon: clear },
  partly: { codes: [2], text: "Облачно с прояснениями", icon: partly },
  cloudy: { codes: [1, 3], text: "Облачно", icon: cloudy },
  fog: { codes: [45, 48], text: "Туманно", icon: fog },
  rain: {
    codes: [51, 53, 55, 61, 63, 65, 80, 81, 82],
    text: "Дождь",
    icon: rain,
  },
  snow: { codes: [71, 73, 75, 77, 85, 86], text: "Снегопад", icon: snow },
  thunder: { codes: [95, 96, 99], text: "Гром", icon: thunder },
};

function findWeather(code: () => number) {
  const value = code();
  return Object.values(weatherMap).find((item) => item.codes.includes(value));
}

export const getAvgWeatherCode = (arg: number[]) => {
  const freq: Record<number, number> = {};

  for (const code of arg) {
    freq[code] = (freq[code] || 0) + 1;
  }

  const entries = Object.entries(freq).sort((a, b) => b[1] - a[1]);

  return Number(entries[0][0]);
};

export function getWeatherEffect(code: () => number) {
  return findWeather(code)?.icon;
}

export function getWeatherInfo(code: () => number) {
  return findWeather(code)?.text;
}

export function getRainChance(chance: () => number): string {
  const value = chance();
  if (value <= 0) return "осадков не ожидается";
  if (value <= 20) return "небольшая вероятность осадков";
  if (value <= 50) return "есть вероятность осадков";
  if (value <= 80) return "высокая вероятность осадков";
  return "ожидается выпадение осадков";
}

export function getWindCategory(speed: () => number): string {
  const value = speed();
  if (value <= 0.2) return "штиль";
  if (value <= 5.4) return "слабый ветер";
  if (value <= 10.7) return "ветер";
  if (value <= 15.2) return "сильный ветер";
  if (value <= 24.4) return "шторм";
  if (value <= 28.4) return "сильный шторм";
  return "ураган";
}

export function getWindDirection(deg: () => number): string {
  const directions = ["С", "СВ", "В", "ЮВ", "Ю", "ЮЗ", "З", "СЗ"];

  const value = deg();

  const index = Math.round(value / 45) % 8;
  return directions[index];
}

export function getPollenCategory(category: number) {
  if (category <= 2) return { fill: 0, color: "#33c115", text: "отсутствует" };
  if (category <= 5)
    return { fill: 0.17, color: "#ffd400", text: "низкая активность" };
  if (category <= 7)
    return { fill: 0.42, color: "#ff7e01", text: "умеренная активность" };
  if (category <= 10)
    return { fill: 0.67, color: "#c30101", text: "высокая активность" };
  return { fill: 1, color: "#57348d", text: "очень высокая активность" };
}

export function getPressureCategory(category: number) {
  if (category <= 750)
    return { fill: 0, color: "#ff7e01", text: "очень низкое" };
  if (category <= 755) return { fill: 0.17, color: "#ffd400", text: "низкое" };
  if (category <= 760)
    return { fill: 0.42, color: "#33c115", text: "нормальное" };
  if (category <= 765) return { fill: 0.67, color: "#c30101", text: "высокое" };
  return { fill: 1, color: "#57348d", text: "очень высокое" };
}

export function getUVCategory(category: number) {
  if (category <= 2) return { fill: 0, color: "#33c115", text: "низкий" };
  if (category <= 5) return { fill: 0.17, color: "#ffd400", text: "умеренный" };
  if (category <= 7) return { fill: 0.42, color: "#ff7e01", text: "высокий" };
  if (category <= 10)
    return { fill: 0.67, color: "#c30101", text: "очень высокий" };
  return { fill: 1, color: "#57348d", text: "экстремальный" };
}
