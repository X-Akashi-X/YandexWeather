import useMap from "@hooks/useMap";
import styles from "./mainWeatherMap.module.scss";

const WeatherMap = () => {
  const { mapContainer } = useMap(false);

  return (
    <section className={styles.sectionWrapper}>
      <div ref={mapContainer}></div>
      <button>Карта осадков</button>
    </section>
  );
};

export default WeatherMap;
