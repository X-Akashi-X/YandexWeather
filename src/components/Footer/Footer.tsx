import { cities, forecast, partners, services, stores } from "./config";
import styles from "./footer.scss.module.scss";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <p>
        Прогноз погоды в Минске на сегодня, завтра и на ближайшую неделю с
        точностью до района — рассчитан с помощью{" "}
        <a
          href="https://yandex.ru/pogoda/technology?utm_source=main_page"
          className={styles.meteum_link}
        >
          собственной технологии Метеум
        </a>
      </p>
      <div className={styles.cities_wrapper}>
        {cities.map(({ title, id }) => (
          <p key={id}>{title}</p>
        ))}
      </div>
      <nav>
        <div className={styles.links_wrapper}>
          <h4>Ссылки</h4>
          {services.map(({ link, title, id }) => (
            <a href={link} key={id}>
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
            <a href={link} key={id}>
              {title}
            </a>
          ))}
        </div>
        <div className={styles.stores_wrapper}>
          <h4>Скачайте приложение</h4>
          {stores.map(({ link, img, id }) => (
            <a href={link} key={id}>
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
