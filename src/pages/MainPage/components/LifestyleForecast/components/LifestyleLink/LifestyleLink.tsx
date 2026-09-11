import type { LifestyleLinkItems } from "@ts/props";
import styles from "./lifestyleLink.module.scss";
import { Link } from "react-router-dom";

const LifestyleLink = ({ link, icon, title }: LifestyleLinkItems) => {
  return (
    <Link to={link} className={styles.item_wrapper}>
      <img src={icon} alt={title} />
      <p>{title}</p>
    </Link>
  );
};

export default LifestyleLink;
