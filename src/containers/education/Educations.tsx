import React from "react";
import "./Educations.css";
import DegreeCard from "../../components/degreeCard/DegreeCard";
import { degrees } from "../../portfolio";
import { Fade } from "react-awesome-reveal";

function Educations(props: { theme: any; }) {
  const theme = props.theme;

  return (
    <div className="main" id="educations">
      <div className="educations-header-div">
        <Fade duration={2000} >
          <h1 className="educations-header" style={{ color: theme.text }}>
            Degrees Received
          </h1>
        </Fade>
      </div>
      <div className="educations-body-div">
        {degrees.degrees.map((degree: any) => {
          return <DegreeCard degree={degree} theme={theme} />;
        })}
      </div>
    </div>
  );
}

export default Educations;
