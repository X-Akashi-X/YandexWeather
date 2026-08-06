import styles from "./weatherAndFeelings.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Pollen from "@assets/icons/mainInfoSection/pollenIcon.svg";
import useServices from "@services/useSrvices";
import {
  getPollenCategory,
  getPressureCategory,
  getUVCategory,
} from "@utils/weatherEffects";
import StatusArc from "@components/StatusArc/StatusArc";

const WeatherAndFeelings = () => {
  const { CurrentPressure, CurrentPollen, CurrentUvIndex } = useServices().getCurrentData() || {};
  if (!CurrentPressure || !CurrentPollen || !CurrentUvIndex) return null;

  const pollenCategory = getPollenCategory(CurrentPollen);
  const pressureCategory = getPressureCategory(CurrentPressure);
  const uvCategory = getUVCategory(CurrentUvIndex);

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
              <img src={Pollen} alt="" />
              <div className={styles.img_wrapper}>
                <StatusArc category={pollenCategory} />
              </div>
            </div>
            <div className={styles.title_wrapper}>
              <h4>Пыльца</h4>
              <p>{pollenCategory.text}</p>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a className={styles.feelings_item}>
            <div className={styles.category_wrapper}>
              <p>4</p>
            </div>
            <div className={styles.title_wrapper}>
              <h4>Магнитное поле</h4>
              <p>слабая буря</p>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a className={styles.feelings_item}>
            <div className={styles.category_wrapper}>
              <p>{CurrentPressure}</p>
              <div className={styles.img_wrapper}>
                <StatusArc category={pressureCategory} />
              </div>
            </div>
            <div className={styles.title_wrapper}>
              <h4>Давление</h4>
              <p>{pressureCategory.text}</p>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a className={styles.feelings_item}>
            <div className={styles.category_wrapper}>
              <img src="" alt="" />
            </div>
            <div className={styles.title_wrapper}>
              <h4>Луна</h4>
              <p>убывающая</p>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a className={styles.feelings_item}>
            <div className={styles.category_wrapper}>
              <p>{CurrentUvIndex}</p>
              <div className={styles.img_wrapper}>
                <StatusArc category={uvCategory} />
              </div>
            </div>
            <div className={styles.title_wrapper}>
              <h4>УФ-индекс</h4>
              <p>{uvCategory.text}</p>
            </div>
          </a>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default WeatherAndFeelings;
