import React, { Component } from "react";
import uniqid from "uniqid";

class Work extends Component {
  constructor() {
    super();

    this.state = {
        job: {
            title: "",
            company: "",
            from: "",
            to: "",
            description: "",
            id: uniqid(),
        },
        jobs: []
    }
  }

  render() {
    const { job } = this.state;
    return (
      <form>
        <h2>Work Experience</h2>
        <div className="input">
          <label htmlFor="title">Title</label>
          <input 
          type="text" 
          id="title"
          value={job.title} />
        </div>
        <div className="input">
          <label htmlFor="company">Company</label>
          <input 
          type="text" 
          id="company"
          value={job.company} />
        </div>
        <div className="side-by-side">
          <div className="input">
            <label htmlFor="start">From</label>
            <input 
            type="text" 
            id="start" 
            placeholder="yyyy"
            value={job.from}
             />
          </div>
          <div className="input">
            <label htmlFor="end">To</label>
            <input 
            type="text" 
            id="end" 
            placeholder="yyyy"
            value={job.to}
             />
          </div>
        </div>
        <div className="input">
          <label htmlFor="job">Job Description</label>
          <textarea 
          placeholder="Write a short description about the work you did..."
          value={job.description} />
        </div>

        <button type="submit">Add</button>
      </form>
    );
  }
}

export default Work;
