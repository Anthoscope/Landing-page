import React, { useState, useEffect } from 'react';

const CherryBlossom = ({ clickCount }) => {
  const [fallingCherries, setFallingCherries] = useState([]);

  useEffect(() => {
    if (clickCount > 0) {
      const newCherries = Array.from({ length: 4 }, (_, i) => ({
        id: Date.now() + i,
        left: `${Math.random() * 80 + 10}%`,
        delay: i * 0.2,
      }));
      
      setFallingCherries(prev => [...prev, ...newCherries]);
      
      setTimeout(() => {
        setFallingCherries(prev => prev.filter(c => 
          !newCherries.find(nc => nc.id === c.id)
        ));
      }, 5000);
    }
  }, [clickCount]);

  return (
    <>
      {/* Super simple GIF - guaranteed to work */}
      <div className="fixed top-0 right-0 pointer-events-none z-20">
        <div 
            style={{
            transform: 'scale(1.8)',           // 0.8x size
            transformOrigin: 'top right',      // Scale from top-right
            marginRight: '-1cm',               // Hide 1cm from right
            }}
        >
            <img 
            src="/images/cherry-blossom.gif" 
            alt="Cherry Blossom"
            className="w-64 h-64 object-contain"
            />
        </div>
        </div>

      {/* Simple falling cherries */}
      {fallingCherries.map(cherry => (
        <div
          key={cherry.id}
          className="fixed top-0 z-30 animate-fall"
          style={{ 
            left: cherry.left,
            animationDelay: `${cherry.delay}s`
          }}
        >
          <div className="text-3xl">🍒</div>
        </div>
      ))}
    </>
  );
};

export default CherryBlossom;