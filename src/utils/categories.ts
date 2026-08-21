import { moonMap } from "./moonMapper";
import { weatherMap } from "./weatherMapper";

export function findWeather(code: number) {
  return Object.values(weatherMap).find((item) => item.codes.includes(code));
}

export function getWeatherEffect(code: number) {
  return findWeather(code)?.icon ?? "-";
}

export function getWeatherInfo(code: number) {
  return findWeather(code)?.text ?? "-";
}

export function getPrecipitationProbability(chance: number) {
  if (chance <= 0) return "осадков не ожидается";
  if (chance <= 20) return "небольшая вероятность осадков";
  if (chance <= 50) return "есть вероятность осадков";
  if (chance <= 80) return "высокая вероятность осадков";
  return "ожидается выпадение осадков";
}

export function getWindCategory(speed: number) {
  if (speed <= 0.2) return "штиль";
  if (speed <= 5.4) return "слабый ветер";
  if (speed <= 10.7) return "ветер";
  if (speed <= 15.2) return "сильный ветер";
  if (speed <= 24.4) return "шторм";
  if (speed <= 28.4) return "сильный шторм";
  return "ураган";
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
  if (category <= 740)
    return { fill: 0, color: "#ff7e01", text: "очень низкое" };
  if (category <= 750) return { fill: 0.17, color: "#ffd400", text: "низкое" };
  if (category <= 765)
    return { fill: 0.42, color: "#33c115", text: "нормальное" };
  if (category <= 775) return { fill: 0.67, color: "#c30101", text: "высокое" };
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

export function getMagneticFieldCategory(category: number) {
  if (category <= 2) return { fill: 0, color: "#33c115", text: "спокойное" };
  if (category <= 4)
    return { fill: 0.17, color: "#ffd400", text: "слабая буря" };
  if (category <= 6)
    return { fill: 0.42, color: "#ff7e01", text: "умеренная буря" };
  if (category <= 8)
    return { fill: 0.67, color: "#c30101", text: "сильная буря" };
  if (category <= 2) return { fill: 1, color: "#57348d", text: "шторм" };
}

export function getMoonPhase(category: number) {
  return moonMap(category);
}
