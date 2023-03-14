import React from "react";
import Personal from "./Personal";
import Work from "./Work";
import Education from "./Education";

const Form = ({
  submitPersonal,
  submitEducation,
  submitWork,
  handleChangePersonal,
  handleChangeWork,
  handleChangeEducation,
  firstValue,
  lastValue,
  titleValue,
  emailValue,
  telValue,
  websiteValue,
  aboutValue,
  jobTitleValue,
  companyValue,
  fromValue,
  toValue,
  descriptionValue,
  degreeValue,
  schoolValue,
  subjectValue,
  yearValue,
}) => {
  return (
    <div className="form">
      <Personal
        submitPersonal={submitPersonal}
        handleChange={handleChangePersonal}
        firstValue={firstValue}
        lastValue={lastValue}
        titleValue={titleValue}
        emailValue={emailValue}
        telValue={telValue}
        websiteValue={websiteValue}
        aboutValue={aboutValue}
      />
      <Work
        submitWork={submitWork}
        handleChange={handleChangeWork}
        jobTitleValue={jobTitleValue}
        companyValue={companyValue}
        fromValue={fromValue}
        toValue={toValue}
        descriptionValue={descriptionValue}
      />
      <Education
        submitEducation={submitEducation}
        handleChange={handleChangeEducation}
        degreeValue={degreeValue}
        schoolValue={schoolValue}
        subjectValue={subjectValue}
        yearValue={yearValue}
      />
    </div>
  );
};

export default Form;
