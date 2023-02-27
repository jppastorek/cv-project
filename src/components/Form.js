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
    firstValue,
    lastValue,
    titleValue,
    emailValue,
    telValue,
    websiteValue,
    aboutValue,
  } = props;

  return (
    <>
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
        <Work submitWork={submitWork} />
        <Education submitEducation={submitEducation} />
      </div>
    </>
  );
};

export default Form;
