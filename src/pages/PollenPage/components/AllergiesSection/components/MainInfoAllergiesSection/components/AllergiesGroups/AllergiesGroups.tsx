import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import styles from "./allergiesGroups.module.scss";
import useServices from "@services/useServices";
import { getPollenCategory } from "@utils/categories/categories";
import type { AllergiesStateActive } from "@ts/props";

const AllergiesGroups = ({ active, setActive }: AllergiesStateActive) => {
  const { getCurrentData } = useServices();
  const { currentAllergies } = getCurrentData;

  const handleActive = (item: { name: string; value: number }) => {
    setActive?.(item);
  };

  return (
    <Swiper
      className={styles.main_wrapper}
      modules={[Navigation, FreeMode]}
      slidesPerView="auto"
      spaceBetween={6}
      freeMode={true}
      touchRatio={1}
      navigation
    >
      {currentAllergies.allAllergies.map(({ name, value }) => {
        const category = getPollenCategory(value);

        return (
          <SwiperSlide
            className={styles.slide}
            style={
              active?.name === name
                ? { backgroundColor: "rgba(38, 38, 51, 1)" }
                : {}
            }
            key={name}
            onClick={() => handleActive({ name, value })}
          >
            <div
              className={styles.circle}
              style={{ backgroundColor: `${category.colorAllergies}` }}
            />
            <p
              className={styles.name}
              style={active?.name === name ? { color: "white" } : {}}
            >
              {name}
            </p>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default AllergiesGroups;
