import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const WebDevConsultationSection = () => {
    return (
        <section className="relative pb-20 bg-gradient-to-b from-white to-gray-100 overflow-hidden">
            {/* Floating and Rotating SVG Icons */}
            <motion.svg
                initial={{ opacity: 0, y: -30 }}
                animate={{
                    opacity: 1,
                    y: [0, 10, 0], // Add a floating effect
                    rotate: [0, 15, -15, 0] // Rotational animation
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="hidden lg:block lg:absolute top-0 left-0 mt-32"
                width="100"
                height="100"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
            >
                <circle cx="12" cy="12" r="10" stroke="blue" strokeWidth="2" fill="transparent" />
            </motion.svg>

            <motion.svg
                initial={{ opacity: 0, y: 30 }}
                animate={{
                    opacity: 1,
                    y: [0, -10, 0], // Floating effect
                    rotate: [0, -20, 20, 0] // Rotational animation
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="hidden lg:block lg:absolute bottom-0 right-0 mb-20"
                width="100"
                height="100"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
            >
                <rect x="4" y="4" width="16" height="16" stroke="orange" strokeWidth="2" fill="transparent" />
            </motion.svg>

            <motion.div
                className="relative container pt-12 px-4 mx-auto text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                <span className="bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))]

from-blue-600
via-fuchsia-300
to-orange-50
bg-clip-text
text-transparent font-bold text-lg tracking-wide">
                    Your Partner in <span className="text-yellow-500">Web Development</span>
                </span>
                <motion.h2
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="mt-8 mb-8 lg:mb-12 text-4xl lg:text-5xl font-semibold font-heading text-gray-800"
                >
                    Maximize Your Online Presence Every Day
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.9 }}
                    className="max-w-3xl mx-auto mb-8 lg:mb-12 text-[13px]  text-gray-600"
                >
                    Our tailored web development solutions ensure seamless digital experiences, helping you build a captivating brand that resonates with your audience. We integrate cutting-edge technologies to give you the edge you need.
                </motion.p>
                <Link to="/about">
                <motion.a
                    whileHover={{ scale: 1.1 }}
                    className="inline-block w-full hover:shadow-2xl md:w-auto mb-2 md:mb-0 px-12 py-3 mr-4 text-base font-medium leading-normal bg-gradient-to-r from-gray-400 via-gray-600 to-blue-800 hover:bg-blue-700 text-white rounded shadow-lg transition-all duration-300"
                    href="#"
                >
                    Learn More
                </motion.a>
                </Link>
            </motion.div>
        </section>
    );
};

export default WebDevConsultationSection;
