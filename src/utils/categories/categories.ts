import {
  ALLERGICS_WEAK_MAX,
  ALLERGICS_WEAK_MIN,
  ALLERGICS_MODERATE_MAX,
  ALLERGICS_MODERATE_MIN,
  ALLERGICS_STRONG_MAX,
  ALLERGICS_STRONG_MIN,
} from "@constants/components/allergiesCurrent";
import { moonMap } from "../moonMapper/moonMapper";
import { weatherMap } from "../weatherMapper/weatherMapper";
import type { DefaultCategoryPollen } from "@ts/weather";
import {
  ClearAllergies,
  NormalAllergies,
  StrongAllergies,
  WeakAllergies,
} from ".";

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

export function getPollenCategory(category: number): DefaultCategoryPollen {
  if (category <= 1)
    return {
      fill: 0,
      color: "grey",
      colorAllergies: "rgba(180, 184, 204, 0.52)",
      text: "нет активности",
      minAllergicsCount: 0,
      maxAllergicsCount: 0,
      imgAllergies: {
        img: ClearAllergies,
        y: "0",
        x: "0",
      },
    };
  if (category <= 3)
    return {
      fill: 0.22,
      color: "#ffd400",
      colorAllergies: "rgba(255, 233, 147, 1)",
      text: "низкая активность",
      minAllergicsCount: ALLERGICS_WEAK_MIN,
      maxAllergicsCount: ALLERGICS_WEAK_MAX,
      imgAllergies: { img: WeakAllergies, y: "0", x: "-60px" },
    };
  if (category <= 6)
    return {
      fill: 0.6,
      color: "#ff7e01",
      colorAllergies: "rgba(255, 196, 130, 1)",
      text: "умеренная активность",
      minAllergicsCount: ALLERGICS_MODERATE_MIN,
      maxAllergicsCount: ALLERGICS_MODERATE_MAX,
      imgAllergies: { img: NormalAllergies, y: "0", x: "-32px" },
    };
  return {
    fill: 1,
    color: "#c30101",
    colorAllergies: "rgba(239, 128, 109, 1)",
    text: "высокая активность",
    minAllergicsCount: ALLERGICS_STRONG_MIN,
    maxAllergicsCount: ALLERGICS_STRONG_MAX,
    imgAllergies: { img: StrongAllergies, y: "0", x: "-120px" },
  };
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
  return { fill: 1, color: "#57348d", text: "шторм" };
}

export const defaultCategoryType = () => {
  return { fill: 0, color: "", text: "" };
};

export function getMoonPhase(category: number) {
  return moonMap(category);
}
