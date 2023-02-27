import React from "react";

const Personal = (props) => {
  const {
    submitPersonal,
    handleChangeFirst,
    handleChangeLast,
    handleChangeTitle,
    handleChangeEmail,
    handleChangeTel,
    handleChangeWebsite,
    handleChangeAbout,
    firstValue,
    lastValue,
    titleValue,
    emailValue,
    telValue,
    websiteValue,
    aboutValue,
  } = props;
  return (
    <form>
      <h2>Personal Information</h2>
      <div className="side-by-side">
        <div className="input">
          <label htmlFor="first">First Name</label>
          <input
            type="text"
            id="first"
            name="first"
            placeholder="John"
            value={firstValue}
            onChange={handleChangeFirst}
          />
        </div>
        <div className="input">
          <label htmlFor="last">Last Name</label>
          <input
            type="text"
            id="last"
            name="last"
            placeholder="Doe"
            value={lastValue}
            onChange={handleChangeLast}
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
          onChange={handleChangeTitle}
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
          onChange={handleChangeEmail}
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
          onChange={handleChangeTel}
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
          onChange={handleChangeWebsite}
        />
      </div>
      <div className="input">
        <label htmlFor="about">About</label>
        <textarea
          name="about"
          placeholder="Write a short description about yourself..."
          value={aboutValue}
          onChange={handleChangeAbout}
        />
      </div>
      <button type="submit" onClick={submitPersonal}>
        Save
      </button>
    </form>
  );
};

export default Personal;
