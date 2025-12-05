import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Updated gradient with your colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-light-pink to-light-crimson animate-gradient-x"></div>
      
      {/* FIXED: Cherry blossom petals instead of red dots */}
      {[...Array(15)].map((_, i) => (
        <div
          key={`particle-${i}`}
          className="absolute animate-float"
          style={{
            width: `${Math.random() * 12 + 6}px`, // Slightly larger
            height: `${Math.random() * 12 + 6}px`,
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
            animationDuration: `${Math.random() * 8 + 8}s`,
            animationDelay: `${Math.random() * 5}s`,
            opacity: 0.15 + Math.random() * 0.15, // Lower opacity
            transform: `rotate(${Math.random() * 360}deg)`, // Random rotation
            // Cherry blossom petal shape instead of circle
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 182, 193, 0.3) 50%, rgba(255, 255, 255, 0.5) 100%)',
            filter: 'blur(0.5px)',
          }}
        />
      ))}
      
      {/* Sakura petals background animation - FIXED */}
      {[...Array(12)].map((_, i) => (
        <div
          key={`sakura-bg-${i}`}
          className="absolute animate-fall-slow"
          style={{
            width: `${Math.random() * 8 + 4}px`,
            height: `${Math.random() * 8 + 4}px`,
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
            animationDuration: `${Math.random() * 15 + 20}s`,
            animationDelay: `${Math.random() * 15}s`,
            opacity: 0.2 + Math.random() , // Lower opacity
            transform: `rotate(${Math.random() * 360}deg)`,
            // Diamond shape for petals
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.6) 0%, rgba(248, 36, 116, 0.2) 50%, rgba(255, 255, 255, 0.4) 100%)',
          }}
        />
      ))}
      
      {/* Add a few white/very light particles for variety */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`light-particle-${i}`}
          className="absolute rounded-full animate-float"
          style={{
            width: `${Math.random() * 6 + 3}px`,
            height: `${Math.random() * 6 + 3}px`,
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
            animationDuration: `${Math.random() * 10 + 10}s`,
            animationDelay: `${Math.random() * 8}s`,
            opacity: 0.1 + Math.random() * 0.1,
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            filter: 'blur(1px)',
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;