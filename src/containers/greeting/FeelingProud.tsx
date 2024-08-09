import { JackInTheBox } from "react-awesome-reveal";
import Me from "./../../assests/images/me (1).png";
import "./FeelingProud.css";
function FeelingProud(props: { theme: any; }) {
  return (
    <JackInTheBox duration={2000} >
      <img className="avatar" alt="Mohamed Amine Fouzai" src={Me}  ></img>
    </JackInTheBox>


  );
}

export default FeelingProud;
