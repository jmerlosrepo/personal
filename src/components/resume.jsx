import React from "react";
import ResumeListElement from "./resumeListElement";

const Resume = ({ jobs }) => {
  return (
    <div className="container container-margins">
      <div className="container-margins text-right">
        <button className="btn btn-secondary">
          Download printable version
        </button>
      </div>
      {jobs
        ? jobs.map((job) => (
            <ResumeListElement
              jobTitle={job.title}
              from={job.from}
              to={job.to}
              description={job.description}
              tasks={job.tasks}
              technologies={job.technologies}
            />
          ))
        : "No jobs Loaded"}
    </div>
  );
};

export default Resume;
