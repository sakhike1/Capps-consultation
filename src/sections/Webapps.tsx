import {useState, useEffect} from "react";
import {motion, AnimatePresence} from "framer-motion";
import gifa from "../assets/images/videos/gifa.gif";
import gifappz from "../assets/images/videos/gifappz.gif";

const testimonials = [
    {
        id: 1,
        text: "CappsConsultation specializes in developing transformative web applications that create positive social impact. Our global team collaborates with organizations dedicated to sustainable development, education, and community empowerment through innovative digital solutions.",
        image: gifa,
    },
    {
        id: 2,
        text: "At CappsConsultation, we partner with mission-driven organizations to build scalable web platforms that accelerate positive change. From environmental conservation apps to healthcare accessibility solutions, we're committed to technology that serves humanity.",
        image: gifa,
    },
    {
        id: 3,
        text: "Our web development expertise helps organizations amplify their global impact. CappsConsultation delivers custom solutions for nonprofits, social enterprises, and forward-thinking companies focused on creating sustainable, positive change in communities worldwide.",
        image: gifappz,
    },
];

function TestimonialsSlider() {
    const [[activeSlide, direction], setActiveSlide] = useState([0, 0]);
    const [isAnimating, setIsAnimating] = useState(false);

    const slideVariants = {
        enter: (direction) => ({x: direction > 0 ? 1000 : -1000, opacity: 0}),
        center: {zIndex: 1, x: 0, opacity: 1},
        exit: (direction) => ({zIndex: 0, x: direction < 0 ? 1000 : -1000, opacity: 0}),
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

    const paginate = (newDirection) => {
        if (isAnimating) return;
        setIsAnimating(true);
        setActiveSlide(([current]) => {
            const nextSlide = (current + newDirection + testimonials.length) % testimonials.length;
            return [nextSlide, newDirection];
        });
    };

    useEffect(() => {
        const autoSlide = setInterval(() => paginate(1), 5000);
        return () => clearInterval(autoSlide);
    }, []);

    const currentTestimonial = testimonials[activeSlide];

    return (
        <section className="relative py-4 sm:py-6 md:py-12 lg:py-24 bg-coolGray-50 overflow-hidden mb-16 sm:mb-20 md:mb-24 lg:mb-32">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Header Section */}
                <div className="mb-6 sm:mb-8 md:mb-12 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0">
                    <div className="w-full sm:w-1/2 px-2 sm:px-4">
                        <motion.h1
                            className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tighter text-center sm:text-left"
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.6}}
                        >
                            Web Development for Global Impact
                        </motion.h1>
                    </div>
                    <div className="w-full sm:w-1/2 px-2 sm:px-4">
                        <div className="flex items-center justify-center sm:justify-end space-x-3 sm:space-x-4">
                            <motion.button
                                whileHover={{scale: 1.05}}
                                whileTap={{scale: 0.95}}
                                className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 inline-flex items-center justify-center border border-black rounded-full text-black hover:text-white hover:bg-black transition"
                                onClick={() => paginate(-1)}
                            >
                                <svg width="20" height="20" viewBox="0 0 27 27" fill="none">
                                    <path
                                        d="M10.7051 7.12817L4.15732 13.6759L10.7051 20.2237"
                                        stroke="currentColor"
                                        strokeWidth="1.6"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M22.4941 13.6759H4.33949"
                                        stroke="currentColor"
                                        strokeWidth="1.6"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </motion.button>
                            <motion.button
                                whileHover={{scale: 1.05}}
                                whileTap={{scale: 0.95}}
                                className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 inline-flex items-center justify-center border border-black rounded-full text-black hover:text-white hover:bg-black transition"
                                onClick={() => paginate(1)}
                            >
                                <svg width="20" height="20" viewBox="0 0 27 27" fill="none">
                                    <path
                                        d="M16.2949 7.12817L22.8427 13.6759L16.2949 20.2237"
                                        stroke="currentColor"
                                        strokeWidth="1.6"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M4.50586 13.6759H22.6605"
                                        stroke="currentColor"
                                        strokeWidth="1.6"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </motion.button>
                        </div>
                    </div>
                </div>

                {/* Slider Section */}
                <div className="relative h-[400px] sm:h-[450px] md:h-[500px] overflow-hidden mb-8 sm:mb-12 md:mb-16">
                    <AnimatePresence initial={false} custom={direction} onExitComplete={() => setIsAnimating(false)}>
                        <motion.div
                            key={activeSlide}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{x: {type: "spring", stiffness: 300, damping: 30}, opacity: {duration: 0.2}}}
                            drag="x"
                            dragConstraints={{left: 0, right: 0}}
                            dragElastic={1}
                            onDragEnd={(e, {offset, velocity}) => {
                                const swipe = swipePower(offset.x, velocity.x);
                                if (swipe < -swipeConfidenceThreshold) paginate(1);
                                else if (swipe > swipeConfidenceThreshold) paginate(-1);
                            }}
                            className="absolute w-full"
                        >
                            <div className="bg-white shadow-xl rounded-lg sm:rounded-tr-2xl sm:rounded-br-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                                <div className="flex flex-col lg:flex-row">
                                    <div className="w-full lg:w-4/12 h-40 sm:h-48 md:h-56 lg:h-auto">
                                        <img
                                            className="w-full h-full object-cover lg:rounded-bl-2xl shadow-lg"
                                            src={currentTestimonial.image}
                                            alt="Web Development Services"
                                        />
                                    </div>
                                    <div className="w-full lg:w-8/12 p-4 sm:p-6 md:p-8 lg:p-12 bg-gradient-to-l from-violet-400 via-orange-50 to-stone-50">
                                        <motion.p
                                            className="text-sm sm:text-base md:text-lg text-gray-700 mt-2 sm:mt-4 md:mt-6 lg:mt-8"
                                            initial={{opacity: 0, y: 20}}
                                            animate={{opacity: 1, y: 0}}
                                            transition={{delay: 0.2}}
                                        >
                                            {currentTestimonial.text}
                                        </motion.p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}

export default TestimonialsSlider;