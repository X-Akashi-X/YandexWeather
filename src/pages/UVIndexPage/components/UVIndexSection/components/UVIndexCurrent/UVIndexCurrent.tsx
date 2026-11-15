import type { UVIndexStateActive } from "@ts/props";
import UVIndexDays from "./components/UVIndexDays/UVIndexDays";
import styles from "./UVIndexCurrent.module.scss";
import UVIndexCurrentDetails from "./components/UVIndexCurrentDetails/UVIndexCurrentDetails";

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
      <div className={styles.main_wrapper}>
        <UVIndexDays activeDateKey={activeDateKey} setActive={setActive} />
        {active && <UVIndexCurrentDetails active={active} />}
      </div>
    </section>
  );
};

export default UVIndexCurrent;
