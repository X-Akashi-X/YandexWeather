import useMap from "@hooks/useMap";
import styles from "./mainWeatherMap.module.scss";
import Logo from "@assets/icons/header/yandexLogo.svg";
import Teg from "@assets/icons/header/yandexTeg.svg";
import { Link } from "react-router-dom";

const WeatherMap = () => {
  const { mapContainer } = useMap(false, "map_pointer");

  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.map_container} ref={mapContainer} />
      <div className={styles.img_container}>
        <a href="https://yandex.by/?via=ywhl" target="_blank">
          <img src={Logo} alt="Перейти на главную яндекса" />
        </a>
        <Link to="/">
          <img src={Teg} alt="Перейти на главную яндекс.погода" />
        </Link>
      </div>
      <button>
        <Link to="/">Карта осадков</Link>
      </button>
    </section>
  );
};

export default WeatherMap;
