export type apiForecast = {
  current: {
    time: string;
    temperature_2m: number;
    weather_code: number;
    precipitation: number;
    apparent_temperature: number;
    wind_speed_10m: number;
    wind_direction_10m: number;
    wind_gusts_10m: number;
    pressure_msl: number;
    relative_humidity_2m: number;
  };
  hourly: {
    time: string[];
    temperature_2m: number[];
    weather_code: number[];
    precipitation: number[];
    precipitation_probability: number[];
    apparent_temperature: number[];
    wind_speed_10m: number[];
    wind_direction_10m: number[];
    pressure_msl: number[];
    relative_humidity_2m: number[];
  };
  daily: {
    time: string[];
    temperature_2m_mean: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    weather_code: number[];
    precipitation_sum: number[];
    precipitation_probability_max: number[];
    wind_speed_10m_max: number[];
    wind_gusts_10m_max: number[];
    wind_direction_10m_dominant: number[];
    uv_index_max: number[];
    sunset: number[];
    sunrise: number[];
  };
};

export type apiAirQuality = {
  hourly: {
    time: string[];
    uv_index: number[];
    grass_pollen: number[];
  };
};
