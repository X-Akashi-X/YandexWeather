import { useEffect, useState } from "react";
import AllergiesChartAndMap from "./components/AllergiesChartAndMap/AllergiesChartAndMap";
import AllergiesGroups from "./components/AllergiesGroups/AllergiesGroups";
import styles from "./mainInfoAllergiesSection.module.scss";
import useServices from "@services/useServices";

const MainInfoAllergiesSection = () => {
  const { getCurrentData } = useServices();
  const { currentAllergies } = getCurrentData;

  const [active, setActive] = useState<{ name: string; value: number } | null>(
    null,
  );

  useEffect(() => {
    if (!active && currentAllergies.allAllergies.length > 0) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setActive(currentAllergies.allAllergies[0]);
    }
  }, [active, currentAllergies.allAllergies]);

  return (
    <section className={styles.section_wrapper}>
      <AllergiesGroups active={active} setActive={setActive} />
      <AllergiesChartAndMap active={active} />
    </section>
  );
};

export default MainInfoAllergiesSection;
