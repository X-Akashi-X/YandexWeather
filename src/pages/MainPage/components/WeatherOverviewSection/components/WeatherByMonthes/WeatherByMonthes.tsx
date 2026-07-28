import styles from "./weatherByMonthes.module.scss";
import Weather from "@utils/weatherEffects/icons/cloudyIcon.svg";

const WeatherByMonthes = () => {
  return (
    <section className={styles.section_wrapper}>
      <h3>Погода по месяцам</h3>
      <div className={styles.weather_wrapper}>
        <div className={styles.weather_wrapper_item}>
          <p>Январь</p>
          <div className={styles.tmp_and_effect_wrapper}>
            <p>+20°</p>
            <img src={Weather} alt="" />
          </div>
        </div>
        <div className={styles.weather_wrapper_item}>
          <p>Февраль</p>
          <div className={styles.tmp_and_effect_wrapper}>
            <p>+20°</p>
            <img src={Weather} alt="" />
          </div>
        </div>
        <div className={styles.weather_wrapper_item}>
          <p>Март</p>
          <div className={styles.tmp_and_effect_wrapper}>
            <p>+20°</p>
            <img src={Weather} alt="" />
          </div>
        </div>
        <div className={styles.weather_wrapper_item}>
          <p>Апрель</p>
          <div className={styles.tmp_and_effect_wrapper}>
            <p>+20°</p>
            <img src={Weather} alt="" />
          </div>
        </div>
        <div className={styles.weather_wrapper_item}>
          <p>Май</p>
          <div className={styles.tmp_and_effect_wrapper}>
            <p>+20°</p>
            <img src={Weather} alt="" />
          </div>
        </div>
        <div className={styles.weather_wrapper_item}>
          <p>Июнь</p>
          <div className={styles.tmp_and_effect_wrapper}>
            <p>+20°</p>
            <img src={Weather} alt="" />
          </div>
        </div>
        <div className={styles.weather_wrapper_item}>
          <p>Июль</p>
          <div className={styles.tmp_and_effect_wrapper}>
            <p>+20°</p>
            <img src={Weather} alt="" />
          </div>
        </div>
        <div className={styles.weather_wrapper_item}>
          <p>Август</p>
          <div className={styles.tmp_and_effect_wrapper}>
            <p>+20°</p>
            <img src={Weather} alt="" />
          </div>
        </div>
        <div className={styles.weather_wrapper_item}>
          <p>Сентябрь</p>
          <div className={styles.tmp_and_effect_wrapper}>
            <p>+20°</p>
            <img src={Weather} alt="" />
          </div>
        </div>
        <div className={styles.weather_wrapper_item}>
          <p>Октябрь</p>
          <div className={styles.tmp_and_effect_wrapper}>
            <p>+20°</p>
            <img src={Weather} alt="" />
          </div>
        </div>
        <div className={styles.weather_wrapper_item}>
          <p>Ноябрь</p>
          <div className={styles.tmp_and_effect_wrapper}>
            <p>+20°</p>
            <img src={Weather} alt="" />
          </div>
        </div>
        <div className={styles.weather_wrapper_item}>
          <p>Декабрь</p>
          <div className={styles.tmp_and_effect_wrapper}>
            <p>+20°</p>
            <img src={Weather} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeatherByMonthes;
