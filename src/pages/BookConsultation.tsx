import { Calendar, Clock, Video, MessageSquare } from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import fg from '../assets/images/videos/fg.gif';


export default function BookConsultation() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const stars = Array.from({ length: 100 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2,
      speed: Math.random() * 0.5 + 0.1,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        star.y += star.speed;
        if (star.y > canvas.height) star.y = 0;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
      });
      requestAnimationFrame(animate);
    };

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    animate();
  }, []);
  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden"
    >
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

{/* Motion background */}
<motion.div
  className="absolute inset-0 -z-10"
  animate={{
    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
  }}
  transition={{
    duration: 10,
    repeat: Infinity,
    ease: 'linear',
  }}
  style={{
    backgroundImage:
      'linear-gradient(135deg, #667eea, #764ba2, #ff6a00, #f9d423)',
    backgroundSize: '300% 300%',
  }}
/>
      {/* Optional Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-300 via-blue-500 to-blue-700 opacity-20 "></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Form Section */}
          <div className="bg-gradient-to-r from-white via-slate-200 to-slate-300 rounded-lg shadow-lg p-6 z-10">
            <div className="text-center mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Book a Free Consultation
              </h1>
              <p className="text-gray-600 text-sm">
                Schedule a call with our experts to discuss your project requirements.
              </p>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-1.5 border border-gray-300 rounded-lg  text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-1.5 border border-gray-300 rounded-lg  text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Service Type
                </label>
                <select
                  className="w-full px-3 py-1.5 border border-gray-300 rounded-lg  text-sm"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="ui-ux">UI/UX Design</option>
                  <option value="web-app">Web Application</option>
                  <option value="mobile-app">Mobile Application</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Project Description
                </label>
                <textarea
                  className="w-full px-3 py-1.5 border border-gray-300 rounded-lg   text-sm h-24"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-gray-400 via-gray-600 to-blue-800 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-transform duration-300 transform hover:scale-105 shadow-lg"
              >
                Schedule Consultation
              </button>
            </form>
          </div>

          {/* Image Section */}
          <div className="flex items-center justify-center">
            <img
              src={fg}
              alt="Consultation"
              className="rounded-lg shadow-lg w-full h-auto max-w-md"
            />
          </div>
        </div>

        {/* Feature Cards Section */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {[{
            Icon: Calendar,
            title: 'Flexible Scheduling',
            description: 'Choose a time that works best for you',
          }, {
            Icon: Clock,
            title: '30-Minute Session',
            description: 'Focused discussion about your needs',
          }, {
            Icon: Video,
            title: 'Video Conference',
            description: 'Face-to-face virtual meeting',
          }, {
            Icon: MessageSquare,
            title: 'Expert Advice',
            description: 'Get insights from our specialists',
          }].map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-slate-200 via-slate-200 to-blue-300 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <item.Icon className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
