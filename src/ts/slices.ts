export type MoonCalendarState = {
  activeTab: "days" | "phases";
  activeMonthIndex: number | null;
  selectedDay: { monthlyIndex: number; day: number } | null;
};
