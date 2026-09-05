import React from 'react';

export default function Navbar({ theme, toggleTheme, onPrint, onCopy, isCopied }) {
  return (
    <nav className="navbar no-print">
      <div className="navbar-container">
        <div className="nav-brand">
          <span className="brand-logo">AA</span>
          <span className="brand-title">Arsalan Ajaz</span>
          <span className="badge-status">Open to Internships</span>
        </div>

        <div className="nav-actions">
          <button
            onClick={onCopy}
            className={`btn btn-secondary ${isCopied ? 'btn-copied' : ''}`}
            title="Copy full resume text for job applications"
            type="button"
          >
            {isCopied ? (
              <>
                <svg className="icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Copied ATS Text!</span>
              </>
            ) : (
              <>
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
                <span>Copy ATS Text</span>
              </>
            )}
          </button>

          <button
            onClick={onPrint}
            className="btn btn-primary"
            title="Print or Save as 1-Page PDF"
            type="button"
          >
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 6 2 18 2 18 9"></polyline>
              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
              <rect x="6" y="14" width="12" height="8"></rect>
            </svg>
            <span>Save / Print PDF</span>
          </button>

          <button
            onClick={toggleTheme}
            className="btn btn-icon"
            aria-label="Toggle theme"
            title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
            type="button"
          >
            {theme === 'light' ? (
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            ) : (
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
