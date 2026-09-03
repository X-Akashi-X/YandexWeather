import styles from "./weatherAndFeelings.module.scss";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import Pollen from "@assets/icons/pollenIcon.svg";
import useServices from "@services/useServices";
import StatusArc from "@components/StatusArc/StatusArc";

const WeatherAndFeelings = () => {
  const { getCurrentData, getTodayData } = useServices();

  const {
    currentPressure,
    currentPressureCategory,
    currentPollenCategory,
    currentUVCategory,
    currentUVIndex,
  } = getCurrentData;

  const { todayMagneticField, todayMagneticFieldCategory, todayMoonPhase } =
    getTodayData;

  return (
    <section className={styles.section_wrapper}>
      <h2>Погода и самочувствие</h2>
      <Swiper
        className={styles.feelings_wrapper}
        modules={[Navigation, FreeMode]}
        slidesPerView="auto"
        slidesPerGroup={2}
        spaceBetween={15}
        freeMode={true}
        touchRatio={1}
        navigation
      >
        <SwiperSlide>
          <Link to="/" className={styles.feelings_item}>
            <div className={styles.category_wrapper}>
              <img className={styles.img_pollen} src={Pollen} alt="Пыльца" />
              <div className={styles.status_wrapper}>
                <StatusArc category={currentPollenCategory} />
              </div>
            </div>
            <div className={styles.title_wrapper}>
              <h4>Пыльца</h4>
              <p>{currentPollenCategory.text}</p>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/" className={styles.feelings_item}>
            <div className={styles.category_wrapper}>
              <p>{todayMagneticField}</p>
              <div className={styles.status_wrapper}>
                <StatusArc category={todayMagneticFieldCategory} />
              </div>
            </div>
            <div className={styles.title_wrapper}>
              <h4>Магнитное поле</h4>
              <p>{todayMagneticFieldCategory.text}</p>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/" className={styles.feelings_item}>
            <div className={styles.category_wrapper}>
              <p>{currentPressure}</p>
              <div className={styles.status_wrapper}>
                <StatusArc category={currentPressureCategory} />
              </div>
            </div>
            <div className={styles.title_wrapper}>
              <h4>Давление</h4>
              <p>{currentPressureCategory.text}</p>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/" className={styles.feelings_item}>
            <div className={styles.category_wrapper}>
              <img
                className={styles.img_moon}
                src={todayMoonPhase.icon}
                alt="Фаза луны"
              />
            </div>
            <div className={styles.title_wrapper}>
              <h4>Луна</h4>
              <p>{todayMoonPhase.text}</p>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/" className={styles.feelings_item}>
            <div className={styles.category_wrapper}>
              <p>{currentUVIndex}</p>
              <div className={styles.status_wrapper}>
                <StatusArc category={currentUVCategory} />
              </div>
            </div>
            <div className={styles.title_wrapper}>
              <h4>УФ-индекс</h4>
              <p>{currentUVCategory.text}</p>
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default WeatherAndFeelings;
