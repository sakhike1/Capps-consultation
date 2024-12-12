import {motion} from "framer-motion";
import gifa from "../assets/images/videos/gifa.gif";
import {Link} from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Section = () => {
     AOS.init();
    return (
        <div className="bg-black -mt-[400px] font-[sans-serif]">
            <div className="relative overflow-hidden">
                <div className="max-w-screen-xl mx-auto py-16 px-4 sm:px-6 lg:py-32 lg:px-8">
                    <div className="relative z-10 text-center lg:text-left" data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500">
                        <h1 className="text-2xl tracking-tight leading-10 font-extrabold text-white sm:text-5xl sm:leading-none md:text-6xl lg:text-7xl">
                            At Capps
                            <br className="xl:hidden" />
                            <span className="bg-gradient-to-tl from-slate-50 via-black to-white bg-clip-text text-transparent ">
                                {" "}
                                We do it for real{" "}
                            </span>
                        </h1>
                        <p className="max-w-md mx-auto text-[12px] text-left text-gray-300   md:mt-6 md:max-w-3xl">
                            Elevate your culinary experience with our exclusive premium services. Indulge in exquisite
                            flavors and extraordinary moments.
                        </p>

                        <div className="mt-12 flex max-sm:flex-col sm:justify-center lg:justify-start gap-4">
                            <div className="rounded-md shadow">
                                <Link to="/web-apps">
                                    <motion.a
                                        className="px-8 py-3 hover:shadow-2xl text-sm font-bold text-white bg-gradient-to-r from-gray-400 via-gray-600 to-blue-800 rounded-full   transition-all duration-300"
                                        href="#"
                                        whileHover={{scale: 1.05}}
                                        whileTap={{scale: 0.95}}
                                    >
                                        View Our Process
                                    </motion.a>
                                </Link>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img
                        className="h-56 w-full object-fill sm:h-72 md:h-96 lg:w-full lg:h-full"
                        src={gifa}
                        alt="Delicious Food"
                    />
                </div>
            </div>
        </div>
    );
};

export default Section;
