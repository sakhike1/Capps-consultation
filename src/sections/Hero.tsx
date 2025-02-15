import { useState, useEffect } from "react";
import { gifapp, gifapps } from "../assets/images"; // Adjust paths as needed  
import { motion } from "framer-motion"; // Import framer-motion 
import { Link } from 'react-router-dom';


const sections = [
    {
        ImgSrc: gifapp,
        title: "BACKEND DEVELOPMENT",
        description: "Robust server-side solutions that power your applications.",
    },
    {
        ImgSrc: gifapps,
        title: "USER EXPERIENCE DESIGN",
        description: "Creating intuitive interfaces that enhance user engagement.",
    },
    {
        ImgSrc: gifapp,
        title: "API INTEGRATION",
        description: "Seamless integration of third-party services to extend functionality.",
    },
    {
        ImgSrc: gifapps,
        title: "PROTOTYPING & TESTING",
        description: "Rapid prototyping and user testing for optimal product design.",
    },
];

const buttonTextOptions = [
    "Build your backend",
    "Enhance user experience",
    "Integrate APIs now",
    "Start your project today"
];

const HeroSection7 = () => {
    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
    const [buttonText, setButtonText] = useState(buttonTextOptions[0]);

    useEffect(() => {
        const sectionInterval = setInterval(() => {
            setCurrentSectionIndex((prevIndex) => (prevIndex + 1) % sections.length);
        }, 10000); // Change section every 10 seconds  

        const buttonTextInterval = setInterval(() => {
            setButtonText((prevText) => {
                const currentIndex = buttonTextOptions.indexOf(prevText);
                const nextIndex = (currentIndex + 1) % buttonTextOptions.length;
                return buttonTextOptions[nextIndex];
            });
        }, 5000); // Change button text every 5 seconds  

        return () => {
            clearInterval(sectionInterval);
            clearInterval(buttonTextInterval);
        };
    }, []);

    return (
        <section className="container p-10 w-full px-4  mx-auto">
            <div className="flex flex-col lg:flex-row items-center -mx-4  mt-10 lg:my-10 ml-10 pb-10 lg:pb-16 mr-5">
                <div className="w-full md:w-4/7  px-4 order-last lg:order-first  md:mb-0">
                    {/* Title Animation with Light Bounce */}
                    <motion.h2
                        className="max-w-sm mb-4 text-3xl leading-tight md:text-4xl lg:text-5xl font-bold"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        whileHover={{
                            y: [-5, 5, 0], // Light bounce effect for title  
                        }}
                    >
                        {sections[currentSectionIndex].title}
                    </motion.h2>

                    {/* Description Animation with Light Bounce */}
                    <motion.p
                        className="max-w-lg mb-8  text-[14px] text-gray-500"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        whileHover={{
                            y: [-5, 5, 0], // Light bounce effect for description  
                        }}
                    >
                        {sections[currentSectionIndex].description}
                    </motion.p>

                    {/* Buttons Animation */}
                    <div>
                        <Link to="/about">
                        <motion.a
                            className="block hover:shadow-2xl lg:inline-block px-5 py-3 lg:mr-3 mb-3 lg:mb-0 text-sm text-center bg-gradient-to-r from-gray-400 via-gray-600 to-blue-800 hover:bg-black text-white font-semibold rounded-full transition duration-200"
                            href="#"
                            whileHover={{
                                scale: 1.1,
                                boxShadow: "0px 8px 12px rgba(0, 0, 0, 0.2)",
                                y: [-10, 10, -5, 5, 0], // Bounce effect on button hover  
                            }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            {buttonText}
                        </motion.a>
                        </Link>
                        <Link to="/web-apps">
                        <motion.a
                            className="block hover:shadow-2xl lg:inline-block px-5 py-3 text-sm text-center font-semibold text-black hover:text-black border border-gray-700 hover:border-gray-700 rounded-full transition duration-200"
                            href="#"
                            whileHover={{
                                scale: 1.1,
                                boxShadow: "0px 8px 12px rgba(0, 0, 0, 0.2)",
                            }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            Learn more
                        </motion.a>
                        </Link>
                    </div>
                </div>

                {/* Video Animation */}
                <motion.div
                    className="w-full md:w-5/7 px-4 mb-6 mr-8 lg:mb-0"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <img
                        className="object-contain h-[400px] 
                         w-full rounded-xl"
                        src={sections[currentSectionIndex].ImgSrc}
                        autoPlay

                    />
                </motion.div>
            </div>
        </section>
    );
};



export default HeroSection7; 