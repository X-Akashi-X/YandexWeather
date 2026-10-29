import FAQ from "@components/FAQ/FAQ";
import styles from "./FAQMagneticSection.module.scss";
import { getFAQMagneticItems } from "@configs/FAQ";

const FAQMagneticSection = () => {
  const config = getFAQMagneticItems;

  return (
    <section className={styles.section_wrapper}>
      <FAQ config={config} />
    </section>
  );
};

export default FAQMagneticSection;
