import React from "react";

const Education = (props) => {
  const {
    submitEducation,
    degreeValue,
    schoolValue,
    subjectValue,
    yearValue,
    handleChangeDegree,
    handleChangeSchool,
    handleChangeSubject,
    handleChangeYear,
  } = props;

  return (
    <form>
      <h2>Education</h2>
      <div className="side-by-side">
        <div className="input">
          <label htmlFor="degree">Degree</label>
          <input
            type="text"
            id="degree"
            value={degreeValue}
            onChange={handleChangeDegree}
          />
        </div>
        <div className="input">
          <label htmlFor="grad">Year</label>
          <input
            type="text"
            id="grade"
            placeholder="yyyy"
            value={yearValue}
            onChange={handleChangeYear}
          />
        </div>
      </div>

      <div className="input">
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          id="subject"
          value={subjectValue}
          onChange={handleChangeSubject}
        />
      </div>
      <div className="input">
        <label htmlFor="school">School</label>
        <input
          type="text"
          id="school"
          value={schoolValue}
          onChange={handleChangeSchool}
        />
      </div>

      <button type="submit" onClick={submitEducation}>
        Add
      </button>
    </form>
  );
};

export default Education;
