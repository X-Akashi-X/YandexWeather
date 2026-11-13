import type { MonthlyDailyDataDays } from "@ts/weather";
import { moonDetailsConfig } from "./config";
import styles from "./moonDetails.module.scss";

const MoonDetails = ({ data }: { data: MonthlyDailyDataDays }) => {
  const config = data ? moonDetailsConfig(data.details) : [];

  return (
    <div className={styles.moon_details}>
      {config.map(({ title, info, id }) => (
        <div className={styles.moon_details_item} key={id}>
          <p className={styles.title_details}>{title}</p>
          <p className={styles.info}>{info}</p>
        </div>
      ))}
    </div>
  );
};

export default MoonDetails;
