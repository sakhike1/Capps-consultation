import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const buttonBackgrounds = [
    'bg-gradient-to-r from-green-300 to-purple-400',
    'bg-gradient-to-r from-orange-600 to-orange-500',
    'bg-gradient-to-r from-fuchsia-500 via-red-600 to-orange-400',
    'bg-gradient-to-r from-green-300 to-purple-400',
    'bg-gradient-to-r from-yellow-600 to-red-600'
];

const HowItWorks = () => {
    const [bgIndex, setBgIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setBgIndex((current) => (current + 1) % buttonBackgrounds.length);
        }, 10000);

        return () => clearInterval(interval);
    }, []);

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
            title: "Initial Consultation",
            description: "We begin by understanding your vision and goals for the app, ensuring that we're aligned with your expectations.",
        },
        {
            title: "Design & Prototyping",
            description: "Our design team creates wireframes and prototypes based on your ideas, offering a visual representation of how the app will function.",
        },
        {
            title: "Development & Launch",
            description: "After finalizing the design, we begin the development process, ensuring a smooth launch and deployment of the app for users.",
        }
    ];

    return (
        <section className="py-20 2xl:py-40 overflow-hidden bg-gradient-to-b from-white to-gray-50">
            <div className="container px-4 mx-auto">
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
                                    How we design your app
                                </motion.span>
                                <motion.h2
                                    className="mt-8 mb-6 text-4xl lg:text-[40px] font-bold font-heading leading-tight"
                                    variants={itemVariants}
                                >
                                    Design and launch your perfect app with us
                                </motion.h2>
                                <motion.p
                                    className="mb-10 text-xl text-gray-500"
                                    variants={itemVariants}
                                >
                                    We take the necessary steps to bring your app idea to life with quality and precision.
                                </motion.p>
                                <Link to="/book-consultation">
                                <motion.a
                                    className={`inline-flex items-center px-8 py-4 text-white font-bold ${buttonBackgrounds[bgIndex]} rounded-full transition-all duration-500 transform hover:scale-105 hover:shadow-lg`}
                                    href="#"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Start your project
                                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </motion.a>
                                </Link>
                            </div>
                        </motion.div>
                        <div className="w-full lg:w-1/2 px-5">
                            <motion.ul variants={containerVariants}>
                                {steps.map((step, index) => (
                                    <motion.li
                                        key={index}
                                        className="flex pb-10 mb-8 border-b border-gray-100 last:border-0"
                                        variants={itemVariants}
                                        whileHover={{ x: 10 }}
                                    >
                                        <div className="mr-8">
                                            <motion.span
                                                className="flex justify-center items-center w-14 h-14 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-white text-lg font-bold rounded-full"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                {index + 1}
                                            </motion.span>
                                        </div>
                                        <div className="max-w-xs">
                                            <h3 className="mb-4 text-xl font-bold text-gray-900">{step.title}</h3>
                                            <p className="text-gray-600 leading-relaxed">{step.description}</p>
                                        </div>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HowItWorks;