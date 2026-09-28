import styles from "./homeTabletButton.module.scss";
import { Link } from "react-router-dom";
import Logo from "@assets/icons/yandexLogo.svg";
import Teg from "@assets/icons/yandexTeg.svg";
import type React from "react";

const HomeTabletButton = ({ style }: { style: React.CSSProperties }) => {
  return (
    <div className={styles.img_container} style={style}>
      <a href="https://yandex.by/?via=ywhl" target="_blank">
        <img src={Logo} alt="Перейти на главную яндекса" />
      </a>
      <Link to="/">
        <img src={Teg} alt="Перейти на главную яндекс.погода" />
      </Link>
    </div>
  );
};

export default HomeTabletButton;
