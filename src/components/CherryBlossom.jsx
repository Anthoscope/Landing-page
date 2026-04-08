import React, { useState, useEffect } from 'react';

const CherryBlossom = ({ clickCount }) => {
  const [fallingCherries, setFallingCherries] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isTiltedPhone, setIsTiltedPhone] = useState(false);
  const base = import.meta.env.BASE_URL;

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      setIsMobile(width < 768);
      
      // Logic: If width is greater than height AND height is small, it's a tilted phone.
      // Laptops are landscape but height is usually > 600px, so they stay visible.
      if (width > height && height < 500) {
        setIsTiltedPhone(true);
      } else {
        setIsTiltedPhone(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Run once on mount

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

  // If it's a tilted phone, we return null so the branch is completely removed from the DOM
  if (isTiltedPhone) return null;

  return (
    <>
      <div className="fixed top-0 right-0 pointer-events-none z-20">
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