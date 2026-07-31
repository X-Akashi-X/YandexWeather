import styles from "./weatherOnMaps.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Precipitation from "@assets/image/weatherOnMaps/precipitationMap.jpg";
import Pollen from "@assets/image/weatherOnMaps/pollenMap.jpg";
import Temp from "@assets/image/weatherOnMaps/tempMap.jpg";
import Snow from "@assets/image/weatherOnMaps/snowMap.jpg";
import Wind from "@assets/image/weatherOnMaps/windMap.jpg";
import Pressure from "@assets/image/weatherOnMaps/pressureMap.jpg";

const WeatherOnMaps = () => {
  return (
    <section className={styles.section_wrapper}>
      <h3>Прогноз погоды на картах</h3>
      <Swiper
        className={styles.maps_wrapper}
        modules={[Navigation]}
        slidesPerView={3}
        slidesPerGroup={1}
        navigation
      >
        <SwiperSlide>
          <a
            className={styles.maps_item}
            style={{ backgroundImage: `url(${Precipitation})` }}
          >
            <button>Карта осадков</button>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            className={styles.maps_item}
            style={{ backgroundImage: `url(${Pollen})` }}
          >
            <button>Пыльца</button>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            className={styles.maps_item}
            style={{ backgroundImage: `url(${Temp})` }}
          >
            <button>Температура</button>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            className={styles.maps_item}
            style={{ backgroundImage: `url(${Snow})` }}
          >
            <button>Глубина снега</button>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            className={styles.maps_item}
            style={{ backgroundImage: `url(${Wind})` }}
          >
            <button>Ветер</button>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            className={styles.maps_item}
            style={{ backgroundImage: `url(${Pressure})` }}
          >
            <button>Давление</button>
          </a>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default WeatherOnMaps;
