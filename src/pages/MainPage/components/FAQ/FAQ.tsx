import { useState } from "react";
import styles from "./FAQ.module.scss";
import Arrow from "@assets/icons/arrowMore.svg";
import useServices from "@services/useServices";

const FAQ = () => {
  const { getCurrentData, getTodayData, getAdvancedOneDayData } = useServices();

  const {
    currentTemperature,
    currentApparentTemperature,
    currentWindSpeed,
    currentWindDirection,
    currentHumidity,
    currentPressure,
    currentWeatherInfo,
  } = getCurrentData;

  const {
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
  } = getTodayData;

  const { morning, day, evening, night } = getAdvancedOneDayData;

  const [activeItem, setActiveItem] = useState<string | null>(null);

  function toggleDropdown(id: string | null) {
    setActiveItem((prev) => (prev === id ? null : id));
  }

  return (
    <section className={styles.section_wrapper}>
      <h3>FAQ</h3>
      <div className={styles.main_wrapper}>
        <div className={styles.column}>
          <div
            className={styles.faq_items}
            onClick={() => toggleDropdown("weather")}
          >
            <div className={styles.title_wrapper}>
              <p>Какая погода в Минске?</p>
              <img
                src={Arrow}
                alt="Стрелка"
                className={activeItem === "weather" ? "rotate180" : ""}
              />
            </div>
            {activeItem === "weather" && (
              <p>
                Сейчас в Минске {currentWeatherInfo}, температура воздуха{" "}
                {currentTemperature}°, ощущается как{" "}
                {currentApparentTemperature}
                °. Ветер {currentWindSpeed} м/с, {currentWindDirection},
                влажность {currentHumidity}%, атмосферное давление{" "}
                {currentPressure} мм рт. ст. Сегодня: {todayMinTemperature}...
                {todayMaxTemperature}°, {todayPrecipitationProbability},{" "}
                {todayWindCategory} {todayMinMaxWindSpeed} м/с, порывы до{" "}
                {todayWindGusts} м/с.
              </p>
            )}
          </div>
          <div
            className={styles.faq_items}
            onClick={() => toggleDropdown("temp")}
          >
            <div className={styles.title_wrapper}>
              <p>Сколько градусов в Минске?</p>
              <img
                src={Arrow}
                alt="Стрелка"
                className={activeItem === "temp" ? "rotate180" : ""}
              />
            </div>
            {activeItem === "temp" && (
              <p>
                Сейчас в Минске температура воздуха {currentTemperature}°.
                Ощущается как {currentApparentTemperature}°,
                {currentWeatherInfo}. Температура утром{" "}
                {morning.advancedTemperature}°, днем {day.advancedTemperature}
                °, вечером {evening.advancedTemperature}°, ночью{" "}
                {night.advancedTemperature}°.
              </p>
            )}
          </div>
        </div>
        <div className={styles.column}>
          <div
            className={styles.faq_items}
            onClick={() => toggleDropdown("wind")}
          >
            <div className={styles.title_wrapper}>
              <p>Какая скорость направления ветра в минске?</p>
              <img
                src={Arrow}
                alt="Стрелка"
                className={activeItem === "wind" ? "rotate180" : ""}
              />
            </div>
            {activeItem === "wind" && (
              <p>
                Скорость ветра в Минске сейчас {currentWindSpeed} м/с,{" "}
                {currentWindDirection}. Утром ветер {morning.advancedWindSpeed}{" "}
                м/с, {morning.advancedWindDirectionText}, днем{" "}
                {day.advancedWindSpeed} м/с, {day.advancedWindDirectionText},
                вечером {evening.advancedWindSpeed} м/с,{" "}
                {evening.advancedWindDirectionText}, ночью{" "}
                {night.advancedWindSpeed} м/с, {night.advancedWindDirectionText}
                . Атмосферное давление {todayMinPressure}-{todayMaxPressure} мм
                рт. ст., влажность {todayMinHumidity}-{todayMaxHumidity}%, что
                также влияет на ощущение погоды.
              </p>
            )}
          </div>
          <div
            className={styles.faq_items}
            onClick={() => toggleDropdown("currentHumidity")}
          >
            <div className={styles.title_wrapper}>
              <p>Какая влажность воздуха в Минске?</p>
              <img
                src={Arrow}
                alt="Стрелка"
                className={activeItem === "currentHumidity" ? "rotate180" : ""}
              />
            </div>
            {activeItem === "currentHumidity" && (
              <p>
                Сейчас влажность воздуха в Минске составляет {currentHumidity}%.
                Уровень влажности утром {morning.advancedHumidity}%, днем{" "}
                {day.advancedHumidity}%, вечером {evening.advancedHumidity}%,
                ночью {night.advancedHumidity}%.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
