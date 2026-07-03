import useHttp from "../hooks/useHttp";

const useServices = () => {
  const { data } = useHttp();

  const getCurrentWeatherCode = (): number | undefined => {
    return data?.current.weather_code;
  };

  const getCurrentWindDirection = (): number | undefined => {
    return data?.current.wind_direction_10m;
  };

  const getCurrentTemperature = (): number | undefined => {
    return data?.current.temperature_2m;
  };

  const getCurrentMinTemperature = (): number | undefined => {
    return data?.daily.temperature_2m_min[1];
  };

  const getCurrentMaxTemperature = (): number | undefined => {
    return data?.daily.temperature_2m_max[1];
  };

  const getCurrentApparent = (): number | undefined => {
    return data?.current.apparent_temperature;
  };

  const getCurrentWindSpeed = (): number => {
    return data?.current.wind_speed_10m ?? 0;
  };

  const getCurrentWindGusts = (): number => {
    return data?.current.wind_gusts_10m ?? 0;
  };

  const getCurrentPressure = (): number | undefined => {
    return data?.current.pressure_msl;
  };

  const getCurrentHumidity = (): number | undefined => {
    return data?.current.relative_humidity_2m;
  };

  const getHourlyTemperaturePrev = (): number | undefined => {
    return data?.hourly.temperature_2m[10];
  };

  const getDailyRainChance = (): number | undefined => {
    return data?.daily.precipitation_probability_max[1];
  };

  const getTomorrowWeatherCode = (): number | undefined => {
    return data?.daily.weather_code[2];
  };

  const getTomorrowMinTemperature = (): number | undefined => {
    return data?.daily.temperature_2m_min[2];
  };

  const getTomorrowMaxTemperature = (): number | undefined => {
    return data?.daily.temperature_2m_max[2];
  };

  const getTomorrowWindSpeed = (): number => {
    return data?.daily.wind_speed_10m_max[2] ?? 0 / 3.6;
  };

  const getTomorrowWindGusts = (): number => {
    return data?.daily.wind_gusts_10m_max[2] ?? 0 / 3.6;
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
      weekMin: value(data?.daily.temperature_2m_min),
      weekMax: value(data?.daily.temperature_2m_max),
      weekSpeed: value(data?.daily.wind_speed_10m_max),
      weekEffect: value(data?.daily.weather_code),
      weekGusts: value(data?.daily.wind_gusts_10m_max),
    };
  };

  const getWeekendData = () => {
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

    if (!data?.hourly?.time) return null;

    return data.hourly.time
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
        temp: data.hourly.temperature_2m[i],
        effect: data.hourly.weather_code[i],
      }));
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
    getTimeLineData,
  };
};

export default useServices;
