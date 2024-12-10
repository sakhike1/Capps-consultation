import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FloatingElement from '../components/FloatingElement';
import GlowingParticle from '../components/GlowingParticle';
import  appde  from "../assets/images/appde.png";
import  appdev from  "../assets/images/appdev.png";
import { Cpu, Code2, Sparkles } from 'lucide-react';

const IntegratedComponent = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const slideCount = 3;


    // Slide navigation
    const prevSlide = () => setActiveSlide(prev => (prev > 0 ? prev - 1 : prev));
    const nextSlide = () => setActiveSlide(prev => (prev < slideCount - 1 ? prev + 1 : prev));

    // Animation variants
    const slideAnimation = {
        initial: { opacity: 0, x: 100 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -100 },
    };

    // Generate random positions for particles
    const particles = Array.from({ length: 20 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 6 + 2,
        delay: Math.random() * 2,
    }));

    return (
        <section className="relative min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black overflow-hidden">
            {/* Glowing Particles */}
            {particles.map((particle, index) => (
                <GlowingParticle
                    key={index}
                    size={particle.size}
                    delay={particle.delay}
                    className="absolute"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                    }}
                />
            ))}

            {/* Floating Elements */}
            <FloatingElement icon={Cpu} className="absolute top-10 left-10 text-blue-400" />
            <FloatingElement icon={Code2} className="absolute top-20 right-20 text-purple-400" />
            <FloatingElement icon={Sparkles} className="absolute bottom-10 left-20 text-yellow-400" />

            <div className="relative container px-4 pt-12 md:pt-20 mx-auto">
                <div className="relative flex flex-wrap -mx-4">
                    <div className="w-full lg:w-1/2 2xl:w-2/5 px-4 mb-12 lg:mb-0">
                        {/* Slide Content */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeSlide}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                variants={slideAnimation}
                                transition={{ duration: 0.5 }}
                                className="space-y-8"
                            >
                                <span className="inline-block text-xl lg:text-2xl font-bold text-blue-400">
                                    {['AI-Powered Development', 'Smart Solutions', 'Future Tech'][activeSlide]}
                                </span>
                                <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                                    {[
                                        'Create Intelligent Applications',
                                        'Transform Your Ideas',
                                        'Build the Future',
                                    ][activeSlide]}
                                </h2>
                                <p className="text-lg text-blue-200 opacity-90">
                                    {[
                                        'Harness the power of AI to build next-generation applications.',
                                        'Turn your vision into reality with cutting-edge technology.',
                                        'Shape tomorrow’s digital landscape today.',
                                    ][activeSlide]}
                                </p>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Buttons */}
                        <div className="mt-12 flex items-center space-x-6">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={prevSlide}
                                className="px-4 py-2 bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white rounded-full shadow-lg"
                            >
                                Previous
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={nextSlide}
                                className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg"
                            >
                                Next
                            </motion.button>
                        </div>
                    </div>

                    {/* Images */}
                    <div className="w-full lg:w-1/2 2xl:w-3/5 px-4 flex justify-between items-center space-x-6">
                        <img className="w-1/2 object-cover animate-float" src={appdev} alt="App Development" />
                        <img className="w-1/2 object-cover animate-float-delay" src={appde} alt="UI/UX Design" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IntegratedComponent;
