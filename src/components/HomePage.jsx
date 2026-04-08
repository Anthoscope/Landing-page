import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CherryBlossom from './CherryBlossom';
import AnimatedBackground from './AnimatedBackground';

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
  ? 'bg-rose-950 hover:bg-rose-900' 
  : 'bg-cherry-red hover:bg-rose-700';

  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col selection:bg-cherry-red selection:text-white">
      <AnimatedBackground />
      
      {/* Responsive About Button */}
      <Link
        to="/about"
        className="fixed top-4 right-4 md:top-6 md:right-6 z-40 px-4 py-2 md:px-6 md:py-3 bg-white/80 backdrop-blur-sm rounded-full text-gray-700 hover:text-cherry-red transition-all duration-300 shadow-lg font-medium border border-gray-100 text-sm md:text-base"
      >
        About
      </Link>

      <CherryBlossom clickCount={clickCount} />

      <div className="relative z-10 flex flex-col items-center justify-center flex-grow px-4 text-center">
        {/* Adjusted scaling for mobile: scale-150 on small, scale-210 on medium+ */}
        <div className="mb-0 -mt-10 flex items-center justify-center overflow-hidden h-40 md:h-64 w-full max-w-4xl">
          <img 
            src={`${base}images/anthologo_neg.png`} 
            alt="Anthoscope Logo" 
            className="w-full h-full object-contain scale-[1.5] md:scale-[2.1] select-none pointer-events-none"/>
        </div>
        
        <p className="text-lg md:text-2xl mb-10 max-w-2xl -mt-4 relative z-20 font-medium text-gray-800 tracking-wide px-4">
          Navigate allergy season with confidence.
        </p>

        <button
          onClick={handleButtonClick}
          className={`px-8 py-3 md:px-10 md:py-4 text-xl md:text-2xl font-bold rounded-full text-white transition-all duration-500 transform hover:scale-105 shadow-xl ${buttonColor}`}
        >
          {clickCount > 0 ? 'Launching...' : 'Start Here'}
        </button>
        
        <div className="mt-8 text-gray-500">
          <p className="text-sm font-medium">Cherries fallen: {clickCount}</p>
        </div>
      </div>

      <footer className="relative z-20 w-full px-6 py-6 flex flex-col md:flex-row items-center justify-between text-gray-600 text-xs md:text-sm">
        <div className="flex items-center space-x-6 mb-6 md:mb-0 md:w-1/3 justify-center md:justify-start">
          <a href="https://instagram.com/anthoscope" target="_blank" rel="noopener noreferrer" className="hover:text-cherry-red transition-colors">
            <InstagramIcon />
          </a>
          <a href="https://linkedin.com/company/anthoscope" target="_blank" rel="noopener noreferrer" className="hover:text-cherry-red transition-colors">
            <LinkedinIcon />
          </a>
          <a href="https://github.com/anthoscope" target="_blank" rel="noopener noreferrer" className="hover:text-cherry-red transition-colors">
            <GithubIcon />
          </a>
        </div>

        <div className="md:w-1/3 text-center font-medium mb-6 md:mb-0">
          ©2026 Anthoscope
        </div>

        <div className="md:w-1/3 flex justify-center md:justify-end">
          <a href="https://www.buymeacoffee.com/alexmyl" target="_blank" rel="noopener noreferrer">
            <img 
              src="https://img.buymeacoffee.com/button-api/?text=Buy us a coffee&emoji=&slug=alexmyl&button_colour=e11d48&font_colour=ffffff&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff" 
              alt="Buy us a coffee"
              className="h-8 md:h-10 w-auto"
            />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;