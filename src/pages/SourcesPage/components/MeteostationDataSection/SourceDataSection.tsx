import CurrentForecastData from "./components/CurrentForecastData/CurrentForecastData";
import MeteostationData from "./components/MeteostationData/MeteostationData";
import PrecipitationData from "./components/PrecipitationData/PrecipitationData";
import styles from "./sourceDataSection.module.scss";

const SourceDataSection = () => {
  return (
    <section className={styles.section_wrapper}>
      <div className={styles.main_wrapper}>
        <h2 className={styles.sorce_title}>Источник данных</h2>
        <MeteostationData />
        <PrecipitationData />
        <CurrentForecastData />
      </div>
    </section>
  );
};

export default SourceDataSection;
