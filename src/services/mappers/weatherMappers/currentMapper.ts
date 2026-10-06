import { HPA_TO_MMHG, WATER_TEMP_OFFSET } from "@constants/conversions";
import { ALLERGIES, DEFAULT_CURRENT_DAY } from "@constants/weather";
import type { ApiAirQuality, ApiForecast } from "@ts/api";
import {
  getPollenCategory,
  getPressureCategory,
  getUVCategory,
  getWeatherEffect,
  getWeatherInfo,
  getWindCategory,
} from "@utils/categories/categories";
import { getWindDirection, shouldShowPlus } from "@utils/formatters";

export const currentData = (
  dataForecast: ApiForecast,
  dataAirQuality: ApiAirQuality,
) => {
  if (!dataForecast.current || !dataAirQuality.current)
    return DEFAULT_CURRENT_DAY;

  const groupPollen = {
    grass: dataAirQuality.current.grass_pollen,
    alder: dataAirQuality.current.alder_pollen,
    birch: dataAirQuality.current.birch_pollen,
    mugwort: dataAirQuality.current.mugwort_pollen,
    olive: dataAirQuality.current.olive_pollen,
    ragweed: dataAirQuality.current.ragweed_pollen,
  };

  function pollenAllergies() {
    const allAllergies = Object.entries(groupPollen)
      .map(([key, value]) => ({ name: ALLERGIES[key], value }))
      .toSorted((a, b) => b.value - a.value);

    const activeAllergies = allAllergies.filter((item) => item.value >= 1);

    if (activeAllergies.length === 0) {
      return {
        topAllergies: "Пыльца не летает, не раздражает",
        allAllergies,
      };
    }

    const topAllergies = activeAllergies
      .slice(0, 2)
      .map((item) => item.name)
      .join(" и ");

    return { allAllergies, topAllergies };
  }

  return {
    currentTemperature: shouldShowPlus(
      Math.floor(dataForecast.current.temperature_2m),
    ),
    currentApparentTemperature: shouldShowPlus(
      Math.floor(dataForecast.current.apparent_temperature),
    ),
    currentWaterTemperature: shouldShowPlus(
      Math.floor(dataForecast.current.temperature_2m - WATER_TEMP_OFFSET),
    ),
    currentWindSpeed: Math.floor(dataForecast.current.wind_speed_10m),
    currentWindGusts: Math.floor(dataForecast.current.wind_gusts_10m),
    currentPressure: Math.floor(
      dataForecast.current.surface_pressure * HPA_TO_MMHG,
    ),
    currentHumidity: dataForecast.current.relative_humidity_2m,
    currentUVIndex: Math.floor(dataAirQuality.current.uv_index),
    currentWeatherEffect: getWeatherEffect(dataForecast.current.weather_code),
    currentWeatherInfo: getWeatherInfo(dataForecast.current.weather_code),
    currentWindCategory: getWindCategory(dataForecast.current.wind_speed_10m),
    currentWindDirection: getWindDirection(
      dataForecast.current.wind_direction_10m,
    ),
    currentPollenCategory: getPollenCategory(
      Math.max(...Object.values(groupPollen)),
    ),
    currentAllergies: pollenAllergies(),
    currentPressureCategory: getPressureCategory(
      dataForecast.current.surface_pressure * HPA_TO_MMHG,
    ),
    currentUVCategory: getUVCategory(dataAirQuality.current.uv_index),
  };
};
