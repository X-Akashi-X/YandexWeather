import {
  getUVCategory,
  getWeatherEffect,
  getWindDirection,
} from "@utils/weatherEffects";
import styles from "./detailedForecast.module.scss";
import useServices from "@services/useSrvices";
import WIndDirectionArrow from "@components/WindDirectionArrow/WIndDirectionArrow";
import LightArc from "@assets/image/detailedForecast/lightingDayArc.svg";
import Sunrise from "@assets/icons/detailedForecast/sunriseIcon.svg";
import Sunset from "@assets/icons/detailedForecast/sunsetIcon.svg";
import WaterTemp from "@assets/icons/waterTempIcon.svg";

const DetailedForecast = () => {
  const data = useServices().getAdvancedTenDaysData();

  return (
    <section className={styles.section_wrapper}>
      {data.map((item, i) => {
        const {
          morning,
          day,
          evening,
          night,
          avgUV,
          weekday,
          date,
          avgWaterTemp,
          sunDay,
          sunrise,
          sunset,
        } = item;
        if (!morning || !day || !evening || !night || !avgUV || !avgWaterTemp)
          return null;

        const effectMorning = getWeatherEffect(morning.weatherCode);
        const effectDay = getWeatherEffect(day.weatherCode);
        const effectEvening = getWeatherEffect(evening.weatherCode);
        const effectNight = getWeatherEffect(night.weatherCode);

        const windDirectionMorning = getWindDirection(morning.windDirection);
        const windDirectionDay = getWindDirection(day.windDirection);
        const windDirectionEvening = getWindDirection(evening.windDirection);
        const windDirectionNight = getWindDirection(night.windDirection);

        const uvCategory = getUVCategory(avgUV);

        return (
          <div className={styles.main_wrapper} key={i}>
            <div className={styles.grid_forecast_wrapper}>
              <div
                className={`${styles.forecast_date_gr} ${styles.title_date}`}
              >
                {i === 0 ? "Сегодня" : i === 1 ? "Завтра" : weekday}, {date}
              </div>
              <div className={`${styles.forecast_feeling_gr} small_grey_text`}>
                ощущается
              </div>
              <div className={`${styles.forecast_wind_gr} small_grey_text`}>
                ветер, м/с
              </div>
              <div className={`${styles.forecast_humidity_gr} small_grey_text`}>
                влажность
              </div>
              <div className={`${styles.forecast_pressure_gr} small_grey_text`}>
                давление, мм рт. ст
              </div>
              {/*string 1*/}
              <div className={`${styles.forecast_gr_str1} small_grey_text`}>
                Утром
              </div>
              <div className={`${styles.forecast_gr_str1}`}>
                <div className={styles.tmp_effect_wrapper}>
                  <p>
                    {morning.temperature > 0
                      ? `+${morning.temperature}`
                      : `${morning.temperature}`}
                    °
                  </p>
                  <img src={effectMorning} alt="" />
                </div>
              </div>
              <div className={`${styles.forecast_gr_str1}`}>
                <p>
                  {morning.apparentTemperature > 0
                    ? `+${morning.apparentTemperature}`
                    : `${morning.apparentTemperature}`}
                  °
                </p>
              </div>
              <div className={`${styles.forecast_gr_str1}`}>
                <div className={styles.wind_wrapper}>
                  <p>{morning.windSpeed}</p>
                  <WIndDirectionArrow windDirection={morning.windDirection} />
                  <p className="small_grey_text">{windDirectionMorning}</p>
                </div>
              </div>
              <div className={`${styles.forecast_gr_str1}`}>
                {morning.humidity}%
              </div>
              <div className={`${styles.forecast_gr_str1}`}>
                {morning.pressure}
              </div>
              {/*string 2*/}
              <div className={`${styles.forecast_gr_str2} small_grey_text`}>
                Днём
              </div>
              <div className={`${styles.forecast_gr_str2}`}>
                <div className={styles.tmp_effect_wrapper}>
                  <p>
                    {day.apparentTemperature > 0
                      ? `+${day.apparentTemperature}`
                      : `${day.apparentTemperature}`}
                    °
                  </p>
                  <img src={effectDay} alt="" />
                </div>
              </div>
              <div className={`${styles.forecast_gr_str2}`}>
                <p>
                  {day.apparentTemperature > 0
                    ? `+${day.apparentTemperature}`
                    : `${day.apparentTemperature}`}
                  °
                </p>
              </div>
              <div className={`${styles.forecast_gr_str2}`}>
                <div className={styles.wind_wrapper}>
                  <p>{day.windSpeed}</p>
                  <WIndDirectionArrow windDirection={day.windDirection} />
                  <p className="small_grey_text">{windDirectionDay}</p>
                </div>
              </div>
              <div className={`${styles.forecast_gr_str2}`}>
                {day.humidity}%
              </div>
              <div className={`${styles.forecast_gr_str2}`}>{day.pressure}</div>
              {/*string 3*/}
              <div className={`${styles.forecast_gr_str3} small_grey_text`}>
                Вечером
              </div>
              <div className={`${styles.forecast_gr_str3}`}>
                <div className={styles.tmp_effect_wrapper}>
                  <p>
                    {evening.apparentTemperature > 0
                      ? `+${evening.apparentTemperature}`
                      : `${evening.apparentTemperature}`}
                    °
                  </p>
                  <img src={effectEvening} alt="" />
                </div>
              </div>
              <div className={`${styles.forecast_gr_str3}`}>
                <p>
                  {evening.apparentTemperature > 0
                    ? `+${evening.apparentTemperature}`
                    : `${evening.apparentTemperature}`}
                  °
                </p>
              </div>
              <div className={`${styles.forecast_gr_str3}`}>
                <div className={styles.wind_wrapper}>
                  <p>{evening.windSpeed}</p>
                  <WIndDirectionArrow windDirection={evening.windDirection} />
                  <p className="small_grey_text">{windDirectionEvening}</p>
                </div>
              </div>
              <div className={`${styles.forecast_gr_str3}`}>
                {evening.humidity}%
              </div>
              <div className={`${styles.forecast_gr_str3}`}>
                {evening.pressure}
              </div>
              {/*string 4*/}
              <div className={`${styles.forecast_gr_str4} small_grey_text`}>
                Ночью
              </div>
              <div className={`${styles.forecast_gr_str4}`}>
                <div className={styles.tmp_effect_wrapper}>
                  <p>
                    {night.apparentTemperature > 0
                      ? `+${night.apparentTemperature}`
                      : `${night.apparentTemperature}`}
                    °
                  </p>
                  <img src={effectNight} alt="" />
                </div>
              </div>
              <div className={`${styles.forecast_gr_str4}`}>
                <p>
                  {night.apparentTemperature > 0
                    ? `+${night.apparentTemperature}`
                    : `${night.apparentTemperature}`}
                  °
                </p>
              </div>
              <div className={`${styles.forecast_gr_str4}`}>
                <div className={styles.wind_wrapper}>
                  <p>{night.windSpeed}</p>
                  <WIndDirectionArrow windDirection={night.windDirection} />
                  <p className="small_grey_text">{windDirectionNight}</p>
                </div>
              </div>
              <div className={`${styles.forecast_gr_str4}`}>
                {night.humidity}%
              </div>
              <div className={`${styles.forecast_gr_str4}`}>
                {night.pressure}
              </div>
            </div>
            <div className={styles.air_quality_wrapper}>
              <img src={LightArc} alt="" />
              <div className={styles.under_arc_wrapper}>
                <div className={styles.sun_and_time_wrapper}>
                  <img src={Sunrise} alt="" />
                  <p>{sunrise}</p>
                </div>
                <div className={styles.time_day_wrapper}>
                  <p className={"small_grey_text"}>Световой день</p>
                  <p>{sunDay}</p>
                </div>
                <div>
                  <img src={Sunset} alt="" />
                  <p>{sunset}</p>
                </div>
              </div>
              <div className={styles.grid_air_quality_wrapper}>
                <div
                  className={`${styles.air_quality_gr_str1} small_grey_text`}
                >
                  t° воды
                </div>
                <div
                  className={`${styles.air_quality_gr_str1} ${styles.img_and_data_wrapper}`}
                >
                  <img src={WaterTemp} alt="" />
                  <p>{avgWaterTemp > 0 ? `+${avgWaterTemp}` : avgWaterTemp}°</p>
                </div>
                <div
                  className={`${styles.air_quality_gr_str2} small_grey_text`}
                >
                  Фазы луны
                </div>
                <div
                  className={`${styles.air_quality_gr_str2} ${styles.img_and_data_wrapper}`}
                >
                  <img src={WaterTemp} alt="" />
                  <p>растущая!!!</p>
                </div>
                <div
                  className={`${styles.air_quality_gr_str3} small_grey_text`}
                >
                  УФ-индекс
                </div>
                <div className={styles.air_quality_gr_str3}>
                  {avgUV}, {uvCategory.text}
                </div>
                <div
                  className={`${styles.air_quality_gr_str4} small_grey_text`}
                >
                  Магнитное поле
                </div>
                <div className={styles.air_quality_gr_str4}>
                  4, слабая буря!!!
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default DetailedForecast;
