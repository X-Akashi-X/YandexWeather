import type { PeriodAverages } from "@ts/weather";

export const getTimeOfDayForecastConfig = ({
  morning,
  day,
  evening,
  night,
}: Record<string, PeriodAverages>) => {
  return [
    {
      timeOfDay: "Утром",
      temp: morning.advancedTemperature,
      effect: morning.advancedWeatherEffect,
      info: morning.advancedWeatherInfo,
      apparentTemp: morning.advancedApparentTemperature,
      windSpeed: morning.advancedWindSpeed,
      windDirection: morning.advancedWindDirection,
      windDirectionText: morning.advancedWindDirectionText,
      humidity: morning.advancedHumidity,
      pressure: morning.advancedPressure,
    },
    {
      timeOfDay: "Днём",
      temp: day.advancedTemperature,
      effect: day.advancedWeatherEffect,
      info: day.advancedWeatherInfo,
      apparentTemp: day.advancedApparentTemperature,
      windSpeed: day.advancedWindSpeed,
      windDirection: day.advancedWindDirection,
      windDirectionText: day.advancedWindDirectionText,
      humidity: day.advancedHumidity,
      pressure: day.advancedPressure,
    },
    {
      timeOfDay: "Вечером",
      temp: evening.advancedTemperature,
      effect: evening.advancedWeatherEffect,
      info: evening.advancedWeatherInfo,
      apparentTemp: evening.advancedApparentTemperature,
      windSpeed: evening.advancedWindSpeed,
      windDirection: evening.advancedWindDirection,
      windDirectionText: evening.advancedWindDirectionText,
      humidity: evening.advancedHumidity,
      pressure: evening.advancedPressure,
    },
    {
      timeOfDay: "Ночью",
      temp: night.advancedTemperature,
      effect: night.advancedWeatherEffect,
      info: night.advancedWeatherInfo,
      apparentTemp: night.advancedApparentTemperature,
      windSpeed: night.advancedWindSpeed,
      windDirection: night.advancedWindDirection,
      windDirectionText: night.advancedWindDirectionText,
      humidity: night.advancedHumidity,
      pressure: night.advancedPressure,
    },
  ];
};
