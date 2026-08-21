import axios from "axios";
import { useEffect, useState } from "react";
import type { apiArhive } from "@ts/api";

function useArhive() {
  const [dataArhive, setData] = useState<apiArhive | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await axios.get(
          "https://archive-api.open-meteo.com/v1/archive?latitude=53.9&longitude=27.56&start_date=2025-01-01&end_date=2025-12-31&daily=temperature_2m_mean,weather_code",
        );
        setData(res.data);
      } catch (error) {
        console.error("Ошибка при загрузке погоды:", error);
      }
    };

    fetchWeather();
  }, []);

  return { dataArhive };
}

export default useArhive;
