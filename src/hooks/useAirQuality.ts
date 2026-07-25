import axios from "axios";
import { useEffect, useState } from "react";
import type { apiAirQuality } from "@ts/api";

function useAirQuality() {
  const [dataAirQuality, setData] = useState<apiAirQuality | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await axios.get(
          "https://air-quality-api.open-meteo.com/v1/air-quality?latitude=53.9&longitude=27.56&current=uv_index,grass_pollen&forecast_days=1",
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
