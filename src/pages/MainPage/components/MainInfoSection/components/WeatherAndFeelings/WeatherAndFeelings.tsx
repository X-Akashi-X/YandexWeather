import styles from "./weatherAndFeelings.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import useServices from "@services/useServices";
import { getFeelingSlide } from "./config";
import FeelingSlide from "./components/FeelingSlide/FeelingSlide";

const WeatherAndFeelings = () => {
  const { getCurrentData, getTodayData } = useServices();

  const feelingSlides = getFeelingSlide(getCurrentData, getTodayData);

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
        {feelingSlides.map(
          ({ img, category, title, text, classImg, number, link, id }) => (
            <SwiperSlide key={id}>
              <FeelingSlide
                img={img}
                category={category}
                title={title}
                text={text}
                classImg={classImg}
                number={number}
                link={link}
              />
            </SwiperSlide>
          ),
        )}
      </Swiper>
    </section>
  );
};

export default WeatherAndFeelings;
