import styles from "./calendarSection.module.scss";
import MoonMonth from "./components/MoonMonth/MoonMonth";
import MoonCalendar from "./components/MoonCalendar/MoonCalendar";
import MoonSelectedInfo from "./components/MoonSelectedInfo/MoonSelectedInfo";
import MoonPhases from "./components/MoonPhases/MoonPhases";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@store/store";
import {
  selectActiveDay,
  selectActiveDayData,
  selectActiveMonthData,
} from "@store/selectors/moonCalendarSelectors";
import useServices from "@services/useServices";
import { setActiveTab, setSelectedDay } from "@store/slices/moonCalendarSlice";

const CalendarSection = ({ activeTab }: { activeTab: string }) => {
  const { getMonthlyDailyData } = useServices();
  const dispatch: AppDispatch = useDispatch();

  const currentMonth = useSelector((state: RootState) =>
    selectActiveMonthData(state, getMonthlyDailyData),
  );

  const activeDay = useSelector((state: RootState) =>
    selectActiveDay(state, getMonthlyDailyData),
  );

  const activeDayData = useSelector((state: RootState) =>
    selectActiveDayData(state, getMonthlyDailyData),
  );

  return (
    <section className={styles.section_wrapper}>
      <div className={styles.header_calendar_wrapper}>
        <h3>Календарь</h3>
        <div className={styles.calendar_switch_wrapper}>
          <button
            className={activeTab === "days" ? styles.active : ""}
            onClick={() => dispatch(setActiveTab("days"))}
          >
            Дни
          </button>
          <button
            className={activeTab === "phases" ? styles.active : ""}
            onClick={() => dispatch(setActiveTab("phases"))}
          >
            Фазы
          </button>
        </div>
      </div>
      <MoonMonth active={currentMonth.monthlyIndex} />
      {activeTab === "days" && (
        <MoonCalendar
          month={currentMonth}
          activeDay={activeDay}
          setSelectedDay={(day) =>
            dispatch(
              setSelectedDay({ monthlyIndex: currentMonth.monthlyIndex, day }),
            )
          }
        />
      )}
      {activeTab === "days" && activeDayData && (
        <MoonSelectedInfo data={activeDayData} />
      )}
      {activeTab === "phases" && <MoonPhases month={currentMonth} />}
    </section>
  );
};

export default CalendarSection;
