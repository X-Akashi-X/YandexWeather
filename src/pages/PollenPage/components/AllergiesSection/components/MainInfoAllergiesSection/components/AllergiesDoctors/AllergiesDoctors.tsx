import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import styles from "./allergiesDoctors.module.scss";
import { Logo } from ".";
import { doctorsConfig } from "./config";

const AllergiesDoctors = () => {
  return (
    <section className={styles.section_wrapper}>
      <div className={styles.title_logo_wrapper}>
        <h3>Отвечают врачи</h3>
        <img src={Logo} alt="" />
      </div>
      <Swiper
        modules={[Navigation, FreeMode]}
        slidesPerView="auto"
        spaceBetween={3}
        freeMode={true}
        touchRatio={1}
        navigation
        loop={true}
        className={styles.slides_wrapper}
      >
        {doctorsConfig.map(({ slide, id }) => (
          <SwiperSlide className={styles.slide} key={id}>
            <img src={slide} alt={id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default AllergiesDoctors;
