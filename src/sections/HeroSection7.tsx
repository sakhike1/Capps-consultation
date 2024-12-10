import { useState } from 'react';
import  gifa  from "../assets/images/videos/gifa.gif";
import AOS from 'aos';
import 'aos/dist/aos.css';

const SlideSection = () => {
    AOS.init();
    const [activeSlide, setActiveSlide] = useState(1);
    const slideCount = 3;

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
        },
    ];

    const handlePrevSlide = () => {
        setActiveSlide(prevSlide => (prevSlide > 1 ? prevSlide - 1 : 1));
    };

    const handleNextSlide = () => {
        setActiveSlide(prevSlide => (prevSlide < slideCount ? prevSlide + 1 : slideCount));
    };

    const getImageFilter = () => {
        switch (activeSlide) {
            case 1:
                return 'grayscale(0%)';
            case 2:
                return 'sepia(50%)';
            case 3:
                return 'hue-rotate(90deg)';
            default:
                return 'none';
        }
    };

    return (
        <section className="relative py-16 -mt-[400px]">
            <div className="relative container mx-auto px-4 max-w-[1450px]" data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500">
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
                                            className="absolute  top-0 left-0 h-full bg-gradient-to-r from-gray-400 via-gray-600 to-blue-800"
                                            style={{ width: `${(100 / slideCount) * activeSlide}%` }}
                                        ></div>
                                    </div>
                                </div>
                                <div className="w-full md:w-auto p-7">
                                    <div className="flex flex-wrap justify-center md:justify-end">
                                        <div className="w-auto p-2">
                                            <button
                                                onClick={handlePrevSlide}
                                                className="flex items-center hover:shadow-2xl justify-center w-14 h-14 text-gray-500 hover:text-white focus:text-white bg-gradient-to-r from-gray-300 to-gray-300 bg-opacity-10 rounded-full transition duration-200"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <path d="M7.31536 13.7141C..." fill="currentColor"></path>
                                                </svg>
                                            </button>
                                        </div>
                                        <div className="w-auto p-2">
                                            <button
                                                onClick={handleNextSlide}
                                                className="flex items-center hover:shadow-2xl justify-center w-14 h-14 text-black hover:text-white focus:text-white bg-gradient-to-r from-gray-400 via-gray-600 to-blue-800 hover:bg-blue-600 rounded-full transition duration-200"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <path d="M8.68464 2.28591C..." fill="currentColor"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 p-8">
                            <img
                                className="w-full h-full object-fill rounded-3xl"
                                style={{ height: '550px', filter: getImageFilter() }}
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
