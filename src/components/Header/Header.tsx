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
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const [active, setActive] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  function togleDropdown() {
    setActive((prev) => (prev === true ? false : true));
  }

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        active &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      ) {
        setActive(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [active]);

  return (
    <header>
      <div className={styles.main_container}>
        <div className={styles.img_container}>
          <a href="https://yandex.by/?via=ywhl" target="_blank">
            <img src={Logo} alt="Перейти на главную яндекса" />
          </a>
          <Link to="/">
            <img src={Teg} alt="Перейти на главную яндекс.погода" />
          </Link>
        </div>
        <nav className={styles.nav_container}>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? styles.active : ""} ${styles.nav_link}`
            }
            to="/"
          >
            Главная
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? styles.active : ""} ${styles.nav_link}`
            }
            to="/onMonth"
          >
            На месяц
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? styles.active : ""} ${styles.nav_link}`
            }
            to="/onMap"
          >
            На карте
          </NavLink>
          <div ref={menuRef} className={styles.dropdown_container}>
            <button className={styles.button_bg} onClick={togleDropdown}>
              <span className={styles.text_more}>Ещё</span>{" "}
              <span className={styles.text_menu}>Меню</span>{" "}
              <img
                src={Arrow}
                alt="стрелка"
                className={active === true ? "rotate180" : ""}
              />
            </button>
            {active && (
              <div className={styles.dropdown_menu}>
                <Link to="/" className={styles.nav_link_dropdown}>
                  Главная
                </Link>
                <Link to="/onMonth" className={styles.nav_link_dropdown}>
                  На месяц
                </Link>
                <Link to="/onMap" className={styles.nav_link_dropdown}>
                  На карте
                </Link>
                <Link to="/">На 10 дней</Link>
                <Link to="/">На сегодня</Link>
                <Link to="/">На завтра</Link>
                <Link to="/">Прогноз на 3 дня</Link>
                <Link to="/">Прогноз на 5 дней</Link>
                <Link to="/">Прогноз на 7 дней</Link>
                <Link to="/">Прогноз на 14 дней</Link>
                <Link to="/">Прогноз на выходные</Link>
                <Link to="/">Активность пыльцы</Link>
                <Link to="/">Магнитные бури</Link>
                <Link to="/">Фазы Луны</Link>
                <Link to="/">УФ-индекс</Link>
                <Link to="/">Атмосферное давление</Link>
                <Link to="/">Статьи о погоде</Link>
              </div>
            )}
          </div>
        </nav>
        <div className={styles.search_container}>
          <input type="search" id="search" placeholder=" " />
          <label htmlFor="search">
            <img src={Search} alt="поиск" />
            <span>Минск</span>
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
