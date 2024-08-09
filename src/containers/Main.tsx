import { HashRouter, Route, Routes } from "react-router-dom";
import Contact from "../pages/contact/ContactComponent";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Home from "../pages/home/HomeComponent";
import Projects from "../pages/projects/Projects";
import Splash from "../pages/splash/Splash";
import { settings } from "../portfolio.js";

function Main(props: { theme: any; setTheme: any; }) {
  const commonProps = {
    theme: props.theme,
    setTheme: props.setTheme,
  };

  return (
    <HashRouter>
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
    </HashRouter>
  );
}

export default Main;
