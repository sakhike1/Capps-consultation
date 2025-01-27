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
        setTimeout(() => {
            setButtonGlow(prev => ({ ...prev, prev: false }));
        }, 500);
    };

    const handleNextSlide = () => {
        setActiveSlide(prevSlide => (prevSlide < slideCount ? prevSlide + 1 : slideCount));
        setButtonGlow(prev => ({ ...prev, next: true }));
        setTimeout(() => {
            setButtonGlow(prev => ({ ...prev, next: false }));
        }, 500);
    };

    const getImageFilter = () => {
        const filters = [
            'grayscale(0%) brightness(100%) contrast(110%)',
            'sepia(30%) brightness(105%) contrast(105%)',
            'hue-rotate(45deg) brightness(105%) contrast(110%)',
            'contrast(115%) brightness(100%) saturate(110%)'
        ];
        return filters[activeSlide - 1] || 'none';
    };

    const getButtonStyles = (isNext) => {
        const baseStyles = `
            flex items-center justify-center w-16 h-16 
            rounded-full transition-all duration-300 
            transform hover:scale-110 focus:scale-105
            shadow-lg hover:shadow-xl
            ${isNext ? 'hover:translate-x-1' : 'hover:-translate-x-1'}
        `;

        const activeStyles = buttonGlow[isNext ? 'next' : 'prev'] ? 'scale-95' : '';

        const gradientStyles = isNext
            ? 'bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600'
            : 'bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 hover:from-purple-600 hover:via-indigo-600 hover:to-blue-600';

        return `${baseStyles} ${gradientStyles} ${activeStyles}`;
    };

    return (
        <section className="relative py-16 -mt-[400px]">
            <div 
                className="relative container mx-auto px-4 max-w-[1450px]" 
                data-aos="fade-down"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
            >
                <div className="py-24 md:py-36 px-10 md:px-24 rounded-3xl">
                    <div className="flex flex-wrap -m-8">
                        <div className="w-full md:w-1/2 p-8">
                            <div className="overflow-hidden">
                                <div
                                    style={{ 
                                        transform: `translateX(-${(activeSlide - 1) * 100}%)`,
                                        transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                                    }}
                                    className="flex"
                                >
                                    {slides.map(slide => (
                                        <div 
                                            key={slide.id} 
                                            className="flex-shrink-0 w-full px-4"
                                        >
                                            <h2 className="mb-12 font-heading text-6xl text-black font-bold 
                                                         transform transition-all duration-500 ease-out
                                                         hover:scale-105">
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
                                    <div className="relative bg-gray-200 overflow-hidden rounded-full" style={{ height: '4px' }}>
                                        <div
                                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"
                                            style={{ 
                                                width: `${(100 / slideCount) * activeSlide}%`,
                                                transition: 'width 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                                            }}
                                        ></div>
                                    </div>
                                </div>
                                <div className="w-full md:w-auto p-7">
                                    <div className="flex flex-wrap justify-center md:justify-end gap-4">
                                        <button
                                            onClick={handlePrevSlide}
                                            className={`${getButtonStyles(false)} ${activeSlide === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                                            disabled={activeSlide === 1}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M19 12H5M12 19l-7-7 7-7"/>
                                            </svg>
                                        </button>
                                        <button
                                            onClick={handleNextSlide}
                                            className={`${getButtonStyles(true)} ${activeSlide === slideCount ? 'opacity-50 cursor-not-allowed' : ''}`}
                                            disabled={activeSlide === slideCount}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h14M12 5l7 7-7 7"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 p-8">
                            <img
                                className="w-full h-full object-fill rounded-3xl transition-all duration-700 ease-out"
                                style={{ 
                                    height: '550px', 
                                    filter: getImageFilter(),
                                    transform: `scale(${activeSlide === 1 ? '1' : '0.98'}) rotate(${(activeSlide - 1) * 2}deg)`,
                                    opacity: activeSlide === 1 ? '1' : '0.95'
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