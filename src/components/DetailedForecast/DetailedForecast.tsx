import styles from "./detailedForecast.module.scss";
import useServices from "@services/useSrvices";
import WIndDirectionArrow from "@components/WindDirectionArrow/WIndDirectionArrow";
import LightArc from "@assets/image/detailedForecast/lightingDayArc.svg";
import Sunrise from "@assets/icons/detailedForecast/sunriseIcon.svg";
import Sunset from "@assets/icons/detailedForecast/sunsetIcon.svg";
import WaterTemp from "@assets/icons/waterTempIcon.svg";
import { Link } from "react-router-dom";

const DetailedForecast = () => {
  const data = useServices().getAdvancedTenDaysData;

  return (
    <section className={styles.section_wrapper}>
      {data.map((item, i) => {
        const {
          morning,
          day,
          evening,
          night,
          advancedAvgUV,
          advancedUVCategory,
          advancedWeekday,
          advancedDate,
          advancedAvgWaterTemp,
          advancedSunDay,
          advancedSunrise,
          advancedSunset,
          advancedMagnteticField,
          advancedMagnteticFieldCategory,
          advancedMoonPhase,
        } = item;

        return (
          <Link to="/" className={styles.main_wrapper} key={i}>
            <div className={styles.line}></div>
            <div className={styles.grid_forecast_wrapper}>
              <div
                className={`${styles.forecast_date_gr} ${styles.title_date}`}
              >
                {i === 0 ? "Сегодня" : i === 1 ? "Завтра" : advancedWeekday},{" "}
                {advancedDate}
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
                  <p>{morning?.advancedTemperature}°</p>
                  <img src={morning?.advancedWeatherEffect} alt="" />
                </div>
              </div>
              <div className={`${styles.forecast_gr_str1}`}>
                <p>{morning?.advancedApparentTemperature}°</p>
              </div>
              <div className={`${styles.forecast_gr_str1}`}>
                <div className={styles.wind_wrapper}>
                  <p>{morning?.advancedWindSpeed}</p>
                  <WIndDirectionArrow
                    windDirection={morning?.advancedWindDirection}
                  />
                  <p className="small_grey_text">
                    {morning?.advancedWindDirectionText}
                  </p>
                </div>
              </div>
              <div className={`${styles.forecast_gr_str1}`}>
                {morning?.advancedHumidity}%
              </div>
              <div className={`${styles.forecast_gr_str1}`}>
                {morning?.advancedPressure}
              </div>
              {/*string 2*/}
              <div className={`${styles.forecast_gr_str2} small_grey_text`}>
                Днём
              </div>
              <div className={`${styles.forecast_gr_str2}`}>
                <div className={styles.tmp_effect_wrapper}>
                  <p>{day?.advancedTemperature}°</p>
                  <img src={day?.advancedWeatherEffect} alt="" />
                </div>
              </div>
              <div className={`${styles.forecast_gr_str2}`}>
                <p>{day?.advancedApparentTemperature}°</p>
              </div>
              <div className={`${styles.forecast_gr_str2}`}>
                <div className={styles.wind_wrapper}>
                  <p>{day?.advancedWindSpeed}</p>
                  <WIndDirectionArrow
                    windDirection={day?.advancedWindDirection}
                  />
                  <p className="small_grey_text">
                    {day?.advancedWindDirectionText}
                  </p>
                </div>
              </div>
              <div className={`${styles.forecast_gr_str2}`}>
                {day?.advancedHumidity}%
              </div>
              <div className={`${styles.forecast_gr_str2}`}>
                {day?.advancedPressure}
              </div>
              {/*string 3*/}
              <div className={`${styles.forecast_gr_str3} small_grey_text`}>
                Вечером
              </div>
              <div className={`${styles.forecast_gr_str3}`}>
                <div className={styles.tmp_effect_wrapper}>
                  <p>{evening?.advancedTemperature}°</p>
                  <img src={evening?.advancedWeatherEffect} alt="" />
                </div>
              </div>
              <div className={`${styles.forecast_gr_str3}`}>
                <p>{evening?.advancedApparentTemperature}°</p>
              </div>
              <div className={`${styles.forecast_gr_str3}`}>
                <div className={styles.wind_wrapper}>
                  <p>{evening?.advancedWindSpeed}</p>
                  <WIndDirectionArrow
                    windDirection={evening?.advancedWindDirection}
                  />
                  <p className="small_grey_text">
                    {evening?.advancedWindDirectionText}
                  </p>
                </div>
              </div>
              <div className={`${styles.forecast_gr_str3}`}>
                {evening?.advancedHumidity}%
              </div>
              <div className={`${styles.forecast_gr_str3}`}>
                {evening?.advancedPressure}
              </div>
              {/*string 4*/}
              <div className={`${styles.forecast_gr_str4} small_grey_text`}>
                Ночью
              </div>
              <div className={`${styles.forecast_gr_str4}`}>
                <div className={styles.tmp_effect_wrapper}>
                  <p>{night?.advancedTemperature}°</p>
                  <img src={night?.advancedWeatherEffect} alt="" />
                </div>
              </div>
              <div className={`${styles.forecast_gr_str4}`}>
                <p>{evening?.advancedApparentTemperature}°</p>
              </div>
              <div className={`${styles.forecast_gr_str4}`}>
                <div className={styles.wind_wrapper}>
                  <p>{night?.advancedWindSpeed}</p>
                  <WIndDirectionArrow
                    windDirection={night?.advancedWindDirection}
                  />
                  <p className="small_grey_text">
                    {night?.advancedWindDirectionText}
                  </p>
                </div>
              </div>
              <div className={`${styles.forecast_gr_str4}`}>
                {night?.advancedHumidity}%
              </div>
              <div className={`${styles.forecast_gr_str4}`}>
                {night?.advancedPressure}
              </div>
            </div>
            {/*airQuality*/}
            <div className={styles.air_quality_wrapper}>
              <div className={styles.sunday_wrapper}>
                <img className={styles.light_arc} src={LightArc} alt="" />
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
              </div>

              <div className={styles.grid_air_quality_wrapper}>
                {/*string 1*/}
                <div className="small_grey_text">t° воды</div>
                <div className={styles.img_and_data_wrapper}>
                  <img src={WaterTemp} alt="" />
                  <p>{advancedAvgWaterTemp}°</p>
                </div>
                {/*string 2*/}
                <div className="small_grey_text">Фазы луны</div>
                <div className={styles.img_and_data_wrapper}>
                  <img src={advancedMoonPhase?.icon} alt="" />
                  <p>{advancedMoonPhase?.text}</p>
                </div>
                {/*string 3*/}
                <div className="small_grey_text">УФ-индекс</div>
                <div>
                  {advancedAvgUV}, {advancedUVCategory?.text}
                </div>
                {/*string 4*/}
                <div className="small_grey_text">Магнитное поле</div>
                <div className={styles.air_quality_gr_str4}>
                  {advancedMagnteticField},{" "}
                  {advancedMagnteticFieldCategory?.text}
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </section>
  );
};

export default DetailedForecast;
