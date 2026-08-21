import styles from "./weatherAndFeelings.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Pollen from "@assets/icons/mainInfoSection/pollenIcon.svg";
import useServices from "@services/useSrvices";
import StatusArc from "@components/StatusArc/StatusArc";

const WeatherAndFeelings = () => {
  const {
    currentPressure,
    currentPressureCategory,
    currentPollenCategory,
    currentUVCategory,
    currentUVIndex,
  } = useServices().getCurrentData || {};

  const { todayMagneticField, todayMagneticFieldCategory, todayMoonPhase } =
    useServices().getTodayData || {};

  return (
    <section className={styles.section_wrapper}>
      <h2>Погода и самочувствие</h2>
      <Swiper
        className={styles.feelings_wrapper}
        modules={[Navigation]}
        slidesPerView={3}
        slidesPerGroup={2}
        spaceBetween={15}
        navigation
      >
        <SwiperSlide>
          <a className={styles.feelings_item}>
            <div className={styles.category_wrapper}>
              <img className={styles.img_pollen} src={Pollen} alt="" />
              <div className={styles.status_wrapper}>
                <StatusArc category={currentPollenCategory} />
              </div>
            </div>
            <div className={styles.title_wrapper}>
              <h4>Пыльца</h4>
              <p>{currentPollenCategory?.text}</p>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a className={styles.feelings_item}>
            <div className={styles.category_wrapper}>
              <p>{todayMagneticField}</p>
              <div className={styles.status_wrapper}>
                <StatusArc category={todayMagneticFieldCategory} />
              </div>
            </div>
            <div className={styles.title_wrapper}>
              <h4>Магнитное поле</h4>
              <p>{todayMagneticFieldCategory?.text}</p>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a className={styles.feelings_item}>
            <div className={styles.category_wrapper}>
              <p>{currentPressure}</p>
              <div className={styles.status_wrapper}>
                <StatusArc category={currentPressureCategory} />
              </div>
            </div>
            <div className={styles.title_wrapper}>
              <h4>Давление</h4>
              <p>{currentPressureCategory?.text}</p>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a className={styles.feelings_item}>
            <div className={styles.category_wrapper}>
              <img
                className={styles.img_moon}
                src={todayMoonPhase?.icon}
                alt=""
              />
            </div>
            <div className={styles.title_wrapper}>
              <h4>Луна</h4>
              <p>{todayMoonPhase?.text}</p>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a className={styles.feelings_item}>
            <div className={styles.category_wrapper}>
              <p>{currentUVIndex}</p>
              <div className={styles.status_wrapper}>
                <StatusArc category={currentUVCategory} />
              </div>
            </div>
            <div className={styles.title_wrapper}>
              <h4>УФ-индекс</h4>
              <p>{currentUVCategory?.text}</p>
            </div>
          </a>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default WeatherAndFeelings;
