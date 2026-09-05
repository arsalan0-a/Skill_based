import React from 'react';

export default function Skills({ skills }) {
  return (
    <section className="resume-section">
      <h2 className="section-heading">
        <span className="heading-text">Technical Skills</span>
      </h2>
      <div className="section-body">
        <div className="skills-grid">
          {skills.map((group, idx) => (
            <div key={idx} className="skill-category-row">
              <div className="skill-category-label">
                <strong>{group.category}:</strong>
              </div>
              <div className="skill-tags">
                {group.items.map((skill, sIdx) => (
                  <span key={sIdx} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
