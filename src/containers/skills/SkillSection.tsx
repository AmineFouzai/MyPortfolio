import React from "react";
import { Fade } from "react-awesome-reveal";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import FrontEnd from "./FrontEnd";
import "./Skills.css";
import BackEnd from "./BackEnd";
import MobileDev from "./MobileDev";
import DataAdmin from "./DataAdmin";
import DevOps from "./DevOps";

function GetSkillSvg(props: { fileName: string; theme: any; }) {
  if (props.fileName === "FrontEnd")
    return <><FrontEnd theme={props.theme} /></>;
  else if (props.fileName === "BackEnd")
    return <><BackEnd theme={props.theme} /></>;
  else if (props.fileName === "MobileDev")
    return <><MobileDev theme={props.theme} /></>;
  else if (props.fileName === "DataAdmin")
    return <><DataAdmin theme={props.theme} /></>;
  return <DevOps theme={props.theme} />;
}

function SkillSection(props: { theme: any; }) {
  const theme = props.theme;
  return (
    <div>
      {skills.data.map((skill: { fileName: string; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined; softwareSkills: any[]; skills: any[]; }, index: number) => {
        if (index % 2 === 0) {
          return (
            <div className="skills-main-div" key={index}>
              <Fade duration={2000}>
                <div className="skills-image-div">
                  <GetSkillSvg fileName={skill.fileName} theme={theme} />
                </div>
              </Fade>

              <div className="skills-text-div">
                <Fade duration={1000}>
                  <h1 className="skills-heading" style={{ color: theme.text }}>
                    {skill.title}
                  </h1>
                </Fade>
                <Fade duration={2000}>
                  <SoftwareSkill logos={skill.softwareSkills} />
                </Fade>
                <Fade duration={2000}>
                  <div>
                    {skill.skills.map((skillSentence, index) => {
                      return (
                        <p
                          key={index}
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                </Fade>
              </div>
            </div>
          );
        } else {
          return (
            <div className="skills-main-div" key={index}>
              <div className="skills-text-div">
                <Fade duration={1000}>
                  <h1 className="skills-heading" style={{ color: theme.text }}>
                    {skill.title}
                  </h1>
                </Fade>
                <Fade duration={1500}>
                  <SoftwareSkill logos={skill.softwareSkills} />
                </Fade>
                <Fade duration={2000}>
                  <div>
                    {skill.skills.map((skillSentence, index) => {
                      return (
                        <p
                          key={index}
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                </Fade>
              </div>
              <Fade duration={2000}>
                <div className="skills-image-div">
                  <GetSkillSvg fileName={skill.fileName} theme={theme} />
                </div>
              </Fade>
            </div>
          );
        }
      })}
    </div>
  );
}

export default SkillSection;
