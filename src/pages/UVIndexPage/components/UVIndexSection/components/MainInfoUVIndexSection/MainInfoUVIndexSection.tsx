import UVIndexCategoriesList from "./components/UVIndexCategoriesList/UVIndexCategoriesList";
import UVIndexTimeLine from "./components/UVIndexTimeLine/UVIndexTimeLine";
import styles from "./MainInfoUVIndexSection.module.scss";
import type { TwoWeekDayData } from "@ts/weather";

const MainInfoUVIndexSection = ({ active }: { active: TwoWeekDayData }) => {
  return (
    <section className={styles.section_wrapper}>
      {active && <UVIndexTimeLine data={active.dayHours} />}
      <UVIndexCategoriesList />
    </section>
  );
};

export default MainInfoUVIndexSection;
