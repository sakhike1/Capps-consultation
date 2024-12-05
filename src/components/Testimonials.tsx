import React, { useState, useEffect } from 'react'; // Ensure React is imported for JSX
import { motion, AnimatePresence } from 'framer-motion'; // Import animation library
import { TestimonialCard } from '../components/TestimonialCard'; // Ensure this component exists and is correctly implemented
import { TestimonialControls } from '../components/TestimonialControls'; // Ensure this component exists and is correctly implemented
import { TestimonialType } from '../types/testimonial'; // Ensure the type is correctly defined and imported

export const Testimonials = () => {
    const testimonials: TestimonialType[] = [
        {
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
            name: 'Martin Escobar',
            title: 'App Developer',
            quote: 'Working with our development team was a game-changer! They delivered a flawless app with top-notch functionality and performance. 🚀',
        },
        {
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
            name: 'Angela Stian',
            title: 'Mobile App Designer',
            quote: "I'm thrilled with the app we developed! The design and usability are spot on, making the user experience seamless. Can't wait to see the future updates! 🙌",
        },
        {
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
            name: 'Karim Ahmed',
            title: 'Tech Enthusiast',
            quote: 'The app exceeded all my expectations! From smooth navigation to fast performance, it has become an essential tool in my daily workflow. 🏆',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-stone-50 via-gray-200 to-indigo-100  py-20 px-4 sm:px-6 lg:px-8"
        >
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
                        What Our Clients Say
                    </h2>
                    <p className="text-lg text-gray-600">
                        Don't just take our word for it - hear from some of our satisfied clients
                    </p>
                </motion.div>

                <div className="relative">
                    <AnimatePresence mode="wait">
                        <TestimonialCard
                            key={currentIndex}
                            testimonial={testimonials[currentIndex]}
                            isVisible={true}
                        />
                    </AnimatePresence>
                </div>

                <TestimonialControls
                    onPrevious={handlePrevious}
                    onNext={handleNext}
                    currentIndex={currentIndex}
                    total={testimonials.length}
                />
            </div>
        </motion.div>
    );
};
