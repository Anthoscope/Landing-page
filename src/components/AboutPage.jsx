import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedBackground from './AnimatedBackground';

const AboutPage = () => {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      
      {/* Back button */}
      <Link
        to="/"
        className="fixed top-6 left-6 z-30 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-gray-700 hover:text-cherry-red transition-colors duration-300 hover:bg-white/30 shadow-lg hover:shadow-xl font-medium"
      >
        ← Back
      </Link>

      <div className="relative z-10 container mx-auto px-4 py-16 max-w-4xl">
        {/* Header with your anthoscope-logo2.jpg */}
        {/* Full-width logo header */}
<div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
  <div className="relative h-80">
    {/* Your logo as background */}
    <img 
      src="/images/anthoscope-logo2.jpg" 
      alt="Anthoscope"
      className="w-full h-full object-cover"
    />
    
  </div>
</div>

        {/* Content */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-800">What is Anthoscope?</h3>
            
            <p className="text-gray-700">
              Anthoscope is an alallalalalalla
            </p>

            <h4 className="text-2xl font-semibold text-gray-800 pt-4">The Rita story!</h4>
            
            <p className="text-gray-700">
              Rita Rita Rita Rita Rita Rita Rita 
            </p>

            <h4 className="text-2xl font-semibold text-gray-800">Development Team</h4>
            
            <p className="text-gray-700">
              Anthoscope is developed by a passionate team of data scientists, visualization 
              experts, and software engineers dedicated to making data exploration accessible 
              and beautiful.
            </p>

            <blockquote className="border-l-4 border-cherry-red pl-4 py-2 my-6">
              <p className="text-gray-700 italic">
                "For all the Ritas out there_"
              </p>
            </blockquote>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              to="/"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-light-pink to-cherry-red text-white rounded-full font-semibold hover:opacity-90 transition-opacity duration-300 shadow-lg hover:shadow-xl"
            >
              ← Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;