import React from "react";
import TechImage from "./techImage";

const ResumeListElement = ({
  jobTitle,
  description,
  tasks,
  from,
  to,
  technologies,
}) => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-md-6">
            <h4 className="card-title">{jobTitle}</h4>
          </div>
          <div className="col-md-2" />
          <div className="col-sm-4 ms-auto">
            From: {from} - To: {to}
          </div>
        </div>
      </div>
      <div className="card-body">
        <p className="card-text">{description}</p>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>{task.description}</li>
          ))}
        </ul>
        {technologies.length === 0 || <h5>Technologies used</h5>}
        <ul className="techList">
          {!technologies ||
            technologies.map((technology) => (
              <li>
                <TechImage image={technology.image} alt={technology.name} />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default ResumeListElement;
