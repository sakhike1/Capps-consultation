import {useState, useRef, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import {UserPlus} from "lucide-react";
import {motion} from "framer-motion";
import useAuthStore from "../store/authStore";
import fg from "../assets/images/videos/fg.gif";

export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState("");
    const canvasRef = useRef(null);

    const {signup} = useAuthStore();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            await signup(email, password, name);
            navigate("/dashboard");
        } catch (err) {
            setError(err instanceof Error ? err.message : "An error occurred");
        }
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const stars = Array.from({length: 100}, () => ({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            size: Math.random() * 2,
            speed: Math.random() * 0.5 + 0.1,
        }));

        const resizeCanvas = () => {
            const devicePixelRatio = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * devicePixelRatio;
            canvas.height = window.innerHeight * devicePixelRatio;
            ctx.scale(devicePixelRatio, devicePixelRatio);

            // Recalculate star positions for new canvas size
            stars.forEach((star) => {
                star.x = (Math.random() * canvas.width) / devicePixelRatio;
                star.y = (Math.random() * canvas.height) / devicePixelRatio;
            });
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            stars.forEach((star) => {
                star.y += star.speed;
                if (star.y > canvas.height / (window.devicePixelRatio || 1)) {
                    star.y = 0;
                    star.x = (Math.random() * canvas.width) / (window.devicePixelRatio || 1);
                }
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fillStyle = "white";
                ctx.fill();
            });
            requestAnimationFrame(animate);
        };

        resizeCanvas();
        animate();

        window.addEventListener("resize", resizeCanvas);

        return () => {
            window.removeEventListener("resize", resizeCanvas);
        };
    }, []);

    return (
        <div className="relative bg-black min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
            {/* Particle Background */}
            <canvas ref={canvasRef} className="absolute inset-0 z-0" />

            {/* Motion background */}
            <motion.div
                className="absolute inset-0 -z-10"
                animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                }}
                style={{
                    backgroundImage: "linear-gradient(135deg, #667eea, #764ba2, #ff6a00, #f9d423)",
                    backgroundSize: "300% 300%",
                }}
            />

            <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl shadow-lg bg-gradient-to-r from-white via-slate-200 to-slate-300 overflow-hidden z-10">
                {/* Left Side - Image */}
                <div className="hidden lg:block w-1/2 h-full">
                    <img 
                        src={fg} 
                        alt="Login Illustration" 
                        className="w-full h-[510px] object-cover" 
                    />
                </div>

                {/* Right Side - Form */}
                <div className="w-full h-[450pxs] lg:w-1/2 p-6 sm:p-8 md:p-10 max-w-md mx-auto">
                    <motion.h2
                        className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-gray-800"
                        initial={{opacity: 0, y: -20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5}}
                    >
                        Create Account
                    </motion.h2>

                    {error && (
                        <motion.div
                            className="mb-4 p-3 bg-red-50 text-red-700 rounded-lg text-sm"
                            initial={{opacity: 0, scale: 0.9}}
                            animate={{opacity: 1, scale: 1}}
                            transition={{duration: 0.3}}
                        >
                            {error}
                        </motion.div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 w-full">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-3 py-2 sm:px-4 sm:py-2 border rounded-lg text-sm sm:text-base"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-3 py-2 sm:px-4 sm:py-2 border rounded-lg text-sm sm:text-base"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-3 py-2 sm:px-4 sm:py-2 border rounded-lg text-sm sm:text-base"
                                required
                            />
                        </div>

                        <motion.button
                            type="submit"
                            className="w-full hover:shadow-2xl bg-gradient-to-r from-gray-400 via-gray-600 to-blue-800 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
                            whileHover={{scale: 1.05}}
                            whileTap={{scale: 0.95}}
                        >
                            <UserPlus size={20} /> Create Account
                        </motion.button>
                    </form>

                    <p className="mt-4 sm:mt-6 text-center text-xs sm:text-sm text-gray-600">
                        Already have an account?{" "}
                        <Link to="/login" className="text-blue-600 hover:text-blue-700 font-medium">
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}