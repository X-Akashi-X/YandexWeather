import { configureStore } from "@reduxjs/toolkit";
import { weatherApi } from "./apis/weatherApi";
import { rainViewerApi } from "./apis/rainViewerApi";

export const store = configureStore({
  reducer: {
    [weatherApi.reducerPath]: weatherApi.reducer,
    [rainViewerApi.reducerPath]: rainViewerApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      weatherApi.middleware,
      rainViewerApi.middleware,
    ),
});
