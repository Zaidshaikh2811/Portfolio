import React from "react";
import Profession from "./Profession";
import { profession } from "../assets/Socialmedia";
const AboutMe = () => {
  return (
    <div className="About-Me">
      <div className="About-info">
        <h1>ABOUT ME</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error quos
          omnis optio illum necessitatibus distinctio perspiciatis velit
          delectus quisquam debitis voluptas ipsum, sapiente dolore enim, quas
          commodi repudiandae perferendis et. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Dolor voluptatum ipsa atque, sequi culpa
          placeat modi cupiditate laboriosam exercitationem officiis!
        </p>
        <h3>What I do!</h3>
      </div>
      <div className="What-I-Do">
        {profession.map((item, index) => {
          return <Profession {...item}></Profession>;
        })}
      </div>
    </div>
  );
};

export default AboutMe;
