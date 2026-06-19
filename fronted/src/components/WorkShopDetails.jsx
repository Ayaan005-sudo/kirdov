

import React from 'react';

const WorkshopDetails = () => {
  
  const details = [
    { icon: '👦', label: 'Age Group', value: '8 – 14 Years', bg: 'bg-yellow-100' },
    { icon: '📅', label: 'Duration', value: '4 Weeks', bg: 'bg-blue-100' },
    { icon: '🌐', label: 'Mode', value: 'Online', bg: 'bg-green-100' },
    { icon: '💰', label: 'Fee', value: '₹2,999', bg: 'bg-pink-100' },
    { icon: '🗓️', label: 'Start Date', value: '15 July 2026', bg: 'bg-purple-100' },
  ];

  return (
    <section id="details" className="bg-gray-50 px-6 py-14">
      
      <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-2">
        Workshop Details
      </h2>
      <p className="text-center text-gray-500 mb-10">
        Everything you need to know before enrolling
      </p>

      {/* Grid: 5 columns desktop, 2 columns mobile */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-5 max-w-5xl mx-auto">
        {details.map((item) => (
          <div
            key={item.label}
            className="bg-white rounded-2xl shadow-md p-6 text-center hover:-translate-y-1 transition-transform"
          >
            <div className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center text-2xl mx-auto mb-3`}>
              {item.icon}
            </div>
            <p className="text-xs text-gray-400 font-bold uppercase tracking-wide mb-1">
              {item.label}
            </p>
            <p className="text-base text-gray-900 font-extrabold">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkshopDetails;