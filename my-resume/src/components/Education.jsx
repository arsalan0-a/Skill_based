import React from 'react';

export default function Education({ education }) {
  const { institution, location, degree, branch, currentStatus, expectedGraduation, coursework } = education;

  return (
    <section className="resume-section">
      <h2 className="section-heading">
        <span className="heading-text">Education</span>
      </h2>
      <div className="section-body">
        <div className="timeline-card">
          <div className="card-top">
            <div>
              <h3 className="card-title">{institution}</h3>
              <p className="card-subtitle">
                {degree} in {branch}
              </p>
            </div>
            <div className="card-meta">
              <span className="meta-location">{location}</span>
              <span className="meta-date">Expected Graduation: {expectedGraduation}</span>
            </div>
          </div>
          <div className="card-status-pill">
            <span className="status-label">Current Academic Standing:</span>
            <span className="status-value">{currentStatus}</span>
          </div>
          {coursework && coursework.length > 0 && (
            <div className="coursework-container">
              <span className="coursework-title">Key Coursework:</span>
              <div className="tags-wrapper">
                {coursework.map((course, idx) => (
                  <span key={idx} className="tag tag-neutral">{course}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
