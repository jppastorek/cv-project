import React from "react";
import Personal from "./Personal";
import Work from "./Work";
import Education from "./Education";

const Form = (props) => {
  const { submitPersonal, submitEducation, submitWork } = props;

  return (
    <>
      <div className="form">
        <Personal submitPersonal={submitPersonal} />
        <Work submitWork={submitWork} />
        <Education submitEducation={submitEducation} />
      </div>
    </>
  );
};

export default Form;
