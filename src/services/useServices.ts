import { useMemo } from "react";
import {
  currentData,
  todayData,
  tomorrowData,
  weekData,
  weekendData,
  tenDaysData,
  timeLineData,
  advancedDaysData,
  yesterdayData,
  monthlyData,
} from "./mappers/weatherMappers";
import type { AdvancedWeather } from "@ts/weather";
import {
  DEFAULT_CURRENT_DAY,
  DEFAULT_ONE_DAY,
  DEFAULT_TODAY,
  DEFAULT_TOMORROW,
  DEFAULT_WEEK,
  DEFAULT_WEEKEND,
  DEFAULT_YESTERDAY,
} from "@constants/weather";
import {
  useGetAirQualityQuery,
  useGetArchiveQuery,
  useGetForecastQuery,
} from "@store/apis/weatherApi";
import { useSelector } from "react-redux";
import type { RootState } from "@store/store";

const useServices = () => {
  const { lat, lon } = useSelector((state: RootState) => state.geo);

  const { data: dataForecast } = useGetForecastQuery({ lat, lon });
  const { data: dataAirQuality } = useGetAirQualityQuery({ lat, lon });
  const { data: dataArhive } = useGetArchiveQuery({ lat, lon });

  const advancedWeather = useMemo<AdvancedWeather>(() => {
    if (!dataForecast) return { tenDays: [], oneDay: DEFAULT_ONE_DAY };
    return advancedDaysData(dataForecast);
  }, [dataForecast]);

  return useMemo(() => {
    const isForecastAndAir = dataForecast && dataAirQuality;

    return {
      getCurrentData: isForecastAndAir
        ? currentData(dataForecast, dataAirQuality)
        : DEFAULT_CURRENT_DAY,
      getTodayData: dataForecast ? todayData(dataForecast) : DEFAULT_TODAY,
      getTomorrowData: dataForecast
        ? tomorrowData(dataForecast)
        : DEFAULT_TOMORROW,
      getYesterdayData: dataForecast
        ? yesterdayData(dataForecast)
        : DEFAULT_YESTERDAY,
      getWeekData: dataForecast ? weekData(dataForecast) : DEFAULT_WEEK,
      getWeekendData: dataForecast
        ? weekendData(dataForecast)
        : DEFAULT_WEEKEND,
      getTenDaysData: dataForecast ? tenDaysData(dataForecast) : [],
      getMontlyData: dataArhive ? monthlyData(dataArhive) : [],
      getTimeLineData: dataForecast ? timeLineData(dataForecast) : [],
      getAdvancedTenDaysData: advancedWeather.tenDays,
      getAdvancedOneDayData: advancedWeather.oneDay,
    };
  }, [dataForecast, dataAirQuality, dataArhive, advancedWeather]);
};

export default useServices;
