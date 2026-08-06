import { useState } from "react";
import styles from "./FAQ.module.scss";
import Arrow from "@assets/icons/arrowMore.svg";
import useServices from "@services/useSrvices";
import {
  getRainChance,
  getWeatherInfo,
  getWindCategory,
  getWindDirection,
} from "@utils/weatherEffects";

const FAQ = () => {
  const {
    temperature,
    apparentTemperature,
    windSpeed,
    windDirection,
    windGusts,
    humidity,
    pressure,
    weatherCode,
  } = useServices().getCurrentData() || {};
  const { minTemperature, maxTemperature, rainChance } =
    useServices().getTodayData() || {};
  if (
    !weatherCode ||
    !temperature ||
    !apparentTemperature ||
    !windDirection ||
    !rainChance
  )
    return null;
  const info = getWeatherInfo(weatherCode);
  const direction = getWindDirection(windDirection);
  const precipitation = getRainChance(rainChance);

  const [activeItem, setActiveItem] = useState<string | null>(null);

  function togleDropdown(id: string | null) {
    setActiveItem((prev) => (prev === id ? null : id));
  }

  return (
    <section className={styles.section_wrapper}>
      <h3>FAQ</h3>
      <div className={styles.main_wrapper}>
        <div className={styles.column}>
          <div
            className={styles.faq_items}
            onClick={() => togleDropdown("weather")}
          >
            <div className={styles.title_wrapper}>
              <p>Какая погода в Минске?</p>
              <img src={Arrow} alt="" />
            </div>
            {activeItem === "weather" && (
              <p>
                Сейчас в Минске {info}, температура воздуха{" "}
                {temperature > 0 ? `+${temperature}` : temperature}°, ощущается
                как{" "}
                {apparentTemperature > 0
                  ? `+${apparentTemperature}`
                  : apparentTemperature}
                °. Ветер {windSpeed} м/с, {direction}, влажность {humidity}%,
                атмосферное давление {pressure} мм рт. ст. Сегодня:{" "}
                {precipitation}, {}
              </p>
            )}
          </div>
          <div
            className={styles.faq_items}
            onClick={() => togleDropdown("temp")}
          >
            <div className={styles.title_wrapper}>
              <p>Сколько градусов в Минске?</p>
              <img src={Arrow} alt="" />
            </div>
            {activeItem === "temp" && (
              <p>
                Сейчас в Минске температура воздуха +20°. Ощущается как +20°,
                облачно с прояснениями. Температура утром +15°, днем +19°,
                вечером +18°, ночью +13°.
              </p>
            )}
          </div>
        </div>
        <div className={styles.column}>
          <div
            className={styles.faq_items}
            onClick={() => togleDropdown("wind")}
          >
            <div className={styles.title_wrapper}>
              <p>Какая скорость направления ветра в минске?</p>
              <img src={Arrow} alt="" />
            </div>
            {activeItem === "wind" && (
              <p>
                Скорость ветра в Минске сейчас 3 м/с, З. Утром ветер 5,6 м/с, З,
                днем 6,1 м/с, З, вечером 5,8 м/с, З, ночью 4 м/с, З. Атмосферное
                давление 737 - 741 мм рт. ст., влажность 59 - 77%, что также
                влияет на ощущение погоды.
              </p>
            )}
          </div>
          <div
            className={styles.faq_items}
            onClick={() => togleDropdown("humidity")}
          >
            <div className={styles.title_wrapper}>
              <p>Какая влажность воздуха в Минске?</p>
              <img src={Arrow} alt="" />
            </div>
            {activeItem === "humidity" && (
              <p>
                Сейчас влажность воздуха в Минске составляет 72%. Уровень
                влажности утром 77%, днем 59%, вечером 60%, ночью 76%.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
