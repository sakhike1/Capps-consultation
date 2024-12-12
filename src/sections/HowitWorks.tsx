import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Sparkles, Wand2, Bot, Zap, Star, Cpu, Database, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const buttonBackgrounds = [
    'bg-gradient-to-r from-emerald-400 to-cyan-400',
    'bg-gradient-to-r from-purple-500 to-indigo-600',
    'bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500',
    'bg-gradient-to-r from-blue-400 to-green-500',
    'bg-gradient-to-r from-indigo-600 to-purple-500'
];

const aiPopups = [
    "✨ Transforming ideas into digital magic!",
    "🤖 AI-powered design revolution starts here",
    "💡 Innovative solutions taking shape",
    "🚀 Your vision, our technological expertise",
    "🌟 Crafting tomorrow's applications today"
];

const BackgroundElement = ({ 
    icon: Icon, 
    className = '', 
    animationDelay = 0,
    size = 'w-16 h-16'
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ 
                opacity: [0, 1, 0.7, 1], 
                scale: [0.5, 1, 0.9, 1] 
            }}
            transition={{ 
                duration: 3, 
                repeat: Infinity,
                delay: animationDelay,
                ease: "easeInOut"
            }}
            className={`absolute bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-purple-100/50 ${size} ${className}`}
        >
            <Icon className="text-purple-500/70 w-8 h-8" />
        </motion.div>
    );
};

const HowItWorks = () => {
    const [bgIndex, setBgIndex] = useState(0);
    const [popup, setPopup] = useState<string | null>(null);
    const [aiMagicActive, setAiMagicActive] = useState(false);

    // Background rotation
    useEffect(() => {
        const interval = setInterval(() => {
            setBgIndex((current) => (current + 1) % buttonBackgrounds.length);
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    // AI Magic Popup Logic
    const triggerAiPopup = () => {
        const randomPopup = aiPopups[Math.floor(Math.random() * aiPopups.length)];
        setPopup(randomPopup);
        setAiMagicActive(true);

        setTimeout(() => {
            setPopup(null);
            setAiMagicActive(false);
        }, 3000);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    const steps = [
        {
            title: "AI-Powered Consultation",
            description: "Our intelligent system analyzes your vision, providing insights and recommendations.",
            icon: Bot
        },
        {
            title: "Magical Prototyping",
            description: "Transform ideas into interactive prototypes with AI-enhanced design tools.",
            icon: Wand2
        },
        {
            title: "Intelligent Development",
            description: "Leverage cutting-edge AI technologies to build and launch your app seamlessly.",
            icon: Zap
        }
    ];

    return (
        <section 
            className={`relative py-20 2xl:py-40 overflow-hidden transition-all duration-500 
            ${aiMagicActive ? 'bg-gradient-to-r from-purple-100 via-blue-100 to-pink-100' : 'bg-gradient-to-b from-zinc-100 via-sky-50 to-violet-50'}`}
        >
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <BackgroundElement 
                    icon={Cpu} 
                    className="top-20 left-20" 
                    animationDelay={0.2}
                />
                <BackgroundElement 
                    icon={Database} 
                    className="top-40 right-20" 
                    animationDelay={0.5}
                    size="w-24 h-24"
                />
                <BackgroundElement 
                    icon={Layers} 
                    className="bottom-20 left-1/3" 
                    animationDelay={0.8}
                    size="w-20 h-20"
                />
                <BackgroundElement 
                    icon={Sparkles} 
                    className="bottom-10 right-1/4" 
                    animationDelay={1.1}
                />
            </div>

            {/* AI Magic Popup */}
            <AnimatePresence>
                {popup && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        className="fixed bottom-10 right-10 z-50 bg-white shadow-2xl rounded-xl p-6 border-2 border-purple-200"
                    >
                        <div className="flex items-center space-x-3">
                            <Star className="w-8 h-8 text-purple-500 animate-pulse" />
                            <p className="text-lg font-semibold text-gray-800">{popup}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Content */}
            <div className="container px-4 mx-auto relative z-10">
                <motion.div
                    className="max-w-5xl mx-auto"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <div className="flex flex-wrap items-center -mx-5">
                        <motion.div
                            className="w-full lg:w-1/2 px-5 mb-20 lg:mb-0"
                            variants={itemVariants}
                        >
                            <div className="max-w-md">
                                <motion.span
                                    className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 font-medium text-sm"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Sparkles className="w-4 h-4 mr-2" />
                                    AI-Driven App Creation
                                </motion.span>
                                <motion.h2
                                    className="mt-8 mb-6 text-4xl lg:text-[40px] font-bold font-heading leading-tight"
                                    variants={itemVariants}
                                >
                                    Design and Launch Your AI-Enhanced App
                                </motion.h2>
                                <motion.p
                                    className="mb-10 text-xl text-gray-500"
                                    variants={itemVariants}
                                >
                                    Revolutionize your digital presence with intelligent design and cutting-edge technology.
                                </motion.p>
                                <Link to="/book-consultation">
                                    <motion.a
                                        className={`inline-flex items-center px-8 py-4 text-white font-bold ${buttonBackgrounds[bgIndex]} rounded-full transition-all duration-500 transform hover:scale-105 hover:shadow-lg`}
                                        href="#"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={triggerAiPopup}
                                    >
                                        Start Your AI Journey
                                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </motion.a>
                                </Link>
                            </div>
                        </motion.div>
                        <div className="w-full lg:w-1/2 px-5">
                            <motion.ul variants={containerVariants}>
                                {steps.map((step, index) => {
                                    const StepIcon = step.icon;
                                    return (
                                        <motion.li
                                            key={index}
                                            className="flex pb-10 mb-8 border-b border-gray-100 last:border-0 group"
                                            variants={itemVariants}
                                            whileHover={{ x: 10, scale: 1.02 }}
                                        >
                                            <div className="mr-8">
                                                <motion.span
                                                    className="flex justify-center items-center w-14 h-14 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-white text-lg font-bold rounded-full transition-all group-hover:rotate-12"
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.9 }}
                                                >
                                                    <StepIcon className="w-6 h-6" />
                                                </motion.span>
                                            </div>
                                            <div className="max-w-xs">
                                                <h3 className="mb-4 text-xl font-bold text-gray-900">{step.title}</h3>
                                                <p className="text-gray-600 leading-relaxed">{step.description}</p>
                                            </div>
                                        </motion.li>
                                    );
                                })}
                            </motion.ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HowItWorks;