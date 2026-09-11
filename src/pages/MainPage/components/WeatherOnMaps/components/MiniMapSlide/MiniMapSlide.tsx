import type { MiniMapSlides } from "@ts/props";
import styles from "./miniMapSlide.module.scss";
import { Link } from "react-router-dom";

const MiniMapSlide = ({ link, bgURL, title }: MiniMapSlides) => {
  return (
    <Link
      to={link}
      className={styles.maps_item}
      style={{ backgroundImage: `url(${bgURL})` }}
    >
      <button>{title}</button>
    </Link>
  );
};

export default MiniMapSlide;
