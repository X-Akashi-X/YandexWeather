import styles from "./footer.scss.module.scss";
import GooglePlay from "@assets/icons/footer/googlePlayIcon.svg";
import AppStore from "@assets/icons/footer/appStoreIcon.svg";
import AppGallery from "@assets/icons/footer/appGalleryIcon.svg";
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
        <p>Минск</p>
        <p>Брест</p>
        <p>Витебск</p>
        <p>Гродно</p>
        <p>Гомель</p>
      </div>
      <nav>
        <div className={styles.links_wrapper}>
          <h4>Ссылки</h4>
          <a href="https://yandex.ru/support/weather/">Справка</a>
          <a href="https://yandex.ru/support/weather/">Обратная связь</a>
          <a href="https://yandex.ru/pogoda/b2b?utm_source=yandex&utm_medium=referral&utm_content=footer__business_solutions">
            Для бизнеса
          </a>
          <a href="https://yandex.ru/pogoda/b2b/smarthome">Для умного дома</a>
          <a href="https://yandex.ru/pogoda/b2b/smarthome">
            Пользовательское соглашение
          </a>
        </div>
        <div className={styles.forecast_wrapper}>
          <h4>Прогнозы</h4>
          <Link to="/">Прогноз погоды</Link>
          <Link to="/">Погода на месяц</Link>
          <Link to="/">Карта погоды</Link>
          <Link to="/">Погода на 10 дней</Link>
          <Link to="/">УФ-Индекс</Link>
          <Link to="/">Магнитные бури</Link>
          <Link to="/">Атмосферное давление</Link>
          <Link to="/">Фазы Луны</Link>
        </div>
        <div className={styles.break}></div>
        <div className={styles.partners_wrapper}>
          <h4>Партнёрам</h4>
          <a href="https://yandex.by/adv/products/context">Реклама</a>
          <a href="https://yandex.ru/pogoda/b2b?utm_source=footer">
            API Яндекс.Погоды
          </a>
        </div>
        <div className={styles.stores_wrapper}>
          <h4>Скачайте приложение</h4>
          <a href="https://redirect.appmetrica.yandex.com/serve/173086637876675342?click_id=b9708b9a-2750-4cc6-9861-8ff01cab9ade">
            <img src={GooglePlay} alt="" />
          </a>
          <a href="https://redirect.appmetrica.yandex.com/serve/173086637876675342?click_id=d3d9629c-0feb-455e-bd67-406edcce3446">
            <img src={AppStore} alt="" />
          </a>
          <a href="https://redirect.appmetrica.yandex.com/serve/173086637876675342?click_id=b2e2263a-964b-43d9-ae80-6fb8c8859365">
            <img src={AppGallery} alt="" />
          </a>
        </div>
      </nav>
      <div className={styles.requisite_wrapper}>
        <p>
          Исходные данные: ООО «Яндекс.Пробки»; Росгидромет, ФГБУ «ЦАО»; NOAA;
          Белгидромет
        </p>
        <p>© 2000—2026 ЯНДЕКС</p>
      </div>
    </footer>
  );
};

export default Footer;
