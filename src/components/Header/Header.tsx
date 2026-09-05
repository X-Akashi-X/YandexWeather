import styles from "./header.module.scss";
import { Link, NavLink } from "react-router-dom";
import Logo from "@assets/icons/header/yandexLogo.svg";
import Teg from "@assets/icons/header/yandexTeg.svg";
import Arrow from "@assets/icons/arrowMore.svg";
import Favorite from "@assets/icons/header/favoriteIcon.svg";
import Tracker from "@assets/icons/header/trackerIcon.svg";
import Setting from "@assets/icons/header/settingIcon.svg";
import Menu from "@assets/icons/header/menuIcon.svg";
import Search from "@assets/icons/header/searchIcon.svg";
import Clear from "@assets/icons/header/clearIcon.svg";

import LightTheme from "@assets/icons/header/settingsDropdown/lightThemeIcon.svg";
import Pollen from "@assets/icons/pollenIcon.svg";
import Notification_ from "@assets/icons/header/settingsDropdown/notificationIcon.svg";
import Units from "@assets/icons/header/settingsDropdown/unitsIcon.svg";
import Help from "@assets/icons/header/settingsDropdown/helpIcon.svg";
import Support from "@assets/icons/header/settingsDropdown/supportIcon.svg";
import TG from "@assets/icons/header/settingsDropdown/tgIcon.svg";
import { useEffect, useRef, useState } from "react";
import type { Dispatch, RefObject, SetStateAction } from "react";

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
        <div className={styles.buttons_container}>
          <button>
            <img src={Favorite} alt="Избранное" />
          </button>
          <button>
            <img src={Tracker} alt="Местоположение" />
          </button>
          <div className={styles.settings_container} ref={settingsRef}>
            <button onClick={() => toggleDropdown(setActiveSettingDropdown)}>
              <img
                src={Setting}
                alt="Настройки"
                className={styles.setting_icon}
              />
              <img src={Menu} alt="Меню" className={styles.menu_icon} />
            </button>
            {activeSettingDropdown && (
              <div className={styles.settings_dropdown}>
                <div className={styles.profile_wrapper}>
                  <span className={styles.circle}>
                    <img
                      src="https://avatars.mds.yandex.net/get-yapic/30431/gJS84bRtM7UxkDuAfwsVIz9lZgM-1/islands-middle"
                      alt="Аватарка"
                    />
                  </span>
                  <p>tiger2vlad</p>
                </div>
                <div className={styles.theme_wrapper}>
                  <div className={styles.title_wrapper}>
                    <img src={LightTheme} alt="Тема" />
                    <p>Тема</p>
                  </div>
                  <div className={styles.button_wrapper}>
                    <button>Светлая</button>
                    <button>Тёмная</button>
                    <button>Системная</button>
                  </div>
                </div>
                <div className={styles.navigation_wrapper}>
                  <button className={styles.navigation_item}>
                    <div className={styles.title_wrapper}>
                      <img
                        src={Pollen}
                        className={styles.title_icon}
                        alt="Пыльца"
                      />
                      <p>Мои аллерегны</p>
                    </div>
                    <img
                      src={Arrow}
                      className={styles.arrow_icon}
                      alt="Стрелка"
                    />
                  </button>
                  <button className={styles.navigation_item}>
                    <div className={styles.title_wrapper}>
                      <img
                        src={Notification_}
                        className={styles.title_icon}
                        alt="Уведомления"
                      />
                      <p>Уведомления о погоде</p>
                    </div>
                    <img
                      src={Arrow}
                      className={styles.arrow_icon}
                      alt="Стрелка"
                    />
                  </button>
                  <button className={styles.navigation_item}>
                    <div className={styles.title_wrapper}>
                      <img
                        src={Units}
                        className={styles.title_icon}
                        alt="Единицы измерения"
                      />
                      <p>Единицы измерений</p>
                    </div>
                    <img
                      src={Arrow}
                      className={styles.arrow_icon}
                      alt="Стрелка"
                    />
                  </button>
                  <button className={styles.navigation_item}>
                    <div className={styles.title_wrapper}>
                      <p className={styles.title_icon}>Ru</p>
                      <p>Выбор языка</p>
                    </div>
                    <img
                      src={Arrow}
                      className={styles.arrow_icon}
                      alt="Стрелка"
                    />
                  </button>
                  <a
                    href="https://yandex.ru/support/weather/ru/"
                    className={styles.navigation_item}
                  >
                    <div className={styles.title_wrapper}>
                      <img
                        src={Help}
                        className={styles.title_icon}
                        alt="Справка"
                      />
                      <p>Справка</p>
                    </div>
                  </a>
                  <a
                    href="https://yandex.ru/support/weather/troubleshooting.xml"
                    className={styles.navigation_item}
                  >
                    <div className={styles.title_wrapper}>
                      <img
                        src={Support}
                        className={styles.title_icon}
                        alt="Обратная связь"
                      />
                      <p>Обратная связь</p>
                    </div>
                  </a>
                  <a
                    href="https://t.me/yandex_weather"
                    className={styles.navigation_item}
                  >
                    <div className={styles.title_wrapper}>
                      <img
                        src={TG}
                        className={styles.title_icon}
                        alt="Телеграмм"
                      />
                      <p>Тепло в нашем ТГ-канале</p>
                    </div>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
