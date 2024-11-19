import React from 'react';
import { useNavigate } from 'react-router-dom';

const Courses = ({ course }) => {
  const navigate = useNavigate();

  const moving = (courseName) => {
    navigate(`/courseDetails/${courseName}`);
  };

  return (
    <div className="col-md-4 mb-4">
      <div className="card course-card">
        <div className="card-body">
          <h5 className="card-title">{course.title}</h5>
          <p className="card-text">{course.description}</p>
          <p className="card-text"><small className="text-muted">{course.eligibility}</small></p>
          <div className="text-center">
            <button
              onClick={() => moving(course.title)} 
              className="btn btn-primary explore-btn"
            >
              Explore
            </button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
