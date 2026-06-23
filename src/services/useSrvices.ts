import useHttp from "../hooks/useHttp";

const useServices = () => {
  interface WeekEffect {
    avgDetails: number;
    avgEffect: number;
  }

  interface WeekTemperature {
    weekMin: WeekEffect | null;
    weekMax: WeekEffect | null;
    weekSpeed: WeekEffect | null;
    weekEffect: WeekEffect | null;
    weekGusts: WeekEffect | null;
  }

  const { data } = useHttp();

  const getCurrentWeatherCode = (): number => {
    return data?.current.weather_code;
  };

  const getCurrentWindDirection = (): number => {
    return data?.current.wind_direction_10m;
  };

  const getCurrentTemperature = (): number => {
    return data?.current.temperature_2m;
  };

  const getCurrentMinTemperature = (): number => {
    return data?.daily.temperature_2m_min[1];
  };

  const getCurrentMaxTemperature = (): number => {
    return data?.daily.temperature_2m_max[1];
  };

  const getCurrentApparent = (): number => {
    return data?.current.apparent_temperature;
  };

  const getCurrentWindSpeed = (): number => {
    return data?.current.wind_speed_10m / 3.6;
  };

  const getCurrentWindGusts = (): number => {
    return data?.current.wind_gusts_10m / 3.6;
  };

  const getCurrentPressure = (): number => {
    return data?.current.pressure_msl;
  };

  const getCurrentHumidity = (): number => {
    return data?.current.relative_humidity_2m;
  };

  const getHourlyTemperaturePrev = (): number => {
    return data?.hourly.temperature_2m[10];
  };

  const getDailyRainChance = (): number => {
    return data?.daily.precipitation_probability_max[1];
  };

  const getTomorrowWeatherCode = (): number => {
    return data?.daily.weather_code[2];
  };

  const getTomorrowMinTemperature = (): number => {
    return data?.daily.temperature_2m_min[2];
  };

  const getTomorrowMaxTemperature = (): number => {
    return data?.daily.temperature_2m_max[2];
  };

  const getTomorrowWindSpeed = (): number => {
    return data?.daily.wind_speed_10m_max[2] / 3.6;
  };

  const getTomorrowWindGusts = (): number => {
    return data?.daily.wind_gusts_10m_max[2] / 3.6;
  };

  const getWeekData = (): WeekTemperature => {
    const value = (arg?: number[] | null): WeekEffect | null => {
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
      weekMin: value(data?.daily.temperature_2m_min),
      weekMax: value(data?.daily.temperature_2m_max),
      weekSpeed: value(data?.daily.wind_speed_10m_max),
      weekEffect: value(data?.daily.weather_code),
      weekGusts: value(data?.daily.wind_gusts_10m_max),
    };
  };

  //Убрать потом
  interface WeekendData {
    date: string;
    weekendMin: number;
    weekendMax: number;
    weekendSpeed: number;
    weekendEffect: number;
    weekendGusts: number;
  }
  const getWeekendData = (): WeekendData[] | null => {
    if (!data?.daily?.time) return null;

    return data.daily.time
      .map((date: string, i: number) => ({
        date,
        weekendMin: data.daily.temperature_2m_min[i],
        weekendMax: data.daily.temperature_2m_max[i],
        weekendSpeed: data.daily.wind_speed_10m_max[i] / 3.6,
        weekendEffect: data.daily.weather_code[i],
        weekendGusts: data.daily.wind_gusts_10m_max[i] / 3.6,
      }))
      .filter((d: WeekendData) => {
        const day = new Date(d.date).getDay();
        return day === 6;
      });
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
    getHourlyTemperaturePrev,
    getDailyRainChance,
    getTomorrowWeatherCode,
    getTomorrowMinTemperature,
    getTomorrowMaxTemperature,
    getTomorrowWindSpeed,
    getTomorrowWindGusts,
    getWeekData,
    getWeekendData,
  };
};

export default useServices;
