import { cities } from "@configs/cities";
import { createSlice } from "@reduxjs/toolkit";

const getInitialCity = () => {
  const pathParts = window.location.pathname.split("/").filter(Boolean);
  const cityId = pathParts[0];

  const currentCity = cities.find((c) => c.id === cityId);
  if (currentCity) return currentCity;

  const fallBack = cities.find((c) => c.id === "minsk");
  if (!fallBack) {
    throw new Error("Fallback city not found in cities config");
  }

  return fallBack;
};

const initialCity = getInitialCity();

const initialState = {
  lat: initialCity.lat,
  lon: initialCity.lon,
  cityUrl: initialCity.id,
  cityName: initialCity.title,
  stationDistance: initialCity.stationDistance,
};

export const getSlice = createSlice({
  name: "geo",
  initialState,
  reducers: {
    setGeoData: (state, { payload }) => {
      state.lat = payload.lat;
      state.lon = payload.lon;
      state.cityUrl = payload.cityUrl;
      state.cityName = payload.cityName;
      state.stationDistance = payload.stationDistance;
    },
    setCityFromUrl: (state, { payload }) => {
      state.cityUrl = payload;
    },
  },
});

export const { setGeoData, setCityFromUrl } = getSlice.actions;

export default getSlice.reducer;
