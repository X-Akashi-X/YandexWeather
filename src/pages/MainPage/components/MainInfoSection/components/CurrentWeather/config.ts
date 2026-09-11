import type { CurrentWeatherEffectDetails } from "@ts/props";
import { Humidity, Pressure, WaterTemp, WindSpeed } from ".";
export const getEffectDetailsConfig = ({
  currentHumidity,
  currentPressure,
  currentWaterTemperature,
  currentWindDirection,
  currentWindSpeed,
}: CurrentWeatherEffectDetails) => {
  return [
    {
      icon: WindSpeed,
      text: `${currentWindSpeed} м/с, ${currentWindDirection}`,
      alt: "Скорость ветра",
      id: "windSpeed",
    },
    {
      icon: Pressure,
      text: `${currentPressure}`,
      alt: "Давление",
      id: "pressure",
    },
    {
      icon: Humidity,
      text: `${currentHumidity}%`,
      alt: "Влажность",
      id: "humidity",
    },
    {
      icon: WaterTemp,
      text: `${currentWaterTemperature}°`,
      alt: "Температура воды",
      id: "waterTemp",
    },
  ];
};
