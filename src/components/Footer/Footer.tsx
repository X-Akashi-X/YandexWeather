import styles from "./footer.scss.module.scss";
import GooglePlay from "@assets/icons/footer/googlePlayIcon.svg";
import AppStore from "@assets/icons/footer/appStoreIcon.svg";
import AppGallery from "@assets/icons/footer/appGalleryIcon.svg";

const Footer = () => {
  return (
    <footer>
      <p>
        Прогноз погоды в Минске на сегодня, завтра и на ближайшую неделю с
        точностью до района — рассчитан с помощью{" "}
        <a className={styles.meteum_link}>собственной технологии Метеум</a>
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
          <a href="">Справка</a>
          <a href="">Обратная связь</a>
          <a href="">Для бизнеса</a>
          <a href="">Для умного дома</a>
          <a href="">Пользовательское соглашение</a>
        </div>
        <div className={styles.forecast_wrapper}>
          <h4>Прогнозы</h4>
          <a href="">Прогноз погоды</a>
          <a href="">Погода на месяц</a>
          <a href="">Карта погоды</a>
          <a href="">Погода на 10 дней</a>
          <a href="">УФ-Индекс</a>
          <a href="">Магнитные бури</a>
          <a href="">Атмосферное давление</a>
          <a href="">Фазы Луны</a>
        </div>
        <div className={styles.partners_wrapper}>
          <h4>Партнёрам</h4>
          <a href="">Реклама</a>
          <a href="">API Яндекс.Погоды</a>
        </div>
        <div className={styles.stores_wrapper}>
          <h4>Скачайте приложение</h4>
          <a href="">
            <img src={GooglePlay} alt="" />
          </a>
          <a href="">
            <img src={AppStore} alt="" />
          </a>
          <a href="">
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
