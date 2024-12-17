import {useState, useEffect} from "react";
import {motion, AnimatePresence} from "framer-motion";
import gifa from "../assets/images/videos/gifa.gif";
import gifappz from "../assets/images/videos/gifappz.gif";

const testimonials = [
    {
        id: 1,
        text: "Capps is a premier web development company that delivers high-quality, scalable web solutions to clients worldwide. Our teams in New York, London, and Tokyo are dedicated to building seamless user experiences.",
        image: gifa,
    },
    {
        id: 2,
        text: "At Capps, we specialize in building web platforms using the latest technologies, delivering robust and innovative web solutions for our clients in industries such as e-commerce, healthcare, and finance.",
        image: gifa,
    },
    {
        id: 3,
        text: "Capps has consistently delivered top-tier web development projects for global brands. Our offices in Los Angeles, Berlin, and Sydney are at the forefront of cutting-edge web technologies.",
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
        <section className="relative py-8 md:py-16 lg:py-24 bg-coolGray-50 overflow-hidden">
            <div className="container mx-auto  px-4 max-w-7xl">
                <div className="mb-12 md:mb-20 flex flex-wrap -mx-4 items-center ">
                    <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
                        <motion.h1
                            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter"
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.6}}
                        ></motion.h1>
                    </div>
                    <div className="w-full md:w-1/2 px-4 ">
                        <div className="flex items-center justify-end space-x-4">
                            {/* Pagination Buttons */}
                            <motion.button
                                whileHover={{scale: 1.05}}
                                whileTap={{scale: 0.95}}
                                className="h-12 sm:h-16 w-12 sm:w-16 inline-flex items-center justify-center border border-black rounded-full text-black hover:text-white hover:bg-black transition"
                                onClick={() => paginate(-1)}
                            >
                                {/* Left Arrow */}
                                <svg width="24" height="24" viewBox="0 0 27 27" fill="none">
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
                                className="h-12 sm:h-16 w-12 sm:w-16 inline-flex items-center justify-center border border-black rounded-full text-black hover:text-white hover:bg-black transition"
                                onClick={() => paginate(1)}
                            >
                                {/* Right Arrow */}
                                <svg width="24" height="24" viewBox="0 0 27 27" fill="none">
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

                <div className="relative h-[500px] overflow-hidden ">
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
                            <div className="bg-white shadow-xl rounded-tr-2xl rounded-br-2xl overflow-hidden hover:shadow-3xl">
                                <div className="flex flex-col lg:flex-row">
                                    <div className="w-full lg:w-4/12 h-48 sm:h-64 lg:h-auto">
                                        <img
                                            className="w-full h-full object-cover rounded-tr-2xl lg:rounded-tr-none lg:rounded-bl-2xl shadow-lg"
                                            src={currentTestimonial.image}
                                            alt={currentTestimonial.author}
                                        />
                                    </div>
                                    <div className="w-full text-xs lg:w-8/12 p-6 sm:p-10 md:p-14 bg-gradient-to-l from-violet-400 via-orange-50 to-stone-50">
                                        <motion.p
                                            className="mb-4 text-gray-700
                                             text-[13px] mt-20"
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
