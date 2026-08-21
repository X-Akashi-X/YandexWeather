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
  if (!dataForecast?.current || !dataAirQuality?.current) return null;

  return {
    currentTemperature: shouldShowPlus(
      Math.floor(dataForecast.current.temperature_2m),
    ),
    currentApparentTemperature: shouldShowPlus(
      Math.floor(dataForecast.current.apparent_temperature),
    ),
    currentWaterTemperature: shouldShowPlus(
      Math.floor(dataForecast.current.temperature_2m - 3),
    ),
    currentWindSpeed: Math.floor(dataForecast.current.wind_speed_10m),
    currentWindGusts: Math.floor(dataForecast.current.wind_gusts_10m),
    currentPressure: Math.floor(
      dataForecast.current.surface_pressure * 0.75006,
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
      dataForecast.current.surface_pressure * 0.75006,
    ),
    currentUVCategory: getUVCategory(dataAirQuality.current.uv_index),
  };
};
