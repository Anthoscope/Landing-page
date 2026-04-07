import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CherryBlossom from './CherryBlossom';
import AnimatedBackground from './AnimatedBackground';

// Helper for paths
const base = import.meta.env.BASE_URL;

// --- Local SVG Components (Unchanged) ---
const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const HomePage = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleButtonClick = () => {
    setClickCount(prev => prev + 1);
  };

  const buttonColor = clickCount > 0 
    ? 'bg-rose-800 hover:bg-rose-900' 
    : 'bg-rose-600 hover:bg-rose-700';

  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col">
      <AnimatedBackground />
      
      <Link
        to="/about"
        className="fixed top-6 right-6 z-30 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full text-gray-700 hover:text-rose-600 transition-colors duration-300 shadow-lg hover:shadow-xl font-medium border border-gray-100"
      >
        About
      </Link>

      <CherryBlossom clickCount={clickCount} />

      <div className="relative z-10 flex flex-col items-center justify-center flex-grow px-4 text-center">
        <div className="mb-0 -mt-10 flex items-center justify-center overflow-hidden h-48 md:h-64 w-full max-w-4xl">
          <img 
            src={`${base}images/anthologo_neg.png`} 
            alt="Anthoscope Logo" 
            className="w-full h-full object-contain scale-[2.1]" 
          />
        </div>
        
        <p className="text-xl md:text-2xl mb-10 max-w-2xl -mt-4 relative z-20 font-medium text-gray-800 tracking-wide">
          Navigate allergy season with confidence.
        </p>

        <button
          onClick={handleButtonClick}
          className={`px-10 py-4 text-2xl font-bold rounded-full text-white transition-all duration-500 transform hover:scale-105 shadow-xl ${buttonColor}`}
        >
          {clickCount > 0 ? 'Launching...' : 'Start Here'}
        </button>
        
        <div className="mt-8 text-gray-500">
          <p className="text-sm font-medium">Cherries fallen: {clickCount}</p>
        </div>
      </div>

      <footer className="relative z-20 w-full px-8 py-6 flex flex-col md:flex-row items-center justify-between text-gray-600 text-sm">
        <div className="flex items-center space-x-6 mb-6 md:mb-0 md:w-1/3">
          <a href="https://instagram.com/anthoscope" target="_blank" rel="noopener noreferrer" className="hover:text-rose-600 transition-colors transform hover:scale-110">
            <InstagramIcon />
          </a>
          <a href="https://linkedin.com/company/anthoscope" target="_blank" rel="noopener noreferrer" className="hover:text-rose-600 transition-colors transform hover:scale-110">
            <LinkedinIcon />
          </a>
          <a href="https://github.com/anthoscope" target="_blank" rel="noopener noreferrer" className="hover:text-rose-600 transition-colors transform hover:scale-110">
            <GithubIcon />
          </a>
        </div>

        <div className="md:w-1/3 text-center font-medium mb-6 md:mb-0">
          ©2026 Anthoscope
        </div>

        <div className="md:w-1/3 flex justify-center md:justify-end">
          <a 
            href="https://www.buymeacoffee.com/alexmyl" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-transform hover:scale-105 active:scale-95"
          >
            <img 
              src="https://img.buymeacoffee.com/button-api/?text=Buy us a coffee&emoji=&slug=alexmyl&button_colour=e11d48&font_colour=ffffff&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff" 
              alt="Buy us a coffee"
              style={{ height: '42px', width: 'auto' }}
            />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;