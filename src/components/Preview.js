import React from "react";

//this will be used to show a preview of your CV. it will have a button that will allow you to save as a PDF
//each section will have an edit button that populates the form with those values to change

const Preview = (props) => {
  //some code

  return (
    <>
      <div className="preview">
        <div className="header">
          <h1 id="header-name">Jon Pastorek</h1>
          <h4 id="header-title">Junior Software Engineer</h4>
        </div>
        <div className="content">
          <div className="description">
            <h4>Description</h4>
            <hr />
          </div>
          <div className="work">
            <h4>Work Experience</h4>
            <hr />
          </div>
          <div className="education">
            <h4>Education</h4>
            <hr />
          </div>
        </div>
        <div className="sidebar">
          <div className="img">
            <img src="" alt="profile" />
          </div>
          <div className="sidebar-text">
          <h4>Personal</h4>
          <hr />
          </div>
        </div>
      </div>
    </>
  );
};

export default Preview;
