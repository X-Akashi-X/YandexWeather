import { getAvgWeatherCode } from "@utils/weatherEffects";
import useAirQuality from "../hooks/useAirQuality";
import useForecast from "../hooks/useForecast";
import type { PeriodData, DayGroups } from "@ts/weather";

const useServices = () => {
  const { dataForecast } = useForecast();
  const { dataAirQuality } = useAirQuality();

  const getCurrentData = () => {
    if (!dataForecast?.current || !dataAirQuality?.current) return null;

    return {
      weatherCode: dataForecast.current.weather_code,
      windDirection: dataForecast.current.wind_direction_10m,
      temperature: Math.floor(dataForecast.current.temperature_2m),
      apparentTemperature: Math.floor(
        dataForecast.current.apparent_temperature,
      ),
      windSpeed: Math.floor(dataForecast.current.wind_speed_10m / 3.6),
      windGusts: Math.floor(dataForecast.current.wind_gusts_10m / 3.6),
      pressure: Math.floor(dataForecast.current.pressure_msl * 0.75006),
      humidity: dataForecast.current.relative_humidity_2m,
      uvIndex: Math.floor(dataAirQuality.current.uv_index),
      pollen: dataAirQuality.current.grass_pollen,
    };
  };

  const getTodayData = () => {
    if (!dataForecast?.daily) return null;

    return {
      minTemperature: Math.floor(dataForecast.daily.temperature_2m_min[1]),
      maxTemperature: Math.floor(dataForecast.daily.temperature_2m_max[1]),
      rainChance: dataForecast.daily.precipitation_probability_max[1],
    };
  };

  const getTomorrowData = () => {
    if (!dataForecast?.daily) return null;

    return {
      weatherCode: dataForecast.daily.weather_code[2],
      minTemperature: Math.floor(dataForecast.daily.temperature_2m_min[2]),
      maxTemperature: Math.floor(dataForecast.daily.temperature_2m_max[2]),
      windSpeed: Math.floor(dataForecast.daily.wind_speed_10m_max[2] / 3.6),
      windGusts: Math.floor(dataForecast.daily.wind_gusts_10m_max[2] / 3.6),
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
      YesterdayCurrentTemp: Math.floor(
        dataForecast.hourly.temperature_2m[indexCurrentMoment],
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

    return {
      minTemperature: avgDetails(dataForecast.daily.temperature_2m_min),
      maxTemperature: avgDetails(dataForecast.daily.temperature_2m_max),
      windSpeed: avgDetails(dataForecast.daily.wind_speed_10m_max),
      windGusts: avgDetails(dataForecast.daily.wind_gusts_10m_max),
      weatherCode: getAvgWeatherCode(
        dataForecast.daily.weather_code.slice(1, 8),
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
        windSpeed: Math.floor(dataForecast.daily.wind_speed_10m_max[i] / 3.6),
        windGusts: Math.floor(dataForecast.daily.wind_gusts_10m_max[i] / 3.6),
        weatherCode: dataForecast.daily.weather_code[i],
      }))
      .filter((d) => {
        const day = new Date(d.date).getDay();
        return day === 6 || day === 0;
      })
      .slice(0, 2);
    return {
      minTemperature: Math.floor(
        weekendDays.reduce((sum, d) => sum + d.minTemp, 0) / 2,
      ),
      maxTemperature: Math.floor(
        weekendDays.reduce((sum, d) => sum + d.maxTemp, 0) / 2,
      ),
      windSpeed: Math.floor(
        weekendDays.reduce((sum, d) => sum + d.windSpeed, 0) / 2,
      ),
      windGusts: Math.floor(
        weekendDays.reduce((sum, d) => sum + d.windGusts, 0) / 2,
      ),
      weatherCode: weekendDays[0].weatherCode,
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
        date: t.split("T")[0],
        time: t.split("T")[1].slice(0, 5),
        temp: dataForecast.hourly.temperature_2m[i],
        weatherCode: dataForecast.hourly.weather_code[i],
      }));
  };

  const getTenDaysData = () => {
    if (!dataForecast?.daily?.time) return null;

    const value = dataForecast.daily.time.slice(1, 11);

    return value.map((t, i) => ({
      date: new Date(t).getDate(),
      weekday: new Date(t).toLocaleString("ru-Ru", { weekday: "short" }),
      temp_max: Math.floor(dataForecast.daily.temperature_2m_max[i + 1]),
      temp_min: Math.floor(dataForecast.daily.temperature_2m_min[i + 1]),
      weatherCode: dataForecast.daily.weather_code[i + 1],
    }));
  };

  const getAdvancedTenDaysData = () => {
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
        windSpeed: Math.floor(dataForecast.hourly.wind_speed_10m[i] / 3.6),
        windDeg: dataForecast.hourly.wind_direction_10m[i],
        humidity: dataForecast.hourly.relative_humidity_2m[i],
        pressure: Math.floor(dataForecast.hourly.pressure_msl[i] * 0.75006),
        weatherCode: dataForecast.hourly.weather_code[i],
      };

      if (hour >= 6 && hour < 12) groupedDays[dateKey].morning.push(hourData);
      if (hour >= 12 && hour < 18) groupedDays[dateKey].day.push(hourData);
      if (hour >= 18 && hour < 24) groupedDays[dateKey].evening.push(hourData);
      if (hour >= 0 && hour < 6) {
        const prevDate = new Date(timeStr);
        prevDate.setDate(prevDate.getDate() - 1);

        const prevDateKey = prevDate.toLocaleString("sv-SE");

        if (groupedDays[prevDateKey]) {
          groupedDays[prevDateKey].night.push(hourData);
        }
      }
    });

    const datesKeys = Object.keys(groupedDays);

    const averageData = (periodArr: PeriodData[]) => {
      if (!periodArr?.length) return null;

      const count = periodArr.length;

      const arr = periodArr.map((item) => item.weatherCode);

      const sum = periodArr.reduce(
        (acc, curr) => ({
          temp: acc.temp + curr.temp,
          feels: acc.feels + curr.feels,
          windSpeed: acc.windSpeed + curr.windSpeed,
          windDeg: acc.windDeg + curr.windDeg,
          humidity: acc.humidity + curr.humidity,
          pressure: acc.pressure + curr.pressure,
        }),
        {
          temp: 0,
          feels: 0,
          windSpeed: 0,
          windDeg: 0,
          humidity: 0,
          pressure: 0,
        },
      );

      return {
        temperature: Math.floor(sum.temp / count),
        apparentTemperature: Math.floor(sum.feels / count),
        windSpeed: Math.floor(sum.windSpeed / count),
        windDirection: Math.floor(sum.windDeg / count),
        humidity: Math.floor(sum.humidity / count),
        pressure: Math.floor(sum.pressure / count),
        weatherCode: getAvgWeatherCode(arr),
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

    function isStringArray(value: unknown): value is string[] {
      return (
        Array.isArray(value) && value.length > 0 && typeof value[0] === "string"
      );
    }

    function getSunDay(targetDate: string) {
      if (!dataForecast?.daily) return null;

      const { time, sunset, sunrise } = dataForecast.daily;

      if (
        isStringArray(time) &&
        isStringArray(sunset) &&
        isStringArray(sunrise)
      ) {
        const index = time.indexOf(targetDate);

        if (index !== -1) {
          const sunDayData =
            new Date(sunset[index]).getTime() -
            new Date(sunrise[index]).getTime();
          const totalMinutes = Math.floor(sunDayData / (1000 * 60));
          const hours = Math.floor(totalMinutes / 60);
          const minutes = totalMinutes % 60;

          return `${hours} ч ${minutes} мин`;
        }
      }
      return "-";
    }

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
        date: new Date(date).toLocaleString("ru-Ru", {
          day: "numeric",
          month: "long",
        }),
        weekday: new Date(date).toLocaleDateString("ru-RU", {
          weekday: "long",
        }),
        morning: averageData(dayData.morning),
        day: averageData(dayData.day),
        evening: averageData(dayData.evening),
        night: averageData(dayData.night),
        avgWaterTemp: typeof avgTemp === "number" ? Math.floor(avgTemp) : null,
        avgUV: typeof avgUV === "number" ? Math.floor(avgUV) : null,
        sunrise: typeof sunrise === "string" ? sunrise.split("T")[1] : null,
        sunset: typeof sunset === "string" ? sunset.split("T")[1] : null,
        sunDay: sunDay,
      };
    });

    return forecast.slice(1, 11);
  };

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
  };
};

export default useServices;
