

import React, { useState } from 'react';

const FAQSection = () => {
  
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Do I need any prior coding experience?',
      answer:
        'No prior experience needed! This workshop is designed for absolute beginners. We start from the basics and build up step by step.',
    },
    {
      question: 'What equipment do I need at home?',
      answer:
        'Just a laptop or desktop with internet connection. A basic robotics kit list will be shared after enrollment.',
    },
    {
      question: 'Will I get a certificate after completion?',
      answer:
        'Yes! Every student who completes the 4-week program receives an official Kidrove completion certificate.',
    },
    {
      question: 'Are classes live or pre-recorded?',
      answer:
        'All classes are live and interactive, conducted via Zoom, with recordings shared afterward for revision.',
    },
  ];

  // Click hone par: agar wahi index already khula hai toh band kar do, warna usko khol do
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-gray-50 px-6 py-14">
      
      <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-2">
        Frequently Asked Questions
      </h2>
      <p className="text-center text-gray-500 mb-8">
        Got questions? We've got answers
      </p>

      <div className="max-w-2xl mx-auto flex flex-col gap-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              onClick={() => toggleFAQ(index)}
              className="bg-white rounded-2xl shadow-md cursor-pointer overflow-hidden"
            >
              {/* Question Row */}
              <div className="px-6 py-4 flex items-center justify-between font-bold text-gray-900">
                {faq.question}
                <span
                  className={`text-teal-500 text-xl transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                >
                  ⌄
                </span>
              </div>

              {/* Answer — sirf tab dikhega jab isOpen true ho */}
              {isOpen && (
                <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQSection;