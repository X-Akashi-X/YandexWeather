import styles from "./lifestyleForecast.module.scss";
import { Link } from "react-router-dom";
import Pollen from "@assets/icons/lifestyleForecast/pollenIcon.svg";
import Car from "@assets/icons/lifestyleForecast/carIcon.svg";
import Running from "@assets/icons/lifestyleForecast/runningIcon.svg";
import Garden from "@assets/icons/lifestyleForecast/gardeningIcon.svg";
import Fishing from "@assets/icons/lifestyleForecast/fishingIcon.svg";
import waterSport from "@assets/icons/lifestyleForecast/waterSportsIcon.svg";

const LifestyleForecast = () => {
  return (
    <section className={styles.section_wrapper}>
      <Link to="/" className={styles.item_wrapper}>
        <img src={Pollen} alt="" />
        <p>Пыльца</p>
      </Link>
      <Link to="/" className={styles.item_wrapper}>
        <img src={Car} alt="" />
        <p>На дорогах</p>
      </Link>
      <Link to="/" className={styles.item_wrapper}>
        <img src={Running} alt="" />
        <p>Летний спорт</p>
      </Link>
      <Link to="/" className={styles.item_wrapper}>
        <img src={Garden} alt="" />
        <p>Сад и огород</p>
      </Link>
      <Link to="/" className={styles.item_wrapper}>
        <img src={Fishing} alt="" />
        <p>Рыбалка</p>
      </Link>
      <Link to="/" className={styles.item_wrapper}>
        <img src={waterSport} alt="" />
        <p>Водный спорт</p>
      </Link>
    </section>
  );
};

export default LifestyleForecast;
