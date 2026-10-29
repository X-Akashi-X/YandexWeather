import { forecastLinks, navLinks } from "@components/Header/config";
import styles from "./menuDropdown.module.scss";
import { Link } from "react-router-dom";

const MenuDropdown = () => {
  return (
    <div className={styles.dropdown_menu}>
      <div className={styles.nav_link_dropdown}>
        {navLinks.map(({ link, title, id }) => (
          <Link to={link} key={id}>
            {title}
          </Link>
        ))}
      </div>
      {forecastLinks.map(({ link, title, id }) => (
        <Link to={link} key={id}>
          {title}
        </Link>
      ))}
    </div>
  );
};

export default MenuDropdown;
