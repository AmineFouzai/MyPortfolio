import React, { useState, useEffect } from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { themes } from "./theme";
import { GlobalStyles } from "./global";
import AnimatedCursor from "react-animated-cursor";
import { settings } from "./portfolio";
import ReactGA from "react-ga";

function App() {
  useEffect(() => {
    if (settings.googleTrackingID) {
      ReactGA.initialize(settings.googleTrackingID, {
        testMode: process.env.NODE_ENV === "test",
      });
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
  }, []);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const useCursor = settings.useCustomCursor;

  return (
    <ThemeProvider theme={theme == "dark" ? themes.dark : themes.light}>
      <GlobalStyles />
      <div>
        {useCursor ? (
          <><AnimatedCursor
            innerSize={16}
            outerSize={16}
            color={theme == "dark" ?" 230, 250, 250" :"6, 8, 8"}
            outerAlpha={0.2}
            innerScale={0.7}
            outerScale={5}
            clickables={[
              'a',
              'input[type="text"]',
              'input[type="email"]',
              'input[type="number"]',
              'input[type="submit"]',
              'input[type="image"]',
              'label[for]',
              'select',
              'textarea',
              'button',
              '.link',
              {
                target: '.custom',

              }
            ]} /><Main theme={theme == "dark" ? themes.dark : themes.light} setTheme={setTheme} /></>
        ) : (
          <Main theme={theme == "dark" ? themes.dark : themes.light} setTheme={setTheme} />
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
