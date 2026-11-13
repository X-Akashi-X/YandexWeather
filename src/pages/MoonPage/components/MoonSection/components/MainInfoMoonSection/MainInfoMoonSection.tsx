import FAQ from "@components/FAQ/FAQ";
import CalendarSection from "./components/CalendarSection/CalendarSection";
import CurrentMoonSection from "./components/CurrentMoonSection/CurrentMoonSection";
import styles from "./MainInfoMoonSection.module.scss";
import useServices from "@services/useServices";
import { getFAQMoonDayItems, getFAQMoonPhasesItems } from "@configs/FAQ";
import { useSelector } from "react-redux";
import type { RootState } from "@store/store";
import {
  selectActiveMonthData,
  selectTodayData,
} from "@store/selectors/moonCalendarSelectors";

const MainInfoMoonSection = () => {
  const { getMonthlyDailyData } = useServices();

  const { activeTab } = useSelector((state: RootState) => state.moonCalendar);

  const currentMonth = useSelector((state: RootState) =>
    selectActiveMonthData(state, getMonthlyDailyData),
  );
  const monthlyPhases = currentMonth.monthlyPhases;
  const todayData = selectTodayData(getMonthlyDailyData);

  const newMoon = monthlyPhases.find((p) => p.moonPhase.text === "новолуние");
  const waxingMoon = monthlyPhases.find((p) => p.moonPhase.text === "растущая");
  const fullMoon = monthlyPhases.find((p) => p.moonPhase.text === "полнолуние");
  const waningMoon = monthlyPhases.find(
    (p) => p.moonPhase.text === "убывающая",
  );

  const isPhases = newMoon && waxingMoon && fullMoon && waningMoon;

  const configDays = todayData ? getFAQMoonDayItems(todayData) : [];
  const configPhases = isPhases
    ? getFAQMoonPhasesItems({
        newMoon,
        waxingMoon,
        fullMoon,
        waningMoon,
        currentMonth,
      })
    : [];

  return (
    <section className={styles.section_wrapper}>
      <CurrentMoonSection />
      <CalendarSection activeTab={activeTab} />
      {activeTab === "days" && <FAQ config={configDays} />}
      {activeTab === "phases" && <FAQ config={configPhases} />}
    </section>
  );
};

export default MainInfoMoonSection;
