import React, { useState, useEffect } from 'react';

const CherryBlossom = ({ clickCount }) => {
  const [fallingCherries, setFallingCherries] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const base = import.meta.env.BASE_URL;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    
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
    return () => window.removeEventListener('resize', handleResize);
  }, [clickCount]);

  return (
    <>
      {/* 1. 'landscape:max-h-[500px]:hidden' hides it only on short screens (phones) tilted sideways.
          2. It remains visible on laptops because their height is usually > 500px.
      */}
      <div className="fixed top-0 right-0 pointer-events-none z-20 landscape:max-h-[500px]:hidden">
        <div 
            style={{
            transform: isMobile ? 'scale(1.1)' : 'scale(1.8)',
            transformOrigin: 'top right',
            marginRight: isMobile ? '-0.5cm' : '-1cm',
            }}
        >
            <img 
            src={`${base}images/cherry-blossom.gif`} 
            alt="Cherry Blossom"
            className="w-48 h-48 md:w-64 md:h-64 object-contain"
            />
        </div>
      </div>

      {fallingCherries.map(cherry => (
        <div
          key={cherry.id}
          className="fixed top-0 z-30 animate-fall"
          style={{ 
            left: cherry.left,
            animationDelay: `${cherry.delay}s`
          }}
        >
          <div className="text-2xl md:text-3xl">🍒</div>
        </div>
      ))}
    </>
  );
};

export default CherryBlossom;