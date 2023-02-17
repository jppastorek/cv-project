import React from "react";

//this will contain the form for the app. it will be broken into separate categories

const Personal = (props) => {
  return (
    <form>
      <h2>Personal Information</h2>
      <div className="side-by-side">
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
        <textarea placeholder="Write a short description about yourself..." />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

const Work = (props) => {
  return (
    <form>
      <h2>Work Experience</h2>
      <div className="input">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" />
      </div>
      <div className="input">
        <label htmlFor="company">Company</label>
        <input type="text" id="company" />
      </div>
      <div className="side-by-side">
        <div className="input">
          <label htmlFor="start">From</label>
          <input type="text" id="start" placeholder="yyyy" />
        </div>
        <div className="input">
          <label htmlFor="end">To</label>
          <input type="text" id="end" placeholder="yyyy" />
        </div>
      </div>
      <div className="input">
        <label htmlFor="job">Job Description</label>
        <textarea placeholder="Write a short description about the work you did..." />
      </div>

      <button type="submit">Add</button>
    </form>
  );
};

const Education = (props) => {
  return (
    <form>
      <h2>Education</h2>
      <div className="side-by-side">
        <div className="input">
          <label htmlFor="degree">Degree</label>
          <input type="text" id="degree" />
        </div>
        <div className="input">
          <label htmlFor="grad">Year</label>
          <input type="text" id="grade" placeholder="yyyy" />
        </div>
      </div>

      <div className="input">
        <label htmlFor="subject">Subject</label>
        <input type="text" id="subject" />
      </div>
      <div className="input">
        <label htmlFor="school">School</label>
        <input type="text" id="school" />
      </div>

      <button type="submit">Add</button>
    </form>
  );
};

// const Skills = (props) => {
//   return (
//     <section>
//       <h2>Skills</h2>
//     </section>
//   );
// };

const Form = (props) => {
  //some code

  return (
    <>
      <Personal />
      <Work />
      <Education />
    </>
  );
};

export default Form;
