import styles from "./header.module.scss";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import type { Dispatch, RefObject, SetStateAction } from "react";
import Arrow from "@assets/icons/arrowMore.svg";
import { Clear, Favorite, Logo, Menu, Search, Setting, Teg, Tracker } from ".";
import SettingsDropdown from "./components/SettingsDropdown/SettingsDropdown";

const Header = () => {
  const [activeMoreDropdown, setActiveMoreDropdown] = useState(false);
  const [activeSettingDropdown, setActiveSettingDropdown] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const settingsRef = useRef<HTMLDivElement>(null);

  function toggleDropdown(setActive: Dispatch<SetStateAction<boolean>>) {
    setActive((prev) => !prev);
  }

  function handleClickOutside(
    e: MouseEvent,
    ref: RefObject<HTMLDivElement | null>,
    active: boolean,
    setActive: Dispatch<SetStateAction<boolean>>,
  ) {
    if (active && ref.current && !ref.current.contains(e.target as Node)) {
      setActive(false);
    }
  }

  useEffect(() => {
    const listener = (e: MouseEvent) => {
      handleClickOutside(e, menuRef, activeMoreDropdown, setActiveMoreDropdown);
    };
    document.addEventListener("mousedown", listener);
    return () => document.removeEventListener("mousedown", listener);
  }, [activeMoreDropdown]);

  useEffect(() => {
    const listener = (e: MouseEvent) => {
      handleClickOutside(
        e,
        settingsRef,
        activeSettingDropdown,
        setActiveSettingDropdown,
      );
    };
    document.addEventListener("mousedown", listener);
    return () => document.removeEventListener("mousedown", listener);
  }, [activeSettingDropdown]);

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
              `${isActive && styles.activeMoreDropdown} ${styles.nav_link}`
            }
            to="/"
          >
            Главная
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${isActive && styles.activeMoreDropdown} ${styles.nav_link}`
            }
            to="/onMonth"
          >
            На месяц
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${isActive && styles.activeMoreDropdown} ${styles.nav_link}`
            }
            to="/onMap"
          >
            На карте
          </NavLink>
          <div ref={menuRef} className={styles.menu_container}>
            <button
              className={styles.button_bg}
              onClick={() => toggleDropdown(setActiveMoreDropdown)}
            >
              <span className={styles.text_more}>Ещё</span>{" "}
              <span className={styles.text_menu}>Меню</span>{" "}
              <img
                src={Arrow}
                alt="стрелка"
                className={activeMoreDropdown ? "rotate180" : ""}
              />
            </button>
            {activeMoreDropdown && (
              <div className={styles.dropdown_menu}>
                <div className={styles.nav_link_dropdown}>
                  <Link to="/">Главная</Link>
                  <Link to="/onMonth">На месяц</Link>
                  <Link to="/onMap">На карте</Link>
                </div>
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
            <img src={Clear} alt="Очистить" />
          </button>
        </div>
        <div className={styles.toolbar}>
          <button className={styles.toolbar_buttons}>
            <img src={Favorite} alt="Избранное" />
          </button>
          <button className={styles.toolbar_buttons}>
            <img src={Tracker} alt="Местоположение" />
          </button>
          <div className={styles.settings_container} ref={settingsRef}>
            <button
              className={styles.toolbar_buttons}
              onClick={() => toggleDropdown(setActiveSettingDropdown)}
            >
              <img
                src={Setting}
                alt="Настройки"
                className={styles.setting_icon}
              />
              <img src={Menu} alt="Меню" className={styles.menu_icon} />
            </button>
            {activeSettingDropdown && <SettingsDropdown />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
