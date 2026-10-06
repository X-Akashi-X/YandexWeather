import type { DataLeftItems, DataRightItems } from "@ts/props";

export const getDataLeftItemConfig = ({
  currentTemperature,
  currentWindSpeed,
}: DataLeftItems) => {
  return [
    {
      title: "Температура",
      forecastText: `${currentTemperature}°`,
      id: "Температура",
    },
    { title: "Ветер", forecastText: `${currentWindSpeed} м/с`, id: "Ветер" },
  ];
};

export const getDataRightItemConfig = ({
  currentHumidity,
  currentUVIndex,
}: DataRightItems) => {
  return [
    {
      title: "Влажность",
      forecastText: `${currentHumidity}%`,
      id: "Влажность",
    },
    {
      title: "УФ-индекс",
      forecastText: `${currentUVIndex}/11`,
      id: "УФ-индекс",
    },
  ];
};
