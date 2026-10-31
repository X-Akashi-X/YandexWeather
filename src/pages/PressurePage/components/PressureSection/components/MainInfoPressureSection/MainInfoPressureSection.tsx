import { useState } from "react";
import CurrentFeelingsPressure from "./components/CurrentFeelingsPressure/CurrentFeelingsPressure";
import PressureGroups from "./components/PressureGroups/PressureGroups";
import styles from "./mainInfoPressureSection.module.scss";
import useServices from "@services/useServices";
import PressureTimeLineChart from "./components/PressureTimeLineChart/PressureTimeLineChart";
import { pressureToChartitems } from "@adapters/pressureChartAdapters";

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
          items={pressureToChartitems(activeDay.fullHours)}
          dateKey={activeDay.dateKey}
        />
      )}
    </section>
  );
};

export default MainInfoPressureSection;
