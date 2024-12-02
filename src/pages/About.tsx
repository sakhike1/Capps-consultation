import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { gifa } from "../assets/images";
import { Link } from 'react-router-dom';

const backgrounds = [
    'bg-gradient-to-r from-gray-700 via-gray-900 to-black',
    'bg-gradient-to-r from-gray-400 via-gray-600 to-gray-500',
    'bg-gradient-to-r from-gray-700 via-gray-900 to-black'
];

const welcomeMessages = [
    "Welcome to Capps! We're here to transform your app ideas into reality.",
    "Innovation meets execution at Capps - Your app development partner.",
    "Let's build something amazing together at Capps!",
    "Turn your vision into success with Capps."
];

const AboutPage = () => {
    const [showPopup, setShowPopup] = useState(true);
    const [currentBg, setCurrentBg] = useState(0);
    const [messageIndex, setMessageIndex] = useState(0);

    useEffect(() => {
        const bgInterval = setInterval(() => {
            setCurrentBg((prev) => (prev + 1) % backgrounds.length);
        }, 10000);

        const messageInterval = setInterval(() => {
            setMessageIndex((prev) => (prev + 1) % welcomeMessages.length);
        }, 5000);

        const popupTimer = setTimeout(() => {
            setShowPopup(false);
        }, 20000);

        return () => {
            clearInterval(bgInterval);
            clearInterval(messageInterval);
            clearTimeout(popupTimer);
        };
    }, []);

    return (
        <motion.section
            className={`pt-20 pb-20 overflow-hidden transition-colors duration-1000 ${backgrounds[currentBg]}`}
        >
            <div className="container mx-auto px-4">
                <AnimatePresence>
                    {showPopup && (
                        <motion.div
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -50, opacity: 0 }}
                            className="fixed top-24 right-4 bg-white/10 backdrop-blur-md text-white p-6 rounded-lg shadow-lg z-50 max-w-md"
                        >
                            <motion.p
                                key={messageIndex}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="text-[13px] font-medium"
                            >
                                {welcomeMessages[messageIndex]}
                            </motion.p>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="flex flex-wrap justify-center -m-4">
                    <motion.div
                        className="w-full md:w-1/3 p-4"
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.img
                            className="w-full object-cover rounded-3xl shadow-2xl"
                            style={{ height: '640px' }}
                            src={gifa}
                            alt="App Development"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>

                    <motion.div
                        className="w-full md:flex-1 p-4"
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.div
                            className="flex flex-col justify-center items-center p-8 h-full text-center bg-white/10 backdrop-blur-md rounded-3xl shadow-xl"
                            whileHover={{ scale: 1.01 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="max-w-lg">
                                <motion.span
                                    className="inline-block mb-3 text-sm text-blue-300 font-bold uppercase tracking-widest"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    App Consultation Experts
                                </motion.span>
                                <motion.h1
                                    className="font-heading mb-6 text-3xl text-white font-black tracking-tight"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    Transform Your
                                    <motion.span
                                        className="text-blue-300 ml-2"
                                        animate={{
                                            scale: [1, 1.05, 1],
                                            opacity: [1, 0.8, 1]
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            repeatType: "reverse"
                                        }}
                                    >
                                        App Ideas
                                    </motion.span>
                                    <br />Into Reality
                                </motion.h1>
                                <motion.p
                                    className="mb-8 text-xs font-medium text-gray-100"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    At Capps, we specialize in turning innovative ideas into successful applications. Our expert consultation team guides you through every step of the development process, ensuring your vision comes to life.
                                </motion.p>
                                <div className="flex flex-wrap justify-center gap-4">
                                    <Link to="/book-consultation">
                                    <motion.a
                                        className="px-8 py-3 shadow-2xl  text-sm font-bold text-white bg-gradient-to-r from-gray-400 via-gray-600 to-blue-800 rounded-full  hover:shadow-xl transition-all duration-300"
                                        href="#"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Start Consultation
                                    </motion.a>
                                    </Link>
                                    <Link to="/apps">
                                    <motion.a
                                        className="px-8 py-3 shadow-2xl text-sm font-bold text-white bg-gradient-to-r from-gray-400 via-gray-600 to-blue-800 rounded-full  hover:shadow-xl transition-all duration-300"
                                        href="#"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        View Our Process
                                    </motion.a>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default AboutPage;