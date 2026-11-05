import LifestyleLink from "./components/LifestyleLink/LifestyleLink";
import { configLinks } from "./config";
import styles from "./lifestyleForecast.module.scss";

const LifestyleForecast = () => {
  return (
    <section className={styles.section_wrapper}>
      {configLinks.map(({ link, icon, title, id }) => (
        <LifestyleLink link={link} icon={icon} title={title} key={id} />
      ))}
    </section>
  );
};

export default LifestyleForecast;
