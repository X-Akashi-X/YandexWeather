import type { FAQItems } from "@ts/props";
import styles from "./FAQItem.module.scss";
import Arrow from "@assets/icons/arrowMore.svg";

const FAQItem = ({ activeItem, text, title, toggle, i }: FAQItems) => {
  return (
    <div className={styles.faq_items} onClick={() => toggle(i)}>
      <div className={styles.title_wrapper}>
        <p>{title}</p>
        <img
          src={Arrow}
          alt="Стрелка"
          className={activeItem === i ? "rotate180" : ""}
        />
      </div>
      {activeItem === i && <p className={styles.forecast}>{text}</p>}
    </div>
  );
};

export default FAQItem;