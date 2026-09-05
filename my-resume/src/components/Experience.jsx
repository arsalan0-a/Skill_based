import React from 'react';

export default function Experience({ experience }) {
  return (
    <section className="resume-section">
      <h2 className="section-heading">
        <span className="heading-text">Internship Experience</span>
      </h2>
      <div className="section-body">
        {experience.map((exp, idx) => (
          <div key={idx} className="timeline-card experience-card">
            <div className="card-top">
              <div>
                <h3 className="card-title">{exp.role}</h3>
                <p className="card-subtitle">{exp.organization}</p>
              </div>
              <div className="card-meta">
                <span className="meta-location">{exp.location}</span>
                <span className="meta-date">{exp.duration}</span>
              </div>
            </div>

            {exp.credentialNote && (
              <div className="credential-badge-inline">
                <svg className="icon-tiny" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Verified Institute Credential: {exp.credentialNote}</span>
              </div>
            )}

            <ul className="bullet-list">
              {exp.points.map((pt, pIdx) => (
                <li key={pIdx} className="bullet-point">
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
