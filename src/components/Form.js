import React from "react";

//this will contain the form for the app. it will be broken into separate categories

const Personal = (props) => {
  return (
    <section>
      <h2>Personal Information</h2>
      <div className="names">
        <div className="input">
          <label htmlFor="first">First Name</label>
          <input type="text" id="first" placeholder="John" />
        </div>
        <div className="input">
          <label htmlFor="last">Last Name</label>
          <input type="text" id="last" placeholder="Doe" />
        </div>
      </div>
      <div className="input">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="johndoe@example.com" />
      </div>
      <div className="input">
        <label htmlFor="tel">Phone</label>
        <input type="tel" id="tel" placeholder="555-555-5555" />
      </div>
      <div className="input">
        <label htmlFor="site">Website</label>
        <input type="text" id="site" placeholder="www.example.com" />
      </div>
      <div className="input">
        <label htmlFor="about">About</label>
        <input
          type="textarea"
          placeholder="Write a short description about yourself..."
        />
      </div>
    </section>
  );
};

const Work = (props) => {
  return (
    <section>
      <h3>Work Experience</h3>
    </section>
  );
};

const Education = (props) => {
  return (
    <section>
      <h3>Education</h3>
    </section>
  );
};

const Skills = (props) => {
  return (
    <section>
      <h3>Skills</h3>
    </section>
  );
};

const Form = (props) => {
  //some code

  return (
    <>
      <Personal />
      <Work />
      <Education />
      <Skills />
    </>
  );
};

export default Form;
