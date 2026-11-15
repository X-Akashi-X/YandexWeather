import { useState } from "react";
import UVIndexCurrent from "./components/UVIndexCurrent/UVIndexCurrent";
import styles from "./UVIndexSection.module.scss";
import useServices from "@services/useServices";
import MainInfoUVIndexSection from "./components/MainInfoUVIndexSection/MainInfoUVIndexSection";

const UVIndexSection = () => {
  const { getTwoWeekHourlyData } = useServices();
  const { tenDays } = getTwoWeekHourlyData;
  const [active, setActive] = useState<string | null>(null);

  const activeDay = tenDays.find((day) => day.dateKey === active) ?? tenDays[0];

  return (
    <section className={styles.section_wrapper}>
      <UVIndexCurrent
        active={activeDay}
        setActive={setActive}
        activeDateKey={activeDay?.dateKey ?? null}
      />
      <MainInfoUVIndexSection active={activeDay} />
    </section>
  );
};

export default UVIndexSection;
