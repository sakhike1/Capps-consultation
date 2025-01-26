import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Brain, CircuitBoard, Zap, Network, X } from 'lucide-react';
import logo2 from "../assets/images/logo2.png";
import logo from "../assets/images/logo.png";
import useAuthStore from "../store/authStore";

const logoVariants = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
};

const navItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.5,
        },
    }),
};

const texts = ["Contact Us", "What's Your Idea?", "Book Consultation"];

const Navbar = () => {
    const location = useLocation();
    const user = useAuthStore((state) => state.user);
    const logout = useAuthStore((state) => state.logout);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [currentLogo, setCurrentLogo] = useState(logo);
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    useEffect(() => {
        const logoInterval = setInterval(() => {
            setCurrentLogo((prev) => (prev === logo ? logo2 : logo));
        }, 10000);
        return () => clearInterval(logoInterval);
    }, []);

    useEffect(() => {
        const textInterval = setInterval(() => {
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 10000);
        return () => clearInterval(textInterval);
    }, []);

    const navLinks = [
        { path: "/", label: "Home", icon: Brain },
        { path: "/about", label: "About Us", icon: CircuitBoard },
        { path: "/apps", label: "Mobile Apps", icon: Zap },
        { path: "/web-apps", label: "Web Apps", icon: Network },
    ];

    // Background circuit animation component
    const Circuit = () => (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
                <div
                    key={i}
                    className="absolute bg-blue-500/10 w-px h-px"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        boxShadow: '0 0 15px 2px rgba(59, 130, 246, 0.5)',
                        animation: `pulse ${2 + Math.random() * 4}s infinite ${Math.random() * 2}s`,
                    }}
                />
            ))}
        </div>
    );

    return (
        <section className="relative bg-white">
            <div className="container px-2 mx-auto">
                <div className="flex items-center justify-between py-5">
                    {/* Logo Section */}
                    <div className="w-auto">
                        <div className="flex flex-wrap items-center">
                            <div className="w-auto pr-2">
                                <Link to="/">
                                    <AnimatePresence mode="wait">
                                        <motion.img
                                            key={currentLogo}
                                            src={currentLogo}
                                            className="h-20  sm:ml-[10px] w-40 object-contain lg:ml-[55px]"
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

                    {/* Desktop Navigation */}
                    <div className="w-auto">
                        <div className="flex flex-wrap mr-7 items-center">
                            <div className="w-auto hidden xl:block">
                                <ul className="flex items-center mr-8">
                                    {navLinks.map((link, index) => {
                                        const Icon = link.icon;
                                        return (
                                            <motion.li
                                                key={link.path}
                                                custom={index}
                                                variants={navItemVariants}
                                                initial="hidden"
                                                animate="visible"
                                                className="mr-14 relative"
                                                onHoverStart={() => setHoveredIndex(index)}
                                                onHoverEnd={() => setHoveredIndex(null)}
                                            >
                                                <Link
                                                    to={link.path}
                                                    className={`flex items-center space-x-2 font-medium tracking-tight
                                                        ${location.pathname === link.path 
                                                            ? 'text-blue-600' 
                                                            : 'hover:text-gray-900'
                                                        }`}
                                                >
                                                    <Icon className={`w-4 h-4 transition-transform duration-300
                                                        ${hoveredIndex === index ? 'scale-125 rotate-12' : ''}`} 
                                                    />
                                                    <span>{link.label}</span>
                                                </Link>
                                            </motion.li>
                                        );
                                    })}
                                    {user ? (
                                        <>
                                            <motion.li 
                                                variants={navItemVariants}
                                                custom={4}
                                                className="font-medium mr-8 hover:text-gray-900 tracking-tight"
                                            >
                                                <span>Welcome, {user.name}</span>
                                            </motion.li>
                                            <motion.li 
                                                variants={navItemVariants}
                                                custom={5}
                                                className="font-medium hover:text-gray-900 tracking-tight"
                                            >
                                                <button onClick={logout}>Sign Out</button>
                                            </motion.li>
                                        </>
                                    ) : (
                                        <motion.li 
                                            variants={navItemVariants}
                                            custom={4}
                                            className="font-medium hover:text-gray-900 tracking-tight"
                                        >
                                            <Link to="/login">Login</Link>
                                        </motion.li>
                                    )}
                                </ul>
                            </div>
                            {!user && (
                                <div className="w-auto hidden xl:block">
                                    <Link
                                        className="inline-block px-9 py-2 text-white text-center tracking-tight 
                                            bg-gradient-to-r from-gray-400 via-gray-600 to-blue-800 
                                            hover:shadow-lg hover:shadow-blue-500/25 rounded-md 
                                            transition-all duration-300 relative overflow-hidden group"
                                        to="/book-consultation"
                                    >
                                        <div className="absolute inset-0 bg-white/20 transform -skew-x-12 
                                            -translate-x-full group-hover:translate-x-full transition-transform duration-1000" 
                                        />
                                        <span className="relative">{texts[currentTextIndex]}</span>
                                    </Link>
                                </div>
                            )}
                            {/* Mobile Menu Button */}
                            <div className="w-auto xl:hidden">
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => setMobileNavOpen(!mobileNavOpen)}
                                >
    <div className="bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-yellow-700 via-stone-400 to-indigo-600 rounded-full w-14 h-14 flex items-center justify-center">
    <svg
        className="fill-current text-white"
        width="28"
        height="28"
        viewBox="0 0 56 56"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M37 32H19M37 24H19"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        ></path>
    </svg>
</div>


                                </motion.button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Enhanced Mobile Navigation */}
            <AnimatePresence>
                {mobileNavOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.7 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMobileNavOpen(false)}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
                        />
                        
                        <motion.nav
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", stiffness: 100 }}
                            className="fixed top-0 left-0 bottom-0 w-4/5 sm:max-w-xs z-50 bg-slate-900"
                        >
                            {/* Circuit Animation Background */}
                            <Circuit />
                            
                            <div className="relative h-full overflow-hidden">
                                {/* Glass effect overlay */}
                                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-purple-500/10 backdrop-blur-sm" />
                                
                                <div className="relative z-10 h-full flex flex-col p-6">
                                    {/* Header */}
                                    <div className="flex justify-between items-center mb-8">
                                        <motion.img
                                            src={currentLogo}
                                            alt="Logo"
                                            className="h-12 w-auto"
                                            initial={{ opacity: 0, scale: 0.5 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.5 }}
                                        />
                                        <motion.button
                                            whileHover={{ rotate: 90 }}
                                            whileTap={{ scale: 0.9 }}
                                            onClick={() => setMobileNavOpen(false)}
                                            className="p-2 hover:bg-white/10 rounded-full transition-colors"
                                        >
                                            <X className="w-6 h-6 text-white" />
                                        </motion.button>
                                    </div>

                                    {/* Navigation Links */}
                                    <div className="space-y-4">
                                        {navLinks.map((link, i) => {
                                            const Icon = link.icon;
                                            return (
                                                <motion.div
                                                    key={link.path}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: i * 0.1 }}
                                                >
                                                    <Link
                                                        to={link.path}
                                                        onClick={() => setMobileNavOpen(false)}
                                                        className={`flex items-center space-x-4 p-3 rounded-lg transition-all
                                                            ${location.pathname === link.path 
                                                                ? 'bg-blue-500/20 text-blue-400' 
                                                                : 'text-white hover:bg-white/10'}`}
                                                    >
                                                        <Icon className="w-5 h-5" />
                                                        <span className="font-medium">{link.label}</span>
                                                    </Link>
                                                </motion.div>
                                            );
                                        })}
                                    </div>

                                    {/* User Section */}
                                    <div className="mt-auto space-y-4">
                                        {user ? (
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.4 }}
                                                className="space-y-4"
                                            >
                                                <p className="text-white/80">Welcome, {user.name}</p>
                                                <button
                                                    onClick={() => {
                                                        logout();
                                                        setMobileNavOpen(false);
                                                    }}
                                                    className="w-full px-4 py-2 rounded-lg bg-red-500/20 text-red-400 
                                                        hover:bg-red-500/30 transition-colors"
                                                >
                                                    Sign Out
                                                </button>
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.4 }}
                                                className="space-y-4"
                                            >
                                                <Link
                                                    to="/login"
                                                    onClick={() => setMobileNavOpen(false)}
                                                    className="block px-4 py-2 text-center text-white bg-white/10 
                                                        rounded-lg hover:bg-white/20 transition-colors"
                                                >
                                                    Sign In
                                                </Link>
                                                <Link
                                                    to="/book-consultation"
                                                    onClick={() => setMobileNavOpen(false)}
                                                    className="block px-4 py-3 text-center text-white 
                                                        bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg
                                                        hover:shadow-lg hover:shadow-blue-500/25 
                                                        transition-all duration-300
                                                        relative overflow-hidden group"
                                                >
                                                    <div className="absolute inset-0 bg-white/20 transform -skew-x-12 
                                                        -translate-x-full group-hover:translate-x-full transition-transform duration-1000" 
                                                    />
                                                    <span className="relative">{texts[currentTextIndex]}</span>
                                                </Link>
                                            </motion.div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.nav>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Navbar;
