import useAirQuality from "../hooks/useAirQuality";
import useForecast from "../hooks/useForecast";
import type { PeriodData, DayGroups } from "@ts/weather";

const useServices = () => {
  const { dataForecast } = useForecast();
  const { dataAirQuality } = useAirQuality();

  const getCurrentWeatherCode = (): number | undefined => {
    return dataForecast?.current.weather_code;
  };

  const getCurrentWindDirection = (): number | undefined => {
    return dataForecast?.current.wind_direction_10m;
  };

  const getCurrentTemperature = (): number | undefined => {
    return dataForecast?.current.temperature_2m;
  };

  const getCurrentMinTemperature = (): number | undefined => {
    return dataForecast?.daily.temperature_2m_min[1];
  };

  const getCurrentMaxTemperature = (): number | undefined => {
    return dataForecast?.daily.temperature_2m_max[1];
  };

  const getCurrentApparent = (): number | undefined => {
    return dataForecast?.current.apparent_temperature;
  };

  const getCurrentWindSpeed = (): number => {
    return dataForecast?.current.wind_speed_10m ?? 0;
  };

  const getCurrentWindGusts = (): number => {
    return dataForecast?.current.wind_gusts_10m ?? 0;
  };

  const getCurrentPressure = (): number | undefined => {
    const pressure = dataForecast?.current.pressure_msl;
    return pressure !== undefined ? pressure * 0.75006 : undefined;
  };

  const getCurrentHumidity = (): number | undefined => {
    return dataForecast?.current.relative_humidity_2m;
  };

  const getCurrentUVIndex = (): number | undefined => {
    return dataAirQuality?.current.uv_index;
  };

  const getCurrentPollen = (): number | undefined => {
    return dataAirQuality?.current.grass_pollen;
  };

  const getHourlyTemperaturePrev = (): number | undefined => {
    return dataForecast?.hourly.temperature_2m[10];
  };

  const getDailyRainChance = (): number | undefined => {
    return dataForecast?.daily.precipitation_probability_max[1];
  };

  const getTomorrowWeatherCode = (): number | undefined => {
    return dataForecast?.daily.weather_code[2];
  };

  const getTomorrowMinTemperature = (): number | undefined => {
    return dataForecast?.daily.temperature_2m_min[2];
  };

  const getTomorrowMaxTemperature = (): number | undefined => {
    return dataForecast?.daily.temperature_2m_max[2];
  };

  const getTomorrowWindSpeed = (): number => {
    return dataForecast?.daily.wind_speed_10m_max[2] ?? 0 / 3.6;
  };

  const getTomorrowWindGusts = (): number => {
    return dataForecast?.daily.wind_gusts_10m_max[2] ?? 0 / 3.6;
  };

  const getWeekData = () => {
    const value = (arg?: number[] | null) => {
      if (!Array.isArray(arg) || arg.length < 8) {
        return null;
      }

      const week = arg.slice(1, 8);

      const avgDetails = week.reduce((a, b) => a + b, 0) / week.length;

      const freq: Record<number, number> = {};
      for (const code of week) {
        freq[code] = (freq[code] || 0) + 1;
      }

      const entries = Object.entries(freq).sort((a, b) => b[1] - a[1]);
      const avgEffect = Number(entries[0][0]);

      return { avgDetails, avgEffect };
    };

    return {
      weekMin: value(dataForecast?.daily.temperature_2m_min),
      weekMax: value(dataForecast?.daily.temperature_2m_max),
      weekSpeed: value(dataForecast?.daily.wind_speed_10m_max),
      weekEffect: value(dataForecast?.daily.weather_code),
      weekGusts: value(dataForecast?.daily.wind_gusts_10m_max),
    };
  };

  const getWeekendData = () => {
    if (!dataForecast?.daily?.time) return null;

    return dataForecast.daily.time
      .map((date: string, i: number) => ({
        date,
        weekendMin: dataForecast.daily.temperature_2m_min[i],
        weekendMax: dataForecast.daily.temperature_2m_max[i],
        weekendSpeed: dataForecast.daily.wind_speed_10m_max[i] / 3.6,
        weekendEffect: dataForecast.daily.weather_code[i],
        weekendGusts: dataForecast.daily.wind_gusts_10m_max[i] / 3.6,
      }))
      .filter((d) => {
        const day = new Date(d.date).getDay();
        return day === 6;
      });
  };

  const getTimeLineData = () => {
    const now = new Date();
    const today = now.toISOString().split("T")[0];
    const tomorrowDate = new Date(now);
    tomorrowDate.setDate(now.getDate() + 1);
    const tomorrow = tomorrowDate.toISOString().split("T")[0];

    if (!dataForecast?.hourly?.time) return null;

    return dataForecast.hourly.time
      .map((t: string, i: number) => ({ t, i }))
      .filter(({ t }: { t: string }) => {
        const [date] = t.split("T");
        const itemDate = new Date(t);

        if (date === today && itemDate >= now) return true;
        if (date === tomorrow) return true;

        return false;
      })
      .map(({ t, i }: { t: string; i: number }) => ({
        date: t.split("T")[0],
        time: t.split("T")[1].slice(0, 5),
        temp: dataForecast.hourly.temperature_2m[i],
        weatherCode: dataForecast.hourly.weather_code[i],
      }));
  };

  const getTenDaysData = () => {
    if (!dataForecast?.daily?.time) return undefined;

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

    dataForecast?.hourly.time.forEach((timeStr, i) => {
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
    });

    const sortedDates = Object.keys(groupedDays).sort();
    for (let i = 0; i < sortedDates.length - 1; i++) {
      const currentTargetDate = sortedDates[i];
      const nextDate = sortedDates[i + 1];

      const nightData: PeriodData[] = [];
      dataForecast?.hourly.time.forEach((timeStr, i) => {
        if (timeStr.startsWith(nextDate)) {
          const hour = new Date(timeStr).getHours();
          if (hour >= 0 && hour < 6) {
            nightData.push({
              temp: Math.floor(dataForecast.hourly.temperature_2m[i]),
              feels: Math.floor(dataForecast.hourly.apparent_temperature[i]),
              windSpeed: Math.floor(
                dataForecast.hourly.wind_speed_10m[i] / 3.6,
              ),
              windDeg: dataForecast.hourly.wind_direction_10m[i],
              humidity: dataForecast.hourly.relative_humidity_2m[i],
              pressure: Math.floor(
                dataForecast.hourly.pressure_msl[i] * 0.75006,
              ),
              weatherCode: dataForecast.hourly.weather_code[i],
            });
          }
        }
      });

      groupedDays[currentTargetDate].night = nightData;
    }

    const averageData = (periodArr: PeriodData[]) => {
      if (!periodArr || !periodArr[0]) return null;

      const count = periodArr.length;

      const averageIndex = Math.floor(count / 2);
      const midlleEffect = periodArr[averageIndex].weatherCode;

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
        temp: Math.floor(sum.temp / count),
        feels: Math.floor(sum.feels / count),
        windSpeed: Math.floor(sum.windSpeed / count),
        windDeg: Math.floor(sum.windDeg / count),
        humidity: Math.floor(sum.humidity / count),
        pressure: Math.floor(sum.pressure / count),
        weatherCode: midlleEffect,
      };
    };

    type dailySource = {
      time: string[];
      [key: string]: string[] | number[] | undefined;
    };

    const getDailyData = (
      dailySource: dailySource,
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
      const { time, sunset, sunrise } = dataForecast?.daily || {};

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
        return "-";
      }
      return "-";
    }

    const forecast = sortedDates.map((date) => {
      const dayData = groupedDays[date];

      const avgTemp = getDailyData(
        dataForecast?.daily,
        "temperature_2m_mean",
        date,
      );
      const avgUV = getDailyData(dataForecast?.daily, "uv_index_max", date);
      const sunrise = getDailyData(dataForecast?.daily, "sunrise", date);
      const sunset = getDailyData(dataForecast?.daily, "sunset", date);
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
    getCurrentWeatherCode,
    getCurrentWindDirection,
    getCurrentTemperature,
    getCurrentMinTemperature,
    getCurrentMaxTemperature,
    getCurrentApparent,
    getCurrentWindSpeed,
    getCurrentWindGusts,
    getCurrentPressure,
    getCurrentHumidity,
    getCurrentUVIndex,
    getCurrentPollen,
    getHourlyTemperaturePrev,
    getDailyRainChance,
    getTomorrowWeatherCode,
    getTomorrowMinTemperature,
    getTomorrowMaxTemperature,
    getTomorrowWindSpeed,
    getTomorrowWindGusts,
    getWeekData,
    getWeekendData,
    getTimeLineData,
    getTenDaysData,
    getAdvancedTenDaysData,
  };
};

export default useServices;
