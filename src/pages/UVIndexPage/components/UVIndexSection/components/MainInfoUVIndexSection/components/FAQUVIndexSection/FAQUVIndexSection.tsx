import FAQ from "@components/FAQ/FAQ";
import styles from "./FAQUVIndexSection.module.scss";
import { getFAQUVIndexItems } from "@configs/FAQ";

const FAQUVIndexSection = () => {
  const config = getFAQUVIndexItems;

  return (
    <section className={styles.section_wrapper}>
      <FAQ config={config} />
    </section>
  );
};

export default FAQUVIndexSection;
