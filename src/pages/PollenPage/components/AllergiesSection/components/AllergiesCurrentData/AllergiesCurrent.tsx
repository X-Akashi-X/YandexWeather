import useServices from "@services/useServices";
import styles from "./allergiesCurrent.module.scss";
import Report from "@assets/icons/allergiesSection/reportIcon.svg";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "@store/store";

const AllergiesCurrentData = () => {
  const { getCurrentData } = useServices();
  const { currentPollenCategory, currentAllergies } = getCurrentData;
  const { cityUrl } = useSelector((state: RootState) => state.geo);

  const maxAllergicsCount = currentPollenCategory.maxAllergicsCount;
  const minAllergicsCount = currentPollenCategory.maxAllergicsCount;

  const [allergics, setAllergics] = useState(0);

  useEffect(() => {
    const randomAllergics =
      maxAllergicsCount === minAllergicsCount
        ? minAllergicsCount
        : Math.round(
            Math.random() * (maxAllergicsCount - minAllergicsCount) +
              minAllergicsCount,
          );
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setAllergics(randomAllergics);
  }, [cityUrl]);

  return (
    <section className={styles.section_wrapper}>
      <img
        className={styles.category_img}
        src="https://weather.yastatic.net/s3/weather-frontend/front2/_next/static/media/weak-desktop.a4ec3a6f.svg"
        alt="Категория"
      />
      <div className={styles.stats}>
        <p className={styles.title}>Пыльца</p>
        <p className={styles.category_pollen}>
          Сейчас {currentPollenCategory.text}
        </p>
        <p>
          {currentAllergies}{" "}
          {currentAllergies === "Аллергены отсутствуют" ? "" : "щекочут нос"}
        </p>
        <div className={styles.allergics_around}>
          <img src={Report} alt="Внимание" />
          <p>А симптомы отмечают {allergics} аллергиков рядом</p>
        </div>
      </div>
    </section>
  );
};

export default AllergiesCurrentData;
