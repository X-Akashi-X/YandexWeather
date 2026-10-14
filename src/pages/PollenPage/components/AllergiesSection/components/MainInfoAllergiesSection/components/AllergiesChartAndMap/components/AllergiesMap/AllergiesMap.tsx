import useMap from "@hooks/useMap";
import styles from "./allergiesMap.module.scss";
import { Link } from "react-router-dom";
import Arrows from "@assets/icons/arrowsBigMap.svg";

const AllergiesMap = () => {
  const { mapContainer } = useMap(false, "map_pointer");

  return (
    <section className={styles.section_wrapper}>
      <div className={styles.main_container} ref={mapContainer}></div>
      <Link className={styles.big_map_link} to="/">
        <img src={Arrows} alt="" />
      </Link>
    </section>
  );
};

export default AllergiesMap;
