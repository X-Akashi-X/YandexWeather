import axios from "axios";
import { useEffect, useState } from "react";
import type { apiForecast } from "@ts/api";

function useForecast() {
  const [dataForecast, setData] = useState<apiForecast | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await axios.get(
          "https://api.open-meteo.com/v1/forecast?latitude=53.9&longitude=27.56&timezone=auto&language=ru&past_days=1&forecast_days=14&current=temperature_2m,weather_code,precipitation,apparent_temperature,wind_speed_10m,wind_direction_10m,wind_gusts_10m,pressure_msl,relative_humidity_2m&hourly=temperature_2m,weather_code,precipitation,precipitation_probability,apparent_temperature,wind_speed_10m,wind_direction_10m,pressure_msl,relative_humidity_2m&daily=sunrise,sunset,temperature_2m_mean,temperature_2m_max,temperature_2m_min,weather_code,precipitation_sum,precipitation_probability_max,wind_speed_10m_max,wind_gusts_10m_max,wind_direction_10m_dominant,uv_index_max",
        );
        setData(res.data);
      } catch (error) {
        console.error("Ошибка при загрузке погоды:", error);
      }
    };

    fetchWeather();
  }, []);

  return { dataForecast };
}

export default useForecast;
