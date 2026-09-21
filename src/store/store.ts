import { configureStore } from "@reduxjs/toolkit";
import { weatherApi } from "./apis/weatherApi";
import { rainViewerApi } from "./apis/rainViewerApi";
import geoReducer from "./slices/geoSlice";

export const store = configureStore({
  reducer: {
    geo: geoReducer,
    [weatherApi.reducerPath]: weatherApi.reducer,
    [rainViewerApi.reducerPath]: rainViewerApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      weatherApi.middleware,
      rainViewerApi.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;