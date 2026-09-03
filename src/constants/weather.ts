export const DEFAULT_CATEGORY = {
  fill: 0,
  color: "grey",
  text: "данные отсутствуют",
};

export const DEFAULT_PERIOD_AVERAGES = {
  advancedTemperature: "-",
  advancedApparentTemperature: "-",
  advancedWindSpeed: 0,
  advancedWindDirection: 0,
  advancedWindDirectionText: "-",
  advancedHumidity: 0,
  advancedPressure: 0,
  advancedWeatherEffect: "-",
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
  advancedMoonPhase: { text: "данные отсутствуют", icon: "-" },
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
