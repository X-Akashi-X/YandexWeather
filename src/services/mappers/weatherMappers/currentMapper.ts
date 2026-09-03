import { HPA_TO_MMHG, WATER_TEMP_OFFSET } from "@constants/conversions";
import { DEFAULT_CURRENT_DAY } from "@constants/weather";
import type { ApiAirQuality, ApiForecast } from "@ts/api";
import {
  getPollenCategory,
  getPressureCategory,
  getUVCategory,
  getWeatherEffect,
  getWeatherInfo,
  getWindCategory,
} from "@utils/categories";
import { getWindDirection, shouldShowPlus } from "@utils/formatters";

export const currentData = (
  dataForecast: ApiForecast,
  dataAirQuality: ApiAirQuality,
) => {
  if (!dataForecast.current || !dataAirQuality.current) return DEFAULT_CURRENT_DAY;

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
      dataAirQuality.current.grass_pollen,
    ),
    currentPressureCategory: getPressureCategory(
      dataForecast.current.surface_pressure * HPA_TO_MMHG,
    ),
    currentUVCategory: getUVCategory(dataAirQuality.current.uv_index),
  };
};
