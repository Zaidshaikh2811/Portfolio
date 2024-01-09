import React, { useState } from "react";
import { contact } from "../assets/Socialmedia";
import Profession from "./Profession";

const Contact = () => {
  const [formData, setFormData] = useState({
    // Define your form fields here
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e) => {
    // Update the form data as the user types
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, you can send the data to a server or perform other actions
    console.log("Form submitted:", formData);
  };

  return (
    <div className="About-Me">
      <div className="About-info">
        <h1>Contact</h1>
        <div className="Resume-work">
          {contact.map((item, index) => {
            return <Profession key={index} {...item}></Profession>;
          })}
        </div>
      </div>
      <div className="section">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
          cupiditate similique sunt quod eaque porro exercitationem sed fugit
          autem dolorem?
        </p>
        {/* <form action="">
          <div className="contact-form">
            <p>Name</p>
            <input type="text" className="input" />
          </div>
          <div className="contact-form">
            <p>Name</p>
            <input type="text" className="input" />
          </div>
          <div className="contact-form">
            <p>Name</p>
            <input type="text" className="input" />
          </div>
          <button className="btn">Submit</button>
        </form> */}

        <form onSubmit={handleSubmit}>
          <label className="contact-form">
            First Name:
            <input
              className="input"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </label>
          <br />
          <hr />
          <label className="contact-form">
            Last Name:
            <input
              className="input"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </label>
          <br />
          <hr />
          <label className="contact-form">
            Email:
            <input
              className="input"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <br />
          <hr />
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
