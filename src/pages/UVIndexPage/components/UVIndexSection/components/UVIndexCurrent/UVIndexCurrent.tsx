import type { UVIndexStateActive } from "@ts/props";
import UVIndexDays from "./components/UVIndexDays/UVIndexDays";
import styles from "./UVIndexCurrent.module.scss";
import UVIndexCurrentDetails from "./components/UVIndexCurrentDetails/UVIndexCurrentDetails";
import HomeTabletButton from "@components/HomeTabletButton/HomeTabletButton";

const UVIndexCurrent = ({
  active,
  setActive,
  activeDateKey,
}: UVIndexStateActive) => {
  return (
    <section
      className={styles.section_wrapper}
      style={{ background: active?.twoWeekUVCategory.bgGradient }}
    >
      <HomeTabletButton
        style={{ position: "absolute", top: "10px", left: "0" }}
      />
      <p className={styles.main_title}>УФ-индекс</p>
      <div className={styles.main_wrapper}>
        <UVIndexDays activeDateKey={activeDateKey} setActive={setActive} />
        {active && <UVIndexCurrentDetails active={active} />}
      </div>
    </section>
  );
};

export default UVIndexCurrent;
