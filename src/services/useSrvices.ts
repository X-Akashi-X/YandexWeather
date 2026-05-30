import useHttp from "../hooks/useHttp";

const useServices = () => {
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

  const getCurrentApparent = (): number => {
    return data?.current.apparent_temperature;
  };

  const getCurrentWindSpeed = (): number => {
    return data?.current.wind_speed_10m;
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

  return {
    getCurrentWeatherCode,
    getCurrentWindDirection,
    getCurrentTemperature,
    getCurrentApparent,
    getCurrentWindSpeed,
    getCurrentPressure,
    getCurrentHumidity,
    getHourlyTemperaturePrev,
    getDailyRainChance,
  };
};

export default useServices;
