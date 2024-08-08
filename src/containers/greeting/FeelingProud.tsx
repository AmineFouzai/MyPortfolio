import { JackInTheBox } from "react-awesome-reveal";
import Me from "./../../assests/images/me (1).png";
import "./FeelingProud.css";
function FeelingProud(props: { theme: any; }) {
  const theme = props.theme;
  return (
    <JackInTheBox duration={2000} >
      <img className="avatar" src={Me}  ></img>
    </JackInTheBox>


  );
}

export default FeelingProud;
