import React from 'react';

export default function Certifications({ certifications }) {
  return (
    <section className="resume-section">
      <h2 className="section-heading">
        <span className="heading-text">Certifications & Credentials</span>
      </h2>
      <div className="section-body">
        {certifications.map((cert, idx) => (
          <div key={idx} className="timeline-card cert-card">
            <div className="card-top">
              <div>
                <h3 className="card-title">{cert.title}</h3>
                <p className="card-subtitle">{cert.issuer}</p>
              </div>
              <div className="card-meta">
                <span className="meta-date">{cert.date}</span>
              </div>
            </div>
            <div className="cert-meta-footer">
              <span className="cert-id-tag">
                <strong>Credential ID:</strong> {cert.credentialId}
              </span>
              <span className="cert-desc">{cert.details}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
