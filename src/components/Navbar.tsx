import {useState, useEffect} from "react";
import {Link, useLocation} from "react-router-dom";
import {AnimatePresence, motion} from "framer-motion";
import  logo2 from "../assets/images/logo2.png";
import logo from "../assets/images/logo.png";
import useAuthStore from "../store/authStore";

const logoVariants = {
    initial: {opacity: 0, x: -100},
    animate: {opacity: 1, x: 0},
    exit: {opacity: 0, x: 100},
};

const texts = ["Contact Us", "What's Your Idea?", "Book Consultation"];

const Navbar = () => {
    const location = useLocation();
    const user = useAuthStore((state) => state.user);
    const logout = useAuthStore((state) => state.logout);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [currentLogo, setCurrentLogo] = useState(logo);
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    // Rotate logos
    useEffect(() => {
        const logoInterval = setInterval(() => {
            setCurrentLogo((prev) => (prev === logo ? logo2 : logo));
        }, 10000);
        return () => clearInterval(logoInterval);
    }, []);

    // Rotate texts
    useEffect(() => {
        const textInterval = setInterval(() => {
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 10000);
        return () => clearInterval(textInterval);
    }, []);

    const navLinks = [
        {path: "/", label: "Home"},
        {path: "/about", label: "About Us"},
        {path: "/apps", label: "Mobile Apps"},
        {path: "/web-apps", label: "Web Apps"},
    ];

    return (
        <section className="">
            <div className="container px-2 mx-auto">
                <div className="flex items-center justify-between py-5">
                    <div className="w-auto">
                        <div className="flex flex-wrap items-center">
                            <div className="w-auto pr-2">
                                <Link to="/">
                                    <AnimatePresence mode="wait">
                                        <motion.img
                                            key={currentLogo}
                                            src={currentLogo}
                                            className="h-20 w-40  object-contain ml-[55px]"
                                            alt="Logo"
                                            variants={logoVariants}
                                            initial="initial"
                                            animate="animate"
                                            exit="exit"
                                            transition={{
                                                type: "spring",
                                                stiffness: 200,
                                                damping: 20,
                                                duration: 1,
                                            }}
                                        />
                                    </AnimatePresence>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-auto">
                        <div className="flex flex-wrap mr-7 items-center">
                            <div className="w-auto hidden xl:block">
                                <ul className="flex items-center mr-8">
                                    {navLinks.map((link) => (
                                        <li
                                            key={link.path}
                                            className="mr-14 hover:shadow-2xl font-medium hover:text-gray-900 tracking-tight"
                                        >
                                            <Link
                                                to={link.path}
                                                className={location.pathname === link.path ? "text-blue-600" : ""}
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                    {user ? (
                                        <>
                                            <li className="font-medium mr-8 hover:text-gray-900 tracking-tight">
                                                <span>Welcome, {user.name}</span>
                                            </li>
                                            <li className="font-medium hover:text-gray-900 tracking-tight">
                                                <button onClick={logout}>Sign Out</button>
                                            </li>
                                        </>
                                    ) : (
                                        <li className="font-medium hover:text-gray-900 tracking-tight">
                                            <Link to="/login">Login</Link>
                                        </li>
                                    )}
                                </ul>
                            </div>
                            {!user && (
                                <div className="w-auto hidden xl:block">
                                    <div className="inline-block">
                                        <Link
                                            className="inline-block px-9 py-2 text-white text-center tracking-tight bg-gradient-to-r from-gray-400 via-gray-600 to-blue-800 hover:bg-indigo-600 rounded-md hover:shadow-2xl transition duration-200"
                                            to="/book-consultation"
                                        >
                                            {texts[currentTextIndex]}
                                        </Link>
                                    </div>
                                </div>
                            )}
                            <div className="w-auto xl:hidden">
                                <button onClick={() => setMobileNavOpen(!mobileNavOpen)}>
                                    <svg
                                        className="text-indigo-600"
                                        width="51"
                                        height="51"
                                        viewBox="0 0 56 56"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect width="56" height="56" rx="28" fill="currentColor"></rect>
                                        <path
                                            d="M37 32H19M37 24H19"
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div
                className={`fixed top-0 left-0 bottom-0 w-4/5 sm:max-w-xs z-50 transition-transform transform ${
                    mobileNavOpen ? "translate-x-0" : "-translate-x-full"
                }`}
                style={{backgroundColor: "#f3f4f6"}}
            >
                <div onClick={() => setMobileNavOpen(false)} className="fixed inset-0 bg-gray-800 opacity-80"></div>
                <nav className="relative z-10 px-9 pt-8 h-full bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-300 via-amber-50 to-orange-200 overflow-y-auto">
                    <div className="flex flex-wrap justify-between h-full">
                        <div className="w-full">
                            <div className="flex items-center justify-between -m-2">
                                <div className="w-auto p-2">
                                    <Link className="inline-block h-[50px] w-[100px] hover:shadow-2xl" to="/">
                                        <img src={logo} alt="Logo" />
                                    </Link>
                                </div>
                                <div className="w-auto p-2">
                                    <button onClick={() => setMobileNavOpen(false)}>
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M6 18L18 6M6 6L18 18"
                                                stroke="#111827"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center py-16 w-full">
                            <ul>
                                {navLinks.map((link) => (
                                    <li
                                        key={link.path}
                                        className="mb-6 font-medium hover:shadow-2xl hover:text-gray-900 tracking-tight"
                                    >
                                        <Link to={link.path}>{link.label}</Link>
                                    </li>
                                ))}
                                {user ? (
                                    <>
                                        <li className="mb-6 font-medium hover:text-gray-900 tracking-tight">
                                            <span>Welcome, {user.name}</span>
                                        </li>
                                        <li className="font-medium hover:text-gray-900 hover:shadow-2xl tracking-tight">
                                            <button onClick={logout}>Sign Out</button>
                                        </li>
                                    </>
                                ) : (
                                    <li className="font-medium mb-6 hover:text-gray-900 hover:shadow-2xl tracking-tight">
                                        <Link to="/login">Sign In</Link>
                                    </li>
                                )}
                            </ul>
                        </div>
                        {!user && (
                            <div className="flex flex-col justify-end w-full pb-20">
                                <Link
                                className="relative z-10 blipping-effect hover:shadow-2xl px-5 py-3 
                                text-white font-semibold text-center tracking-tight 
                                bg-gradient-to-r from-gray-400 via-gray-600 to-blue-800 
                                hover:bg-indigo-600 rounded-lg transition duration-200 
                                transform hover:scale-105 
                                overflow-hidden"
                                to="/book-consultation"
                            >
                                {/* Glass Overlay Effect */}
                                <div 
                                    className="absolute inset-0 bg-white bg-opacity-20 
                                    opacity-0 group-hover:opacity-100 
                                    transition-opacity duration-500 
                                    animate-pulse 
                                    pointer-events-none 
                                    z-20"
                                />
                                {texts[currentTextIndex]}
                            </Link>
                            </div>
                        )}
                    </div>
                </nav>
            </div>
        </section>
    );
};

export default Navbar;