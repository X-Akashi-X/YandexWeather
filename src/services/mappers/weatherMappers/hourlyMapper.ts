import type { ApiForecast } from "@ts/api";
import type { DayGroups, PeriodData } from "@ts/weather";
import {
  getMagneticFieldCategory,
  getMoonPhase,
  getUVCategory,
  getWeatherEffect,
} from "@utils/categories";
import {
  getAvgWeatherCode,
  getWindDirection,
  shouldShowPlus,
} from "@utils/formatters";

export const yesterdayData = (dataForecast: ApiForecast) => {
  if (!dataForecast?.hourly) return null;

  const yesterdayDate = new Date();
  yesterdayDate.setDate(yesterdayDate.getDate() - 1);
  yesterdayDate.setMinutes(0, 0, 0);
  const yesterdayCurrentMoment = Intl.DateTimeFormat("sv-SE", {
    dateStyle: "short",
    timeStyle: "short",
  })
    .format(yesterdayDate)
    .replace(" ", "T");
  const indexCurrentMoment = dataForecast.hourly.time.indexOf(
    yesterdayCurrentMoment,
  );

  if (indexCurrentMoment === -1) return null;

  return {
    yesterdayCurrentTemp: shouldShowPlus(
      Math.floor(dataForecast.hourly.temperature_2m[indexCurrentMoment]),
    ),
  };
};

export const timeLineData = (dataForecast: ApiForecast) => {
  const now = new Date();
  const current = new Date(now);
  current.setMinutes(0, 0, 0);
  const tomorrow = new Date(now);
  tomorrow.setDate(now.getDate() + 1);
  tomorrow.setHours(23, 59, 59, 999);

  if (!dataForecast?.hourly?.time) return null;

  return dataForecast.hourly.time
    .map((t, i) => ({ t, i }))
    .filter(({ t }) => {
      const itemDate = new Date(t);

      return itemDate >= current && itemDate <= tomorrow;
    })
    .map(({ t, i }) => ({
      timeLineDate: t.split("T")[0],
      timeLineTime: t.split("T")[1].slice(0, 5),
      timeLineTemperature: shouldShowPlus(
        Math.floor(dataForecast.hourly.temperature_2m[i]),
      ),
      timeLineWeatherEffect: getWeatherEffect(
        dataForecast.hourly.weather_code[i],
      ),
    }));
};

export const advancedDaysData = (dataForecast: ApiForecast) => {
  const groupedDays: Record<string, DayGroups> = {};

  dataForecast.hourly.time.forEach((timeStr, i) => {
    const dateKey = timeStr.split("T")[0];
    const hour = new Date(timeStr).getHours();

    if (!groupedDays[dateKey]) {
      groupedDays[dateKey] = {
        morning: [],
        day: [],
        evening: [],
        night: [],
      };
    }

    const hourData = {
      temp: Math.floor(dataForecast.hourly.temperature_2m[i]),
      feels: Math.floor(dataForecast.hourly.apparent_temperature[i]),
      windSpeed: Math.floor(dataForecast.hourly.wind_speed_10m[i]),
      windDir: dataForecast.hourly.wind_direction_10m[i],
      humidity: dataForecast.hourly.relative_humidity_2m[i],
      pressure: Math.floor(dataForecast.hourly.surface_pressure[i] * 0.75006),
      weatherCode: dataForecast.hourly.weather_code[i],
    };

    if (hour >= 6 && hour < 12) groupedDays[dateKey].morning.push(hourData);
    if (hour >= 12 && hour < 18) groupedDays[dateKey].day.push(hourData);
    if (hour >= 18 && hour < 24) groupedDays[dateKey].evening.push(hourData);
    if (hour >= 0 && hour < 6) {
      const prevDate = new Date(timeStr);
      prevDate.setDate(prevDate.getDate() - 1);

      const prevDateKey = prevDate.toLocaleDateString("sv-SE");

      if (groupedDays[prevDateKey]) {
        groupedDays[prevDateKey].night.push(hourData);
      }
    }
  });

  const datesKeys = Object.keys(groupedDays);

  const averageData = (periodArr: PeriodData[]) => {
    if (!periodArr?.length) return null;

    const count = periodArr.length;

    const arrWeatherCodes = periodArr.map((item) => item.weatherCode);

    const sum = periodArr.reduce(
      (acc, curr) => ({
        temp: acc.temp + curr.temp,
        feels: acc.feels + curr.feels,
        windSpeed: acc.windSpeed + curr.windSpeed,
        windDir: acc.windDir + curr.windDir,
        humidity: acc.humidity + curr.humidity,
        pressure: acc.pressure + curr.pressure,
      }),
      {
        temp: 0,
        feels: 0,
        windSpeed: 0,
        windDir: 0,
        humidity: 0,
        pressure: 0,
      },
    );

    return {
      advancedTemperature: shouldShowPlus(Math.floor(sum.temp / count)),
      advancedApparentTemperature: shouldShowPlus(
        Math.floor(sum.feels / count),
      ),
      advancedWindSpeed: Math.floor(sum.windSpeed / count),
      advancedWindDirection: Math.floor(sum.windDir / count),
      advancedWindDirectionText: getWindDirection(
        Math.floor(sum.windDir / count),
      ),
      advancedHumidity: Math.floor(sum.humidity / count),
      advancedPressure: Math.floor(sum.pressure / count),
      advancedWeatherEffect: getWeatherEffect(
        getAvgWeatherCode(arrWeatherCodes),
      ),
    };
  };

  const getDailyData = (
    dailySource: {
      time: string[];
      [key: string]: string[] | number[] | null;
    },
    arrKey: string,
    targetDate: string,
  ) => {
    if (!dailySource?.time || !dailySource[arrKey]) return null;
    const index = dailySource.time.indexOf(targetDate);
    return index !== -1 ? dailySource[arrKey][index] : null;
  };

  const getSunDay = (targetDate: string) => {
    if (!dataForecast?.daily) return null;

    const { time, daylight_duration } = dataForecast.daily;

    const index = time.indexOf(targetDate);

    if (index !== -1) {
      const hours = Math.floor(daylight_duration[index] / 3600);
      const minutes = Math.floor((daylight_duration[index] % 3600) / 60);

      return `${hours} ч ${minutes} мин`;
    }
    return "-";
  };

  const getAvgMagnetic = (targetDate: string) => {
    if (!dataForecast?.daily) return null;

    const { time, surface_pressure_max } = dataForecast.daily;

    const index = time.indexOf(targetDate);

    if (index !== -1) {
      const todayMaXPressure = Math.floor(
        surface_pressure_max[index] * 0.75006,
      );

      const tomorrowMaxPressure = surface_pressure_max[index + 1]
        ? Math.floor(surface_pressure_max[index + 1] * 0.75006)
        : todayMaXPressure;

      return Math.abs(todayMaXPressure - tomorrowMaxPressure);
    }

    return null;
  };

  const forecast = datesKeys.map((date) => {
    const dayData = groupedDays[date];

    const avgTemp = getDailyData(
      dataForecast.daily,
      "temperature_2m_mean",
      date,
    );
    const avgUV = getDailyData(dataForecast.daily, "uv_index_max", date);
    const avgMagnetic = getAvgMagnetic(date);
    const avgHumidity = getDailyData(
      dataForecast.daily,
      "relative_humidity_2m_mean",
      date,
    );
    const avgPressure = getDailyData(
      dataForecast.daily,
      "surface_pressure_mean",
      date,
    );
    const avgMoon = getDailyData(dataForecast.daily, "moon_phase", date);
    const sunrise = getDailyData(dataForecast.daily, "sunrise", date);
    const sunset = getDailyData(dataForecast.daily, "sunset", date);
    const sunDay = getSunDay(date);

    return {
      advancedDate: new Date(date).toLocaleString("ru-Ru", {
        day: "numeric",
        month: "long",
      }),
      advancedWeekday: new Date(date).toLocaleDateString("ru-RU", {
        weekday: "long",
      }),
      advancedWeekend: new Date(date).getDay(),
      morning: averageData(dayData.morning),
      day: averageData(dayData.day),
      evening: averageData(dayData.evening),
      night: averageData(dayData.night),
      advancedAvgWaterTemp:
        typeof avgTemp === "number"
          ? shouldShowPlus(Math.floor(avgTemp - 3))
          : null,
      advancedAvgUV: typeof avgUV === "number" ? Math.floor(avgUV) : null,
      advancedUVCategory:
        typeof avgUV === "number" ? getUVCategory(Math.floor(avgUV)) : null,
      advancedAvgHumidity: avgHumidity,
      advancedAvgPressure: avgPressure,
      advancedMagnteticField: avgMagnetic,
      advancedMagnteticFieldCategory: avgMagnetic
        ? getMagneticFieldCategory(avgMagnetic)
        : null,
      advancedSunrise:
        typeof sunrise === "string" ? sunrise.split("T")[1] : null,
      advancedSunset: typeof sunset === "string" ? sunset.split("T")[1] : null,
      advancedSunDay: sunDay,
      advancedMoonPhase:
        typeof avgMoon === "number" ? getMoonPhase(avgMoon) : null,
    };
  });

  const tenDays = forecast.slice(1, 11);
  const oneDay = forecast[0];

  return { tenDays, oneDay };
};
