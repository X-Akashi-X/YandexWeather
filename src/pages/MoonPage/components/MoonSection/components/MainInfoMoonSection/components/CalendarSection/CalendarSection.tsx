import { useState } from "react";
import styles from "./calendarSection.module.scss";
import MoonMonth from "./components/MoonMonth/MoonMonth";
import useServices from "@services/useServices";
import MoonCalendar from "./components/MoonCalendar/MoonCalendar";
import MoonSelectedInfo from "./components/MoonSelectedInfo/MoonSelectedInfo";
import MoonPhases from "./components/MoonPhases/MoonPhases";

const CalendarSection = () => {
  const { getMonthlyDailyData } = useServices();

  const [activeTab, setActiveTab] = useState<string>("days");
  const [activeMonth, setActiveMonth] = useState<string | null>(null);
  const [selectedDay, setSelectedDay] = useState<{
    monthlyIndex: number;
    day: number;
  } | null>(null);

  const activeMonthData =
    getMonthlyDailyData.find((m) => m.monthly === activeMonth) ??
    getMonthlyDailyData.find((m) => m.isCurrentMonth) ??
    getMonthlyDailyData[0];

  const defaultDay = activeMonthData.isCurrentMonth
    ? (activeMonthData.days.find((d) => d.isToday)?.day ?? 1)
    : 1;

  const activeDay =
    selectedDay?.monthlyIndex === activeMonthData?.monthlyIndex
      ? selectedDay.day
      : defaultDay;

  const activeDayData = activeMonthData?.days.find((d) => d.day === activeDay);

  return (
    <section className={styles.section_wrapper}>
      <div className={styles.header_calendar_wrapper}>
        <h3>Календарь</h3>
        <div className={styles.calendar_switch_wrapper}>
          <button
            className={activeTab === "days" ? styles.active : ""}
            onClick={() => setActiveTab("days")}
          >
            Дни
          </button>
          <button
            className={activeTab === "phases" ? styles.active : ""}
            onClick={() => setActiveTab("phases")}
          >
            Фазы
          </button>
        </div>
      </div>
      <MoonMonth
        active={activeMonthData?.monthly ?? null}
        setActive={setActiveMonth}
      />
      {activeTab === "days" && activeMonthData && (
        <MoonCalendar
          month={activeMonthData}
          activeDay={activeDay}
          setSelectedDay={(day) =>
            setSelectedDay({ monthlyIndex: activeMonthData.monthlyIndex, day })
          }
        />
      )}
      {activeTab === "days" && activeDayData && (
        <MoonSelectedInfo data={activeDayData} />
      )}
      {activeTab === "phases" && activeMonthData && (
        <MoonPhases month={activeMonthData} />
      )}
    </section>
  );
};

export default CalendarSection;
