import { useState } from "react";
import styles from "./calendarSection.module.scss";
import MoonMonth from "./components/MoonMonth/MoonMonth";
import useServices from "@services/useServices";

const CalendarSection = () => {
  const { getMontlyData } = useServices();

  const [activeTab, setActiveTab] = useState<string>("days");
  const [activeMonth, setActiveMonth] = useState<string | null>(null);

  const hanleActiveTab = (id: string) => {
    setActiveTab(id);
  };

  const currentMonth = getMontlyData.find((month) => month.isCurrentMonth);

  const activeMonthData =
    getMontlyData.find((month) => month.monthly === activeMonth) ??
    currentMonth;

  return (
    <section className={styles.section_wrapper}>
      <div className={styles.header_calendar_wrapper}>
        <h3>Календарь</h3>
        <div className={styles.calendar_switch_wrapper}>
          <button
            className={activeTab === "days" ? styles.active : ""}
            onClick={() => hanleActiveTab("days")}
          >
            Дни
          </button>
          <button
            className={activeTab === "phases" ? styles.active : ""}
            onClick={() => hanleActiveTab("phases")}
          >
            Фазы
          </button>
        </div>
      </div>
      <MoonMonth
        active={activeMonthData?.monthly ?? null}
        setActive={setActiveMonth}
      />
    </section>
  );
};

export default CalendarSection;
