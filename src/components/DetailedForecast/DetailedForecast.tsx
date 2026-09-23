import styles from "./detailedForecast.module.scss";
import useServices from "@services/useServices";
import { Link } from "react-router-dom";
import { SATURDAY, SUNDAY} from "@constants/daysCodes";
import { Humidity, LightArc, Pressure, Sunrise, Sunset, WaterTemp } from ".";
import TimeOfDayForecast from "./components/TimeOfDayForecast/TimeOfDayForecast";
import { getTimeOfDayForecastConfig } from "./config";
import {
  getDetailedItemAttributes,
  getDetailedItemDayLabel,
} from "@utils/formatters";

const DetailedForecast = () => {
  const { getAdvancedTenDaysData } = useServices();

  return (
    <section className={styles.section_wrapper}>
      {getAdvancedTenDaysData.map(
        (
          {
            morning,
            day,
            evening,
            night,
            advancedAvgUV,
            advancedUVCategory,
            advancedWeekday,
            advancedDate,
            advancedWeekend,
            advancedAvgWaterTemp,
            advancedSunDay,
            advancedSunrise,
            advancedSunset,
            advancedMagnteticField,
            advancedMagnteticFieldCategory,
            advancedMoonPhase,
            advancedAvgHumidity,
            advancedAvgPressure,
            advancedDateKey,
          },
          i,
        ) => {
          const timeOfDayForecast = getTimeOfDayForecastConfig({
            morning,
            day,
            evening,
            night,
          });

          const itemAttributes = getDetailedItemAttributes(i, advancedWeekend);

          return (
            <Link to="/" className={styles.main_wrapper} key={advancedDateKey}>
              <div {...itemAttributes} className={styles.grid_forecast_wrapper}>
                <h3
                  className={`${styles.forecast_date_gr} ${styles.title_date} ${advancedWeekend === SATURDAY || advancedWeekend === SUNDAY ? styles.weekend_day : ""}`}
                >
                  {getDetailedItemDayLabel(i, advancedWeekday)},{" "}
                  <span className={styles.advanced_date}>{advancedDate}</span>
                </h3>
                <div className={`${styles.category_title} small_grey_text`}>
                  ощущается
                </div>
                <div className={`${styles.category_title} small_grey_text`}>
                  ветер, м/с
                </div>
                <div className={`${styles.category_title} small_grey_text`}>
                  влажность
                </div>
                <div className={`${styles.category_title} small_grey_text`}>
                  давление, мм рт. ст
                </div>
                {timeOfDayForecast.map(
                  ({
                    timeOfDay,
                    temp,
                    effect,
                    info,
                    apparentTemp,
                    windSpeed,
                    windDirection,
                    windDirectionText,
                    humidity,
                    pressure,
                  }) => (
                    <TimeOfDayForecast
                      timeOfDay={timeOfDay}
                      temp={temp}
                      effect={effect}
                      info={info}
                      apparentTemp={apparentTemp}
                      windSpeed={windSpeed}
                      windDirection={windDirection}
                      windDirectionText={windDirectionText}
                      humidity={humidity}
                      pressure={pressure}
                      key={timeOfDay}
                    />
                  ),
                )}
              </div>
              {/*Line*/}
              <div className={styles.line_y} />
              <div className={styles.line_x} />
              <div
                className={`${styles.atmosphere_indicators} small_grey_text`}
              >
                <div className={styles.atmosphere_indicators_item}>
                  <img src={Humidity} alt="Влажность" />
                  <p>{advancedAvgHumidity}%</p>
                </div>
                <div className={styles.atmosphere_indicators_item}>
                  <img src={Pressure} alt="Давление" />
                  <p>{advancedAvgPressure} мм рт. ст.</p>
                </div>
              </div>
              {/*airQuality*/}
              <div className={styles.air_quality_wrapper}>
                <div className={styles.sunday_wrapper}>
                  <img className={styles.light_arc} src={LightArc} alt="Арка" />
                  <div className={styles.under_arc_wrapper}>
                    <div className={styles.sun_and_time_wrapper}>
                      <img src={Sunrise} alt="Восход" />
                      <p>{advancedSunrise}</p>
                    </div>
                    <div className={styles.time_day_wrapper}>
                      <p className={"small_grey_text"}>Световой день</p>
                      <p>{advancedSunDay}</p>
                    </div>
                    <div>
                      <img src={Sunset} alt="Заход" />
                      <p>{advancedSunset}</p>
                    </div>
                  </div>
                </div>
                <div className={styles.grid_air_quality_wrapper}>
                  {/*string 1*/}
                  <div className="small_grey_text">t° воды</div>
                  <div className={styles.img_and_data_wrapper}>
                    <img src={WaterTemp} alt="Температура воды" />
                    <p>{advancedAvgWaterTemp}°</p>
                  </div>
                  {/*string 2*/}
                  <div className="small_grey_text">Фазы луны</div>
                  <div className={styles.img_and_data_wrapper}>
                    <img src={advancedMoonPhase.icon} alt="Фаза луны" />
                    <p>{advancedMoonPhase.text}</p>
                  </div>
                  {/*string 3*/}
                  <div className="small_grey_text">УФ-индекс</div>
                  <p>
                    {advancedAvgUV}, {advancedUVCategory.text}
                  </p>
                  {/*string 4*/}
                  <div className="small_grey_text">Магнитное поле</div>
                  <p>
                    {advancedMagnteticField},{" "}
                    {advancedMagnteticFieldCategory.text}
                  </p>
                </div>
              </div>
            </Link>
          );
        },
      )}
    </section>
  );
};

export default DetailedForecast;
