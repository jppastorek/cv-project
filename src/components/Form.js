import React from "react";
import Personal from "./Personal";
import Work from "./Work";
import Education from "./Education";

const Form = (props) => {
  //some code

  return (
    <>
      <div className="form">
        <Personal />
        <Work />
        <Education />
      </div>
    </>
  );
};

export default Form;
