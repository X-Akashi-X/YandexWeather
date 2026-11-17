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
  cap,
  ClearAllergies,
  extremeUV,
  glasses,
  highUV,
  home,
  lowUV,
  mediumUV,
  NormalAllergies,
  shirt,
  spf,
  StrongAllergies,
  veryHighUV,
  WeakAllergies,
} from ".";

/**
 * Searches the weather dictionary for a configuration entry matching the given WMO weather code.
 *
 * @param code - The numeric WMO weather interpretation code.
 * @returns The matching weather configuration object, or `undefined` if not found.
 */
export function findWeather(code: number) {
  return Object.values(weatherMap).find((item) => item.codes.includes(code));
}

/**
 * Retrieves the weather icon identifier corresponding to a given WMO weather code.
 *
 * @param code - The numeric WMO weather interpretation code.
 * @returns The icon identifier string, or `"-"` if the code is unrecognized.
 */
export function getWeatherEffect(code: number) {
  return findWeather(code)?.icon ?? "-";
}

/**
 * Retrieves the localized weather condition description for a given WMO weather code.
 *
 * @param code - The numeric WMO weather interpretation code.
 * @returns The human-readable weather description string, or `"-"` if unrecognized.
 */
export function getWeatherInfo(code: number) {
  return findWeather(code)?.text ?? "-";
}

/**
 * Converts a numeric precipitation probability percentage into a localized descriptive phrase.
 *
 * @param chance - The precipitation probability percentage (0 to 100).
 * @returns A Russian descriptive string indicating the likelihood of precipitation.
 */
export function getPrecipitationProbability(chance: number) {
  if (chance <= 0) return "осадков не ожидается";
  if (chance <= 20) return "небольшая вероятность осадков";
  if (chance <= 50) return "есть вероятность осадков";
  if (chance <= 80) return "высокая вероятность осадков";
  return "ожидается выпадение осадков";
}

/**
 * Classifies wind speed in meters per second into a localized Beaufort-style wind category.
 *
 * @param speed - Wind speed in m/s.
 * @returns A Russian descriptive label for the wind intensity (e.g., `"штиль"`, `"шторм"`).
 */
export function getWindCategory(speed: number) {
  if (speed <= 0.2) return "штиль";
  if (speed <= 5.4) return "слабый ветер";
  if (speed <= 10.7) return "ветер";
  if (speed <= 15.2) return "сильный ветер";
  if (speed <= 24.4) return "шторм";
  if (speed <= 28.4) return "сильный шторм";
  return "ураган";
}

/**
 * Maps a pollen concentration index to UI styling, activity descriptions, min/max thresholds, and sprite offsets.
 *
 * @param category - The numeric pollen concentration level.
 * @returns A structured `DefaultCategoryPollen` configuration object for rendering pollen indicators.
 */
export function getPollenCategory(category: number): DefaultCategoryPollen {
  if (category < 1)
    return {
      fill: 0,
      color: "#33c115",
      colorAllergies: "rgba(180, 184, 204, 0.52)",
      text: "нет активности",
      minAllergicsCount: 0,
      maxAllergicsCount: 0,
      imgAllergies: {
        img: ClearAllergies,
        y: "-60px",
        x: "-60px",
      },
    };
  if (category <= 20)
    return {
      fill: 0.22,
      color: "#ffd400",
      colorAllergies: "rgba(255, 233, 147, 1)",
      text: "низкая активность",
      minAllergicsCount: ALLERGICS_WEAK_MIN,
      maxAllergicsCount: ALLERGICS_WEAK_MAX,
      imgAllergies: { img: WeakAllergies, y: "-53px", x: "-60px" },
    };
  if (category <= 60)
    return {
      fill: 0.6,
      color: "#ff7e01",
      colorAllergies: "rgba(255, 196, 130, 1)",
      text: "умеренная активность",
      minAllergicsCount: ALLERGICS_MODERATE_MIN,
      maxAllergicsCount: ALLERGICS_MODERATE_MAX,
      imgAllergies: { img: NormalAllergies, y: "-30px", x: "-32px" },
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

/**
 * Evaluates atmospheric pressure in mmHg and returns gauge fill ratio, indicator color, and status text.
 *
 * @param category - Atmospheric pressure value in millimeters of mercury (mmHg).
 * @returns An object containing `fill` ratio (0 to 1), hex `color`, and localized status `text`.
 */
export function getPressureCategory(category: number) {
  if (category <= 740)
    return { fill: 0, color: "#c30101", text: "очень низкое" };
  if (category <= 750) return { fill: 0.17, color: "#ff7e01", text: "низкое" };
  if (category <= 765) return { fill: 0.42, color: "#33c115", text: "в норме" };
  if (category <= 775) return { fill: 0.67, color: "#ff7e01", text: "высокое" };
  return { fill: 1, color: "#c30101", text: "очень высокое" };
}

/**
 * Evaluates the UV index and returns gauge styling, localized advice, background gradients, and protection icons.
 *
 * @param category - The numeric UV index value.
 * @returns An object with gauge `fill`, `color`, status `text`, advice `advancedText`, icon `imgUV`, `bgGradient`, and `attributeImgs`.
 */
export function getUVCategory(category: number) {
  if (category <= 2)
    return {
      fill: 0,
      color: "#33c115",
      text: "низкий",
      advancedText: "Солнце доброе, защита не нужна",
      imgUV: lowUV,
      bgGradient:
        "linear-gradient(180deg, rgba(238, 255, 240, 1) 18.27%, rgba(171, 255, 182, 1) 100%)",
      attributeImgs: [],
    };
  if (category <= 5)
    return {
      fill: 0.17,
      color: "#ffd400",
      text: "умеренный",
      advancedText: "Солнце спокойное. Но крем с панамой не помешают",
      imgUV: mediumUV,
      bgGradient:
        "linear-gradient(180deg, rgba(255, 252, 239, 1) 18.27%, rgba(255, 231, 155, 1) 100%)",
      attributeImgs: [spf, cap],
    };
  if (category <= 7)
    return {
      fill: 0.42,
      color: "#ff7e01",
      text: "высокий",
      advancedText:
        "Припекает. Наносите защиту, надевайте панаму и крутые очки",
      imgUV: highUV,
      bgGradient:
        "linear-gradient(180deg, rgba(255, 243, 241, 1) 18.27%, rgba(252, 208, 158, 1) 100%)",
      attributeImgs: [spf, cap, glasses],
    };
  if (category <= 10)
    return {
      fill: 0.67,
      color: "#c30101",
      text: "очень высокий",
      advancedText: "Закрывайте кожу и глаза, обновляйте крем — солнце жарит",
      imgUV: veryHighUV,
      bgGradient:
        "linear-gradient(180deg, rgba(255, 243, 241, 1) 18.27%, rgba(249, 176, 163, 1) 100%)",
      attributeImgs: [spf, cap, glasses, shirt],
    };
  return {
    fill: 1,
    color: "#57348d",
    text: "экстремальный",
    advancedText: "От солнца лучше спрятаться",
    imgUV: extremeUV,
    bgGradient:
      "linear-gradient(180deg, rgba(249, 235, 255, 1) 18.27%, rgba(178, 136, 234, 1) 100%)",
    attributeImgs: [spf, cap, glasses, shirt, home],
  };
}

/**
 * Classifies geomagnetic fluctuation intensity into gauge fill ratio, indicator color, and storm status text.
 *
 * @param category - The numeric geomagnetic fluctuation index (pressure delta in mmHg).
 * @returns An object containing `fill` ratio, indicator `color`, and localized storm status `text`.
 */
export function getMagneticFieldCategory(category: number) {
  if (category <= 2) return { fill: 0, color: "#33c115", text: "спокойное" };
  if (category <= 4)
    return { fill: 0.17, color: "#ffd400", text: "слабая буря" };
  if (category <= 6)
    return { fill: 0.42, color: "#ff7e01", text: "умеренная буря" };
  if (category <= 8)
    return { fill: 0.67, color: "rgba(248, 97, 71, 1)", text: "сильная буря" };
  return { fill: 1, color: "#c30101", text: "шторм" };
}

/**
 * Returns a default empty category object used as a fallback placeholder.
 *
 * @returns An object with zeroed `fill` and empty `color` and `text` strings.
 */
export const defaultCategoryType = () => {
  return { fill: 0, color: "", text: "" };
};

/**
 * Delegates lunar phase value mapping to `moonMap` to retrieve phase name and icon details.
 *
 * @param category - The numeric moon phase value (0.0 to 1.0).
 * @returns The mapped moon phase object containing localized text and icon identifier.
 */
export function getMoonPhase(category: number) {
  return moonMap(category);
}
