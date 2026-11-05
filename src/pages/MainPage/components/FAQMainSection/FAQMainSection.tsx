import FAQ from "@components/FAQ/FAQ";
import styles from "./FAQMainSection.module.scss";
import useServices from "@services/useServices";
import { getFAQMainItems } from "@configs/FAQ";

const FAQMainSection = () => {
  const { getCurrentData, getTodayData, getAdvancedOneDayData } = useServices();

  return (
    <section className={styles.section_wrapper}>
      <FAQ
        config={() =>
          getFAQMainItems(getCurrentData, getTodayData, getAdvancedOneDayData)
        }
      />
    </section>
  );
};

export default FAQMainSection;
