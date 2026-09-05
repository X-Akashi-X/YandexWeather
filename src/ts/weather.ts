import type {
  getMagneticFieldCategory,
  getMoonPhase,
  getUVCategory,
} from "@utils/categories";

export type PeriodData = {
  temp: number;
  feels: number;
  windSpeed: number;
  windDir: number;
  humidity: number;
  pressure: number;
  weatherCode: number;
};

export type PeriodAverages = {
  advancedTemperature: string;
  advancedApparentTemperature: string;
  advancedWindSpeed: number;
  advancedWindDirection: number;
  advancedWindDirectionText: string;
  advancedHumidity: number;
  advancedPressure: number;
  advancedWeatherEffect: string;
  advancedWeatherInfo: string;
};

export type AdvancedDayItem = {
  advancedDateKey: string;
  advancedDate: string;
  advancedWeekday: string;
  advancedWeekend: number;
  morning: PeriodAverages;
  day: PeriodAverages;
  evening: PeriodAverages;
  night: PeriodAverages;
  advancedAvgWaterTemp: string;
  advancedAvgUV: number;
  advancedUVCategory: ReturnType<typeof getUVCategory>;
  advancedAvgHumidity: number | string;
  advancedAvgPressure: number | string;
  advancedMagnteticField: number;
  advancedMagnteticFieldCategory: ReturnType<typeof getMagneticFieldCategory>;
  advancedSunrise: string;
  advancedSunset: string;
  advancedSunDay: string;
  advancedMoonPhase: ReturnType<typeof getMoonPhase>;
};

export type AdvancedWeather = {
  tenDays: AdvancedDayItem[];
  oneDay: AdvancedDayItem;
};

export type DayGroups = {
  morning: PeriodData[];
  day: PeriodData[];
  evening: PeriodData[];
  night: PeriodData[];
};
