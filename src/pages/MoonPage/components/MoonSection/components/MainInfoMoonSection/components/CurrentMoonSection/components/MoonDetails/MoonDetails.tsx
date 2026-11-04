import useServices from "@services/useServices";
import { moonDetailsConfig } from "./config";
import styles from "./moonDetails.module.scss";

const MoonDetails = () => {
  const { getTodayData } = useServices();

  const config = moonDetailsConfig(getTodayData);

  return (
    <div className={styles.moon_details}>
      {config.map(({ title, info, id }) => (
        <div className={styles.moon_details_item} key={id}>
          <p className={styles.title_details}>{title}</p>
          <p>{info}</p>
        </div>
      ))}
    </div>
  );
};

export default MoonDetails;
