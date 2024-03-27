import { useContext } from "react";
import "./About.css";
import UserContext from "../../context/context";
import Box from "./box";

const About = () => {
  const { light } = useContext(UserContext);

  return (
    <div className={light ? "about-cont light-about" : "about-cont dark-about"}>
      <div className="about">
        <h1>About App</h1>
        <div className="details">
          <Box
            heading="Analyse Your Text"
            paragraph="Textutils gives you a way to analyze your text quickly and efficently.It let you to count word, count charecters or reading
                time required.It has both light and dark mode for better
                compartable."
          />

          <Box
            heading="Free To Use"
            paragraph="TextUtils is a free charecter counter tool that provided instant
            charecter count and word count statics for a given text.
            TextUtils reports the number of words and charecter. Thus it is
            suitable for writing text with word / charecter limit."
          />

          <Box
            heading="Browser Compatible"
            paragraph="This word counter software works in any web browser such as
            Chrome , Firefox ,Internet Explorer ,Safari,Opera etc."
          />
        </div>
      </div>
    </div>
  );
};

export default About;
