import AllergiesGroups from "../AllergiesGroups/AllergiesGroups";
import styles from "./mainInfoAllergiesSection.module.scss";

const MainInfoAllergiesSection = () => {
  return (
    <section className={styles.section_wrapper}>
      <AllergiesGroups />
    </section>
  );
};

export default MainInfoAllergiesSection;
