import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { gif } from "../assets/images"; // Make sure this points to the correct image
import AOS from 'aos';
import 'aos/dist/aos.css';

const TeamMemberItem = ({ isColored }) => (
    <div className="flex items-center justify-center w-16 h-16 bg-neutral-900 rounded-full">
        <img
            className="rounded-full"
            src={gif}
            alt="App Development Icon"
            style={{
                filter: isColored ? 'hue-rotate(90deg) brightness(1.2) saturate(1.3)' : 'none',
                transition: 'filter 0.5s ease' // Smooth transition for filter change
            }}
        />
    </div>
);

TeamMemberItem.propTypes = {
    isColored: PropTypes.bool.isRequired,
};

const HeroSection5 = () => {
    AOS.init();
    const [currentColorIndex, setCurrentColorIndex] = useState(0);
    const [bgClass, setBgClass] = useState("bg-gradient-to-r from-gray-700 to-gray-500");

    useEffect(() => {
        const intervalId = setInterval(() => {
            // Change the background gradient every 5 seconds
            setBgClass(prevClass =>
                prevClass === "bg-gradient-to-r from-gray-700 to-gray-500"
                    ? "bg-gradient-to-r from-gray-500 to-gray-700"
                    : "bg-gradient-to-r from-gray-700 to-gray-500"
            );
        }, 5000); // 5 seconds interval

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentColorIndex(Math.floor(Math.random() * 3)); // Randomly select an index for the three items with GIFs
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <section className="py-12 md:py-24 -mt-[400px]">
            <div className="container mx-auto px-4" data-aos="fade-up" data-aos-duration="3000">
                <div className="flex flex-wrap -m-3 mb-16">
                    <div className="w-full md:w-1/2 xl:w-1/3 p-3">
                        <div className={`flex flex-col h-full justify-center p-10 ${bgClass} hover:shadow-2xl rounded-lg`}>
                            <div className="flex flex-wrap items-center -m-3 mb-5">
                                <TeamMemberItem isColored={currentColorIndex === 0} />
                                <div className="flex-1 p-3">
                                    <h4 className="text-4xl font-medium text-white tracking-tight font-heading">App Development</h4>
                                </div>
                            </div>
                            <p className="text-white text-xs tracking-tight">
                                Build scalable and efficient apps tailored to your unique needs. Our experienced team brings innovative solutions to life, ensuring your application stands out.
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 xl:w-1/3 p-3">
                        <div className="mb-6 p-10 bg-gradient-to-b from-gray-900 to-gray-600 hover:shadow-2xl rounded-lg">
                            <div className="flex flex-wrap items-center -m-3 mb-5">
                                <TeamMemberItem isColored={currentColorIndex === 1} />
                                <div className="flex-1 p-3">
                                    <h4 className="text-4xl font-medium text-white tracking-tight font-heading">UI/UX Design</h4>
                                </div>
                            </div>
                            <p className="text-white text-xs tracking-tight">
                                Craft exceptional user experiences with our expert UI/UX design services. We focus on intuitive interfaces, engaging visuals, and seamless interactions for maximum user satisfaction.
                            </p>
                        </div>
                        <div className="p-10 bg-gradient-to-b hover:shadow-2xl from-gray-900 to-gray-600 rounded-lg">
                            <div className="flex flex-wrap items-center -m-3 mb-5">
                                <TeamMemberItem isColored={currentColorIndex === 2} />
                                <div className="flex-1 p-3">
                                    <h4 className="text-4xl text-white font-medium tracking-tight font-heading">Backend Solutions</h4>
                                </div>
                            </div>
                            <p className="text-white text-xs tracking-tight">
                                Our backend development team ensures robust, scalable, and secure server-side solutions. From APIs to databases, we lay the foundation for a seamless digital experience.
                            </p>
                        </div>
                    </div>
                    <div className="w-full xl:w-1/3 p-3">
                        <div className="flex flex-col hover:shadow-2xl h-full justify-center p-10 bg-gradient-to-r from-gray-700 to-gray-500 rounded-lg">
                            <div className="flex flex-wrap items-center -m-3 mb-5">
                                <TeamMemberItem isColored={currentColorIndex === 3} />
                                <div className="flex-1 p-3">
                                    <h4 className="text-4xl text-white font-medium tracking-tight font-heading">Continuous Integration</h4>
                                </div>
                            </div>
                            <p className="text-white text-xs tracking-tight">
                                Streamline your development workflow with our continuous integration and deployment solutions, ensuring fast, reliable, and high-quality software releases.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection5;
