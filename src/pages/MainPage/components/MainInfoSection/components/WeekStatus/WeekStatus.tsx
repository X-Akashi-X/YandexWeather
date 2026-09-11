import useServices from "@services/useServices";
import styles from "./weekStatus.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import { getWeekStatusSlide } from "./config";
import WeekStatusSlide from "./components/WeekStatusSlide";

const WeakStatus = () => {
  const { getTodayData, getTomorrowData, getWeekData, getWeekendData } =
    useServices();

  const weekStatusSlides = getWeekStatusSlide(
    getTodayData,
    getTomorrowData,
    getWeekData,
    getWeekendData,
  );

  return (
    <section className={styles.section_wrapper}>
      <Swiper
        className={styles.status_wrapper}
        modules={[Navigation, FreeMode]}
        slidesPerView="auto"
        spaceBetween={8}
        freeMode={true}
        touchRatio={1}
        navigation
      >
        {weekStatusSlides.map(
          ({
            link,
            img,
            title,
            info,
            minTemp,
            maxTemp,
            windCategory,
            minMaxWindSpeed,
            windGusts,
            linkRout,
            staticText,
            id,
          }) => (
            <SwiperSlide key={id}>
              <WeekStatusSlide
                link={link}
                img={img}
                title={title}
                info={info}
                minTemp={minTemp}
                maxTemp={maxTemp}
                windCategory={windCategory}
                minMaxWindSpeed={minMaxWindSpeed}
                windGusts={windGusts}
                linkRout={linkRout}
                staticText={staticText}
              />
            </SwiperSlide>
          ),
        )}
      </Swiper>
    </section>
  );
};

export default WeakStatus;
