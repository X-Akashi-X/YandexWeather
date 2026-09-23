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
    setCoordinates: (state, action) => {
      state.lat = action.payload.lat;
      state.lon = action.payload.lon;
      state.cityUrl = action.payload.cityUrl;
      state.cityName = action.payload.cityName;
      state.stationDistance = action.payload.stationDistance;
    },
  },
});

export const { setCoordinates } = getSlice.actions;

export default getSlice.reducer;