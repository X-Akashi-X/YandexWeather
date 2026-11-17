import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { MoonCalendarState } from "@ts/slices";

const initialState: MoonCalendarState = {
  activeTab: "days",
  activeMonthIndex: null,
  selectedDay: null,
};

export const moonCalendarSlice = createSlice({
  name: "moonCalendar",
  initialState,
  reducers: {
    setActiveTab: (
      state,
      { payload }: PayloadAction<MoonCalendarState["activeTab"]>,
    ) => {
      state.activeTab = payload;
    },
    setActiveMonthIndex: (
      state,
      { payload }: PayloadAction<MoonCalendarState["activeMonthIndex"]>,
    ) => {
      state.activeMonthIndex = payload;
    },
    setSelectedDay: (
      state,
      { payload }: PayloadAction<MoonCalendarState["selectedDay"]>,
    ) => {
      state.selectedDay = payload;
    },
  },
});

export const { setActiveTab, setActiveMonthIndex, setSelectedDay } =
  moonCalendarSlice.actions;

export default moonCalendarSlice.reducer;
