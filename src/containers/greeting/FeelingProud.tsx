import { JackInTheBox } from "react-awesome-reveal";
import Me from "./../../assests/images/me.png";
import "./FeelingProud.css";
function FeelingProud(_: { theme: any; }) {
  return (
    <JackInTheBox duration={2000} >
      <img className="avatar" alt="Mohamed Amine Fouzai" src={Me}  ></img>
    </JackInTheBox>


  );
}

export default FeelingProud;
