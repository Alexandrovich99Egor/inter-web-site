import React from "react";
import { Routes, Route } from 'react-router-dom';
import './global.scss';
// import components
import Header from "./component/header/header";
import HomePage from "./pages/homePage/homePage.jsx";
import AboutUs from "./pages/aboutUs/aboutUs.jsx";
import ProgramSchool from "./pages/programSchool/programSchool.jsx";
import ForParents from "./pages/forParentsPage/forParents.jsx";
import Projects from "./pages/projects/projects.jsx";
import Footer from "./component/footer/footer.jsx";
// data import 
import OurProgram from "./component/section-for-parents/forParents.jsx";
import Slider from "./component/slider/slider.jsx";
import ContactUs from "./component/contacts-us/contact-us";
const data = [112, 12545, 12];
<Slider
  dataAnother={data}
/>





function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/program" element={<ProgramSchool />} />
          <Route path="/for-parents" element={<ForParents />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
