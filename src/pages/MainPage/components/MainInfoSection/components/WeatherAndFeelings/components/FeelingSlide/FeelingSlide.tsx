import styles from "./feelingSlide.module.scss";
import { Link } from "react-router-dom";
import StatusArc from "@components/StatusArc/StatusArc";
import type { FeelingSlidesItems } from "@ts/props";

const FeelingSlide = ({
  img,
  category,
  title,
  text,
  classImg,
  number,
  link,
}: FeelingSlidesItems) => {
  const currentClassImg = classImg ? styles[classImg] : "";

  return (
    <Link to={link} className={styles.feelings_item}>
      <div className={styles.category_wrapper}>
        {img ? (
          <img className={currentClassImg} src={img} alt={title} />
        ) : (
          <p>{number}</p>
        )}
        {category && (
          <div className={styles.status_wrapper}>
            <StatusArc category={category} />
          </div>
        )}
      </div>
      <div className={styles.title_wrapper}>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </Link>
  );
};

export default FeelingSlide;
