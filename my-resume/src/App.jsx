import { useState, useEffect } from 'react';
import './App.css';
import { resumeData } from './data/resumeData';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Summary from './components/Summary';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import Toast from './components/Toast';

function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  const [copied, setCopied] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const handlePrint = () => {
    window.print();
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(resumeData.rawPlainText);
      setCopied(true);
      setToastMessage('ATS Resume copied to clipboard! Ready to paste.');
      setTimeout(() => {
        setCopied(false);
        setToastMessage('');
      }, 3500);
    } catch (err) {
      console.error('Failed to copy: ', err);
      // Fallback
      const textArea = document.createElement('textarea');
      textArea.value = resumeData.rawPlainText;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setToastMessage('ATS Resume copied to clipboard!');
      setTimeout(() => {
        setCopied(false);
        setToastMessage('');
      }, 3500);
    }
  };

  return (
    <div className="app-wrapper">
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        onPrint={handlePrint}
        onCopy={handleCopy}
        isCopied={copied}
      />

      <main className="resume-container" id="top">
        <div className="resume-paper">
          <Header data={resumeData} />
          <Summary summary={resumeData.summary} />
          <Education education={resumeData.education} />
          <Skills skills={resumeData.skills} />
          <Experience experience={resumeData.experience} />
          <Projects projects={resumeData.projects} />
          <Certifications certifications={resumeData.certifications} />
        </div>
      </main>

      <Footer
        name={resumeData.name}
        github={resumeData.contact.github}
        linkedin={resumeData.contact.linkedin}
      />

      <Toast message={toastMessage} visible={!!toastMessage} />
    </div>
  );
}

export default App;
