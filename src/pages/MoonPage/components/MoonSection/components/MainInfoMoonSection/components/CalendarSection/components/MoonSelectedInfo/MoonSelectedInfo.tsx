import type { MoonSelectedInfoItems } from "@ts/props";
import styles from "./moonSelectedInfo.module.scss";
import { moonDetailsConfig } from "../../../CurrentMoonSection/components/MoonDetails/config";

const MoonSelectedInfo = ({
  data: { moonPhase, formattedDate, details, formattedWeekend },
}: {
  data: MoonSelectedInfoItems;
}) => {
  const config = moonDetailsConfig(details);

  return (
    <div className={styles.selected_info_wrapper}>
      <div className={styles.info}>
        <img src={moonPhase.icon} alt="" />
        <div className={styles.date_wrapper}>
          <p className={styles.date}>
            {formattedDate}, {formattedWeekend}
          </p>
          <p className={styles.moon_phase}>{moonPhase.text}</p>
        </div>
      </div>
      <div className={styles.details_info_wrapper}>
        {config.map(({ title, info, id }) => (
          <div className={styles.details_item} key={id}>
            <p className={styles.details_title}>{title}</p>
            <p className={styles.details_info}>{info}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoonSelectedInfo;
