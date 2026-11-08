import { SHORT_WEEKDAYS } from "@constants/weather";
import styles from "./moonCalendar.module.scss";
import type { MoonCalendarStateActive } from "@ts/props";

const MoonCalendar = ({
  month,
  activeDay,
  setSelectedDay,
}: MoonCalendarStateActive) => {
  const { days, moonOffsetDay } = month;

  return (
    <div className={styles.main_wrapper}>
      <div className={styles.weekdays}>
        {SHORT_WEEKDAYS.map((weekday) => (
          <p key={weekday}>{weekday}</p>
        ))}
      </div>
      <div className={styles.calendar_wrapper}>
        {Array.from({ length: moonOffsetDay }, (_, i) => (
          <div key={`empty-${i}`} />
        ))}

        {days.map(({ day, moonPhase, isWeekend }) => (
          <div
            className={`${styles.calendar_item} ${day === activeDay ? styles.active : ""}`}
            onClick={() => setSelectedDay(day)}
            key={day}
          >
            <p className={isWeekend ? styles.weekday : ""}>{day}</p>
            <img src={moonPhase.icon} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoonCalendar;
