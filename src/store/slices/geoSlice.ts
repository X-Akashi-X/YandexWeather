import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lat: 53.9,
  lon: 27.56,
  cityUrl: "minsk",
  cityName: "Минск",
  stationDistance: 6,
};

export const getSlice = createSlice({
  name: "geo",
  initialState,
  reducers: {
    setCoordinates: (state, {payload}) => {
      state.lat = payload.lat;
      state.lon = payload.lon;
      state.cityUrl = payload.cityUrl;
      state.cityName = payload.cityName;
      state.stationDistance = payload.stationDistance;
    },
  },
});

export const { setCoordinates } = getSlice.actions;

export default getSlice.reducer;
