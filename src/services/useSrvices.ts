import useAirQuality from "../hooks/useAirQuality";
import useForecast from "../hooks/useForecast";

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
        effect: dataForecast.hourly.weather_code[i],
      }));
  };

  const getCurrentAirQuality = () => {
    if (!dataAirQuality?.hourly) return null;

    const now = new Date().toISOString().slice(0, 13) + ":00";
    const index = dataAirQuality?.hourly.time.indexOf(now);

    if (index === -1) return null;
    return {
      dataUV: dataAirQuality?.hourly.uv_index[index],
      dataPollen: dataAirQuality?.hourly.grass_pollen[index],
    };
  };

  const getTenDaysData = () => {
    if (!dataForecast?.daily?.time) return undefined;

    const value = dataForecast.daily.time.slice(1, 11);

    return value.map((t, i) => ({
      date: new Date(t).getDate(),
      weekday: new Date(t).toLocaleString("ru-Ru", { weekday: "short" }),
      temp_max: Math.floor(dataForecast.daily.temperature_2m_max[i + 1]),
      temp_min: Math.floor(dataForecast.daily.temperature_2m_min[i + 1]),
      effect: dataForecast.daily.weather_code[i + 1],
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
    getCurrentAirQuality,
    getTenDaysData,
  };
};

export default useServices;
