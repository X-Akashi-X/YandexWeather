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
  const minAllergicsCount = currentPollenCategory.minAllergicsCount;
  const topAllergies = currentAllergies.topAllergies;

  const [allergics, setAllergics] = useState(0);

  useEffect(() => {
    const randomAllergics =
      maxAllergicsCount === minAllergicsCount
        ? minAllergicsCount
        : Math.round(
            Math.random() * (maxAllergicsCount - minAllergicsCount + 1) +
              minAllergicsCount,
          );
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setAllergics(randomAllergics);
  }, [cityUrl, maxAllergicsCount, minAllergicsCount]);

  return (
    <section
      className={styles.section_wrapper}
      style={{ backgroundColor: currentPollenCategory.colorAllergies }}
    >
      {currentPollenCategory.imgAllergies && (
        <img
          className={styles.category_img}
          src={currentPollenCategory.imgAllergies.img}
          style={{
            bottom: currentPollenCategory.imgAllergies.y,
            right: currentPollenCategory.imgAllergies.x,
          }}
        />
      )}
      <div className={styles.stats}>
        <p className={styles.title}>Пыльца</p>
        <p className={styles.category_pollen}>
          Сейчас {currentPollenCategory.text}
        </p>
        <p className={styles.allergies}>
          {topAllergies}{" "}
          {topAllergies === "Пыльца не летает, не раздражает"
            ? ""
            : "щекочут нос"}
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
