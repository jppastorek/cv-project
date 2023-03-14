import React from "react";

const Personal = ({
  submitPersonal,
  handleChange,
  firstValue,
  lastValue,
  titleValue,
  emailValue,
  telValue,
  websiteValue,
  aboutValue,
}) => {
  return (
    <form>
      <h2>Personal Information</h2>
      <div className="side-by-side">
        <div className="input">
          <label htmlFor="first">First Name</label>
          <input
            type="text"
            id="firstName"
            name="first"
            placeholder="John"
            value={firstValue}
            onChange={handleChange}
          />
        </div>
        <div className="input">
          <label htmlFor="last">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="last"
            placeholder="Doe"
            value={lastValue}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="input">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Job Title"
          value={titleValue}
          onChange={handleChange}
        />
      </div>
      <div className="input">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="johndoe@example.com"
          value={emailValue}
          onChange={handleChange}
        />
      </div>
      <div className="input">
        <label htmlFor="tel">Phone</label>
        <input
          type="tel"
          id="tel"
          name="tel"
          placeholder="555-555-5555"
          value={telValue}
          onChange={handleChange}
        />
      </div>
      <div className="input">
        <label htmlFor="site">Website</label>
        <input
          type="text"
          id="site"
          name="website"
          placeholder="www.example.com"
          value={websiteValue}
          onChange={handleChange}
        />
      </div>
      <div className="input">
        <label htmlFor="about">About</label>
        <textarea
          name="about"
          id="about"
          placeholder="Write a short description about yourself..."
          value={aboutValue}
          onChange={handleChange}
        />
      </div>
      <button type="submit" onClick={submitPersonal}>
        Save
      </button>
    </form>
  );
};

export default Personal;
