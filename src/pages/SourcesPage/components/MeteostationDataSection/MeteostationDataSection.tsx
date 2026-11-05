import CurrentForecastData from "./components/SourceCurrentForecastData/SourceCurrentForecastData";
import MeteostationData from "./components/SourceMeteostationData/SourceMeteostationData";
import PrecipitationData from "./components/SourcePrecipitationData/SourcePrecipitationData";
import styles from "./meteostationDataSection.module.scss";

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
