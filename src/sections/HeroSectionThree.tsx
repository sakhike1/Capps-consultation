/* eslint-disable react/prop-types */
import { ai } from "../assets/images";
import '../index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState, useRef } from 'react';

const FeaturesSection = () => {
    useEffect(() => {
        AOS.init({
            delay: 100,
            duration: 1000,
        });
    }, []);

    return (
        <section
            className="py-24 md:pb-32 bg-white -mt-[370px]"
            style={{ backgroundImage: "url('flex-ui-assets/elements/pattern-white.svg')", backgroundPosition: 'center' }}
        >
            <div className="container px-4 mx-auto" data-aos="fade-up" data-aos-duration="3000">
                <div className="md:max-w-4xl mb-12 mx-auto text-center">
                    <h1 className="mb-4 text-3xl md:text-4xl leading-tight font-bold tracking-tighter">
                        Enhance App Development with a Focused UI/UX & Robust Back-End
                    </h1>
                    <p className="text-[14px] text-gray-600">
                        Build high-performing, user-friendly applications with seamless front-end designs and powerful back-end capabilities for scalable solutions.
                    </p>
                </div>
                <div className="flex flex-wrap -mx-4 sm:mx-2">
                    <FeatureCard
                        title="Optimized Front-End Design"
                        description="Deliver responsive, accessible, and intuitive user interfaces to create engaging experiences across devices."
                        svgPath="M17 18.63H5C4.20435 18.63 3.44129 18.3139..."
                    />
                    <FeatureCard
                        title="Scalable Back-End Solutions"
                        description="Leverage scalable server-side architecture to ensure your application handles increasing demand effortlessly."
                        svgPath="M20.71 1.29C20.617 1.19627 20.5064 1.12188..."
                    />
                    <FeatureCard
                        title="Seamless User Experience"
                        description="Implement user-centric features for smooth navigation, fast loading times, and high accessibility."
                        svgPath="M11.3 9.22C11.8336 8.75813 12.2616 8.18688..."
                    />
                </div>
            </div>
        </section>
    );
};

const FeatureCard = ({ title, description }) => {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const [isVideoError, setIsVideoError] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;

        if (video) {
            // Create a low-quality version first for quick loading
            video.playbackQuality = 'low';

            // Preload metadata only initially
            video.preload = 'metadata';

            // Start loading the full video once metadata is loaded
            video.addEventListener('loadedmetadata', () => {
                video.preload = 'auto';
            });

            // Handle video loading success
            video.addEventListener('canplay', () => {
                setIsVideoLoaded(true);
                video.play().catch(() => {
                    // Handle autoplay failure gracefully
                    setIsVideoError(true);
                });
            });

            // Handle video loading errors
            video.addEventListener('error', () => {
                setIsVideoError(true);
            });
        }

        return () => {
            if (video) {
                video.removeEventListener('loadedmetadata', () => { });
                video.removeEventListener('canplay', () => { });
                video.removeEventListener('error', () => { });
            }
        };
    }, []);

    return (
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 sm:px-2 mb-4">
            <div className="h-full p-8 text-center bg-black rounded-lg hover:bg-gray-800 shadow-2xl hover:shadow-xl transition duration-200">
                <div className="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-black rounded-lg relative">
                    {!isVideoLoaded && !isVideoError && (
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-xl">
                            <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
                        </div>
                    )}
                    {!isVideoError && (
                        <video
                            ref={videoRef}
                            className={`object-cover w-full rounded-xl transition-opacity duration-300 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
                            src={ai}
                            autoPlay
                            loop
                            muted
                            playsInline
                            loading="lazy"
                        />
                    )}
                    {isVideoError && (
                        <div className="w-full h-full bg-gray-100 rounded-xl flex items-center justify-center">
                            <span className="text-sm text-gray-100">Video unavailable</span>
                        </div>
                    )}
                </div>
                <h3 className="mb-4 text-m text-white md:text-1xl leading-tight">{title}</h3>
                <p className="text-coolGray-500 text-gray-300 text-[12px]">{description}</p>
            </div>
        </div>
    );
};

export default FeaturesSection;