import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

// PageRouter
import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import StudyServicePage from "./components/views/StudyServicePage/StudyServicePage";
import Spot from "./components/views/SpotPage/Spot";
import MessagePage from "./components/views/MessagePage/MessagePage";
import MyPage from "./components/views/MyPage/MyPage";
import NavBar from "./components/views/_NavBar/NavBar";
import Footer from "./components/views/_Footer/Footer";
import StudyServiceEditPage from "./components/views/StudyServicePage/StudyServiceEditPage";
import MessageDetail from "./components/views/MessagePage/Sections/MessageDetail";
import ChangingInfoPage from "./components/views/MyPage/ChangingInfoPage";
import StudyServiceDetailsPage from "./components/views/StudyServicePage/StudyServiceDetailsPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/study" element={<StudyServicePage />} />
            <Route path="/spot" element={<Spot />} />
            <Route path="/message" element={<MessagePage />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/edit" element={<StudyServiceEditPage />} />
            <Route path="/messagedetail" element={<MessageDetail />} />
            <Route path="/changinginfopage" element={<ChangingInfoPage />} />
            <Route path="/details" element={<StudyServiceDetailsPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
