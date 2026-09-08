import styles from "./detailedForecast.module.scss";
import useServices from "@services/useServices";
import WIndDirectionArrow from "@components/WindDirectionArrow/WIndDirectionArrow";
import { Link } from "react-router-dom";
import { SATURDAY, SUNDAY, TODAY, TOMORROW } from "@constants/daysCodes";
import { Humidity, LightArc, Pressure, Sunrise, Sunset, WaterTemp } from ".";

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
          return (
            <Link to="/" className={styles.main_wrapper} key={advancedDateKey}>
              <div className={styles.grid_forecast_wrapper}>
                <h3
                  className={`${styles.forecast_date_gr} ${styles.title_date} ${advancedWeekend === SATURDAY || advancedWeekend === SUNDAY ? styles.weekend_day : ""}`}
                >
                  {i === TODAY
                    ? "Сегодня"
                    : i === TOMORROW
                      ? "Завтра"
                      : advancedWeekday}
                  , <span className={styles.advanced_date}>{advancedDate}</span>
                </h3>
                <div
                  className={`${styles.category_title} small_grey_text`}
                >
                  ощущается
                </div>
                <div className={`${styles.category_title} small_grey_text`}>
                  ветер, м/с
                </div>
                <div
                  className={`${styles.category_title} small_grey_text`}
                >
                  влажность
                </div>
                <div
                  className={`${styles.category_title} small_grey_text`}
                >
                  давление, мм рт. ст
                </div>
                {/*string 1*/}
                <div className={`${styles.time_of_day} small_grey_text`}>Утром</div>
                <div className={styles.temp_wrapper}>
                  <div className={styles.tmp_effect_wrapper}>
                    <p className={styles.temperature}>
                      {morning.advancedTemperature}°
                    </p>
                    <img
                      src={morning.advancedWeatherEffect}
                      alt={morning.advancedWeatherInfo}
                    />
                    <p className={`${styles.info} small_grey_text`}>
                      {morning.advancedWeatherInfo}
                    </p>
                  </div>
                </div>
                <div className={styles.apparent_wrapper}>
                  <p>{morning.advancedApparentTemperature}°</p>
                </div>
                <div className={styles.wind_wrapper}>
                  <div className={styles.wind_anvanced_wrapper}>
                    <p>{morning.advancedWindSpeed}</p>
                    <p className={styles.m_per_sec}>м/с</p>
                    <WIndDirectionArrow
                      windDirection={morning.advancedWindDirection}
                    />
                    <p className="small_grey_text">
                      {morning.advancedWindDirectionText}
                    </p>
                  </div>
                </div>
                <div className={styles.humidity_wrapper}>
                  {morning.advancedHumidity}%
                </div>
                <div className={styles.pressure_wrapper}>
                  {morning.advancedPressure}
                </div>
                {/*string 2*/}
                <div className="small_grey_text">Днём</div>
                <div className={styles.temp_wrapper}>
                  <div className={styles.tmp_effect_wrapper}>
                    <p className={styles.temperature}>
                      {day.advancedTemperature}°
                    </p>
                    <img
                      src={day.advancedWeatherEffect}
                      alt={day.advancedWeatherInfo}
                    />
                    <p className={`${styles.info} small_grey_text`}>
                      {day.advancedWeatherInfo}
                    </p>
                  </div>
                </div>
                <div className={styles.apparent_wrapper}>
                  <p>{day.advancedApparentTemperature}°</p>
                </div>
                <div className={styles.wind_wrapper}>
                  <div className={styles.wind_anvanced_wrapper}>
                    <p>{day.advancedWindSpeed}</p>
                    <p className={styles.m_per_sec}>м/с</p>
                    <WIndDirectionArrow
                      windDirection={day.advancedWindDirection}
                    />
                    <p className="small_grey_text">
                      {day.advancedWindDirectionText}
                    </p>
                  </div>
                </div>
                <div className={styles.humidity_wrapper}>
                  {day.advancedHumidity}%
                </div>
                <div className={styles.pressure_wrapper}>
                  {day.advancedPressure}
                </div>
                {/*string 3*/}
                <div className="small_grey_text">Вечером</div>
                <div className={styles.temp_wrapper}>
                  <div className={styles.tmp_effect_wrapper}>
                    <p className={styles.temperature}>
                      {evening.advancedTemperature}°
                    </p>
                    <img
                      src={evening.advancedWeatherEffect}
                      alt={evening.advancedWeatherInfo}
                    />
                    <p className={`${styles.info} small_grey_text`}>
                      {evening.advancedWeatherInfo}
                    </p>
                  </div>
                </div>
                <div className={styles.apparent_wrapper}>
                  <p>{evening.advancedApparentTemperature}°</p>
                </div>
                <div className={styles.wind_wrapper}>
                  <div className={styles.wind_anvanced_wrapper}>
                    <p>{evening.advancedWindSpeed}</p>
                    <p className={styles.m_per_sec}>м/с</p>
                    <WIndDirectionArrow
                      windDirection={evening.advancedWindDirection}
                    />
                    <p className="small_grey_text">
                      {evening.advancedWindDirectionText}
                    </p>
                  </div>
                </div>
                <div className={styles.humidity_wrapper}>
                  {evening.advancedHumidity}%
                </div>
                <div className={styles.pressure_wrapper}>
                  {evening.advancedPressure}
                </div>
                {/*string 4*/}
                <div className="small_grey_text">Ночью</div>
                <div className={styles.temp_wrapper}>
                  <div className={styles.tmp_effect_wrapper}>
                    <p className={styles.temperature}>
                      {night.advancedTemperature}°
                    </p>
                    <img
                      src={night.advancedWeatherEffect}
                      alt={night.advancedWeatherInfo}
                    />
                    <p className={`${styles.info} small_grey_text`}>
                      {night.advancedWeatherInfo}
                    </p>
                  </div>
                </div>
                <div className={styles.apparent_wrapper}>
                  <p>{evening.advancedApparentTemperature}°</p>
                </div>
                <div className={styles.wind_wrapper}>
                  <div className={styles.wind_anvanced_wrapper}>
                    <p>{night.advancedWindSpeed}</p>
                    <p className={styles.m_per_sec}>м/с</p>
                    <WIndDirectionArrow
                      windDirection={night.advancedWindDirection}
                    />
                    <p className="small_grey_text">
                      {night.advancedWindDirectionText}
                    </p>
                  </div>
                </div>
                <div className={styles.humidity_wrapper}>
                  {night.advancedHumidity}%
                </div>
                <div className={styles.pressure_wrapper}>
                  {night.advancedPressure}
                </div>
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
                  <div>
                    {advancedAvgUV}, {advancedUVCategory.text}
                  </div>
                  {/*string 4*/}
                  <div className="small_grey_text">Магнитное поле</div>
                  <div className={styles.air_quality_gr_str4}>
                    {advancedMagnteticField},{" "}
                    {advancedMagnteticFieldCategory.text ?? "спокойное"}
                  </div>
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
