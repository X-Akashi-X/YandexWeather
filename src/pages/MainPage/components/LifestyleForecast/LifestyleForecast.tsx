import { Car, Fishing, Garden, Pollen, Running, waterSport } from ".";
import styles from "./lifestyleForecast.module.scss";
import { Link } from "react-router-dom";


const LifestyleForecast = () => {
  return (
    <section className={styles.section_wrapper}>
      <Link to="/" className={styles.item_wrapper}>
        <img src={Pollen} alt="Пыльца" />
        <p>Пыльца</p>
      </Link>
      <Link to="/" className={styles.item_wrapper}>
        <img src={Car} alt="На дороге" />
        <p>На дорогах</p>
      </Link>
      <Link to="/" className={styles.item_wrapper}>
        <img src={Running} alt="Летний спорт" />
        <p>Летний спорт</p>
      </Link>
      <Link to="/" className={styles.item_wrapper}>
        <img src={Garden} alt="Сад" />
        <p>Сад и огород</p>
      </Link>
      <Link to="/" className={styles.item_wrapper}>
        <img src={Fishing} alt="Рыбалка" />
        <p>Рыбалка</p>
      </Link>
      <Link to="/" className={styles.item_wrapper}>
        <img src={waterSport} alt="Водный спорт" />
        <p>Водный спорт</p>
      </Link>
    </section>
  );
};

export default LifestyleForecast;
