import styles from "./weatherAndFeelings.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Pollen from "@assets/icons/mainInfoSection/pollen.svg";
import Frame from "@assets/icons/mainInfoSection/frameDel.svg";

const WeatherAndFeelings = () => {
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
            <div className={styles.img_wrapper}>
              <img src={Pollen} alt="" />
              <img src={Frame} alt="" />
            </div>
            <div className={styles.title_wrapper}>
              <h4>Пыльца</h4>
              <p>липа, злаки</p>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a className={styles.feelings_item}>
            <div className={styles.img_wrapper}>
              <p>4</p>
              <img src={Frame} alt="" />
            </div>
            <div className={styles.title_wrapper}>
              <h4>Магнитное поле</h4>
              <p>слабая буря</p>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a className={styles.feelings_item}>
            <div className={styles.img_wrapper}>
              <p>733</p>
              <img src={Frame} alt="" />
            </div>
            <div className={styles.title_wrapper}>
              <h4>Давление</h4>
              <p>в норме</p>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a className={styles.feelings_item}>
            <div className={styles.img_wrapper}>
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
            <div className={styles.img_wrapper}>
              <p>3</p>
              <img src={Frame} alt="" />
            </div>
            <div className={styles.title_wrapper}>
              <h4>УФ-индекс</h4>
              <p>умеренный</p>
            </div>
          </a>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default WeatherAndFeelings;
