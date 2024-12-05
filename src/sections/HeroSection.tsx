import { useState, useEffect } from 'react';
import { gifappz, gifa } from "../assets/images"; // Add more GIFs as needed  
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const HeroHeader1 = () => {
    // Initialize AOS (Animate on Scroll) library  
    useEffect(() => {
        AOS.init();
    }, []);

    // Array of filters to apply to the image  
    const filterColors = [
        'hue-rotate(0deg) saturate(1.5) brightness(1)',
        'hue-rotate(120deg) saturate(2) brightness(1.2)',
        'hue-rotate(240deg) saturate(2) brightness(1.2)',
        'hue-rotate(60deg) saturate(2) brightness(1.2)',
        'hue-rotate(180deg) saturate(2) brightness(1.2)',
        'brightness(0.8)',
    ];

    // Array of GIFs to switch between  
    const gifArray = [gifappz, gifa]; // Add as many GIFs as needed  

    const [currentFilter, setCurrentFilter] = useState(filterColors[0]);
    const [currentGifIndex, setCurrentGifIndex] = useState(0);

    // Update the filter every 10 seconds  
    useEffect(() => {
        const filterIntervalId = setInterval(() => {
            setCurrentFilter(prevFilter => {
                const currentIndex = filterColors.indexOf(prevFilter);
                const nextIndex = (currentIndex + 1) % filterColors.length;
                return filterColors[nextIndex];
            });
        }, 10000); // Change filter every 10 seconds  

        // Cleanup filter interval on component unmount  
        return () => clearInterval(filterIntervalId);
    }, []);

    // Update the GIF every 10 seconds  
    useEffect(() => {
        const gifIntervalId = setInterval(() => {
            setCurrentGifIndex(prevIndex => (prevIndex + 1) % gifArray.length);
        }, 10000); // Change GIF every 10 seconds  

        // Cleanup GIF interval on component unmount  
        return () => clearInterval(gifIntervalId);
    }, []);

    return (
        <header className="ezy__header1 font-['Inter'] -mt-20 py-14 md:py-24 bg-gradient-to-r from-gray-50 to-gray-100 relative overflow-hidden">
            <div
                className="container px-4 mx-auto"
                data-aos="fade-up"
                data-aos-duration="3000"
            >
                <div className="grid grid-cols-12 sm:justify-center sm:text-center ml-7">
                    {/* GIF Column */}
                    <div className="col-span-12 lg:col-span-6 flex justify-center lg:justify-start mb-8 lg:mb-0 sm:mb-12">
                        <img
                            src={gifArray[currentGifIndex]}
                            alt="App Development"
                            className="w-full h-[400px] hover:shadow-2xl shadow-3xl sm:max-w-md md:max-w-lg lg:max-w-xl object-cover rounded-xl"
                            style={{ filter: currentFilter }}
                        />
                    </div>

                    {/* Text Column */}
                    <div className="col-span-12 mt-20 lg:col-span-6 xl:pr-12 sm:text-center lg:text-left flex flex-col items-center lg:items-start">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl text-black leading-snug font-bold">
                            Innovating the Future of App Development
                        </h2>
                        <p className="text-[14px] sm:text-base md:text-xs mt-5 leading-relaxed text-gray-600 opacity-80 max-w-lg">
                            We’re dedicated to creating user-centric applications that drive engagement and transform industries. Join us as we redefine whats possible in app development.
                        </p>

                        {/* Button */}
                        <div className="mt-6 w-full sm:w-auto lg:w-full">
                            <Link
                                className="block hover:shadow-2xl lg:inline-block px-5 py-3 mb-3 lg:mb-0 text-[12px] text-center bg-gradient-to-r from-gray-400 via-gray-600 to-blue-800 hover:bg-black text-white  rounded transition duration-200 font-inter w-full sm:w-auto"
                                to="/book-consultation"
                            >
                                Start Your Project
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeroHeader1;