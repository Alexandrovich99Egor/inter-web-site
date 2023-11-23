import React from "react";
import { Routes, Route } from 'react-router-dom';
import './global.scss';
// import components
import Header from "./component/header/header";
import HomePage from "./pages/homePage/homePage.jsx";
import AboutUs from "./pages/aboutUs/aboutUs.jsx";
import ProgramPage from "./pages/programPage/programPage.jsx";
import Footer from "./component/footer/footer.jsx";
// data import 
import OurProgram from "./component/section-our-program/our-program.jsx";
import Slider from "./component/slider/slider.jsx";
const data = [112, 12545, 12];
<Slider
  dataAnother={data}
/>





function App() {
  return (
    <>
      <div className="wrapper">
        <h1>123</h1>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/program" element={<ProgramPage />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
