import useServices from "@services/useServices";
import { getDataLeftItemConfig, getDataRightItemConfig } from "./config";
import styles from "./currentForecastData.module.scss";
import DataItem from "./components/DataItem/DataItem";

const CurrentForecastData = () => {
  const { getCurrentData } = useServices();
  const { currentApparentTemperature } = getCurrentData;
  const dataItemLeftConfig = getDataLeftItemConfig(getCurrentData);
  const dataItemRightConfig = getDataRightItemConfig(getCurrentData);

  return (
    <section className={styles.section_wrapper}>
      <h3>Ощущается как</h3>
      <div className={styles.current_wrapper}>
        <div className={styles.named_wrapper}>
          {dataItemLeftConfig.map(({ title, forecastText, id }) => (
            <DataItem title={title} forecastText={forecastText} key={id} />
          ))}
        </div>
        <div className={styles.feelings_wrapper}>
          <p className={styles.title}>{`${currentApparentTemperature}°`}</p>
        </div>
        <div className={styles.named_wrapper}>
          {dataItemRightConfig.map(({ title, forecastText, id }) => (
            <DataItem title={title} forecastText={forecastText} key={id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentForecastData;
