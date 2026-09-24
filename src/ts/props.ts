import type { defaultCategoryType, getMoonPhase } from "@utils/categories";
import type { PeriodAverages } from "./weather";
{
  /*DetailedForecast*/
}
type TimeOfDayItems = {
  timeOfDay: string;
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

export type TimeOfDayItemsObject = {
  data: TimeOfDayItems
}
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

type FeelingSlidesItems = {
  img?: string;
  category?: ReturnType<typeof defaultCategoryType>;
  title: string;
  text: string;
  classImg?: string;
  number?: number;
  link: string;
};

export type FeelingSlidesItemsObject = {
  data: FeelingSlidesItems
}
{
  /*WeekStatus*/
}
export type TodayWeekStatusSlides = {
  todayMaxTemperature: string;
  todayMinTemperature: string;
  todayWindGusts: number;
  todayMinMaxWindSpeed: string;
  todayWeatherEffect: string;
  todayWeatherInfo: string;
  todayWindCategory: string;
};

export type TomorrowWeekStatusSlides = {
  tomorrowWeatherEffect: string;
  tomorrowMinTemperature: string;
  tomorrowMaxTemperature: string;
  tomorrowMinMaxWindSpeed: string;
  tomorrowWindGusts: number;
  tomorrowWeatherInfo: string;
  tomorrowWindCategory: string;
};

export type WeeklyWeekStatusSlides = {
  weekMinTemperature: string;
  weekMaxTemperature: string;
  weekMinMaxWindSpeed: string;
  weekWindGusts: number;
  weekWeatherEffect: string;
  weekWeatherInfo: string;
  weekWindCategory: string;
};

export type WeekendWeekStatusSlides = {
  weekendMinTemperature: string;
  weekendMaxTemperature: string;
  weekendMinMaxWindSpeed: string;
  weekendWindGusts: number;
  weekendWeatherEffect: string;
  weekendWeatherInfo: string;
  weekendWindCategory: string;
};

type WeekStatusItems = {
  attribute?: string;
  img: string;
  title: string;
  info: string;
  minTemp?: string;
  maxTemp?: string;
  windCategory?: string;
  minMaxWindSpeed?: string;
  windGusts?: number;
  linkRout?: string;
  staticText?: string;
};

export type WeekStatusItemsObject = {
  data: WeekStatusItems
}
{
  /*WeatherOnMaps*/
}
export type MiniMapSlides = {
  link: string;
  bgURL: string;
  title: string;
};
{
  /*FAQ*/
}
export type FAQCurrentItems = {
  currentTemperature: string;
  currentApparentTemperature: string;
  currentWindSpeed: number;
  currentWindDirection: string;
  currentHumidity: number;
  currentPressure: number;
  currentWeatherInfo: string;
};

export type FAQTodayItems = {
  todayMinTemperature: string;
  todayMaxTemperature: string;
  todayPrecipitationProbability: string;
  todayMinMaxWindSpeed: string;
  todayWindGusts: number;
  todayMinHumidity: number;
  todayMaxHumidity: number;
  todayMinPressure: number;
  todayMaxPressure: number;
  todayWindCategory: string;
};

export type FAQAdvancedItems = {
  morning: PeriodAverages;
  day: PeriodAverages;
  evening: PeriodAverages;
  night: PeriodAverages;
};

export type FAQItems = {
  activeItem: number | null;
  text: string;
  title: string;
  i: number;
  toggle: (i: number) => void;
};
{
  /*SettingsDropdown*/
}
export type NavigationItems = {
  imgTitle?: string;
  imgTextTitle?: string;
  title: string;
  link?: string;
};
{
  /*CurrentForecastData*/
}
export type DataLeftItems = {
  currentTemperature: string;
  currentWindSpeed: number;
};
export type DataRightItems = {
  currentHumidity: number;
  currentUVIndex: number;
};
export type DataItems = {
  title: string;
  forecastText: string;
};
