import styles from "./currentMoonSection.module.scss";
import MoonHeader from "./components/MoonHeader/MoonHeader";
import MoonDetails from "./components/MoonDetails/MoonDetails";
import useServices from "@services/useServices";

const CurrentMoonSection = () => {
  const { getMonthlyDailyData } = useServices();
  const todayData = getMonthlyDailyData
    .find((m) => m.isCurrentMonth)
    ?.days.find((d) => d.isToday);

  return (
    <section className={styles.section_wrapper}>
      {todayData && <MoonHeader data={todayData} />}
      {todayData && <MoonDetails data={todayData} />}
    </section>
  );
};

export default CurrentMoonSection;
