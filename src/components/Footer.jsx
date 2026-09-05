import React from 'react';

export default function Footer({ name, github, linkedin }) {
  return (
    <footer className="resume-footer no-print">
      <div className="footer-content">
        <p>
          &copy; {new Date().getFullYear()} {name} &bull; Built with React & Vite &bull; Optimized for ATS & Vercel
        </p>
        <div className="footer-links">
          <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <span className="dot">&bull;</span>
          <a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <span className="dot">&bull;</span>
          <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Back to Top &uarr;</a>
        </div>
      </div>
    </footer>
  );
}
