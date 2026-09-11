import type { EffectDetailsItems } from "@ts/props";
import styles from "./effectDetailsItem.module.scss";

const EffectDetailsItem = ({ icon, text, alt }: EffectDetailsItems) => {
  return (
    <div className={styles.effect_details_item}>
      <img src={icon} alt={alt} />
      <p>{text}</p>
    </div>
  );
};

export default EffectDetailsItem;
