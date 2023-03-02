import React, { Component } from "react";
import uniqid from "uniqid";

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
  // onAddJob = (e) => {
  //   e.preventDefault();
  //   const job = {
  //     title: this.state.title,
  //     company: this.state.company,
  //     from: this.state.from,
  //     to: this.state.to,
  //     description: this.state.description,
  //     id: uniqid(),
  //   };
  //   this.setState({
  //     jobs: this.state.jobs.concat(job),
  //     title: "",
  //     company: "",
  //     from: "",
  //     to: "",
  //     description: "",
  //     id: uniqid(),
  //   })
  // }
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
