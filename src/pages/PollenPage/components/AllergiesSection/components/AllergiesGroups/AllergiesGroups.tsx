import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import styles from "./allergiesGroups.module.scss";
import useServices from "@services/useServices";
import { getPollenCategory } from "@utils/categories/categories";

const AllergiesGroups = () => {
  const { getCurrentData } = useServices();
  const { currentAllergies } = getCurrentData;

  return (
    <Swiper
      className={styles.main_wrapper}
      modules={[Navigation, FreeMode]}
      slidesPerView="auto"
      spaceBetween={6}
      freeMode={true}
      touchRatio={1}
      navigation
      enabled={true}
      breakpoints={{
        781: {
          enabled: false,
        },
      }}
    >
      {currentAllergies.allAllergies.map(({ name, value }) => {
        const category = getPollenCategory(value);

        return (
          <SwiperSlide className={styles.slide} key={name}>
            <div
              className={styles.circle}
              style={{ backgroundColor: `${category.colorAllergies}` }}
            ></div>
            <p className={styles.name}>{name}</p>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default AllergiesGroups;
