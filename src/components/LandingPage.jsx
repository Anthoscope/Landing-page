import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CherryBlossom from './CherryBlossom';
import AnimatedBackground from './AnimatedBackground';

const LandingPage = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleButtonClick = () => {
    setClickCount(prev => prev + 1);
    
    // In a real app, you would navigate to your friend's app
    setTimeout(() => {
      // window.location.href = 'http://your-friend-app-url.com';
      console.log('Would navigate to main app now');
    }, 1000);
  };

  // Calculate button color based on clicks
  const buttonColor = clickCount > 0 
    ? 'bg-cherry-red hover:bg-red-700' 
    : 'bg-light-pink hover:bg-pink-400';

  return (
    <div className="relative min-h-screen overflow-hidden">
      <AnimatedBackground />
      
      {/* About button */}
      <Link
        to="/about"
        className="fixed top-6 right-6 z-30 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-gray-700 hover:text-cherry-red transition-colors duration-300 hover:bg-white/30 shadow-lg hover:shadow-xl font-medium"
      >
        About
      </Link>

      <CherryBlossom clickCount={clickCount} />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
          Anthoscope
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl">
          Discover the unseen patterns in your data. A visual journey through information.
        </p>

        <button
          onClick={handleButtonClick}
          className={`px-10 py-4 text-2xl font-bold rounded-full text-white transition-all duration-500 transform hover:scale-105 shadow-xl animate-pulse-glow ${buttonColor}`}
        >
          {clickCount > 0 ? 'Launching...' : 'Start Here'}
        </button>
        
        <p className="mt-6 text-gray-500 text-sm">
          {clickCount > 0 
            ? '✨ Watch the cherry fall! ✨' 
            : 'Click the button to see the magic happen!'}
        </p>
        
        <div className="mt-8 text-gray-400">
          <p className="text-sm">Cherries fallen: {clickCount}</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;