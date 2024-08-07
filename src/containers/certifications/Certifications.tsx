import { Fade } from "react-awesome-reveal";
import CertificationCard from "../../components/certificationCard/CertificationCard";
import { certifications } from "../../portfolio";
import "./Certifications.css";

function Certifications(props: { theme: any; }) {
  const theme = props.theme;
  return (
    <div className="main" id="certs">
      <div className="certs-header-div">
        <Fade duration={2000} >
          <h1 className="certs-header" style={{ color: theme.text }}>
            Certifications
          </h1>
        </Fade>
      </div>
      <div className="certs-body-div">
        {certifications.certifications.map((cert: any) => {
          return <CertificationCard   certificate={cert} theme={theme} />;
        })}
      </div>
    </div>
  );
}

export default Certifications;
