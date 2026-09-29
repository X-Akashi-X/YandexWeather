import styles from "./allergiesSection.module.scss";
import AllergiesCurrentData from "./components/AllergiesCurrentData/AllergiesCurrent";

const AllergiesSection = () => {
  return (
    <section className={styles.section_wrapper}>
      <AllergiesCurrentData />
    </section>
  );
};

export default AllergiesSection;
