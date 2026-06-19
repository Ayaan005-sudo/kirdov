

import React from 'react';

const LearningOutcomes = () => {
  // Saare points array mein — niche .map se loop chalega
  const outcomes = [
    'Build and program simple robots from scratch',
    'Understand the basics of Artificial Intelligence',
    'Learn block-based and beginner-level Python coding',
    'Develop logical thinking and problem-solving skills',
    'Work in teams and improve collaboration skills',
    'Create a mini AI/Robotics project by the end of the course',
  ];

  return (
    <section id="outcomes" className="bg-white px-6 py-14">
      
      <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-2">
        What Your Child Will Learn
      </h2>
      <p className="text-center text-gray-500 mb-10">
        Real skills built through hands-on, fun projects
      </p>

      {/* Grid: 2 columns desktop, 1 column mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
        {outcomes.map((point, index) => (
          <div
            key={index}
            className="bg-teal-50 border border-teal-100 rounded-xl p-5 flex items-start gap-3"
          >
            <span className="w-7 h-7 bg-teal-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
              ✓
            </span>
            <p className="text-gray-800 font-semibold leading-relaxed pt-0.5">
              {point}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LearningOutcomes;