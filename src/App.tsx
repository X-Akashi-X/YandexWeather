import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import OnMonthPage from "./pages/OnMonthPage";
import OnMapPage from "./pages/OnMapPage";
import Footer from "@components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/OnMonth" element={<OnMonthPage />} />
            <Route path="/OnMap" element={<OnMapPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
