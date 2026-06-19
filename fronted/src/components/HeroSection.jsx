



import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' });
  };

  const details = [
    { icon: '👦', label: 'Age Group', value: '8 – 14 Years', bg: 'bg-yellow-100' },
    { icon: '📅', label: 'Duration', value: '4 Weeks', bg: 'bg-blue-100' },
    { icon: '🌐', label: 'Mode', value: 'Online (Live)', bg: 'bg-green-100' },
    { icon: '💰', label: 'Fee', value: '₹2,999', bg: 'bg-pink-100' },
    { icon: '🗓️', label: 'Start Date', value: '15 July 2026', bg: 'bg-purple-100' },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav className="bg-teal-500 px-6 py-4 flex items-center justify-between">
        <div className="text-white text-2xl font-extrabold">
          Kid<span className="text-yellow-300">rove</span>
        </div>
        <ul className="hidden md:flex gap-6 text-white font-medium">
          <li><a href="#details" className="hover:opacity-80">Details</a></li>
          <li><a href="#outcomes" className="hover:opacity-80">Outcomes</a></li>
          <li><a href="#faq" className="hover:opacity-80">FAQ</a></li>
          <li><a href="#register" className="hover:opacity-80">Enroll</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero-gradient px-6 md:px-12 py-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* LEFT SIDE */}
        <div className="max-w-xl">
          <span className="inline-block bg-yellow-300 text-gray-800 text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
            🚀 Summer Workshop 2026
          </span>

          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            AI & Robotics<br />
            <span className="text-teal-500">Summer Workshop</span>
          </h1>

          <p className="text-gray-600 text-base leading-relaxed mb-6">
            Give your child a head start in the future! Join our 4-week online
            workshop where kids aged 8–14 explore AI, build robots, and learn
            coding through fun hands-on projects.
          </p>

          <div className="flex flex-wrap gap-2 mb-7">
            <span className="bg-white border-2 border-teal-500 text-teal-600 text-sm font-semibold px-3.5 py-1.5 rounded-full">
              🤖 Robotics
            </span>
            <span className="bg-white border-2 border-teal-500 text-teal-600 text-sm font-semibold px-3.5 py-1.5 rounded-full">
              🧠 AI Basics
            </span>
            <span className="bg-white border-2 border-teal-500 text-teal-600 text-sm font-semibold px-3.5 py-1.5 rounded-full">
              💻 Coding
            </span>
            <span className="bg-white border-2 border-teal-500 text-teal-600 text-sm font-semibold px-3.5 py-1.5 rounded-full">
              🎮 Fun Projects
            </span>
          </div>

          <button
            onClick={scrollToForm}
            className="bg-teal-500 hover:bg-teal-600 text-white font-bold px-8 py-3.5 rounded-full transition-colors"
          >
            Enroll Now →
          </button>
        </div>

        {/* RIGHT SIDE - DETAILS CARD */}
        <div className="bg-white rounded-2xl shadow-lg p-7 w-full max-w-sm flex-shrink-0">
          <h3 className="text-teal-500 text-sm font-bold uppercase tracking-wide mb-4">
            Workshop Details
          </h3>

          {details.map((item, index) => (
            <div
              key={item.label}
              className={`flex items-center gap-3 py-2.5 ${
                index !== details.length - 1 ? 'border-b border-gray-100' : ''
              }`}
            >
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center text-lg ${item.bg}`}>
                {item.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] text-gray-400 font-semibold uppercase">
                  {item.label}
                </span>
                <span className="text-sm text-gray-800 font-bold">
                  {item.value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HeroSection;