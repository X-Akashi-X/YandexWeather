import { defaultCategory } from "@utils/categories";

export const defaultPeriodAverages = {
  advancedTemperature: "-",
  advancedApparentTemperature: "-",
  advancedWindSpeed: 0,
  advancedWindDirection: 0,
  advancedWindDirectionText: "-",
  advancedHumidity: 0,
  advancedPressure: 0,
  advancedWeatherEffect: "-",
};

export const defaultOneDay = {
  advancedDateKey: "-",
  advancedDate: "-",
  advancedWeekday: "-",
  advancedWeekend: 0,
  morning: defaultPeriodAverages,
  day: defaultPeriodAverages,
  evening: defaultPeriodAverages,
  night: defaultPeriodAverages,
  advancedAvgWaterTemp: "",
  advancedAvgUV: 0,
  advancedUVCategory: defaultCategory,
  advancedAvgHumidity: "-",
  advancedAvgPressure: "-",
  advancedMagnteticField: 0,
  advancedMagnteticFieldCategory: defaultCategory,
  advancedSunrise: "",
  advancedSunset: "",
  advancedSunDay: "-",
  advancedMoonPhase: { text: "данные отсутствуют", icon: "-" },
};
