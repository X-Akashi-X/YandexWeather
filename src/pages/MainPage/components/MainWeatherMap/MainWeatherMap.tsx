import useMap from "@hooks/useMap";
import styles from "./mainWeatherMap.module.scss";
import { Link } from "react-router-dom";

const WeatherMap = () => {
  const { mapContainer } = useMap(false, "map_pointer");

  return (
    <section className={styles.sectionWrapper}>
      <div ref={mapContainer}></div>
      <button>
        <Link to="/">Карта осадков</Link>
      </button>
    </section>
  );
};

export default WeatherMap;
