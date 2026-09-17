import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { ApiAirQuality, ApiArhive, ApiForecast } from "@ts/api";

const FORECAST_DAILY_FIELDS = [
  "relative_humidity_2m_mean",
  "surface_pressure_mean",
  "daylight_duration",
  "moon_phase",
  "relative_humidity_2m_max",
  "relative_humidity_2m_min",
  "surface_pressure_max",
  "surface_pressure_min",
  "wind_speed_10m_min",
  "temperature_2m_max",
  "temperature_2m_min",
  "temperature_2m_mean",
  "weather_code",
  "precipitation_probability_max",
  "wind_speed_10m_max",
  "wind_gusts_10m_max",
  "wind_direction_10m_dominant",
  "uv_index_max",
  "sunrise",
  "sunset",
  "wind_speed_10m_mean",
  "wind_gusts_10m_mean",
].join(",");

const FORECAST_HOURLY_FIELDS = [
  "temperature_2m",
  "weather_code",
  "precipitation_probability",
  "apparent_temperature",
  "wind_speed_10m",
  "wind_direction_10m",
  "relative_humidity_2m",
  "surface_pressure",
].join(",");

const FORECAST_CURRENT_FIELDS = [
  "surface_pressure",
  "temperature_2m",
  "relative_humidity_2m",
  "apparent_temperature",
  "wind_speed_10m",
  "wind_direction_10m",
  "wind_gusts_10m",
  "precipitation",
  "weather_code",
].join(",");

const AIR_QUALITY_CURRENT_FIELDS = ["uv_index", "grass_pollen"].join(",");

const ARCHIVE_DAILY_FIELDS = ["temperature_2m_mean", "weather_code"].join(",");

const MINSK_COORDS = {
  lat: 53.9,
  lon: 27.56,
};

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  endpoints: (builder) => ({
    getForecast: builder.query<ApiForecast, void>({
      query: () => ({
        url: "https://api.open-meteo.com/v1/forecast",
        params: {
          latitude: MINSK_COORDS.lat,
          longitude: MINSK_COORDS.lon,
          past_days: 1,
          forecast_days: 14,
          wind_speed_unit: "ms",
          daily: FORECAST_DAILY_FIELDS,
          hourly: FORECAST_HOURLY_FIELDS,
          current: FORECAST_CURRENT_FIELDS,
        },
      }),
    }),
    getAirQuality: builder.query<ApiAirQuality, void>({
      query: () => ({
        url: "https://air-quality-api.open-meteo.com/v1/air-quality",
        params: {
          latitude: MINSK_COORDS.lat,
          longitude: MINSK_COORDS.lon,
          current: AIR_QUALITY_CURRENT_FIELDS,
          forecast_days: 1,
        },
      }),
    }),
    getArchive: builder.query<ApiArhive, void>({
      query: () => ({
        url: "https://archive-api.open-meteo.com/v1/archive",
        params: {
          latitude: MINSK_COORDS.lat,
          longitude: MINSK_COORDS.lon,
          start_date: "2023-01-01",
          end_date: "2025-12-31",
          daily: ARCHIVE_DAILY_FIELDS,
        },
      }),
    }),
  }),
});

export const {
  useGetForecastQuery,
  useGetAirQualityQuery,
  useGetArchiveQuery,
} = weatherApi;
