import clear from "./icons/clearIcon.svg";
import cloudy from "./icons/cloudyIcon.svg";
import fog from "./icons/fogIcon.svg";
import partly from "./icons/partlyIcon.svg";
import rain from "./icons/rainIcon.svg";
import snow from "./icons/snowIcon.svg";
import thunder from "./icons/thunderIcon.svg";

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

export function getWeatherEffect(code: () => number) {
  return findWeather(code)?.icon;
}

export function getWeatherInfo(code: () => number) {
  return findWeather(code)?.text;
}

export function getRainChance(chance: () => number) {
  const value = chance();
  if (value <= 0) return "Сегодня осадков не ожидается";
  if (value <= 20) return "Сегодня небольшая вероятность осадков";
  if (value <= 50) return "Сегодня есть вероятность осадков";
  if (value <= 80) return "Сегодня высокая вероятность осадков";
  return "Сегодня ожидается выпадение осадков";
}
