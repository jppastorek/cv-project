import React from "react";

const Work = (props) => {
  const {
    submitWork,
    handleChange,
    jobTitleValue,
    companyValue,
    fromValue,
    toValue,
    descriptionValue,
  } = props;

  return (
    <form>
      <h2>Work Experience</h2>
      <div className="input">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="jobTitle"
          value={jobTitleValue}
          onChange={handleChange}
        />
      </div>
      <div className="input">
        <label htmlFor="company">Company</label>
        <input
          type="text"
          id="company"
          value={companyValue}
          onChange={handleChange}
        />
      </div>
      <div className="side-by-side">
        <div className="input">
          <label htmlFor="start">From</label>
          <input
            type="text"
            id="from"
            placeholder="yyyy"
            value={fromValue}
            onChange={handleChange}
          />
        </div>
        <div className="input">
          <label htmlFor="end">To</label>
          <input
            type="text"
            id="to"
            placeholder="yyyy"
            value={toValue}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="input">
        <label htmlFor="job">Job Description</label>
        <textarea
          id="description"
          placeholder="Write a short description about the work you did..."
          value={descriptionValue}
          onChange={handleChange}
        />
      </div>

      <button type="submit" onClick={submitWork}>
        Add
      </button>
    </form>
  );
};

export default Work;
