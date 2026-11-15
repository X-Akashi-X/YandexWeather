import { useState } from "react";
import UVIndexCurrent from "./components/UVIndexCurrent/UVIndexCurrent";
import styles from "./UVIndexSection.module.scss";
import useServices from "@services/useServices";

const UVIndexSection = () => {
  const { getTwoWeekHourlyData } = useServices();
  const { tenDays } = getTwoWeekHourlyData;
  const [active, setActive] = useState<string | null>(null);

  const activeDay = tenDays.find((day) => day.dateKey === active) ?? tenDays[0];

  return (
    <section className={styles.section_wrapper}>
      <UVIndexCurrent
        active={activeDay ?? null}
        setActive={setActive}
        activeDateKey={activeDay?.dateKey ?? null}
      />
    </section>
  );
};

export default UVIndexSection;
