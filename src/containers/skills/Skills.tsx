import { Fade } from "react-awesome-reveal";
import "./Skills.css";
import SkillSection from "./SkillSection";

export default function Skills(props: { theme: any; }) {
  const theme = props.theme;
  return (
    <div className="main" id="skills">
      <div className="skills-header-div">
        <Fade duration={2000} >
          <h1 className="skills-header" style={{ color: theme.text }}>
            Here's what I do
          </h1>
        </Fade>
      </div>
      <SkillSection theme={theme} />
    </div>
  );
}
