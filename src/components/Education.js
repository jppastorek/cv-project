import React, { Component } from "react";
import uniqid from "uniqid";

class Education extends Component {
  constructor() {
    super();

    this.state = {
      degree: {
        degree: "",
        year: "",
        subject: "",
        school: "",
        id: uniqid(),
      },
      degrees: [],
    };
  }

  render() {
    const { degree } = this.state;
    return (
      <form>
        <h2>Education</h2>
        <div className="side-by-side">
          <div className="input">
            <label htmlFor="degree">Degree</label>
            <input type="text" id="degree" value={degree.degree} />
          </div>
          <div className="input">
            <label htmlFor="grad">Year</label>
            <input
              type="text"
              id="grade"
              placeholder="yyyy"
              value={degree.year}
            />
          </div>
        </div>

        <div className="input">
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" value={degree.subject} />
        </div>
        <div className="input">
          <label htmlFor="school">School</label>
          <input type="text" id="school" value={degree.school} />
        </div>

        <button type="submit">Add</button>
      </form>
    );
  }
}

export default Education;
