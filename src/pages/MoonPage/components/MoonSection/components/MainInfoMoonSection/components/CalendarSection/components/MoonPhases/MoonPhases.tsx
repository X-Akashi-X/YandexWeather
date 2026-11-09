import type { MonthlyDailyData } from "@ts/weather";
import styles from "./moonPhases.module.scss";

const MoonPhases = ({ month }: { month: MonthlyDailyData }) => {
  return (
    <div className={styles.main_wrapper}>
      {month.monthlyPhases.map(
        ({ firstDay, lastDay, moonPhase, isToday, month }) => (
          <div
            className={`${styles.phase_item} ${isToday ? styles.active : ""}`}
            key={firstDay}
          >
            <img src={moonPhase.icon} alt="" />
            <p className={styles.phase}>{moonPhase.text}</p>
            <p className={styles.dates}>
              {firstDay === lastDay
                ? `${firstDay} ${month}`
                : `${firstDay}–${lastDay} ${month}`}
            </p>
          </div>
        ),
      )}
    </div>
  );
};

export default MoonPhases;
