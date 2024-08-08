import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import { settings } from "../portfolio.js";

function Main(props: { theme: any; setTheme: any; }) {
  const commonProps = {
    theme: props.theme,
    setTheme: props.setTheme,
  };

  return (
    <BrowserRouter>
      <Routes>
        {settings.isSplash ? (
          <>
            <Route path="/" element={<Splash {...commonProps} />} />
            <Route path="/splash" element={<Splash {...commonProps} />} />
          </>
        ) : (
          <Route path="/" element={<Home {...commonProps} />} />
        )}
        <Route path="/home" element={<Home {...commonProps} />} />
        <Route path="/experience" element={<Experience onToggle={() => { }} {...commonProps} />} />
        <Route path="/education" element={<Education {...commonProps} />} />
        <Route path="/contact" element={<Contact onToggle={() => { }} {...commonProps} />} />
        <Route path="/projects" element={<Projects onToggle={() => { }} {...commonProps} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
