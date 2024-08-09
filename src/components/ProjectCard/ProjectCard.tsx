import React from "react";
import ProjectLanguages from "../projectLanguages/ProjectLanguages";
import ProjectLinks from "../ProjectLinks/ProjectLinks";
import "./ProjectCard.css";
import { Fade } from "react-awesome-reveal";
import { style } from "glamor";

export default function ProjectCard(props: { repo: any; theme?: any }) {
  console.log(props.repo);
  function openRepoinNewTab(url: string | URL | undefined) {
    window.open(url, "_blank")?.focus();
   
  }

  const styles = style({
    color: "rgb(88, 96, 105)",
    backgroundColor: "rgb(255, 255, 255)",
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 10px 30px -15px",
    padding: "2rem",
    cursor: "pointer",
    borderRadius: "5px",
    height: "230px",
    transition: "all 0.2s ease-in-out",
    ":hover": {
      boxShadow: `${props?.theme?.imageDark} 0 2px 15px`,
    },
  });

  return (
    <div>
      <Fade duration={2000} >
        <div
          {...styles}
          key={props.repo.id}
          onClick={() => openRepoinNewTab(props.repo?.url)}
          style={{ backgroundColor: props?.theme.projectCard }}
        >
          <div className="repo-name-div">
            <p className="repo-name" style={{ color: props?.theme?.text }}>
              {props.repo.name}
            </p>
          </div>
          <p className="repo-description" style={{ color: props?.theme?.text }}>
            {props.repo.description}
          </p>
          <div className="flexDiv">
            <div className="repo-details Leftitem">
              <ProjectLanguages logos={props.repo.languages} />
            </div>
            <div className="repo-details Rightitem">
              <ProjectLinks logos={props.repo.links} />
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
