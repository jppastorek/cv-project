import React, { Component } from "react";
import uniqid from "uniqid";

class Work extends Component {
  constructor() {
    super();

    this.state = {
      title: "",
      company: "",
      from: "",
      to: "",
      description: "",
      id: uniqid(),
      jobs: [],
    };
  }

  handleChangeTitle = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  handleChangeCompany = (e) => {
    this.setState({
      company: e.target.value,
    });
  };

  handleChangeFrom = (e) => {
    this.setState({
      from: e.target.value,
    });
  };

  handleChangeTo = (e) => {
    this.setState({
      to: e.target.value,
    });
  };

  handleChangeDescription = (e) => {
    this.setState({
      description: e.target.value,
    });
  };

  onAddJob = (e) => {
    e.preventDefault();
    const job = {
      title: this.state.title,
      company: this.state.company,
      from: this.state.from,
      to: this.state.to,
      description: this.state.description,
      id: uniqid(),
    };
    this.setState({
      jobs: this.state.jobs.concat(job),
      title: "",
      company: "",
      from: "",
      to: "",
      description: "",
      id: uniqid(),
    })
  }

  render() {
    const { title, company, from, to, description } = this.state;
    return (
      <form>
        <h2>Work Experience</h2>
        <div className="input">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={this.handleChangeTitle}
          />
        </div>
        <div className="input">
          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            value={company}
            onChange={this.handleChangeCompany}
          />
        </div>
        <div className="side-by-side">
          <div className="input">
            <label htmlFor="start">From</label>
            <input
              type="text"
              id="start"
              placeholder="yyyy"
              value={from}
              onChange={this.handleChangeFrom}
            />
          </div>
          <div className="input">
            <label htmlFor="end">To</label>
            <input
              type="text"
              id="end"
              placeholder="yyyy"
              value={to}
              onChange={this.handleChangeTo}
            />
          </div>
        </div>
        <div className="input">
          <label htmlFor="job">Job Description</label>
          <textarea
            placeholder="Write a short description about the work you did..."
            value={description}
            onChange={this.handleChangeDescription}
          />
        </div>

        <button type="submit" onClick={this.onAddJob}>Add</button>
      </form>
    );
  }
}

export default Work;
