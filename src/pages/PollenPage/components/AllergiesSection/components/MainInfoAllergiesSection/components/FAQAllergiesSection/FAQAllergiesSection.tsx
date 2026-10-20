import FAQ from "@components/FAQ/FAQ";
import styles from "./FAQAllergiesSection.module.scss";
import { getFAQAllergiesItems } from "@configs/FAQ";

const FAQAllergiesSection = () => {
  const config = getFAQAllergiesItems;
  
  return (
    <section className={styles.section_wrapper}>
      <FAQ config={config} />
    </section>
  );
};

export default FAQAllergiesSection;
