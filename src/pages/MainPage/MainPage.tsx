import LifestyleForecast from "./components/LifestyleForecast/LifestyleForecast";
import MainInfoSection from "./components/MainInfoSection/MainInfoSection";
import WeatherMap from "./components/WeatherMap/WeatherMap";
import TenDaysForecastSection from "./components/MainTenDaysSection/MainTenDaysSection";

const MainPage = () => {
  return (
    <>
      <WeatherMap />
      <MainInfoSection />
      <LifestyleForecast />
      <TenDaysForecastSection />
    </>
  );
};

export default MainPage;
