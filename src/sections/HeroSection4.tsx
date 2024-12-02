import { gifa } from "../assets/images"; // Keep the original GIF
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroSection4 = () => {
    AOS.init();
    const [displayText, setDisplayText] = useState('exceptional interfaces.');
    const texts = ['exceptional interfaces.', 'seamless user experiences.', 'scalable web solutions.', 'responsive designs.'];
    const [activeIndex, setActiveIndex] = useState(0);

    const descriptions = [
        'Transform your web projects with cutting-edge UI/UX design, crafting intuitive, visually stunning, and user-centric digital experiences.',
        'Empower your applications with scalable front-end solutions, using modern frameworks, responsive design, and smooth interactions.',
        'Build robust and scalable full-stack web applications by integrating innovative front-end and powerful backend technologies.',
        'Create seamless, engaging experiences with a focus on usability, interactivity, and performance optimization for all platforms.'
    ];

    useEffect(() => {
        // Change display text periodically
        const changeText = () => {
            const randomIndex = Math.floor(Math.random() * texts.length);
            setDisplayText(texts[randomIndex]);
        };

        const textIntervalId = setInterval(changeText, 3000);
        return () => clearInterval(textIntervalId);
    }, [texts]);

    useEffect(() => {
        // Toggle active index for GIF color effects
        const changeActiveIndex = () => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % 2);
        };

        const colorIntervalId = setInterval(changeActiveIndex, 10000);
        return () => clearInterval(colorIntervalId);
    }, []);

    return (
        <section className="py-12 md:py-24 bg-gradient-to-r from-gray-100 to-gray-100 -mt-[400px]">
            <div className="container mx-auto px-4" data-aos="fade-up" data-aos-duration="3000">
                <div className="flex flex-wrap -m-3 mb-16 ml-5">
                    {[0, 1].map((index) => (
                        <div key={index} className="w-full md:w-1/2 p-3">
                            <div className="relative overflow-hidden">
                                <img
                                    className="rounded-lg w-full object-fill"
                                    style={{
                                        height: '400px',
                                        filter: index === activeIndex ? 'hue-rotate(90deg) brightness(1.2) saturate(1.3)' : 'none'
                                    }}
                                    src={gifa}
                                    alt="Front-end development GIF"
                                />
                                <div className="absolute top-0 left-0 flex flex-col justify-center items-center w-full h-full px-14 py-6 bg-black bg-opacity-50">
                                    <h3 className="text-2xl text-white font-semibold tracking-tight max-w-xs text-center mb-4 font-heading">
                                        {index === 0 ? `Designing ${displayText}` : `Innovating ${displayText}`}
                                    </h3>
                                    <p className="text-xs text-white text-center font-semibold">
                                        {descriptions[index]}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HeroSection4;
