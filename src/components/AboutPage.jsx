import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedBackground from './AnimatedBackground';

// Icons
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

// TEAM CARD COMPONENT 
const TeamMemberCard = ({ photo, name, caption, links }) => (
  <div className="group flex flex-col items-center p-8 bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-50 max-w-[320px] w-full mx-auto relative overflow-hidden">
    
    <div className="absolute top-0 left-0 w-full h-1.5 bg-cherry-red opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

    <div className="w-48 h-48 mb-6 rounded-2xl overflow-hidden shadow-sm bg-gray-100 flex items-center justify-center">
      <img 
        src={photo} 
        alt={name} 
        className="w-full h-full object-cover text-transparent group-hover:scale-105 transition-transform duration-500" 
      />
    </div>
    
    <h5 className="font-black text-gray-900 text-2xl mb-1 text-center">{name}</h5>
    <p className="text-sm font-extrabold text-cherry-red uppercase tracking-widest mb-6 text-center">{caption}</p>
    
    <div className="flex space-x-6 text-gray-800">
      {/* Conditionally render LinkedIn if link is not "#" */}
      {links.linkedin !== "#" && (
        <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cherry-red hover:-translate-y-1 transition-all">
          <LinkedinIcon />
        </a>
      )}
      {/* Conditionally render Github if link is not "#" */}
      {links.github !== "#" && (
        <a href={links.github} target="_blank" rel="noopener noreferrer" className="hover:text-cherry-red hover:-translate-y-1 transition-all">
          <GithubIcon />
        </a>
      )}
    </div>
  </div>
);

// MAIN PAGE COMPONENT
const AboutPage = () => {
  const teamMembers = [
    { photo: "/images/mylonas.png", name: "Alexandros Mylonas", caption: "Physicist", links: { linkedin: "https://www.linkedin.com/in/alexmyl/", github: "https://github.com/almylonas" } },
    { photo: "/images/evaggelia.png", name: "Evangelia Patsatzaki", caption: "Electrical & Computer Engineer", links: { linkedin: "https://www.linkedin.com/in/evangelia-patsatzaki-049b8a2b3/", github: "https://github.com/Epatsatzaki" } },
    { photo: "/images/velloukanikaki.png", name: "Georgios Vellios", caption: "Electronic Engineer", links: { linkedin: "https://www.linkedin.com/in/george-vellios-2106000v/", github: "https://github.com/Niel518" } },
    { photo: "/images/nikos.png", name: "Nikos Chatzis", caption: "Surveying Engineer", links: {linkedin: "#", github: "https://github.com/nikoschatzes657-design" } },
    { photo: "/images/team5.jpg", name: "Maria Maragou", caption: "Agrοnomist", links: {linkedin: "https://www.linkedin.com/in/maria-maragou-22a3b91a2/", github: "#" } },
    { photo: "/images/team6.jpg", name: "Grigoris Kaitzis", caption: "Business Administration", links: {linkedin: "https://www.linkedin.com/in/grigorioskaitzis/", github: "#" } },
  ];

  return (
    <div className="w-full min-h-screen bg-pink-50/30 selection:bg-cherry-red selection:text-white font-sans">
      <AnimatedBackground />
      
      {/* 1. TOP NAVIGATION */}
      <nav className="fixed top-0 left-0 w-full z-50 px-8 py-5 flex justify-between items-center bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <img src="/images/anthologo_neg.png" className="h-16 w-auto object-contain scale-[2.0] origin-left" alt="Anthoscope Logo" />
        </Link>
        <Link to="/" className="text-sm font-bold text-gray-500 hover:text-cherry-red transition-colors uppercase tracking-widest">
          ← Return to Home
        </Link>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="w-full pt-40 pb-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-tight mb-8">
              Pollen tracking, <br/> built for <span className="text-cherry-red">you.</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Anthoscope is an interactive web platform designed to help people manage their pollen allergies. By combining scientific environmental data with community-driven insights, we deliver clear, map-based allergy risks across regions.
            </p>
          </div>
          
          <div className="relative group max-w-2xl mx-auto w-full">
            <div className="absolute -inset-1 bg-gradient-to-r from-cherry-red to-pink-400 rounded-[2rem] blur opacity-10 group-hover:opacity-30 transition duration-1000"></div>
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white bg-white transition-all duration-500">
              <img 
                src="/images/map.png" 
                alt="Anthoscope Map Interface" 
                className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-700" 
              />
              <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE RITA STORY */}
      <section className="w-full bg-white py-32 px-6 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-5/12">
            <div className="relative">
              <div className="absolute inset-0 bg-cherry-red rounded-3xl transform -rotate-3 scale-105 opacity-20"></div>
              <img src="/images/rita.png" alt="Rita" className="relative z-10 rounded-3xl shadow-xl w-full" />
            </div>
          </div>
          <div className="md:w-7/12">
            <h2 className="text-4xl font-black text-gray-900 mb-6">The Rita Story</h2>
            <div className="w-16 h-2 bg-cherry-red mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              Rita comes from the travel land, where everyone loves to travel and eat cherries. Her girl friends used to talk endlessly about the magical Japanese cherry season. Unfortunately, Rita has serious pollen allergies, making travel unpleasant.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed italic border-l-4 border-gray-200 pl-6">
              "That's when she found us, dedicated to making her travels predictable!"
            </p>
          </div>
        </div>
      </section>

      {/* 4. THE TEAM */}
      <section className="w-full py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">The Development Team</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              A passionate team of data scientists, visualization experts, and software engineers dedicated to making data accessible.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="w-full bg-white py-24 px-6 text-center relative z-10 border-t border-gray-100">
        <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 tracking-tight">
          Ready to <span className="text-cherry-red">explore?</span>
        </h2>
        <Link to="/" className="inline-block px-12 py-5 bg-cherry-red hover:opacity-90 text-white rounded-full font-black text-xl hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-cherry-red/30">
          Launch Anthoscope
        </Link>
      </footer>
      
    </div>
  );
};

export default AboutPage;