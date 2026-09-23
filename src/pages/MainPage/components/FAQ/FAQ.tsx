import { useState } from "react";
import styles from "./FAQ.module.scss";
import useServices from "@services/useServices";
import { getFAQItems } from "./config";
import FAQItem from "./components/FAQItem";

const FAQ = () => {
  const { getCurrentData, getTodayData, getAdvancedOneDayData } = useServices();
  const [activeItem, setActiveItem] = useState<number | null>(null);

  function toggleDropdown(i: number) {
    setActiveItem((prev) => (prev === i ? null : i));
  }

  const FAQItems = getFAQItems(
    getCurrentData,
    getTodayData,
    getAdvancedOneDayData,
  );

  return (
    <section className={styles.section_wrapper}>
      <h3 className={styles.title_main}>FAQ</h3>
      <div className={styles.main_wrapper}>
        {FAQItems.map(({ title, text, id }, i) => (
          <FAQItem
            title={title}
            text={text}
            activeItem={activeItem}
            i={i}
            key={id}
            toggle={toggleDropdown}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
