import axios from "axios";
import { useEffect, useState } from "react";
type API = {
  hourly: {
    time: string[];
    uv_index: number[];
    grass_pollen: number[];
  };
};

function useAirQuality() {
  const [dataAirQuality, setData] = useState<API | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await axios.get(
          "https://air-quality-api.open-meteo.com/v1/air-quality?latitude=53.9&longitude=27.56&hourly=uv_index,grass_pollen&past_days=1&forecast_days=7",
        );
        setData(res.data);
      } catch (error) {
        console.error("Ошибка при загрузке погоды:", error);
      }
    };

    fetchWeather();
  }, []);

  return { dataAirQuality };
}

export default useAirQuality;
