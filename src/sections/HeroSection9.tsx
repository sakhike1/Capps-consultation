import { useState } from 'react';
import { giza, fg } from '../assets/images';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroHeader29 = () => {
    // Initialize AOS animation
    AOS.init();

    const slides = [
        {
            title: "Expert UI/UX Consultation for Your App",
            description: "Transform your app’s user experience with expert consultation that focuses on intuitive design and seamless interaction to keep users engaged."
        },
        {
            title: "Crafting Intuitive and User-Centered Interfaces",
            description: "Our UI/UX consultation services ensure your app’s interface is user-friendly, visually appealing, and designed to improve usability."
        },
        {
            title: "Enhance Your App’s Experience with Proven Strategies",
            description: "Leverage proven design strategies and consultation to enhance your app’s overall user experience, improving user retention and satisfaction."
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    return (
        <section
            className="ezy__header29 object-fill light -mt-[420px] py-32 md:py-52 text-white bg-cover bg-center bg-no-repeat relative"
            style={{
                background: `url(${giza}) no-repeat center center`,
                backgroundSize: 'cover',
                height: '800px' // Ensure the GIF covers the card
            }}
        >
            <div className="container px-4 mx-auto flex flex-col justify-center items-center text-center h-full" data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500">
                <h1 className="leading-tight text-white text-3xl md:text-4xl mb-2">
                    {slides[currentSlide].title}
                </h1>
                <p className="text-base md:text-lg text-white opacity-80 leading-snug px-12 py-6">
                    {slides[currentSlide].description}
                </p>

                {/* Navigation Divs */}
                <div className="flex items-center mt-6">
                    <div
                        onClick={prevSlide}
                        className="mr-4 p-4 bg-white rounded-full cursor-pointer flex items-center justify-center"
                        style={{
                            width: '40px',
                            height: '40px',
                            background: `url(${fg}) no-repeat center center` // Moved inside the style object
                        }}
                        aria-label="Previous Slide"
                    >
                        <span className="text-gray-100 font-bold">{'<'}</span>
                    </div>
                    <div
                        onClick={nextSlide}
                        className="p-4 bg-white rounded-full cursor-pointer flex items-center justify-center"
                        style={{
                            width: '40px',
                            height: '40px',
                            background: `url(${fg}) no-repeat center center` // Moved inside the style object
                        }}
                        aria-label="Next Slide"
                    >
                        <span className="text-gray-100 font-bold">{'>'}</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroHeader29;
