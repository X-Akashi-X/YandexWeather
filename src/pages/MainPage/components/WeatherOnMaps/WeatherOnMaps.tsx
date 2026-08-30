import styles from "./weatherOnMaps.module.scss";
import { Link } from "react-router-dom";
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
        slidesPerView={1}
        slidesPerGroup={1}
        spaceBetween={10}
        breakpoints={{
          1151: {
            slidesPerView: 3,
          },
          671: {
            slidesPerView: 2.5,
          },
          521: {
            slidesPerView: 2,
          },
        }}
        navigation
      >
        <SwiperSlide>
          <Link
            to="/"
            className={styles.maps_item}
            style={{ backgroundImage: `url(${Precipitation})` }}
          >
            <button>Карта осадков</button>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            to="/"
            className={styles.maps_item}
            style={{ backgroundImage: `url(${Pollen})` }}
          >
            <button>Пыльца</button>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            to="/"
            className={styles.maps_item}
            style={{ backgroundImage: `url(${Temp})` }}
          >
            <button>Температура</button>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            to="/"
            className={styles.maps_item}
            style={{ backgroundImage: `url(${Snow})` }}
          >
            <button>Глубина снега</button>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            to="/"
            className={styles.maps_item}
            style={{ backgroundImage: `url(${Wind})` }}
          >
            <button>Ветер</button>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            to="/"
            className={styles.maps_item}
            style={{ backgroundImage: `url(${Pressure})` }}
          >
            <button>Давление</button>
          </Link>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default WeatherOnMaps;
