import { Fade } from "react-awesome-reveal";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Certifications from "../../containers/certifications/Certifications";
import Educations from "../../containers/education/Educations";
import "./EducationComponent.css";
import EducationImg from "./EducationImg";

function Education(props: { theme: { text: any; secondaryText: any; }; setTheme: (arg0: string) => void; }) {
  const theme = props.theme;
  return (
    <div className="education-main">
      <Header theme={props.theme} setTheme={props.setTheme} />
      <div className="basic-education">
        <Fade duration={2000} >
          <div className="heading-div">
            <div className="heading-img-div">
              <EducationImg theme={theme} />
            </div>
            <div className="heading-text-div">
              <h1 className="heading-text" style={{ color: theme.text }}>
                Education
              </h1>
              <h3 className="heading-sub-text" style={{ color: theme.text }}>
                Basic Qualification and Certifications
              </h3>
              <p
                className="experience-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
            Compilation of academic and professional materials that exemplifies my beliefs, skills, qualifications, education, training, and experiences



              </p>
            </div>
          </div>
        </Fade>
        <Educations theme={props.theme} />
        <Certifications theme={props.theme} />
      </div>
      <Footer theme={props.theme} onToggle={() => { }} />
    </div>
  );
}

export default Education;
