import { style } from "glamor";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { HiMoon, HiSun } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { greeting, settings } from "../../portfolio.js";
import "./Header.css";

function Header(props: { theme: any; setTheme: (arg0: string) => void; }) {
  const theme = props.theme;
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);

  const handleToggleChange = () => {
    setIsMenuExpanded(!isMenuExpanded);
  };
  const styles = style({
    cursor: "pointer",
    height: "45px",
    width: "45px",
    marginRight: "5px",
    marginLeft: "15px",
    paddingTop: "5px",
    borderRadius: "50%",
    border: "none",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: props.theme.name === "light" ? "#7CD1F7" : "#292C3F",
    outline: "none",
    transition: "all 0.2s ease-in-out",
    ":hover": {
      boxShadow: `0 3px 8px ${props.theme.name === "light" ? "#F7D774" : "#646464"
        }`,
    },
  });

  const link = settings.isSplash ? "/splash" : "home";

  const [currTheme, setCurrTheme] = useState(props.theme);

  function changeTheme() {
    if (currTheme === "light") {
      props.setTheme("dark");
      localStorage.setItem("theme", "dark");
      setCurrTheme("dark");
    } else {
      props.setTheme("light");
      localStorage.setItem("theme", "light");
      setCurrTheme("light");
    }
  }

  const icon =
    props.theme.name === "dark" ? (
      <HiMoon
        strokeWidth={1}
        size={20}
        color={props.theme.name === "light" ? "#F9D784" : "#A7A7A7"}
      />
    ) : (
      <HiSun
        strokeWidth={1}
        size={20}
        color={props.theme.name === "light" ? "#F9D784" : "#A7A7A7"}
      />
    );

  return (
    <Fade duration={1000}>
      <div>
        <header className="header">
          <nav id="sidebar">

            <NavLink to={link} className="logo">
              <span style={{ color: theme.text }}></span>
              <span className="logo-name" style={{ color: theme.text }}>
                {greeting.logo_name}
              </span>
              <span style={{ color: theme.text }}></span>
            </NavLink>

            <ul className={`menu ${isMenuExpanded ? 'menu-expanded' : ''}`}>
              <li>
                <NavLink
                  className="homei"
                  to="/home"
                  style={{ borderRadius: 5, color: theme.text }}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="ec"
                  to="/education"
                  style={{ borderRadius: 5, color: theme.text }}
                >
                  Education and Certifications
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="xp"
                  to="/experience"
                  style={{ borderRadius: 5, color: theme.text }}
                >
                  Experience
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="projects"
                  to="/projects"
                  style={{ borderRadius: 5, color: theme.text }}
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="cr"
                  to="/contact"
                  style={{ borderRadius: 5, color: theme.text }}
                >
                  Contact and Resume
                </NavLink>
              </li>
              <button {...styles} onClick={changeTheme}>
                {icon}
              </button>
            </ul>
            <input className="menu-btn" type="checkbox" id="menu-btn"  onChange={handleToggleChange} />
            <label className="menu-icon" htmlFor="menu-btn">
              <span className="navicon"></span>
            </label>
          </nav>

        </header>
      </div>
    </Fade>
  );
}

export default Header;
