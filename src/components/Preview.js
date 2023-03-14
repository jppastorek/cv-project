import React from "react";

const Preview = ({
  first,
  last,
  title,
  email,
  tel,
  website,
  about,
  jobs,
  degrees,
}) => {
  return (
    <>
      <div className="preview">
        <div className="header">
          <h1 id="header-name">
            {first} {last}
          </h1>
          <h4 id="header-title">{title}</h4>
        </div>
        <div className="content">
          <div className="description">
            <h4>Description</h4>
            <hr />
            <p>{about}</p>
          </div>
          <div className="work">
            <h4>Work Experience</h4>
            <hr />
            {jobs.map((job) => {
              return (
                <li key={job.id}>
                  {job.title} {job.company} {job.from} {job.to}{" "}
                  {job.description}
                </li>
              );
            })}
          </div>
          <div className="education">
            <h4>Education</h4>
            <hr />
            {degrees.map((degree) => {
              return (
                <li key={degree.id}>
                  {degree.degree} {degree.school} {degree.subject} {degree.year}
                </li>
              );
            })}
          </div>
        </div>
        <div className="sidebar">
          <div className="img">
            <img src="" alt="profile" />
          </div>
          <div className="sidebar-text">
            <h4>Personal</h4>
            <hr />
            <p>{email}</p>
            <p>{tel}</p>
            <p>{website}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Preview;
