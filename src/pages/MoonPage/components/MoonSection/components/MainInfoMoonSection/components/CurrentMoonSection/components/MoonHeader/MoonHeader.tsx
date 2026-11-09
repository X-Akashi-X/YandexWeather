import styles from "./moonHeader.module.scss";
import type { MonthlyDailyDataDays } from "@ts/weather";

const MoonHeader = ({ data }: { data: MonthlyDailyDataDays }) => {
  const { moonPhase, formattedDate } = data;

  return (
    <div className={styles.moon_header}>
      <img src={moonPhase.icon} alt="" />
      <div className={styles.info_header}>
        <p className={styles.info_date}>Сегодня, {formattedDate}</p>
        <p className={styles.info_phase}>{moonPhase.text}</p>
      </div>
    </div>
  );
};

export default MoonHeader;
