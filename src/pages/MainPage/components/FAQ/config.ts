import type {
  FAQAdvancedItems,
  FAQCurrentItems,
  FAQTodayItems,
} from "@ts/props";

export const getFAQItems = (
  {
    currentTemperature,
    currentApparentTemperature,
    currentWindSpeed,
    currentWindDirection,
    currentHumidity,
    currentPressure,
    currentWeatherInfo,
  }: FAQCurrentItems,
  {
    todayMinTemperature,
    todayMaxTemperature,
    todayPrecipitationProbability,
    todayMinMaxWindSpeed,
    todayWindGusts,
    todayMinHumidity,
    todayMaxHumidity,
    todayMinPressure,
    todayMaxPressure,
    todayWindCategory,
  }: FAQTodayItems,
  { morning, day, evening, night }: FAQAdvancedItems,
) => {
  return [
    {
      title: "Какая погода в Минске?",
      text: `Сейчас в Минске ${currentWeatherInfo}, температура воздуха${" "} 
      ${currentTemperature}°, ощущается как${" "} 
      ${currentApparentTemperature} 
      °. Ветер ${currentWindSpeed} м/с, ${currentWindDirection}, 
      влажность ${currentHumidity}%, атмосферное давление${" "} 
      ${currentPressure} мм рт. ст. Сегодня: ${todayMinTemperature}... 
      ${todayMaxTemperature}°, ${todayPrecipitationProbability},${" "} 
      ${todayWindCategory} ${todayMinMaxWindSpeed} м/с, порывы до${" "} 
      ${todayWindGusts} м/с.`,
      id: "weather",
    },
    {
      title: "Сколько градусов в Минске?",
      text: `Сейчас в Минске температура воздуха ${currentTemperature}°.
      Ощущается как ${currentApparentTemperature}°,
      ${currentWeatherInfo}. Температура утром${" "}
      ${morning.advancedTemperature}°, днем ${day.advancedTemperature}
      °, вечером ${evening.advancedTemperature}°, ночью${" "}
      ${night.advancedTemperature}°.`,
      id: "temp",
    },
    {
      title: "Какая скорость направления ветра в минске?",
      text: `Скорость ветра в Минске сейчас ${currentWindSpeed} м/с,${" "}
      ${currentWindDirection}. Утром ветер ${morning.advancedWindSpeed}${" "}
      м/с, ${morning.advancedWindDirectionText}, днем${" "}
      ${day.advancedWindSpeed} м/с, ${day.advancedWindDirectionText},
      вечером ${evening.advancedWindSpeed} м/с,${" "}
      ${evening.advancedWindDirectionText}, ночью${" "}
      ${night.advancedWindSpeed} м/с, ${night.advancedWindDirectionText}.
      Атмосферное давление ${todayMinPressure}-${todayMaxPressure} мм рт.
      ст., влажность ${todayMinHumidity}-${todayMaxHumidity}%, что также
      влияет на ощущение погоды.`,
      id: "wind",
    },
    {
      title: "Какая влажность воздуха в Минске?",
      text: `Сейчас влажность воздуха в Минске составляет ${currentHumidity}%.
      Уровень влажности утром ${morning.advancedHumidity}%, днем${" "}
      ${day.advancedHumidity}%, вечером ${evening.advancedHumidity}%,
      ночью ${night.advancedHumidity}%.`,
      id: "humidity",
    },
  ];
};
