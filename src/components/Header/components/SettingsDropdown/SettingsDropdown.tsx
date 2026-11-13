import { navigationItems } from "@components/Header/config";
import styles from "./settingsDropdown.module.scss";
import LightTheme from "@assets/icons/header/settingsDropdown/lightThemeIcon.svg";
import NavigationItem from "./components/NavigationItem/NavigationItem";

const SettingsDropdown = () => {
  return (
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
        {navigationItems.map(({ imgTitle, imgTextTitle, title, link, id }) => (
          <NavigationItem
            imgTitle={imgTitle}
            imgTextTitle={imgTextTitle}
            title={title}
            link={link}
            key={id}
          />
        ))}
      </div>
    </div>
  );
};

export default SettingsDropdown;
