import { style } from "glamor";
import { AttentionSeeker, Fade } from "react-awesome-reveal";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { contactPageData, greeting } from "../../portfolio.js";
import BlogsImg from "./BlogsImg";
import "./ContactComponent.css";

const ContactData = contactPageData.contactSection;
const blogSection = contactPageData.blogSection;

function Contact(props: { theme: { text: any; accentBright: any; secondaryText: any; }; setTheme: (arg0: string) => void; onToggle: Function; }) {
  const theme = props.theme;

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  return (
    <div className="contact-main">
      <Header theme={theme} setTheme={props.setTheme} />
      <div className="basic-contact">
        <Fade duration={1000} >
          <div className="contact-heading-div">
            <div className="contact-heading-img-div">
              
              <img
                className="profile-pic"
                src={require(`../../assests/images/${ContactData["profile_image_path"]}`)}
                alt=""
              />
            </div>
            <div className="contact-heading-text-div">
              <h1
                className="contact-heading-text"
                style={{ color: theme.text }}
              >
                {ContactData["title"]}
              </h1>
              <p
                className="contact-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {ContactData["description"]}
              </p>
              <SocialMedia />
              <br />
              <br />
              <AttentionSeeker cascade duration={2000} style={{marginTop:"50px"}} effect="flash">
              <a {...styles} target="_blank"  rel="noreferrer" className="general-btn" href={greeting.resumeLink}>
                See my Resume
              </a>
              </AttentionSeeker>
            </div>
          </div>
        </Fade>
        <Fade duration={1000}>
          <div className="blog-heading-div">
            <div className="blog-heading-text-div">
              <h1 className="blog-heading-text" style={{ color: theme.text }}>
                {blogSection["title"]}
              </h1>
              <p
                className="blog-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {blogSection["subtitle"]}
              </p>
              <div className="blogsite-btn-div">
              <AttentionSeeker cascade duration={2000} style={{marginTop:"50px"}} effect="rubberBand">

                <a {...styles} target="_blank"  rel="noreferrer" className="general-btn" href={greeting.coverLetterLink}>
                  See My Cover Letter
                </a>
                </AttentionSeeker>

              </div>
            </div>
            <div className="blog-heading-img-div">
              <BlogsImg theme={theme} />
            </div>
          </div>
        </Fade>


      </div>
      <Footer theme={props.theme} onToggle={props.onToggle} />
    </div>
  );
}

export default Contact;
