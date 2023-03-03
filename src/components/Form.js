import React from "react";
import Personal from "./Personal";
import Work from "./Work";
import Education from "./Education";

const Form = (props) => {
  const {
    submitPersonal,
    submitEducation,
    submitWork,
    handleChangeFirst,
    handleChangeLast,
    handleChangeTitle,
    handleChangeEmail,
    handleChangeTel,
    handleChangeWebsite,
    handleChangeAbout,
    handleChangeJobTitle,
    handleChangeCompany,
    handleChangeFrom,
    handleChangeTo,
    handleChangeDescription,
    handleChangeDegree,
    handleChangeSchool,
    handleChangeSubject,
    handleChangeYear,
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
  } = props;

  return (
    <div className="form">
      <Personal
        submitPersonal={submitPersonal}
        handleChangeFirst={handleChangeFirst}
        handleChangeLast={handleChangeLast}
        handleChangeTitle={handleChangeTitle}
        handleChangeEmail={handleChangeEmail}
        handleChangeTel={handleChangeTel}
        handleChangeWebsite={handleChangeWebsite}
        handleChangeAbout={handleChangeAbout}
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
        handleChangeJobTitle={handleChangeJobTitle}
        handleChangeCompany={handleChangeCompany}
        handleChangeFrom={handleChangeFrom}
        handleChangeTo={handleChangeTo}
        handleChangeDescription={handleChangeDescription}
        jobTitleValue={jobTitleValue}
        companyValue={companyValue}
        fromValue={fromValue}
        toValue={toValue}
        descriptionValue={descriptionValue}
      />
      <Education
        submitEducation={submitEducation}
        handleChangeDegree={handleChangeDegree}
        handleChangeSchool={handleChangeSchool}
        handleChangeSubject={handleChangeSubject}
        handleChangeYear={handleChangeYear}
        degreeValue={degreeValue}
        schoolValue={schoolValue}
        subjectValue={subjectValue}
        yearValue={yearValue}
      />
    </div>
  );
};

export default Form;
