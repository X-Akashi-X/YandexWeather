import {
  getUVCategory,
  getWeatherEffect,
  getWindDirection,
} from "@utils/weatherEffects/weatherEffects";
import styles from "./detailedForecast.module.scss";
import useServices from "@services/useSrvices";
import WIndDirectionArrow from "@components/WindDirectionArrow/WIndDirectionArrow";
import LightArc from "@assets/image/mainTenDaysSection/LightingDayArc.svg";
import Sunrise from "@assets/icons/mainTenDaysSection/SunriseIcon.svg";
import Sunset from "@assets/icons/mainTenDaysSection/SunsetIcon.svg";
import WaterTemp from "@assets/icons/waterTempIcon.svg";

const DetailedForecast = () => {
  const data = useServices().getAdvancedTenDaysData();

  return (
    <>
      {data.map((item, i) => {
        const effectMorning = getWeatherEffect(
          () => item.morning?.weatherCode ?? 0,
        );
        const effectDay = getWeatherEffect(() => item.day?.weatherCode ?? 0);
        const effectEvening = getWeatherEffect(
          () => item.evening?.weatherCode ?? 0,
        );
        const effectNight = getWeatherEffect(
          () => item.night?.weatherCode ?? 0,
        );

        const windDirectionMorning = getWindDirection(
          () => item.morning?.windDeg ?? 0,
        );
        const windDirectionDay = getWindDirection(() => item.day?.windDeg ?? 0);
        const windDirectionEvening = getWindDirection(
          () => item.evening?.windDeg ?? 0,
        );
        const windDirectionNight = getWindDirection(
          () => item.night?.windDeg ?? 0,
        );

        const uvCategory = getUVCategory(item.avgUV ?? 0);

        return (
          <div className={styles.main_wrapper} key={i}>
            <div className={styles.grid_forecast_wrapper}>
              <div
                className={`${styles.forecast_date_gr} ${styles.title_date}`}
              >
                {i === 0 ? "Сегодня" : i === 1 ? "Завтра" : item.weekday},{" "}
                {item.date}
              </div>
              <div
                className={`${styles.forecast_feeling_gr} ${styles.small_grey_text}`}
              >
                ощущается
              </div>
              <div
                className={`${styles.forecast_wind_gr} ${styles.small_grey_text}`}
              >
                ветер, м/с
              </div>
              <div
                className={`${styles.forecast_humidity_gr} ${styles.small_grey_text}`}
              >
                влажность
              </div>
              <div
                className={`${styles.forecast_pressure_gr} ${styles.small_grey_text}`}
              >
                давление, мм рт. ст
              </div>
              {/*string 1*/}
              <div
                className={`${styles.forecast_gr_str1} ${styles.small_grey_text}`}
              >
                Утром
              </div>
              <div className={`${styles.forecast_gr_str1}`}>
                <div className={styles.tmp_effect_wrapper}>
                  <p>
                    {item.morning?.temp !== undefined && item.morning?.temp > 0
                      ? `+${item.morning?.temp}`
                      : `${item.morning?.temp}`}
                    °
                  </p>
                  <img src={effectMorning} alt="" />
                </div>
              </div>
              <div className={`${styles.forecast_gr_str1}`}>
                <p>
                  {item.morning?.feels !== undefined && item.morning?.feels > 0
                    ? `+${item.morning?.feels}`
                    : `${item.morning?.feels}`}
                  °
                </p>
              </div>
              <div className={`${styles.forecast_gr_str1}`}>
                <div className={styles.wind_wrapper}>
                  <p>{item.morning?.windSpeed}</p>
                  <WIndDirectionArrow
                    windDirection={item.morning?.windDeg || 0}
                  />
                  <p>{windDirectionMorning}</p>
                </div>
              </div>
              <div className={`${styles.forecast_gr_str1}`}>
                {item.morning?.humidity}%
              </div>
              <div className={`${styles.forecast_gr_str1}`}>
                {item.morning?.pressure}
              </div>
              {/*string 2*/}
              <div
                className={`${styles.forecast_gr_str2} ${styles.small_grey_text}`}
              >
                Днём
              </div>
              <div className={`${styles.forecast_gr_str2}`}>
                <div className={styles.tmp_effect_wrapper}>
                  <p>
                    {item.day?.temp !== undefined && item.day?.temp > 0
                      ? `+${item.day?.temp}`
                      : `${item.day?.temp}`}
                    °
                  </p>
                  <img src={effectDay} alt="" />
                </div>
              </div>
              <div className={`${styles.forecast_gr_str2}`}>
                <p>
                  {item.day?.feels !== undefined && item.day?.feels > 0
                    ? `+${item.day?.feels}`
                    : `${item.day?.feels}`}
                  °
                </p>
              </div>
              <div className={`${styles.forecast_gr_str2}`}>
                <div className={styles.wind_wrapper}>
                  <p>{item.day?.windSpeed}</p>
                  <WIndDirectionArrow windDirection={item.day?.windDeg || 0} />
                  <p>{windDirectionDay}</p>
                </div>
              </div>
              <div className={`${styles.forecast_gr_str2}`}>
                {item.day?.humidity}%
              </div>
              <div className={`${styles.forecast_gr_str2}`}>
                {item.day?.pressure}
              </div>
              {/*string 3*/}
              <div
                className={`${styles.forecast_gr_str3} ${styles.small_grey_text}`}
              >
                Вечером
              </div>
              <div className={`${styles.forecast_gr_str3}`}>
                <div className={styles.tmp_effect_wrapper}>
                  <p>
                    {item.evening?.temp !== undefined && item.evening?.temp > 0
                      ? `+${item.evening?.temp}`
                      : `${item.evening?.temp}`}
                    °
                  </p>
                  <img src={effectEvening} alt="" />
                </div>
              </div>
              <div className={`${styles.forecast_gr_str3}`}>
                <p>
                  {item.evening?.feels !== undefined && item.evening?.feels > 0
                    ? `+${item.evening?.feels}`
                    : `${item.evening?.feels}`}
                  °
                </p>
              </div>
              <div className={`${styles.forecast_gr_str3}`}>
                <div className={styles.wind_wrapper}>
                  <p>{item.evening?.windSpeed}</p>
                  <WIndDirectionArrow
                    windDirection={item.evening?.windDeg || 0}
                  />
                  <p>{windDirectionEvening}</p>
                </div>
              </div>
              <div className={`${styles.forecast_gr_str3}`}>
                {item.evening?.humidity}%
              </div>
              <div className={`${styles.forecast_gr_str3}`}>
                {item.evening?.pressure}
              </div>
              {/*string 4*/}
              <div
                className={`${styles.forecast_gr_str4} ${styles.small_grey_text}`}
              >
                Ночью
              </div>
              <div className={`${styles.forecast_gr_str4}`}>
                <div className={styles.tmp_effect_wrapper}>
                  <p>
                    {item.night?.temp !== undefined && item.night?.temp > 0
                      ? `+${item.night?.temp}`
                      : `${item.night?.temp}`}
                    °
                  </p>
                  <img src={effectNight} alt="" />
                </div>
              </div>
              <div className={`${styles.forecast_gr_str4}`}>
                <p>
                  {item.night?.feels !== undefined && item.night?.feels > 0
                    ? `+${item.night?.feels}`
                    : `${item.night?.feels}`}
                  °
                </p>
              </div>
              <div className={`${styles.forecast_gr_str4}`}>
                <div className={styles.wind_wrapper}>
                  <p>{item.night?.windSpeed}</p>
                  <WIndDirectionArrow
                    windDirection={item.night?.windDeg || 0}
                  />
                  <p>{windDirectionNight}</p>
                </div>
              </div>
              <div className={`${styles.forecast_gr_str4}`}>
                {item.night?.humidity}%
              </div>
              <div className={`${styles.forecast_gr_str4}`}>
                {item.night?.pressure}
              </div>
            </div>
            <div className={styles.air_quality_wrapper}>
              <img src={LightArc} alt="" />
              <div className={styles.under_arc_wrapper}>
                <div className={styles.sun_and_time_wrapper}>
                  <img src={Sunrise} alt="" />
                  <p>{item.sunrise}</p>
                </div>
                <div className={styles.time_day_wrapper}>
                  <p className={styles.small_grey_text}>Световой день</p>
                  <p>{item.sunDay}</p>
                </div>
                <div>
                  <img src={Sunset} alt="" />
                  <p>{item.sunset}</p>
                </div>
              </div>
              <div className={styles.grid_air_quality_wrapper}>
                <div
                  className={`${styles.air_quality_gr_str1} ${styles.small_grey_text}`}
                >
                  t° воды
                </div>
                <div
                  className={`${styles.air_quality_gr_str1} ${styles.img_and_data_wrapper}`}
                >
                  <img src={WaterTemp} alt="" />
                  <p>
                    {item.avgWaterTemp !== null && item.avgWaterTemp > 0
                      ? `+${item.avgWaterTemp}`
                      : item.avgWaterTemp}
                    °
                  </p>
                </div>
                <div
                  className={`${styles.air_quality_gr_str2} ${styles.small_grey_text}`}
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
                  className={`${styles.air_quality_gr_str3} ${styles.small_grey_text}`}
                >
                  УФ-индекс
                </div>
                <div className={styles.air_quality_gr_str3}>
                  {item.avgUV}, {uvCategory.text}
                </div>
                <div
                  className={`${styles.air_quality_gr_str4} ${styles.small_grey_text}`}
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
    </>
  );
};

export default DetailedForecast;
