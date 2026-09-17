import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { ApiRainViewer } from "@ts/api";

export const rainViewerApi = createApi({
  reducerPath: "rainViewerApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.rainviewer.com/public/" }),
  endpoints: (builder) => ({
    getRadar: builder.query<ApiRainViewer, void>({
      query: () => "weather-maps.json",
    }),
  }),
});

export const { useGetRadarQuery } = rainViewerApi;