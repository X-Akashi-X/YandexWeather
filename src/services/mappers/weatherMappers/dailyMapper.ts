import { HPA_TO_MMHG } from "@constants/conversions";
import { SATURDAY, SUNDAY, TOTAL_WEEKEND } from "@constants/daysCodes";
import {
  DEFAULT_TODAY,
  DEFAULT_TOMORROW,
  DEFAULT_WEEK,
  DEFAULT_WEEKEND,
  MONTH_NAMES,
} from "@constants/weather";
import type { ApiArhive, ApiForecast } from "@ts/api";
import {
  getMagneticFieldCategory,
  getMoonPhase,
  getPrecipitationProbability,
  getWeatherEffect,
  getWeatherInfo,
  getWindCategory,
} from "@utils/categories";
import {
  getAvgWeatherCode,
  shouldShowDash,
  shouldShowPlus,
} from "@utils/formatters";

export const todayData = (dataForecast: ApiForecast) => {
  if (!dataForecast.daily) return DEFAULT_TODAY;

  const magneticField = Math.abs(
    Math.floor(dataForecast.daily.surface_pressure_max[1] * HPA_TO_MMHG) -
      Math.floor(dataForecast.daily.surface_pressure_max[2] * HPA_TO_MMHG),
  );

  return {
    todayMinTemperature: shouldShowPlus(
      Math.floor(dataForecast.daily.temperature_2m_min[1]),
    ),
    todayMaxTemperature: shouldShowPlus(
      Math.floor(dataForecast.daily.temperature_2m_max[1]),
    ),
    todayMinMaxWindSpeed: shouldShowDash(
      Math.floor(dataForecast.daily.wind_speed_10m_min[1]),
      Math.floor(dataForecast.daily.wind_speed_10m_max[1]),
    ),
    todayWindGusts: Math.floor(dataForecast.daily.wind_gusts_10m_max[1]),
    todayMinHumidity: dataForecast.daily.relative_humidity_2m_min[1],
    todayMaxHumidity: dataForecast.daily.relative_humidity_2m_max[1],
    todayMinPressure: Math.floor(
      dataForecast.daily.surface_pressure_min[1] * HPA_TO_MMHG,
    ),
    todayMaxPressure: Math.floor(
      dataForecast.daily.surface_pressure_max[1] * HPA_TO_MMHG,
    ),
    todayPrecipitationProbability: getPrecipitationProbability(
      dataForecast.daily.precipitation_probability_max[1],
    ),
    todayWindCategory: getWindCategory(
      dataForecast.daily.wind_speed_10m_mean[1],
    ),
    todayWeatherEffect: getWeatherEffect(dataForecast.daily.weather_code[1]),
    todayWeatherInfo: getWeatherInfo(dataForecast.daily.weather_code[1]),
    todayMagneticField: magneticField,
    todayMagneticFieldCategory: getMagneticFieldCategory(magneticField),
    todayMoonPhase: getMoonPhase(dataForecast.daily.moon_phase[1]),
  };
};

export const tomorrowData = (dataForecast: ApiForecast) => {
  if (!dataForecast.daily) return DEFAULT_TOMORROW;

  return {
    tomorrowMinTemperature: shouldShowPlus(
      Math.floor(dataForecast.daily.temperature_2m_min[2]),
    ),
    tomorrowMaxTemperature: shouldShowPlus(
      Math.floor(dataForecast.daily.temperature_2m_max[2]),
    ),
    tomorrowMinMaxWindSpeed: shouldShowDash(
      Math.floor(dataForecast.daily.wind_speed_10m_min[2]),
      Math.floor(dataForecast.daily.wind_speed_10m_max[2]),
    ),
    tomorrowWindGusts: Math.floor(dataForecast.daily.wind_gusts_10m_max[2]),
    tomorrowWeatherEffect: getWeatherEffect(dataForecast.daily.weather_code[2]),
    tomorrowWeatherInfo: getWeatherInfo(dataForecast.daily.weather_code[2]),
    tomorrowWindCategory: getWindCategory(
      dataForecast.daily.wind_speed_10m_mean[2],
    ),
  };
};

export const weekData = (dataForecast: ApiForecast) => {
  if (!dataForecast.daily) return DEFAULT_WEEK;

  const avgDetails = (arg: number[]) => {
    const week = arg.slice(1, 8);

    const avg = week.reduce((a, b) => a + b, 0) / week.length;

    return Math.floor(avg);
  };

  const avgWeatherCode = getAvgWeatherCode(
    dataForecast.daily.weather_code.slice(1, 8),
  );

  return {
    weekMinTemperature: shouldShowPlus(
      avgDetails(dataForecast.daily.temperature_2m_min),
    ),
    weekMaxTemperature: shouldShowPlus(
      avgDetails(dataForecast.daily.temperature_2m_max),
    ),
    weekMinMaxWindSpeed: shouldShowDash(
      avgDetails(dataForecast.daily.wind_speed_10m_min),
      avgDetails(dataForecast.daily.wind_gusts_10m_max),
    ),
    weekWindGusts: avgDetails(dataForecast.daily.wind_gusts_10m_mean),
    weekWeatherEffect: getWeatherEffect(avgWeatherCode),
    weekWeatherInfo: getWeatherInfo(avgWeatherCode),
    weekWindCategory: getWindCategory(
      avgDetails(dataForecast.daily.wind_speed_10m_mean),
    ),
  };
};

export const weekendData = (dataForecast: ApiForecast) => {
  if (!dataForecast.daily.time) return DEFAULT_WEEKEND;

  const weekendDays = dataForecast.daily.time
    .map((date, i) => ({
      date,
      minTemp: Math.floor(dataForecast.daily.temperature_2m_min[i]),
      maxTemp: Math.floor(dataForecast.daily.temperature_2m_max[i]),
      windSpeed: Math.floor(dataForecast.daily.wind_speed_10m_mean[i]),
      minWindSpeed: Math.floor(dataForecast.daily.wind_speed_10m_min[i]),
      maxWindSpeed: Math.floor(dataForecast.daily.wind_speed_10m_max[i]),
      windGusts: Math.floor(dataForecast.daily.wind_gusts_10m_mean[i]),
      weatherCode: dataForecast.daily.weather_code[i],
    }))
    .filter((d) => {
      const day = new Date(d.date).getDay();
      return day === SATURDAY || day === SUNDAY;
    })
    .slice(0, 2);

  return {
    weekendMinTemperature: shouldShowPlus(
      Math.floor(
        weekendDays.reduce((sum, d) => sum + d.minTemp, 0) / TOTAL_WEEKEND,
      ),
    ),
    weekendMaxTemperature: shouldShowPlus(
      Math.floor(
        weekendDays.reduce((sum, d) => sum + d.maxTemp, 0) / TOTAL_WEEKEND,
      ),
    ),
    weekendMinMaxWindSpeed: shouldShowDash(
      Math.floor(
        weekendDays.reduce((sum, d) => sum + d.minWindSpeed, 0) / TOTAL_WEEKEND,
      ),
      Math.floor(
        weekendDays.reduce((sum, d) => sum + d.maxWindSpeed, 0) / TOTAL_WEEKEND,
      ),
    ),
    weekendWindGusts: Math.floor(
      weekendDays.reduce((sum, d) => sum + d.windGusts, 0) / TOTAL_WEEKEND,
    ),
    weekendWeatherEffect: getWeatherEffect(weekendDays[0].weatherCode),
    weekendWeatherInfo: getWeatherInfo(weekendDays[0].weatherCode),
    weekendWindCategory: getWindCategory(
      Math.floor(
        weekendDays.reduce((sum, d) => sum + d.windSpeed, 0) / TOTAL_WEEKEND,
      ),
    ),
  };
};

export const tenDaysData = (dataForecast: ApiForecast) => {
  if (!dataForecast.daily.time) return [];

  const value = dataForecast.daily.time.slice(1, 11);

  return value.map((t, i) => ({
    tenDaysDateKey: t,
    tenDaysDate: new Date(t).getDate(),
    tenDaysWeekday: new Date(t).toLocaleString("ru-Ru", { weekday: "short" }),
    tenDaysWeekend: new Date(t).getDay(),
    tenDaysMaxTemperature: shouldShowPlus(
      Math.floor(dataForecast.daily.temperature_2m_max[i + 1]),
    ),
    tenDaysMinTemperature: shouldShowPlus(
      Math.floor(dataForecast.daily.temperature_2m_min[i + 1]),
    ),
    tenDaysWeatherEffect: getWeatherEffect(
      dataForecast.daily.weather_code[i + 1],
    ),
    tenDaysWeatherInfo: getWeatherInfo(dataForecast.daily.weather_code[i + 1]),
  }));
};

export const montlyData = (dataArchive: ApiArhive) => {
  if (!dataArchive.daily.time) return [];

  const dates = dataArchive.daily.time;
  const temps = dataArchive.daily.temperature_2m_mean;
  const weatherCodes = dataArchive.daily.weather_code;

  const groupedData: Record<
    string,
    { totalTemp: number; countDays: number; totalWeatherCode: number[] }
  > = {};

  for (let i = 0; i < dates.length; i++) {
    const temp = temps[i];
    const weatherCode = weatherCodes[i];
    const month = dates[i].split("-")[1];

    if (!groupedData[month]) {
      groupedData[month] = { totalTemp: 0, countDays: 0, totalWeatherCode: [] };
    }

    groupedData[month].totalTemp += temp;
    groupedData[month].totalWeatherCode.push(weatherCode);
    groupedData[month].countDays += 1;

    if (!temp || !weatherCode) {
      continue;
    }
  }

  return Object.keys(groupedData)
    .sort()
    .map((key) => {
      const monthIndex = parseInt(key, 10) - 1;
      const monthly = MONTH_NAMES[monthIndex];
      const count = groupedData[key].countDays;
      const avgTemp = count === 0 ? 0 : groupedData[key].totalTemp / count;
      const avgWeatherCode = getAvgWeatherCode(
        groupedData[key].totalWeatherCode,
      );
      return {
        monthly,
        montlyAvgTemperature: shouldShowPlus(Math.floor(avgTemp)),
        montlyWeatherEffect: getWeatherEffect(avgWeatherCode),
        montlyWeatherInfo: getWeatherInfo(avgWeatherCode)
      };
    });
};
