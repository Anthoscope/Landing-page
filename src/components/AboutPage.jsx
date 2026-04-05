import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedBackground from './AnimatedBackground';

// Reuse the local SVG components from the footer for consistency
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const TeamMemberCard = ({ photo, name, caption, links }) => (
  <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md text-center">
    {/* Maintains 1:1 ratio for team photos */}
    <div className="w-24 h-24 mb-4 rounded-full overflow-hidden border-2 border-cherry-red/20 shadow-inner">
      <img src={photo} alt={name} className="w-full h-full object-cover" />
    </div>
    <h5 className="font-semibold text-gray-800 text-lg">{name}</h5>
    <p className="text-sm text-gray-600 mb-4">{caption}</p>
    
    {/* Social Links under each member */}
    <div className="flex space-x-3 text-gray-500 hover:text-cherry-red">
      <a href={links.instagram} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform"><InstagramIcon /></a>
      <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform"><LinkedinIcon /></a>
      <a href={links.github} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform"><GithubIcon /></a>
    </div>
  </div>
);

const AboutPage = () => {
  // Placeholder data for the 2x3 grid
  const teamMembers = [
    { photo: "/images/mylonas.png", name: "Alexandros Mylonas", caption: "Physicist", links: { instagram: "#", linkedin: "#", github: "#" } },
    { photo: "/images/evaggelia.png", name: "Evaggelia Patsatzaki", caption: "Electrical Engineer", links: { instagram: "#", linkedin: "#", github: "#" } },
    { photo: "/images/velloukanikaki.png", name: "Georgios Vellios", caption: "Electronic Engineer", links: { instagram: "#", linkedin: "#", github: "#" } },
    { photo: "/images/nikos.png", name: "Nikos Chatzis", caption: "Surveying Engineer", links: { instagram: "#", linkedin: "#", github: "#" } },
    { photo: "/images/team5.jpg", name: "Maria Maragkou", caption: "Agrοnomist", links: { instagram: "#", linkedin: "#", github: "#" } },
    { photo: "/images/team6.jpg", name: "Grigoris Kaitzis", caption: "Business Administration", links: { instagram: "#", linkedin: "#", github: "#" } },
  ];

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      
      <Link
        to="/"
        className="fixed top-6 left-6 z-30 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-gray-700 hover:text-cherry-red transition-colors duration-300 hover:bg-white/30 shadow-lg hover:shadow-xl font-medium"
      >
        ← Back
      </Link>

      <div className="relative z-10 container mx-auto px-4 py-16 max-w-5xl">
        <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
          <div className="relative h-80">
            <img 
              src="/images/anthoscope-logo2.jpg" 
              alt="Anthoscope"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-800">What is Anthoscope?</h3>
            
            <p className="text-gray-700">
              Anthoscope is an interactive web platform designed to help people manage their pollen allergies more effectively. It combines real-time pollen data, user input, and geospatial visualization to deliver clear, map-based insights into allergy risks across regions. Through a color-coded map, users can instantly identify safe or high-risk areas based on pollen concentration. What makes Anthoscope unique is its community-driven component: users can share their personal experiences and rate areas according to their allergy symptoms. This feedback loop creates a continuously improving, human-centered database that complements scientific forecasts with lived experiences. By combining environmental data and citizen input, Anthoscope promotes public awareness and healthier decisions for individuals with allergies, supporting both preventive healthcare and outdoor well-being. The project prototype already visualizes pollen data on an interactive map, marking the first step toward a comprehensive environmental health platform.
            </p>

            {/* Repositioned The Rita Story Section */}
            <h4 className="text-2xl font-semibold text-gray-800 pt-4">The Rita story!</h4>
            
            {/* Flex container to align paragraph and Rita's photo */}
            <div className="flex flex-col md:flex-row items-stretch gap-6">
              <p className="text-gray-700 md:w-3/4 flex-grow">
                Rita comes from the travel land, where everyone loves to travel and eat cherries. Her girl friends used to talk endlessly about the magical Japanese cherry season and how great it would be to travel there. Unfortunately, our friend Rita has some serious pollen allergies, which would make the travel a lot harder and unpleasant. That's when she found us, the Anthoscope people, dedicated to predicting pollen and making her travels easier and more predictable!
              </p>
              
              {/* Rita's Photo Component - maintains aspect ratio and matches paragraph height */}
              <div className="md:w-1/4 flex-shrink-0 rounded-2xl overflow-hidden shadow-lg border-2 border-white">
                <img 
                  src="/images/rita.png" 
                  alt="Rita, our traveling friend"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

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

            {/* New 2 Row * 3 Column Team Grid */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <TeamMemberCard key={index} {...member} />
              ))}
            </div>

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