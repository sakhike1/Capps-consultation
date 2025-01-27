import React, { useState, useEffect, useCallback } from 'react';
import { AlertCircle } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
            name: 'Martin Escobar',
            title: 'App Developer',
            quote: 'Working with our development team was a game-changer! They delivered a flawless app with top-notch functionality and performance. 🚀',
            rating: 5
        },
        {
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
            name: 'Angela Stian',
            title: 'Mobile App Designer',
            quote: "I'm thrilled with the app we developed! The design and usability are spot on, making the user experience seamless. Can't wait to see the future updates! 🙌",
            rating: 4
        },
        {
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
            name: 'Karim Ahmed',
            title: 'Tech Enthusiast',
            quote: 'The app exceeded all my expectations! From smooth navigation to fast performance, it has become an essential tool in my daily workflow. 🏆',
            rating: 5
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    // Handle mouse movement for the parallax effect
    const handleMouseMove = useCallback((e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        setMousePosition({ x, y });
    }, []);

    useEffect(() => {
        if (!isAutoPlaying) return;
        const intervalId = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(intervalId);
    }, [isAutoPlaying, testimonials.length]);

    const handlePrevious = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const handleNext = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    // Render stars based on rating
    const renderStars = (rating) => {
        return [...Array(5)].map((_, index) => (
            <span key={index} className={`text-2xl ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
                ★
            </span>
        ));
    };

    return (
        <div 
            className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-black"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            {/* Animated background dots */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(50)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 bg-white rounded-full opacity-20"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
                            transition: 'transform 0.3s ease-out',
                            animation: `pulse ${2 + Math.random() * 4}s infinite`
                        }}
                    />
                ))}
            </div>

            <div className="relative max-w-4xl mx-auto pt-20 px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 relative">
                    <h2 className="text-5xl font-bold text-white mb-4 tracking-tight">
                        What Our Clients Say
                    </h2>
                    <p className="text-lg text-purple-200">
                        Don't just take our word for it - hear from our satisfied clients
                    </p>
                </div>

                <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300">
                    <div className="relative z-10">
                        <div className="flex items-center mb-6">
                            <div className="w-16 h-16 rounded-full border-4 border-purple-500 overflow-hidden">
                                <img
                                    src={testimonials[currentIndex].avatar}
                                    alt={testimonials[currentIndex].name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="ml-4">
                                <h3 className="text-xl font-semibold text-white">{testimonials[currentIndex].name}</h3>
                                <p className="text-purple-300">{testimonials[currentIndex].title}</p>
                            </div>
                        </div>
                        
                        <div className="mb-4">
                            {renderStars(testimonials[currentIndex].rating)}
                        </div>

                        <blockquote className="text-xl text-white leading-relaxed mb-6">
                            "{testimonials[currentIndex].quote}"
                        </blockquote>

                        {/* Verification badge */}
                        <div className="flex items-center text-green-400 text-sm">
                            <AlertCircle className="w-4 h-4 mr-2" />
                            <span>Verified Review</span>
                        </div>
                    </div>
                </div>

                {/* Navigation controls */}
                <div className="flex justify-center mt-8 space-x-4">
                    <button
                        onClick={handlePrevious}
                        className="px-6 py-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-colors"
                    >
                        Previous
                    </button>
                    <button
                        onClick={handleNext}
                        className="px-6 py-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-colors"
                    >
                        Next
                    </button>
                </div>

                {/* Progress indicators */}
                <div className="flex justify-center mt-6 space-x-2">
                    {testimonials.map((_, index) => (
                        <div
                            key={index}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                index === currentIndex ? 'bg-purple-500 w-6' : 'bg-purple-300'
                            }`}
                        />
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes pulse {
                    0%, 100% { opacity: 0.2; }
                    50% { opacity: 0.6; }
                }
            `}</style>
        </div>
    );
};

export default Testimonials;