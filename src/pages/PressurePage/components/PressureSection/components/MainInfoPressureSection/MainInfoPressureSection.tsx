import { useState } from "react";
import CurrentFeelingsPressure from "./components/CurrentFeelingsPressure/CurrentFeelingsPressure";
import PressureGroups from "./components/PressureGroups/PressureGroups";
import styles from "./mainInfoPressureSection.module.scss";
import useServices from "@services/useServices";
import PressureTimeLineChart from "./components/PressureTimeLineChart/PressureTimeLineChart";
import { pressureHourlyToChartItems } from "@adapters/pressureChartAdapters";
import TwoWeeksPressureChart from "./components/TwoWeeksPressureChart/TwoWeeksPressureChart";
import WeatherOnMaps from "@components/WeatherOnMaps/WeatherOnMaps";
import FAQPressureSection from "./components/FAQPressureSection/FAQPressureSection";

const MainInfoPressureSection = () => {
  const { getTwoWeekHourlyData } = useServices();
  const { twoWeeks } = getTwoWeekHourlyData;
  const [active, setActive] = useState<string | null>(null);

  const activeDay =
    twoWeeks.find((day) => day.dateKey === active) ?? twoWeeks[0];

  return (
    <section className={styles.section_wrapper}>
      <CurrentFeelingsPressure />
      <PressureGroups
        active={activeDay?.dateKey ?? null}
        setActive={setActive}
      />
      {activeDay && (
        <PressureTimeLineChart
          items={pressureHourlyToChartItems(activeDay.fullHours)}
          dateKey={activeDay.dateKey}
        />
      )}
      <TwoWeeksPressureChart />
      <WeatherOnMaps style={{marginBottom: "36px"}} />
      <FAQPressureSection />
    </section>
  );
};

export default MainInfoPressureSection;
