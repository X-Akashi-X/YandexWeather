import LifestyleForecast from "./components/LifestyleForecast/LifestyleForecast";
import MainInfoSection from "./components/MainInfoSection/MainInfoSection";
import WeatherMap from "./components/WeatherMap/WeatherMap";
import TenDaysForecastSection from "./components/MainTenDaysSection/MainTenDaysSection";
import WeatherOnMaps from "./components/WeatherOnMaps/WeatherOnMaps";
import WeatherOverviewSection from "./components/WeatherOverviewSection/WeatherOverviewSection";
import FAQ from "./components/FAQ/FAQ";

const MainPage = () => {
  return (
    <>
      <WeatherMap />
      <MainInfoSection />
      <LifestyleForecast />
      <TenDaysForecastSection />
      <WeatherOnMaps />
      <WeatherOverviewSection />
      <FAQ />
    </>
  );
};

export default MainPage;
