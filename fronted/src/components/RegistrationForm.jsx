// src/components/RegistrationForm.jsx

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const RegistrationForm = () => {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null); // success/error message

  // Ye function tab chalega jab form VALID ho (saari validation pass ho jaye)
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      const response = await fetch('http://localhost:3000/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setStatusMessage({ type: 'success', text:'Thank you! We will contact you soon.' });
        reset(); // form clear kar do success ke baad
      } else {
        setStatusMessage({ type: 'error', text: result.message || 'Something went wrong. Try again.' });
      }
    } catch (error) {
      setStatusMessage({ type: 'error', text: 'Server error. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="register" className="bg-white px-6 py-14">
      <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-2">
        Register Your Interest
      </h2>
      <p className="text-center text-gray-500 mb-8">
        Fill the form below and we'll get in touch with you
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md mx-auto bg-gray-50 rounded-2xl shadow-md p-8 flex flex-col gap-5"
      >
        {/* NAME FIELD */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1.5">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Enter child's name"
            {...register('username', {
              required: 'Name is required',
              minLength: { value: 2, message: 'Name must be at least 2 characters' },
            })}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* EMAIL FIELD */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1.5">
            Email
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Enter a valid email',
              },
            })}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* PHONE FIELD */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1.5">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="10-digit mobile number"
            {...register('mobile', {
              required: 'Phone number is required',
              pattern: {
                value: /^[0-9]{10}$/,
                message: 'Enter a valid 10-digit number',
              },
            })}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-teal-500 hover:bg-teal-600 disabled:bg-gray-400 text-white font-bold py-3 rounded-full transition-colors"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
        </button>

        {/* SUCCESS / ERROR MESSAGE */}
        {statusMessage && (
          <p
            className={`text-center text-sm font-semibold ${
              statusMessage.type === 'success' ? 'text-green-600' : 'text-red-500'
            }`}
          >
            {statusMessage.text}
          </p>
        )}
      </form>
    </section>
  );
};

export default RegistrationForm;