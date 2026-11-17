import FAQ from "@components/FAQ/FAQ";
import styles from "./FAQPressureSection.module.scss";
import { getFAQPressureItems } from "@configs/FAQ";
import useServices from "@services/useServices";

const FAQPressureSection = () => {
  const { getTodayData, getTomorrowData } = useServices();

  return (
    <section className={styles.section_wrapper}>
      <FAQ config={() => getFAQPressureItems(getTodayData, getTomorrowData)} />
    </section>
  );
};

export default FAQPressureSection;
