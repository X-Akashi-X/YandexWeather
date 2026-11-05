import useServices from "@services/useServices";
import styles from "./moonHeader.module.scss";

const MoonHeader = () => {
  const { getTodayData } = useServices();
  const { todayMoonPhase, todayDate } = getTodayData;

  return (
    <div className={styles.moon_header}>
      <img src={todayMoonPhase.icon} alt="" />
      <div className={styles.info_header}>
        <p className={styles.info_date}>Сегодня, {todayDate}</p>
        <p className={styles.info_phase}>{todayMoonPhase.text} Луна</p>
      </div>
    </div>
  );
};

export default MoonHeader;
