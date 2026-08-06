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
          AdvancedAvgUV,
          AdvancedWeekday,
          AdvancedDate,
          AdvancedAvgWaterTemp,
          AdvancedSunDay,
          AdvancedSunrise,
          AdvancedSunset,
        } = item;
        if (!morning || !day || !evening || !night || !AdvancedAvgUV || !AdvancedAvgWaterTemp)
          return null;

        const effectMorning = getWeatherEffect(morning.AdvancedWeatherCode);
        const effectDay = getWeatherEffect(day.AdvancedWeatherCode);
        const effectEvening = getWeatherEffect(evening.AdvancedWeatherCode);
        const effectNight = getWeatherEffect(night.AdvancedWeatherCode);

        const windDirectionMorning = getWindDirection(morning.AdvancedWindDirection);
        const windDirectionDay = getWindDirection(day.AdvancedWindDirection);
        const windDirectionEvening = getWindDirection(evening.AdvancedWindDirection);
        const windDirectionNight = getWindDirection(night.AdvancedWindDirection);

        const uvCategory = getUVCategory(AdvancedAvgUV);

        return (
          <div className={styles.main_wrapper} key={i}>
            <div className={styles.grid_forecast_wrapper}>
              <div
                className={`${styles.forecast_date_gr} ${styles.title_date}`}
              >
                {i === 0 ? "Сегодня" : i === 1 ? "Завтра" : AdvancedWeekday}, {AdvancedDate}
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
                    {morning.AdvancedTemperature > 0
                      ? `+${morning.AdvancedTemperature}`
                      : `${morning.AdvancedTemperature}`}
                    °
                  </p>
                  <img src={effectMorning} alt="" />
                </div>
              </div>
              <div className={`${styles.forecast_gr_str1}`}>
                <p>
                  {morning.AdvancedApparentTemperature > 0
                    ? `+${morning.AdvancedApparentTemperature}`
                    : `${morning.AdvancedApparentTemperature}`}
                  °
                </p>
              </div>
              <div className={`${styles.forecast_gr_str1}`}>
                <div className={styles.wind_wrapper}>
                  <p>{morning.AdvancedWindSpeed}</p>
                  <WIndDirectionArrow windDirection={morning.AdvancedWindDirection} />
                  <p className="small_grey_text">{windDirectionMorning}</p>
                </div>
              </div>
              <div className={`${styles.forecast_gr_str1}`}>
                {morning.AdvancedHumidity}%
              </div>
              <div className={`${styles.forecast_gr_str1}`}>
                {morning.AdvancedPressure}
              </div>
              {/*string 2*/}
              <div className={`${styles.forecast_gr_str2} small_grey_text`}>
                Днём
              </div>
              <div className={`${styles.forecast_gr_str2}`}>
                <div className={styles.tmp_effect_wrapper}>
                  <p>
                    {day.AdvancedApparentTemperature > 0
                      ? `+${day.AdvancedApparentTemperature}`
                      : `${day.AdvancedApparentTemperature}`}
                    °
                  </p>
                  <img src={effectDay} alt="" />
                </div>
              </div>
              <div className={`${styles.forecast_gr_str2}`}>
                <p>
                  {day.AdvancedApparentTemperature > 0
                    ? `+${day.AdvancedApparentTemperature}`
                    : `${day.AdvancedApparentTemperature}`}
                  °
                </p>
              </div>
              <div className={`${styles.forecast_gr_str2}`}>
                <div className={styles.wind_wrapper}>
                  <p>{day.AdvancedWindSpeed}</p>
                  <WIndDirectionArrow windDirection={day.AdvancedWindDirection} />
                  <p className="small_grey_text">{windDirectionDay}</p>
                </div>
              </div>
              <div className={`${styles.forecast_gr_str2}`}>
                {day.AdvancedHumidity}%
              </div>
              <div className={`${styles.forecast_gr_str2}`}>{day.AdvancedPressure}</div>
              {/*string 3*/}
              <div className={`${styles.forecast_gr_str3} small_grey_text`}>
                Вечером
              </div>
              <div className={`${styles.forecast_gr_str3}`}>
                <div className={styles.tmp_effect_wrapper}>
                  <p>
                    {evening.AdvancedApparentTemperature > 0
                      ? `+${evening.AdvancedApparentTemperature}`
                      : `${evening.AdvancedApparentTemperature}`}
                    °
                  </p>
                  <img src={effectEvening} alt="" />
                </div>
              </div>
              <div className={`${styles.forecast_gr_str3}`}>
                <p>
                  {evening.AdvancedApparentTemperature > 0
                    ? `+${evening.AdvancedApparentTemperature}`
                    : `${evening.AdvancedApparentTemperature}`}
                  °
                </p>
              </div>
              <div className={`${styles.forecast_gr_str3}`}>
                <div className={styles.wind_wrapper}>
                  <p>{evening.AdvancedWindSpeed}</p>
                  <WIndDirectionArrow windDirection={evening.AdvancedWindDirection} />
                  <p className="small_grey_text">{windDirectionEvening}</p>
                </div>
              </div>
              <div className={`${styles.forecast_gr_str3}`}>
                {evening.AdvancedHumidity}%
              </div>
              <div className={`${styles.forecast_gr_str3}`}>
                {evening.AdvancedPressure}
              </div>
              {/*string 4*/}
              <div className={`${styles.forecast_gr_str4} small_grey_text`}>
                Ночью
              </div>
              <div className={`${styles.forecast_gr_str4}`}>
                <div className={styles.tmp_effect_wrapper}>
                  <p>
                    {night.AdvancedApparentTemperature > 0
                      ? `+${night.AdvancedApparentTemperature}`
                      : `${night.AdvancedApparentTemperature}`}
                    °
                  </p>
                  <img src={effectNight} alt="" />
                </div>
              </div>
              <div className={`${styles.forecast_gr_str4}`}>
                <p>
                  {night.AdvancedApparentTemperature > 0
                    ? `+${night.AdvancedApparentTemperature}`
                    : `${night.AdvancedApparentTemperature}`}
                  °
                </p>
              </div>
              <div className={`${styles.forecast_gr_str4}`}>
                <div className={styles.wind_wrapper}>
                  <p>{night.AdvancedWindSpeed}</p>
                  <WIndDirectionArrow windDirection={night.AdvancedWindDirection} />
                  <p className="small_grey_text">{windDirectionNight}</p>
                </div>
              </div>
              <div className={`${styles.forecast_gr_str4}`}>
                {night.AdvancedHumidity}%
              </div>
              <div className={`${styles.forecast_gr_str4}`}>
                {night.AdvancedPressure}
              </div>
            </div>
            <div className={styles.air_quality_wrapper}>
              <img src={LightArc} alt="" />
              <div className={styles.under_arc_wrapper}>
                <div className={styles.sun_and_time_wrapper}>
                  <img src={Sunrise} alt="" />
                  <p>{AdvancedSunrise}</p>
                </div>
                <div className={styles.time_day_wrapper}>
                  <p className={"small_grey_text"}>Световой день</p>
                  <p>{AdvancedSunDay}</p>
                </div>
                <div>
                  <img src={Sunset} alt="" />
                  <p>{AdvancedSunset}</p>
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
                  <p>{AdvancedAvgWaterTemp > 0 ? `+${AdvancedAvgWaterTemp}` : AdvancedAvgWaterTemp}°</p>
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
                  {AdvancedAvgUV}, {uvCategory.text}
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
