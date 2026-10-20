import { useState } from "react";
import styles from "./FAQ.module.scss";
import FAQItem from "./components/FAQItem";
import type { FAQItemData } from "@ts/props";

const FAQ = <T extends FAQItemData>({
  config,
}: {
  config: T[] | (() => T[]);
}) => {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  function toggleDropdown(i: number) {
    setActiveItem((prev) => (prev === i ? null : i));
  }

  const items = typeof config === "function" ? config() : config;

  return (
    <section className={styles.section_wrapper}>
      <h3 className={styles.title_main}>FAQ</h3>
      <div className={styles.main_wrapper}>
        {items.map(({ title, text, id }, i) => (
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
