import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./App.scss";
import { useSelector } from "react-redux";
import { type RootState } from "@store/store";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "@components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import Footer from "@components/Footer/Footer";
import SourcesPage from "./pages/SourcesPage/SourcesPage";
import CityLayout from "./layout/CityLayout";
import { useScrollToTop } from "@hooks/useScrollToTop";

function App() {
  useScrollToTop()
  const { cityUrl } = useSelector((state: RootState) => state.geo);

  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to={`/${cityUrl}`} replace />} />
          <Route path="/:cityName" element={<CityLayout />}>
            <Route index element={<MainPage />} />
            <Route path="sources" element={<SourcesPage />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
