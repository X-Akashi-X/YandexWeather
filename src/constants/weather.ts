export const DEFAULT_CATEGORY = {
  fill: 0,
  color: "grey",
  text: "данные отсутствуют",
};

export const DEFAULT_MOON_PHASE = { text: "данные отсутствуют", icon: "-" };

export const DEFAULT_PERIOD_AVERAGES = {
  advancedTemperature: "-",
  advancedApparentTemperature: "-",
  advancedWindSpeed: 0,
  advancedWindDirection: 0,
  advancedWindDirectionText: "-",
  advancedHumidity: 0,
  advancedPressure: 0,
  advancedWeatherEffect: "-",
  advancedWeatherInfo: "",
};

export const DEFAULT_ONE_DAY = {
  advancedDateKey: "-",
  advancedDate: "-",
  advancedWeekday: "-",
  advancedWeekend: 0,
  morning: DEFAULT_PERIOD_AVERAGES,
  day: DEFAULT_PERIOD_AVERAGES,
  evening: DEFAULT_PERIOD_AVERAGES,
  night: DEFAULT_PERIOD_AVERAGES,
  advancedAvgWaterTemp: "",
  advancedAvgUV: 0,
  advancedUVCategory: DEFAULT_CATEGORY,
  advancedAvgHumidity: "-",
  advancedAvgPressure: "-",
  advancedMagnteticField: 0,
  advancedMagnteticFieldCategory: DEFAULT_CATEGORY,
  advancedSunrise: "",
  advancedSunset: "",
  advancedSunDay: "-",
  advancedMoonPhase: DEFAULT_MOON_PHASE,
};

export const DEFAULT_CURRENT_DAY = {
  currentTemperature: "",
  currentApparentTemperature: "",
  currentWaterTemperature: "",
  currentWindSpeed: 0,
  currentWindGusts: 0,
  currentPressure: 0,
  currentHumidity: 0,
  currentUVIndex: 0,
  currentWeatherEffect: "-",
  currentWeatherInfo: "-",
  currentWindCategory: "-",
  currentWindDirection: "-",
  currentPollenCategory: DEFAULT_CATEGORY,
  currentPressureCategory: DEFAULT_CATEGORY,
  currentUVCategory: DEFAULT_CATEGORY,
};

export const DEFAULT_TODAY = {
  todayMinTemperature: "",
  todayMaxTemperature: "",
  todayMinMaxWindSpeed: 0,
  todayWindGusts: 0,
  todayMinHumidity: 0,
  todayMaxHumidity: 0,
  todayMinPressure: 0,
  todayMaxPressure: 0,
  todayPrecipitationProbability: 0,
  todayWindCategory: "",
  todayWeatherEffect: "",
  todayWeatherInfo: "",
  todayMagneticField: "",
  todayMagneticFieldCategory: DEFAULT_CATEGORY,
  todayMoonPhase: DEFAULT_MOON_PHASE,
};

export const DEFAULT_YESTERDAY = {
  yesterdayCurrentTemp: "",
};

export const DEFAULT_WEEK = {
  weekMinTemperature: "",
  weekMaxTemperature: "",
  weekMinMaxWindSpeed: "",
  weekWindGusts: 0,
  weekWeatherEffect: "",
  weekWeatherInfo: "",
  weekWindCategory: "",
};

export const DEFAULT_WEEKEND = {
  weekendMinTemperature: "",
  weekendMaxTemperature: "",
  weekendMinMaxWindSpeed: "",
  weekendWindGusts: 0,
  weekendWeatherEffect: "",
  weekendWeatherInfo: "",
  weekendWindCategory: "",
};

export const DEFAULT_TOMORROW = {
  tomorrowMinTemperature: "",
  tomorrowMaxTemperature: "",
  tomorrowMinMaxWindSpeed: "",
  tomorrowWindGusts: 0,
  tomorrowWeatherEffect: "",
  tomorrowWeatherInfo: "",
  tomorrowWindCategory: "",
};

export const MONTH_NAMES = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

export const WIND_DIRECTIONS = ["С", "СВ", "В", "ЮВ", "Ю", "ЮЗ", "З", "СЗ"];
