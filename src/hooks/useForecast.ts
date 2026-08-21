import axios from "axios";
import { useEffect, useState } from "react";
import type { ApiForecast } from "@ts/api";

function useForecast() {
  const [dataForecast, setData] = useState<ApiForecast | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await axios.get(
          "https://api.open-meteo.com/v1/forecast?latitude=53.9&longitude=27.56&daily=daylight_duration,moon_phase,relative_humidity_2m_max,relative_humidity_2m_min,surface_pressure_max,surface_pressure_min,wind_speed_10m_min,temperature_2m_max,temperature_2m_min,temperature_2m_mean,weather_code,precipitation_probability_max,wind_speed_10m_max,wind_gusts_10m_max,wind_direction_10m_dominant,uv_index_max,sunrise,sunset,wind_speed_10m_mean,wind_gusts_10m_mean&hourly=temperature_2m,weather_code,precipitation_probability,apparent_temperature,wind_speed_10m,wind_direction_10m,relative_humidity_2m,surface_pressure&current=surface_pressure,temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,wind_direction_10m,wind_gusts_10m,precipitation,weather_code&past_days=1&forecast_days=14&wind_speed_unit=ms",
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
