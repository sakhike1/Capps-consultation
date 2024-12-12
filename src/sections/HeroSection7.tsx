import { useState, useEffect } from 'react';
import gifa from "../assets/images/videos/gifa.gif";
import AOS from 'aos';
import 'aos/dist/aos.css';

const SlideSection = () => {
    AOS.init();
    const [activeSlide, setActiveSlide] = useState(1);
    const [buttonGlow, setButtonGlow] = useState({
        prev: false,
        next: false
    });
    const slideCount = 4;

    const slides = [
        {
            id: 1,
            number: '01',
            title: 'Crafting Engaging and Intuitive User Interfaces',
            description: 'Deliver seamless experiences that captivate users with sleek design and easy navigation, ensuring every touchpoint in your app feels smooth and intuitive.',
        },
        {
            id: 2,
            number: '02',
            title: 'Scalable Back-End Solutions for Modern Apps',
            description: 'Harness robust backend architectures, empowering applications to scale effortlessly with high-performance APIs, data security, and swift load times.',
        },
        {
            id: 3,
            number: '03',
            title: 'Integrated Front-End and Back-End Synergy',
            description: 'Achieve the perfect balance between front-end beauty and back-end strength, creating apps that not only look stunning but work seamlessly under the hood.',
        },
        {
            id: 4,
            number: '04',
            title: 'Optimized Workflows and Productivity Enhancements',
            description: 'Utilize efficient processes and automated systems to boost productivity and ensure all elements work together smoothly, from design to deployment.',
        }
    ];

    const handlePrevSlide = () => {
        setActiveSlide(prevSlide => (prevSlide > 1 ? prevSlide - 1 : 1));
        setButtonGlow(prev => ({ ...prev, prev: true }));
        
        // Reset glow effect
        setTimeout(() => {
            setButtonGlow(prev => ({ ...prev, prev: false }));
        }, 300);
    };

    const handleNextSlide = () => {
        setActiveSlide(prevSlide => (prevSlide < slideCount ? prevSlide + 1 : slideCount));
        setButtonGlow(prev => ({ ...prev, next: true }));
        
        // Reset glow effect
        setTimeout(() => {
            setButtonGlow(prev => ({ ...prev, next: false }));
        }, 300);
    };

    const getImageFilter = () => {
        const filters = [
            'grayscale(0%) brightness(100%)',
            'sepia(50%) brightness(110%)',
            'hue-rotate(90deg) brightness(105%)',
            'contrast(120%) brightness(95%)'
        ];
        return filters[activeSlide - 1] || 'none';
    };

    const getButtonShadow = (isNext) => {
        // Dynamic shadow colors based on active slide
        const shadowColors = [
            'shadow-[0_0_20px_rgba(96,165,250,0.5)]', // Blue glow
            'shadow-[0_0_20px_rgba(245,158,11,0.5)]', // Amber glow
            'shadow-[0_0_20px_rgba(16,185,129,0.5)]', // Green glow
            'shadow-[0_0_20px_rgba(139,92,246,0.5)]'  // Purple glow
        ];

        const baseShadow = isNext 
            ? 'hover:shadow-2xl bg-gradient-to-r from-gray-400 via-gray-600 to-blue-800' 
            : 'hover:shadow-2xl bg-gradient-to-r from-gray-300 to-gray-300';

        return `${baseShadow} ${buttonGlow[isNext ? 'next' : 'prev'] ? shadowColors[activeSlide - 1] : ''}`;
    };

    return (
        <section className="relative py-16 -mt-[400px]">
            <div 
                className="relative container mx-auto px-4 max-w-[1450px]" 
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
            >
                <div className="py-24 md:py-36 px-10 md:px-24 rounded-3xl">
                    <div className="flex flex-wrap -m-8">
                        <div className="w-full md:w-1/2 p-8">
                            <div className="overflow-hidden">
                                <div
                                    style={{ transform: `translateX(-${(activeSlide - 1) * 100}%)` }}
                                    className="flex transition-transform duration-500 ease-in-out"
                                >
                                    {slides.map(slide => (
                                        <div key={slide.id} className="flex-shrink-0 w-full px-4">
                                            <h2 className="mb-12 font-heading text-6xl text-black font-bold">
                                                {slide.number}
                                            </h2>
                                            <h2 className="mb-12 text-3xl md:text-4xl text-black font-medium">{slide.title}</h2>
                                            <p className="mb-12 text-[14px] text-black font-light leading-relaxed">{slide.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-wrap items-center -m-7 px-4">
                                <div className="w-full md:flex-1 p-7">
                                    <div className="relative bg-opacity-10 overflow-hidden rounded-full" style={{ height: '3px' }}>
                                        <div
                                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-gray-400 via-gray-600 to-blue-800"
                                            style={{ width: `${(100 / slideCount) * activeSlide}%` }}
                                        ></div>
                                    </div>
                                </div>
                                <div className="w-full md:w-auto p-7">
                                    <div className="flex flex-wrap justify-center md:justify-end">
                                        <div className="w-auto p-2">
                                            <button
                                                onClick={handlePrevSlide}
                                                className={`flex items-center justify-center w-14 h-14 text-gray-100 hover:text-black focus:text-white bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-purple-800 via-rose-300 to-cyan-50 rounded-full transition duration-200 ${getButtonShadow(false)}`}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <path d="M7.31536 13.7141C7.54198 13.9405 7.82958 14.0681 8.12997 14.0681C8.43036 14.0681 8.71796 13.9405 8.94458 13.7141L13.7142 8.94466C14.1836 8.47526 14.1836 7.72137 13.7142 7.25196C13.2448 6.78256 12.4909 6.78256 12.0215 7.25196L8.99997 10.2735V2.66674C8.99997 2.00369 8.46369 1.46741 7.80064 1.46741C7.13758 1.46741 6.6013 2.00369 6.6013 2.66674V10.2735L3.57977 7.25196C3.11037 6.78256 2.35648 6.78256 1.88707 7.25196C1.41767 7.72137 1.41767 8.47526 1.88707 8.94466L7.31536 13.7141Z" fill="currentColor"></path>
                                                </svg>
                                            </button>
                                        </div>
                                        <div className="w-auto p-2">
                                            <button
                                                onClick={handleNextSlide}
                                                className={`flex items-center bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-zinc-200 via-blue-300 to-stone-600 justify-center w-14 h-14 text-black hover:text-white focus:text-white rounded-full transition duration-200 ${getButtonShadow(true)}`}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <path d="M8.68464 2.28591C8.45802 2.05929 8.17042 1.93171 7.87003 1.93171C7.56964 1.93171 7.28204 2.05929 7.05542 2.28591L2.28585 7.05532C1.81645 7.52472 1.81645 8.27861 2.28585 8.74802C2.75526 9.21742 3.50915 9.21742 3.97855 8.74802L7.00003 5.7265V13.3333C7.00003 14.0963 7.53631 14.6326 8.19936 14.6326C8.86242 14.6326 9.3987 14.0963 9.3987 13.3333V5.7265L12.4202 8.74802C12.8896 9.21742 13.6435 9.21742 14.1129 8.74802C14.5823 8.27861 14.5823 7.52472 14.1129 7.05532L8.68464 2.28591Z" fill="currentColor"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 p-8">
                            <img
                                className="w-full h-full object-fill rounded-3xl transition-all duration-500 ease-in-out"
                                style={{ 
                                    height: '550px', 
                                    filter: getImageFilter(),
                                    transform: `scale(${activeSlide === 1 ? '1' : '0.95'}) rotate(${activeSlide === 1 ? '0' : '2'}deg)`,
                                    opacity: activeSlide === 1 ? '1' : '0.9'
                                }}
                                src={gifa}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SlideSection;