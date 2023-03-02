import React from "react";

const Work = (props) => {
  const {
    submitWork,
    handleChangeJobTitle,
    handleChangeCompany,
    handleChangeFrom,
    handleChangeTo,
    handleChangeDescription,
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
          id="title"
          value={jobTitleValue}
          onChange={handleChangeJobTitle}
        />
      </div>
      <div className="input">
        <label htmlFor="company">Company</label>
        <input
          type="text"
          id="company"
          value={companyValue}
          onChange={handleChangeCompany}
        />
      </div>
      <div className="side-by-side">
        <div className="input">
          <label htmlFor="start">From</label>
          <input
            type="text"
            id="start"
            placeholder="yyyy"
            value={fromValue}
            onChange={handleChangeFrom}
          />
        </div>
        <div className="input">
          <label htmlFor="end">To</label>
          <input
            type="text"
            id="end"
            placeholder="yyyy"
            value={toValue}
            onChange={handleChangeTo}
          />
        </div>
      </div>
      <div className="input">
        <label htmlFor="job">Job Description</label>
        <textarea
          placeholder="Write a short description about the work you did..."
          value={descriptionValue}
          onChange={handleChangeDescription}
        />
      </div>

      <button type="submit" onClick={submitWork}>
        Add
      </button>
    </form>
  );
};

export default Work;
