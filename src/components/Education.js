import React, { Component } from "react";
import uniqid from "uniqid";

class Education extends Component {
  constructor() {
    super();

    this.state = {
      degree: "",
      year: "",
      subject: "",
      school: "",
      id: uniqid(),
      degrees: [],
    };
  }

  handleChangeDegree = (e) => {
    this.setState({
      degree: e.target.value,
    });
  };

  handleChangeYear = (e) => {
    this.setState({
      year: e.target.value,
    });
  };

  handleChangeSubject = (e) => {
    this.setState({
      subject: e.target.value,
    });
  };

  handleChangeSchool = (e) => {
    this.setState({
      school: e.target.value,
    });
  };

  onAddDegree = (e) => {
    e.preventDefault();
    const degree = {
      degree: this.state.degree,
      year: this.state.year,
      subject: this.state.subject,
      school: this.state.school,
    };
    this.setState({
      degrees: this.state.degrees.concat(degree),
      degree: "",
      year: "",
      subject: "",
      school: "",
      id: uniqid(),
    });
  };

  render() {
    const { degree, year, subject, school } = this.state;
    return (
      <form>
        <h2>Education</h2>
        <div className="side-by-side">
          <div className="input">
            <label htmlFor="degree">Degree</label>
            <input
              type="text"
              id="degree"
              value={degree}
              onChange={this.handleChangeDegree}
            />
          </div>
          <div className="input">
            <label htmlFor="grad">Year</label>
            <input
              type="text"
              id="grade"
              placeholder="yyyy"
              value={year}
              onChange={this.handleChangeYear}
            />
          </div>
        </div>

        <div className="input">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={this.handleChangeSubject}
          />
        </div>
        <div className="input">
          <label htmlFor="school">School</label>
          <input
            type="text"
            id="school"
            value={school}
            onChange={this.handleChangeSchool}
          />
        </div>

        <button type="submit" onClick={this.onAddDegree}>
          Add
        </button>
      </form>
    );
  }
}

export default Education;
