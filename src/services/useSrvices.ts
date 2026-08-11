import {
  getAvgWeatherCode,
  getPlusOrNot,
  getPollenCategory,
  getPressureCategory,
  getPrecipitationProbability,
  getUVCategory,
  getWeatherEffect,
  getWeatherInfo,
  getWindCategory,
  getWindDirection,
  UVCategoryDefault,
} from "@utils/weatherEffects";
import useAirQuality from "../hooks/useAirQuality";
import useForecast from "../hooks/useForecast";
import type { PeriodData, DayGroups } from "@ts/weather";
import { useCallback, useMemo } from "react";

const useServices = () => {
  const { dataForecast } = useForecast();
  const { dataAirQuality } = useAirQuality();

  const getCurrentData = () => {
    if (!dataForecast?.current || !dataAirQuality?.current) return null;

    return {
      currentTemperature: getPlusOrNot(
        Math.floor(dataForecast.current.temperature_2m),
      ),
      currentApparentTemperature: getPlusOrNot(
        Math.floor(dataForecast.current.apparent_temperature),
      ),
      currentWaterTemperature: getPlusOrNot(
        Math.floor(dataForecast.current.temperature_2m - 3),
      ),
      currentWindSpeed: Math.floor(dataForecast.current.wind_speed_10m),
      currentWindGusts: Math.floor(dataForecast.current.wind_gusts_10m),
      currentPressure: Math.floor(
        dataForecast.current.surface_pressure * 0.75006,
      ),
      currentHumidity: dataForecast.current.relative_humidity_2m,
      currentUVIndex: Math.floor(dataAirQuality.current.uv_index),
      currentWeatherEffect: getWeatherEffect(dataForecast.current.weather_code),
      currentWeatherInfo: getWeatherInfo(dataForecast.current.weather_code),
      currentWindCategory: getWindCategory(dataForecast.current.wind_speed_10m),
      currentWindDirection: getWindDirection(
        dataForecast.current.wind_direction_10m,
      ),
      currentPollenCategory: getPollenCategory(
        dataAirQuality.current.grass_pollen,
      ),
      currentPressureCategory: getPressureCategory(
        dataForecast.current.surface_pressure,
      ),
      currentUVCategory: getUVCategory(dataAirQuality.current.uv_index),
    };
  };

  const getTodayData = () => {
    if (!dataForecast?.daily) return null;

    return {
      todayMinTemperature: getPlusOrNot(
        Math.floor(dataForecast.daily.temperature_2m_min[1]),
      ),
      todayMaxTemperature: getPlusOrNot(
        Math.floor(dataForecast.daily.temperature_2m_max[1]),
      ),
      todayMinWindSpeed: Math.floor(dataForecast.daily.wind_speed_10m_min[1]),
      todayMaxWindSpeed: Math.floor(dataForecast.daily.wind_speed_10m_max[1]),
      todayWindGusts: Math.floor(dataForecast.daily.wind_gusts_10m_max[1]),
      todayMinHumidity: dataForecast.daily.relative_humidity_2m_min[1],
      todayMaxHumidity: dataForecast.daily.relative_humidity_2m_max[1],
      todayMinPressure: Math.floor(dataForecast.daily.surface_pressure_min[1]),
      todayMaxPressure: Math.floor(dataForecast.daily.surface_pressure_max[1]),
      todayPrecipitationProbability: getPrecipitationProbability(
        dataForecast.daily.precipitation_probability_max[1],
      ),
      todayWindCategory: getWindCategory(
        dataForecast.daily.wind_speed_10m_mean[1],
      ),
      todayWeatherEffect: getWeatherEffect(dataForecast.daily.weather_code[1]),
      todayWeatherInfo: getWeatherInfo(dataForecast.daily.weather_code[1]),
    };
  };

  const getTomorrowData = () => {
    if (!dataForecast?.daily) return null;

    return {
      tomorrowMinTemperature: getPlusOrNot(
        Math.floor(dataForecast.daily.temperature_2m_min[2]),
      ),
      tomorrowMaxTemperature: getPlusOrNot(
        Math.floor(dataForecast.daily.temperature_2m_max[2]),
      ),
      tomorrowMinWindSpeed: Math.floor(
        dataForecast.daily.wind_speed_10m_min[2],
      ),
      tomorrowMaxWindSpeed: Math.floor(
        dataForecast.daily.wind_speed_10m_max[2],
      ),
      tomorrowWindGusts: Math.floor(dataForecast.daily.wind_gusts_10m_max[2]),
      tomorrowWeatherEffect: getWeatherEffect(
        dataForecast.daily.weather_code[2],
      ),
      tomorrowWeatherInfo: getWeatherInfo(dataForecast.daily.weather_code[2]),
      tomorrowWindCategory: getWindCategory(
        dataForecast.daily.wind_speed_10m_mean[2],
      ),
    };
  };

  const getYesterdayData = () => {
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
      yesterdayCurrentTemp: getPlusOrNot(
        Math.floor(dataForecast.hourly.temperature_2m[indexCurrentMoment]),
      ),
    };
  };

  const getWeekData = () => {
    if (!dataForecast?.daily) return null;

    const avgDetails = (arg: number[]) => {
      const week = arg.slice(1, 8);

      let avg = week.reduce((a, b) => a + b, 0) / week.length;

      if (
        arg === dataForecast.daily.wind_speed_10m_max ||
        arg === dataForecast.daily.wind_gusts_10m_max
      ) {
        avg = avg / 3.6;
      }

      return Math.floor(avg);
    };

    const avgWeatherCode = getAvgWeatherCode(
      dataForecast.daily.weather_code.slice(1, 8),
    );

    return {
      weekMinTemperature: getPlusOrNot(
        avgDetails(dataForecast.daily.temperature_2m_min),
      ),
      weekMaxTemperature: getPlusOrNot(
        avgDetails(dataForecast.daily.temperature_2m_max),
      ),
      weekMinWindSpeed: avgDetails(dataForecast.daily.wind_speed_10m_min),
      weekMaxWindSpeed: avgDetails(dataForecast.daily.wind_speed_10m_max),
      weekWindGusts: avgDetails(dataForecast.daily.wind_gusts_10m_mean),
      weekWeatherEffect: getWeatherEffect(avgWeatherCode),
      weekWeatherInfo: getWeatherInfo(avgWeatherCode),
      weekWindCategory: getWindCategory(
        avgDetails(dataForecast.daily.wind_speed_10m_mean),
      ),
    };
  };

  const getWeekendData = () => {
    if (!dataForecast?.daily?.time) return null;

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
        return day === 6 || day === 0;
      })
      .slice(0, 2);

    return {
      weekendMinTemperature: getPlusOrNot(
        Math.floor(weekendDays.reduce((sum, d) => sum + d.minTemp, 0) / 2),
      ),
      weekendMaxTemperature: getPlusOrNot(
        Math.floor(weekendDays.reduce((sum, d) => sum + d.maxTemp, 0) / 2),
      ),
      weekendMinWindSpeed: Math.floor(
        weekendDays.reduce((sum, d) => sum + d.minWindSpeed, 0) / 2,
      ),
      weekendMaxWindSpeed: Math.floor(
        weekendDays.reduce((sum, d) => sum + d.maxWindSpeed, 0) / 2,
      ),
      weekendWindGusts: Math.floor(
        weekendDays.reduce((sum, d) => sum + d.windGusts, 0) / 2,
      ),
      weekendWeatherEffect: getWeatherEffect(weekendDays[0].weatherCode),
      weekendWeatherInfo: getWeatherInfo(weekendDays[0].weatherCode),
      weekendWindCategory: getWindCategory(
        Math.floor(weekendDays.reduce((sum, d) => sum + d.windSpeed, 0) / 2),
      ),
    };
  };

  const getTimeLineData = () => {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(now.getDate() + 1);
    tomorrow.setHours(23, 59, 59, 999);

    if (!dataForecast?.hourly?.time) return null;

    return dataForecast.hourly.time
      .map((t, i) => ({ t, i }))
      .filter(({ t }) => {
        const itemDate = new Date(t);

        return itemDate >= now && itemDate <= tomorrow;
      })
      .map(({ t, i }) => ({
        timeLineDate: t.split("T")[0],
        timeLineTime: t.split("T")[1].slice(0, 5),
        timeLineTemperature: getPlusOrNot(
          Math.floor(dataForecast.hourly.temperature_2m[i]),
        ),
        timeLineWeatherEffect: getWeatherEffect(
          dataForecast.hourly.weather_code[i],
        ),
      }));
  };

  const getTenDaysData = () => {
    if (!dataForecast?.daily?.time) return null;

    const value = dataForecast.daily.time.slice(1, 11);

    return value.map((t, i) => ({
      tenDaysDate: new Date(t).getDate(),
      tenDaysWeekday: new Date(t).toLocaleString("ru-Ru", { weekday: "short" }),
      TenDaysMaxTemperature: getPlusOrNot(
        Math.floor(dataForecast.daily.temperature_2m_max[i + 1]),
      ),
      tenDaysMinTemperature: getPlusOrNot(
        Math.floor(dataForecast.daily.temperature_2m_min[i + 1]),
      ),
      tenDaysWeatherEffect: getWeatherEffect(
        dataForecast.daily.weather_code[i + 1],
      ),
    }));
  };

  const getAdvancedTenDaysData = useCallback(() => {
    if (!dataForecast?.hourly) return [];

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
        advancedTemperature: getPlusOrNot(Math.floor(sum.temp / count)),
        advancedApparentTemperature: getPlusOrNot(
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

    const forecast = datesKeys.map((date) => {
      const dayData = groupedDays[date];

      const avgTemp = getDailyData(
        dataForecast.daily,
        "temperature_2m_mean",
        date,
      );
      const avgUV = getDailyData(dataForecast.daily, "uv_index_max", date);
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
        morning: averageData(dayData.morning),
        day: averageData(dayData.day),
        evening: averageData(dayData.evening),
        night: averageData(dayData.night),
        advancedAvgWaterTemp:
          typeof avgTemp === "number"
            ? getPlusOrNot(Math.floor(avgTemp - 3))
            : null,
        advancedAvgUV: typeof avgUV === "number" ? Math.floor(avgUV) : null,
        advancedUVCategory:
          typeof avgUV === "number"
            ? getUVCategory(Math.floor(avgUV))
            : UVCategoryDefault,
        advancedSunrise:
          typeof sunrise === "string" ? sunrise.split("T")[1] : null,
        advancedSunset:
          typeof sunset === "string" ? sunset.split("T")[1] : null,
        advancedSunDay: sunDay,
      };
    });

    return forecast.slice(1, 11);
  }, [dataForecast]);

  const getAdvancedOneDay = useMemo(() => {
    const anvancedData = getAdvancedTenDaysData();
    if (!anvancedData?.length) return null;

    return anvancedData[0];
  }, [getAdvancedTenDaysData]);

  return {
    getCurrentData,
    getTodayData,
    getTomorrowData,
    getYesterdayData,
    getWeekData,
    getWeekendData,
    getTimeLineData,
    getTenDaysData,
    getAdvancedTenDaysData,
    getAdvancedOneDay,
  };
};

export default useServices;
