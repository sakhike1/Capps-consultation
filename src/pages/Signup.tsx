import React, { useState,useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserPlus } from 'lucide-react';
import { motion } from 'framer-motion';
import useAuthStore from '../store/authStore';
import { fg } from '../assets/images';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const canvasRef = useRef(null);

  const { signup } = useAuthStore();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await signup(email, password, name);
      navigate('/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  };

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
    <div className="relative bg-black h-screen flex items-center justify-center overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 z-0" />
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
      <div className="flex flex-col h-[450px] lg:flex-row bg-gradient-to-r from-slate-50 via-white to-slate-200  shadow-xl max-w-5xl w-full overflow-hidden z-10">
        {/* Form Section */}
        <div className="w-full lg:w-1/2 p-6 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center lg:text-left">
            Create Account
          </h2>

          {error && (
            <div className="mb-3 p-2 bg-red-50 text-red-700 rounded-lg text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-1.5 border border-gray-300 rounded-lg  "
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-1.5 border border-gray-300 rounded-lg  "
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-1.5 border border-gray-300 rounded-lg  "
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-gray-400 via-gray-600 to-blue-800 text-white py-1.5 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              <UserPlus size={20} /> Create Account
            </button>
          </form>

          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link
              to="/login"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Sign In
            </Link>
          </p>
        </div>

        {/* Image Section */}
        <div className="hidden lg:block w-1/2">
          <img
            src={fg}
            alt="Sign Up Illustration"
            className="w-full h-[500px] object-cover"
          />
        </div>
      </div>
    </div>
  );
}
