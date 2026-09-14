import type { NavigationItems } from "@ts/props";
import styles from "./navigationItem.module.scss";
import Arrow from "@assets/icons/arrowMore.svg";

const NavigationItem = ({
  imgTitle,
  imgTextTitle,
  link,
  title,
}: NavigationItems) => {
  const defaultContent = (
    <>
      <div className={styles.title_wrapper}>
        {imgTitle ? (
          <img src={imgTitle} className={styles.title_icon} alt={title} />
        ) : (
          <p className={styles.title_icon}>{imgTextTitle}</p>
        )}
        <p>{title}</p>
      </div>
      {!link && <img src={Arrow} className={styles.arrow_icon} alt="Стрелка" />}
    </>
  );
  return (
    <>
      {link ? (
        <a href={link} className={styles.navigation_item}>
          {defaultContent}
        </a>
      ) : (
        <button className={styles.navigation_item}>{defaultContent}</button>
      )}
    </>
  );
};

export default NavigationItem;
