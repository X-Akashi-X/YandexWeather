import { useDispatch } from "react-redux";
import { cities, forecast, partners, services, stores } from "./config";
import styles from "./footer.scss.module.scss";

import { Link } from "react-router-dom";
import { setCoordinates } from "@store/slices/geoSlice";

const Footer = () => {
  const dispatch = useDispatch();

  const handleSelectCity = (lat: number, lon: number) => {
    dispatch(setCoordinates({ lat: lat, lon: lon }));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer>
      <p>
        Прогноз погоды в Минске на сегодня, завтра и на ближайшую неделю с
        точностью до района — рассчитан с помощью{" "}
        <a
          href="https://yandex.ru/pogoda/technology?utm_source=main_page"
          target="_blank"
          className={styles.meteum_link}
        >
          собственной технологии Метеум
        </a>
      </p>
      <div className={styles.cities_wrapper}>
        {cities.map(({ title, id, lat, lon }) => (
          <button
            onClick={() => {
              handleSelectCity(lat, lon);
            }}
            key={id}
          >
            {title}
          </button>
        ))}
      </div>
      <nav>
        <div className={styles.links_wrapper}>
          <h4>Ссылки</h4>
          {services.map(({ link, title, id }) => (
            <a href={link} target="_blank" key={id}>
              {title}
            </a>
          ))}
        </div>
        <div className={styles.forecast_wrapper}>
          <h4>Прогнозы</h4>
          {forecast.map(({ link, title, id }) => (
            <Link to={link} key={id}>
              {title}
            </Link>
          ))}
        </div>
        <div className={styles.partners_wrapper}>
          <h4>Партнёрам</h4>
          {partners.map(({ link, title, id }) => (
            <a href={link} target="_blank" key={id}>
              {title}
            </a>
          ))}
        </div>
        <div className={styles.stores_wrapper}>
          <h4>Скачайте приложение</h4>
          {stores.map(({ link, img, id }) => (
            <a href={link} target="_blank" key={id}>
              <img src={img} alt={id} />
            </a>
          ))}
        </div>
      </nav>
      <div className={styles.requisite_wrapper}>
        <p className={styles.requisite_sources}>
          Исходные данные: ООО «Яндекс.Пробки»; Росгидромет, ФГБУ «ЦАО»; NOAA;
          Белгидромет
        </p>
        <p>© 2000—2026 ЯНДЕКС</p>
      </div>
    </footer>
  );
};

export default Footer;
