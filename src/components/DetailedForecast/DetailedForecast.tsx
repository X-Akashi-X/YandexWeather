import styles from "./detailedForecast.module.scss";

const DetailedForecast = () => {
  return (
    <div className={styles.main_wrapper}>
      <div className={styles.grid_forecast_wrapper}>
        <div className={`${styles.forecast_date_gr} ${styles.title_date}`}>
          Сегодня, 21 июля
        </div>
        <div
          className={`${styles.forecast_feeling_gr} ${styles.small_grey_text}`}
        >
          ощущается
        </div>
        <div className={`${styles.forecast_wind_gr} ${styles.small_grey_text}`}>
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
        <div className={`${styles.forecast_gr_str1} ${styles.small_grey_text}`}>
          Утром
        </div>
        <div className={`${styles.forecast_gr_str1}`}>
          <div className={styles.tmp_effect_wrapper}>
            <p>+16°</p>
            <img src="" alt="" />
          </div>
        </div>
        <div className={`${styles.forecast_gr_str1}`}>+16°</div>
        <div className={`${styles.forecast_gr_str1}`}>
          <div className={styles.wind_wrapper}>
            <p>5</p>
            <img src="" alt="" />
            <p>юз</p>
          </div>
        </div>
        <div className={`${styles.forecast_gr_str1}`}>68%</div>
        <div className={`${styles.forecast_gr_str1}`}>737</div>
        {/*string 2*/}
        <div className={`${styles.forecast_gr_str2} ${styles.small_grey_text}`}>
          Днём
        </div>
        <div className={`${styles.forecast_gr_str2}`}>
          <div className={styles.tmp_effect_wrapper}>
            <p>+16°</p>
            <img src="" alt="" />
          </div>
        </div>
        <div className={`${styles.forecast_gr_str2}`}>+16°</div>
        <div className={`${styles.forecast_gr_str2}`}>
          <div className={styles.wind_wrapper}>
            <p>5</p>
            <img src="" alt="" />
            <p>юз</p>
          </div>
        </div>
        <div className={`${styles.forecast_gr_str2}`}>68%</div>
        <div className={`${styles.forecast_gr_str2}`}>737</div>
        {/*string 3*/}
        <div className={`${styles.forecast_gr_str3} ${styles.small_grey_text}`}>
          Вечером
        </div>
        <div className={`${styles.forecast_gr_str3}`}>
          <div className={styles.tmp_effect_wrapper}>
            <p>+16°</p>
            <img src="" alt="" />
          </div>
        </div>
        <div className={`${styles.forecast_gr_str3}`}>+16°</div>
        <div className={`${styles.forecast_gr_str3}`}>
          <div className={styles.wind_wrapper}>
            <p>5</p>
            <img src="" alt="" />
            <p>юз</p>
          </div>
        </div>
        <div className={`${styles.forecast_gr_str3}`}>68%</div>
        <div className={`${styles.forecast_gr_str3}`}>737</div>
        {/*string 4*/}
        <div className={`${styles.forecast_gr_str4} ${styles.small_grey_text}`}>
          Ночью
        </div>
        <div className={`${styles.forecast_gr_str4}`}>
          <div className={styles.tmp_effect_wrapper}>
            <p>+16°</p>
            <img src="" alt="" />
          </div>
        </div>
        <div className={`${styles.forecast_gr_str4}`}>+16°</div>
        <div className={`${styles.forecast_gr_str4}`}>
          <div className={styles.wind_wrapper}>
            <p>5</p>
            <img src="" alt="" />
            <p>юз</p>
          </div>
        </div>
        <div className={`${styles.forecast_gr_str4}`}>68%</div>
        <div className={`${styles.forecast_gr_str4}`}>737</div>
      </div>
      <div className={styles.air_quality_wrapper}>
        <img src="" alt="" />
        <div>
          <div>
            <img src="" alt="" />
            <p></p>
          </div>
          <div>
            <p></p>
            <p></p>
          </div>
          <div>
            <img src="" alt="" />
            <p></p>
          </div>
        </div>
        <div className={styles.grid_air_quality_wrapper}>
          <div className={styles.air_quality_gr_str1}>
            <img src="" alt="" />
            <p>1</p>
          </div>
          <div className={styles.air_quality_gr_str1}>
            <img src="" alt="" />
            <p>1</p>
          </div>
          <div className={styles.air_quality_gr_str2}>3</div>
          <div className={styles.air_quality_gr_str2}>4</div>
          <div className={styles.air_quality_gr_str3}>5</div>
          <div className={styles.air_quality_gr_str3}>6</div>
          <div className={styles.air_quality_gr_str4}>7</div>
          <div className={styles.air_quality_gr_str4}>8</div>
        </div>
      </div>
    </div>
  );
};

export default DetailedForecast;
