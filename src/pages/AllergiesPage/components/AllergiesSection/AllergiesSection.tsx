import styles from "./allergiesSection.module.scss";
import AllergiesCurrentData from "./components/AllergiesCurrent/AllergiesCurrent";
import MainInfoAllergiesSection from "./components/MainInfoAllergiesSection/MainInfoAllergiesSection";

const AllergiesSection = () => {
  return (
    <section className={styles.section_wrapper}>
      <AllergiesCurrentData />
      <MainInfoAllergiesSection />
    </section>
  );
};

export default AllergiesSection;
