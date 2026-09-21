import type { WeekStatusItems } from "@ts/props";
import styles from "./weekStatusSlide.module.scss";
import { Link } from "react-router-dom";

const WeekStatusSlide = ({
  link,
  img,
  title,
  info,
  minTemp,
  maxTemp,
  windCategory,
  minMaxWindSpeed,
  windGusts,
  linkRout,
  staticText,
}: WeekStatusItems) => {
  const defaultContent = (
    <>
      <div className={styles.status_title_wrapper}>
        {img && <img src={img} alt={info} />}
        <h3>{title}</h3>
      </div>
      {staticText ? (
        <p>{staticText}</p>
      ) : (
        <p>
          {info} · {minTemp}...{maxTemp}° · {windCategory} {minMaxWindSpeed}{" "}
          м/с, порывы до {windGusts} м/с
        </p>
      )}
    </>
  );

  const handleSrcollToElement = () => {
    if (link) {
      document
        .getElementById(link)
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <>
      {linkRout ? (
        <Link to={linkRout} className={styles.status_item}>
          {defaultContent}
        </Link>
      ) : (
        <button
          type="button"
          onClick={handleSrcollToElement}
          className={styles.status_item}
        >
          {defaultContent}
        </button>
      )}
    </>
  );
};

export default WeekStatusSlide;
