import React from "react";
import Profession from "./Profession";
import { education, experience } from "../assets/Socialmedia";
import Skills from "./Skills";
import { work_skills, soft_skills } from "../assets/Socialmedia";
const Resume = () => {
  return (
    <div className="About-Me">
      <div className="About-info">
        <h1>Resume</h1>
        <div className="Resume-work">
          <div className="experience">
            <div className="title">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z" />
              </svg>
              <h3>Education</h3>
            </div>
            <div className="What-I-Do p-0">
              {education.map((item, index) => {
                return <Profession key={index} {...item} />;
              })}
            </div>
          </div>
          <div className="experience">
            <div className="title">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path d="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm0-80h640v-440H160v440Zm240-520h160v-80H400v80ZM160-200v-440 440Z" />
              </svg>
              <h3>Experience</h3>
            </div>
            <div className="What-I-Do p-0">
              {experience.map((item, index) => {
                return <Profession key={index} {...item} />;
              })}
            </div>
          </div>
        </div>
        <div className="skills">
          <div className="What-I-Do p-0">
            <h1>Work Skills</h1>
            <div className="work_skills">
              {work_skills.map((item, index) => {
                return <Skills key={index} item={item}></Skills>;
              })}
            </div>
          </div>
          <div className="What-I-Do p-0">
            <h3>Soft Skills</h3>
            <div className="work_skills">
              {soft_skills.map((item, index) => {
                return <Skills key={index} item={item}></Skills>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
