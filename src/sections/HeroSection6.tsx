import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import aiVideo from "../assets/images/videos/gif.gif";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const teamMembers = Array(6).fill({ gif: aiVideo }); // Creating an array with 6 identical team members for simplicity

const TeamMemberItem = ({ member, isColored }) => (
    <div
        className="mx-auto h-[300px] w-full rounded-xl overflow-hidden relative"
    >
        <img
            src={member.gif}
            alt="Team Member Video"
            className="object-cover h-full w-full rounded-xl"
            style={{
                height: '400px',
                filter: isColored ? 'hue-rotate(90deg) brightness(1.2) saturate(1.3)' : 'none'
            }}
        />
    </div>
);

TeamMemberItem.propTypes = {
    member: PropTypes.shape({
        gif: PropTypes.string.isRequired,
    }).isRequired,
    isColored: PropTypes.bool.isRequired,
    index: PropTypes.number.isRequired,
};

const Team19 = () => {
    AOS.init();
    const [currentColorIndex, setCurrentColorIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            // Set a random index for currentColorIndex within teamMembers' length
            setCurrentColorIndex(Math.floor(Math.random() * teamMembers.length));
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <section className="ezy__team19 light py-14 md:py-24 bg-gradient-to-r from-gray-50 to-gray-100 -mt-[400px] dark:bg-[#0b1727] text-zinc-900 dark:text-white overflow-hidden">
            <div className="px-4 mx-auto max-w-[1200px] text-center" data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500">
                <div className="grid grid-cols-6 gap-4 items-end">
                    {teamMembers.map((member, index) => (
                        <div
                            className="col-span-6 sm:col-span-3 md:col-span-2 lg:col-span-1"
                            key={index}
                        >
                            <TeamMemberItem
                                member={member}
                                isColored={index === currentColorIndex}
                                index={index}
                            />
                        </div>
                    ))}
                </div>

                <div className="col-span-6 lg:col-span-3 lg:order-3 flex flex-col items-start">
                    <h1 className="text-3xl m-2 text-left leading-tight text-black md:text-[45px] font-bold">
                        Air gathering make <br /> wherein sixth <br /> moved
                    </h1>
                    <p className="opacity-80 text-black text-[13px] text-left lg:pr-12 my-6">
                        Was multiply divided made fruitful blessed moving there his
                        yielding likeness. Lesser moveth abundantly appear life image
                        male seed.
                    </p>
                    <Link
                        className="block hover:shadow-2xl lg:inline-block px-5 py-3 lg:mr-3 mb-3 lg:mb-0 text-sm text-center bg-gradient-to-r from-gray-400 via-gray-600 to-blue-800 hover:bg-black text-white font-semibold rounded transition duration-200 w-full lg:w-auto"
                        to="/web-apps"
                    >
                        Track your performance
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Team19;
