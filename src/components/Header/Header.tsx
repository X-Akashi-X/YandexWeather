import styles from "./header.module.scss";
import { Link, NavLink } from "react-router-dom";
import Logo from "@assets/icons/header/yandexLogo.svg";
import Teg from "@assets/icons/header/yandexTeg.svg";
import Arrow from "@assets/icons/arrowMore.svg";
import Favorite from "@assets/icons/header/favoriteIcon.svg";
import Tracker from "@assets/icons/header/trackerIcon.svg";
import Setting from "@assets/icons/header/settingIcon.svg";
import Search from "@assets/icons/header/searchIcon.svg";
import Clear from "@assets/icons/header/clearIcon.svg";

const Header = () => {
  return (
    <header>
      <div className={styles.main_container}>
        <div className={styles.img_container}>
          <a href="">
            <img src={Logo} alt="Перейти на главную яндекса" />
          </a>
          <a href="">
            <img src={Teg} alt="Перейти на главную яндекс.погода" />
          </a>
        </div>
        <nav className={styles.nav_container}>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to="/"
          >
            Главная
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to="/onMonth"
          >
            На месяц
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to="/onMap"
          >
            На карте
          </NavLink>
          <button className={styles.button_bg}>
            <span>Ещё</span> <img src={Arrow} alt="стрелка" />
          </button>
        </nav>
        <div className={styles.search_container}>
          <input type="search" id="search" placeholder=" " />
          <label htmlFor="search">
            <img src={Search} alt="поиск" />
            <span>Минск, Московский район</span>
          </label>
          <button>
            <img src={Clear} alt="" />
          </button>
        </div>
        <div className={styles.button_container}>
          <Link to="">
            <img src={Favorite} alt="" />
          </Link>
          <Link to="">
            <img src={Tracker} alt="" />
          </Link>
          <Link to="">
            <img src={Setting} alt="" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
