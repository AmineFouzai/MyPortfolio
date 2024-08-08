import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Splash.css";

function AnimatedSplash(_props: any) {
  return (
    <div className="logo_wrapper">
      <div className="loading">
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
      </div>
    </div>
  );
}

function Splash(props: { theme: any; }) {
  const [splashTimeOut, setSplashTimeOut] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setSplashTimeOut(true);
      navigate("/home");
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return splashTimeOut ? null : <AnimatedSplash theme={props.theme} />;
}

export default Splash;
