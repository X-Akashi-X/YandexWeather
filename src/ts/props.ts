import type { defaultCategoryType, getMoonPhase } from "@utils/categories";
{
  /*DetailedForecast*/
}
export type TimeOfDayItems = {
  temp: string;
  effect: string;
  info: string;
  apparentTemp: string;
  windSpeed: number;
  windDirection: number;
  windDirectionText: string;
  humidity: number;
  pressure: number;
};
{
  /*LifestyleForecast*/
}
export type LifestyleLinkItems = {
  link: string;
  icon: string;
  title: string;
};
{
  /*CurrentWeather*/
}
export type CurrentWeatherEffectDetails = {
  currentWindSpeed: number;
  currentWindDirection: string;
  currentPressure: number;
  currentHumidity: number;
  currentWaterTemperature: string;
};

export type EffectDetailsItems = {
  icon: string;
  text: string;
  alt: string;
};
{
  /*WeatherAndFeelings*/
}
export type CurrentFeelingSlides = {
  currentPressure: number;
  currentPressureCategory: ReturnType<typeof defaultCategoryType>;
  currentPollenCategory: ReturnType<typeof defaultCategoryType>;
  currentUVCategory: ReturnType<typeof defaultCategoryType>;
  currentUVIndex: number;
};

export type TodayFeelingSlides = {
  todayMagneticField: number;
  todayMagneticFieldCategory: ReturnType<typeof defaultCategoryType>;
  todayMoonPhase: ReturnType<typeof getMoonPhase>;
};

export type FeelingSlidesItems = {
  img: string | undefined;
  category: ReturnType<typeof defaultCategoryType> | undefined;
  title: string;
  text: string;
  classImg: string | undefined;
  number: number | undefined;
  link: string;
};
