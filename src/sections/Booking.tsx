import { Calendar, Clock, Video, MessageSquare } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import fg from '../assets/images/videos/fg.gif';

export default function BookConsultation() {
  const canvasRef = useRef(null);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const stars = Array.from({ length: 100 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 2,
      speed: Math.random() * 0.5 + 0.1,
    }));

    const resizeCanvas = () => {
      const devicePixelRatio = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * devicePixelRatio;
      canvas.height = window.innerHeight * devicePixelRatio;
      ctx.scale(devicePixelRatio, devicePixelRatio);

      // Recalculate star positions for new canvas size
      stars.forEach((star) => {
        star.x = Math.random() * canvas.width / devicePixelRatio;
        star.y = Math.random() * canvas.height / devicePixelRatio;
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        star.y += star.speed;
        if (star.y > canvas.height / (window.devicePixelRatio || 1)) {
          star.y = 0;
          star.x = Math.random() * canvas.width / (window.devicePixelRatio || 1);
        }
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
      });
      requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Show notification
    setShowNotification(true);

    // Refresh page after 2 seconds to allow notification to be visible
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Notification */}
      {showNotification && (
        <div 
          className="fixed top-4 right-4 z-50 bg-green-500 text-white px-6 py-4 rounded-lg shadow-xl transition-all duration-300 ease-in-out animate-bounce"
          role="alert"
        >
          <div className="flex items-center">
            <svg 
              className="w-6 h-6 mr-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
              />
            </svg>
            <div>
              <p className="font-bold">Consultation Scheduled Successfully!</p>
              <p className="text-sm">Our team will contact you soon.</p>
            </div>
          </div>
        </div>
      )}

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
            <form onSubmit={handleSubmit} className="space-y-4">
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
      </div>
    </div>
  );
}