import React from 'react';

export default function Summary({ summary }) {
  return (
    <section className="resume-section">
      <h2 className="section-heading">
        <span className="heading-text">Professional Summary</span>
      </h2>
      <div className="section-body">
        <p className="summary-paragraph">{summary}</p>
      </div>
    </section>
  );
}
