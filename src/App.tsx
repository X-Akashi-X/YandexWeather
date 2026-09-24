import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./App.scss";
import { useSelector } from "react-redux";
import { type RootState } from "@store/store";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "@components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import Footer from "@components/Footer/Footer";
import SourcesPage from "./pages/SourcesPage/SourcesPage";

function App() {
  const { cityUrl } = useSelector((state: RootState) => state.geo);
  return (
    <BrowserRouter
      future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
    >
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Navigate to={`/${cityUrl}`} replace />} />
            <Route path="/:cityName" element={<MainPage key={cityUrl} />} />
            <Route path="/:cityName/sources" element={<SourcesPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
