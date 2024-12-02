import { useState, useEffect, useRef } from 'react';
import { giff } from "../assets/images";

const ScrollToTopButton = () => {
    const [showScrollButton, setShowScrollButton] = useState(false);
    const scrollTopButtonRef = useRef(null);

    // Handle scroll event
    const handleScroll = () => {
        if (window.scrollY > 0) {
            setShowScrollButton(true);
        } else {
            setShowScrollButton(false);
        }
    };

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    // Add scroll event listener when component mounts
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            {showScrollButton && (
                <div
                    ref={scrollTopButtonRef}
                    className="fixed bottom-[500px] right-10"
                    style={{ zIndex: 999 }}
                >
                    <button
                        onClick={scrollToTop}
                        className="hover:scale-125 text-white font-bold py-2 px-4"
                    >
                        <img
                            className="h-10 w-10 rounded-full shadow-2xl"
                            src={giff}
                            alt="Scroll to top"
                        />
                    </button>
                </div>
            )}
        </div>
    );
};

export default ScrollToTopButton;
