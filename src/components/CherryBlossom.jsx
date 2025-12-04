import React, { useState, useEffect } from 'react';

const CherryBlossom = ({ clickCount }) => {
  const [fallingCherries, setFallingCherries] = useState([]);

  useEffect(() => {
    if (clickCount > 0) {
      const newCherry = {
        id: Date.now() + Math.random(),
        left: `${Math.random() * 80 + 10}%`, // Keep cherries mostly centered
      };
      setFallingCherries(prev => [...prev, newCherry]);
      
      // Remove cherry after animation
      setTimeout(() => {
        setFallingCherries(prev => prev.filter(cherry => cherry.id !== newCherry.id));
      }, 5000);
    }
  }, [clickCount]);

  return (
    <>
      {/* Main cherry blossom */}
      <div className="fixed top-20 right-10 z-20 animate-float">
        <div className="relative">
          {/* Flower */}
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-br from-cherry-blossom to-pink-300 rounded-full opacity-90"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-yellow-200 rounded-full"></div>
            
            {/* Petals */}
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute w-12 h-12 bg-gradient-to-br from-pink-200 to-cherry-blossom rounded-full"
                style={{
                  transform: `rotate(${i * 72}deg) translateY(-50px)`,
                  transformOrigin: 'center',
                }}
              />
            ))}
          </div>
          
          {/* Stem */}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-1 h-20 bg-gradient-to-b from-green-600 to-green-400"></div>
        </div>
      </div>

      {/* Falling cherries */}
      {fallingCherries.map(cherry => (
        <div
          key={cherry.id}
          className="fixed top-0 z-30 animate-fall"
          style={{ 
            left: cherry.left,
            animationDelay: `${Math.random() * 0.5}s`
          }}
        >
          <div className="relative">
            <div className="w-6 h-6 bg-gradient-to-br from-cherry-red to-pink-600 rounded-full"></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-3 bg-green-500"></div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CherryBlossom;