import useMap from "@hooks/useMap";
import styles from "./mainWeatherMap.module.scss";
import { Link } from "react-router-dom";
import HomeTabletButton from "@components/HomeTabletButton/HomeTabletButton";

const WeatherMap = () => {
  const { mapContainer } = useMap(false, "map_pointer");

  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.main_container} ref={mapContainer} />
      <HomeTabletButton
        style={{ position: "absolute", left: "10px", top: "5px" }}
      />
      <Link className={styles.precipitation_link} to="/">
        Карта осадков
      </Link>
    </section>
  );
};

export default WeatherMap;
