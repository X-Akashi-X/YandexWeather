import type { DataItems } from "@ts/props";
import styles from "./dataItem.module.scss";

const DataItem = ({ title, forecastText }: DataItems) => {
  return (
    <div className={styles.data_wrapper}>
      <p className={styles.title}>{title}</p>
      <p className="small_grey_text">{forecastText}</p>
    </div>
  );
};

export default DataItem;
