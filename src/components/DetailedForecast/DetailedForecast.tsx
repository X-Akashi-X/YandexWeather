import {
  getPlusOrNot,
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
          advancedAvgUV,
          advancedWeekday,
          advancedDate,
          advancedAvgWaterTemp,
          advancedSunDay,
          advancedSunrise,
          advancedSunset,
        } = item;
        if (!morning || !day || !evening || !night || !advancedAvgUV || !advancedAvgWaterTemp)
          return null;

        const effectMorning = getWeatherEffect(morning.advancedWeatherCode);
        const effectDay = getWeatherEffect(day.advancedWeatherCode);
        const effectEvening = getWeatherEffect(evening.advancedWeatherCode);
        const effectNight = getWeatherEffect(night.advancedWeatherCode);

        const windDirectionMorning = getWindDirection(morning.advancedWindDirection);
        const windDirectionDay = getWindDirection(day.advancedWindDirection);
        const windDirectionEvening = getWindDirection(evening.advancedWindDirection);
        const windDirectionNight = getWindDirection(night.advancedWindDirection);

        const uvCategory = getUVCategory(advancedAvgUV);

        return (
          <div className={styles.main_wrapper} key={i}>
            <div className={styles.grid_forecast_wrapper}>
              <div
                className={`${styles.forecast_date_gr} ${styles.title_date}`}
              >
                {i === 0 ? "Сегодня" : i === 1 ? "Завтра" : advancedWeekday}, {advancedDate}
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
                    {getPlusOrNot(morning.advancedTemperature)}°
                    
                  </p>
                  <img src={effectMorning} alt="" />
                </div>
              </div>
              <div className={`${styles.forecast_gr_str1}`}>
                <p>
                  {getPlusOrNot(morning.advancedApparentTemperature)}°
                  
                </p>
              </div>
              <div className={`${styles.forecast_gr_str1}`}>
                <div className={styles.wind_wrapper}>
                  <p>{morning.advancedWindSpeed}</p>
                  <WIndDirectionArrow windDirection={morning.advancedWindDirection} />
                  <p className="small_grey_text">{windDirectionMorning}</p>
                </div>
              </div>
              <div className={`${styles.forecast_gr_str1}`}>
                {morning.advancedHumidity}%
              </div>
              <div className={`${styles.forecast_gr_str1}`}>
                {morning.advancedPressure}
              </div>
              {/*string 2*/}
              <div className={`${styles.forecast_gr_str2} small_grey_text`}>
                Днём
              </div>
              <div className={`${styles.forecast_gr_str2}`}>
                <div className={styles.tmp_effect_wrapper}>
                  <p>
                    {getPlusOrNot(day.advancedTemperature)}°
                    
                  </p>
                  <img src={effectDay} alt="" />
                </div>
              </div>
              <div className={`${styles.forecast_gr_str2}`}>
                <p>
                  {getPlusOrNot(day.advancedApparentTemperature)}°
                  
                </p>
              </div>
              <div className={`${styles.forecast_gr_str2}`}>
                <div className={styles.wind_wrapper}>
                  <p>{day.advancedWindSpeed}</p>
                  <WIndDirectionArrow windDirection={day.advancedWindDirection} />
                  <p className="small_grey_text">{windDirectionDay}</p>
                </div>
              </div>
              <div className={`${styles.forecast_gr_str2}`}>
                {day.advancedHumidity}%
              </div>
              <div className={`${styles.forecast_gr_str2}`}>{day.advancedPressure}</div>
              {/*string 3*/}
              <div className={`${styles.forecast_gr_str3} small_grey_text`}>
                Вечером
              </div>
              <div className={`${styles.forecast_gr_str3}`}>
                <div className={styles.tmp_effect_wrapper}>
                  <p>
                    {getPlusOrNot(evening.advancedTemperature)}°
                    
                  </p>
                  <img src={effectEvening} alt="" />
                </div>
              </div>
              <div className={`${styles.forecast_gr_str3}`}>
                <p>
                  {getPlusOrNot(evening.advancedApparentTemperature)}°
                  
                </p>
              </div>
              <div className={`${styles.forecast_gr_str3}`}>
                <div className={styles.wind_wrapper}>
                  <p>{evening.advancedWindSpeed}</p>
                  <WIndDirectionArrow windDirection={evening.advancedWindDirection} />
                  <p className="small_grey_text">{windDirectionEvening}</p>
                </div>
              </div>
              <div className={`${styles.forecast_gr_str3}`}>
                {evening.advancedHumidity}%
              </div>
              <div className={`${styles.forecast_gr_str3}`}>
                {evening.advancedPressure}
              </div>
              {/*string 4*/}
              <div className={`${styles.forecast_gr_str4} small_grey_text`}>
                Ночью
              </div>
              <div className={`${styles.forecast_gr_str4}`}>
                <div className={styles.tmp_effect_wrapper}>
                  <p>
                    {getPlusOrNot(night.advancedTemperature)}°
                    
                  </p>
                  <img src={effectNight} alt="" />
                </div>
              </div>
              <div className={`${styles.forecast_gr_str4}`}>
                <p>
                  {getPlusOrNot(evening.advancedApparentTemperature)}°
                  
                </p>
              </div>
              <div className={`${styles.forecast_gr_str4}`}>
                <div className={styles.wind_wrapper}>
                  <p>{night.advancedWindSpeed}</p>
                  <WIndDirectionArrow windDirection={night.advancedWindDirection} />
                  <p className="small_grey_text">{windDirectionNight}</p>
                </div>
              </div>
              <div className={`${styles.forecast_gr_str4}`}>
                {night.advancedHumidity}%
              </div>
              <div className={`${styles.forecast_gr_str4}`}>
                {night.advancedPressure}
              </div>
            </div>
            <div className={styles.air_quality_wrapper}>
              <img src={LightArc} alt="" />
              <div className={styles.under_arc_wrapper}>
                <div className={styles.sun_and_time_wrapper}>
                  <img src={Sunrise} alt="" />
                  <p>{advancedSunrise}</p>
                </div>
                <div className={styles.time_day_wrapper}>
                  <p className={"small_grey_text"}>Световой день</p>
                  <p>{advancedSunDay}</p>
                </div>
                <div>
                  <img src={Sunset} alt="" />
                  <p>{advancedSunset}</p>
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
                  <p>{getPlusOrNot(advancedAvgWaterTemp)}°</p>
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
                  {advancedAvgUV}, {uvCategory.text}
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
