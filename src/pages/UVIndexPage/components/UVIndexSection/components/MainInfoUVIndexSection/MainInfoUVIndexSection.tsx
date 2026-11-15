import UVIndexCategoriesList from "./components/UVIndexCategoriesList/UVIndexCategoriesList";
import UVIndexTimeLine from "./components/UVIndexTimeLine/UVIndexTimeLine";
import styles from "./MainInfoUVIndexSection.module.scss";
import type { TwoWeekDayData } from "@ts/weather";
import FAQUVIndexSection from "./components/FAQUVIndexSection/FAQUVIndexSection";

const MainInfoUVIndexSection = ({ active }: { active: TwoWeekDayData }) => {
  return (
    <section className={styles.section_wrapper}>
      {active && <UVIndexTimeLine data={active.dayHours} />}
      <UVIndexCategoriesList />
      <FAQUVIndexSection />
    </section>
  );
};

export default MainInfoUVIndexSection;
