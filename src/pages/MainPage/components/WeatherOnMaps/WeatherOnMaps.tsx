import styles from "./weatherOnMaps.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import { maps } from "./config";
import MiniMapSlide from "./components/MiniMapSlide/MiniMapSlide";

const WeatherOnMaps = () => {
  return (
    <section className={styles.section_wrapper}>
      <h3 className={styles.title_main}>Прогноз погоды на картах</h3>
      <Swiper
        className={styles.maps_wrapper}
        modules={[Navigation, FreeMode]}
        slidesPerView="auto"
        slidesPerGroup={1}
        spaceBetween={10}
        freeMode={true}
        touchRatio={1}
        navigation
      >
        {maps.map(({ link, bgURL, title, id }) => (
          <SwiperSlide key={id}>
            <MiniMapSlide link={link} bgURL={bgURL} title={title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default WeatherOnMaps;
