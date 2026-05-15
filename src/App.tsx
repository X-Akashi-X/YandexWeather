import "./App.scss";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<MainPage />}/>
            <Route path="/OnMonth" element={<MainPage />}/>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
