import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserPlus, Sparkles, Loader } from "lucide-react";
import useAuthStore from "../store/authStore";
import fg from "../assets/images/videos/fg.gif";

export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const canvasRef = useRef(null);
    const formRef = useRef(null);

    const { signup } = useAuthStore();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        try {
            await signup(email, password, name);
            // Add success animation before navigation
            await new Promise(resolve => setTimeout(resolve, 1000));
            navigate("/dashboard");
        } catch (err) {
            setError(err instanceof Error ? err.message : "An error occurred");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const neurons = Array.from({ length: 50 }, () => ({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            connections: [],
            speed: Math.random() * 0.5 + 0.1,
            angle: Math.random() * Math.PI * 2
        }));

        const resizeCanvas = () => {
            const devicePixelRatio = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * devicePixelRatio;
            canvas.height = window.innerHeight * devicePixelRatio;
            ctx.scale(devicePixelRatio, devicePixelRatio);
        };

        const drawNeuralNetwork = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Update neuron positions
            neurons.forEach(neuron => {
                neuron.x += Math.cos(neuron.angle) * neuron.speed;
                neuron.y += Math.sin(neuron.angle) * neuron.speed;

                // Bounce off edges
                if (neuron.x < 0 || neuron.x > canvas.width / (window.devicePixelRatio || 1)) {
                    neuron.angle = Math.PI - neuron.angle;
                }
                if (neuron.y < 0 || neuron.y > canvas.height / (window.devicePixelRatio || 1)) {
                    neuron.angle = -neuron.angle;
                }

                // Draw neuron
                ctx.beginPath();
                ctx.arc(neuron.x, neuron.y, 2, 0, Math.PI * 2);
                ctx.fillStyle = "rgba(100, 149, 237, 0.6)";
                ctx.fill();
            });

            // Draw connections
            neurons.forEach((neuron, i) => {
                neurons.slice(i + 1).forEach(otherNeuron => {
                    const distance = Math.hypot(neuron.x - otherNeuron.x, neuron.y - otherNeuron.y);
                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.moveTo(neuron.x, neuron.y);
                        ctx.lineTo(otherNeuron.x, otherNeuron.y);
                        ctx.strokeStyle = `rgba(100, 149, 237, ${1 - distance / 100})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                });
            });

            requestAnimationFrame(drawNeuralNetwork);
        };

        resizeCanvas();
        drawNeuralNetwork();

        window.addEventListener("resize", resizeCanvas);
        return () => window.removeEventListener("resize", resizeCanvas);
    }, []);

    return (
        <div className="relative bg-black min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
            <canvas ref={canvasRef} className="absolute inset-0 z-0" />

            <div className="relative flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl rounded-2xl shadow-2xl backdrop-blur-sm bg-white/10 overflow-hidden z-10 border border-white/20">
                {/* Left Side - Image with overlay */}
                <div className="hidden lg:block w-1/2 h-full relative">
                    <div className="absolute inset-0  mix-blend-overlay" />
                    <img 
                        src={fg} 
                        alt="Login Illustration" 
                        className="w-full h-[600px] object-cover filter brightness-90" 
                    />
                </div>

                {/* Right Side - Form */}
                <div className="w-full lg:w-1/2 p-8 md:p-10 ">
                    <div 
                        ref={formRef} 
                        className="max-w-md mx-auto space-y-6"
                        style={{
                            transform: "perspective(1000px) rotateX(0deg)",
                            transition: "transform 0.3s ease"
                        }}
                    >
                        <div className="text-center space-y-2">
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                                Create Account
                            </h2>
                            <p className="text-gray-400 text-sm">Join our AI-powered platform</p>
                        </div>

                        {error && (
                            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-5">
                            {["name", "email", "password"].map((field) => (
                                <div 
                                    key={field}
                                    className="group relative transition-all duration-300 focus-within:scale-105"
                                >
                                    <input
                                        type={field === "password" ? "password" : "text"}
                                        value={eval(field)}
                                        onChange={(e) => eval(`set${field.charAt(0).toUpperCase() + field.slice(1)}`)(e.target.value)}
                                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
                                        placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                                        required
                                    />
                                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                                </div>
                            ))}

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="relative w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50"
                            >
                                <div className="flex items-center justify-center gap-2">
                                    {isLoading ? (
                                        <Loader className="animate-spin" size={20} />
                                    ) : (
                                        <>
                                            <UserPlus size={20} />
                                            <span>Create Account</span>
                                            <Sparkles className="absolute right-4" size={20} />
                                        </>
                                    )}
                                </div>
                            </button>
                        </form>

                        <p className="text-center text-sm text-gray-400">
                            Already have an account?{" "}
                            <Link to="/login" className="text-blue-400 hover:text-blue-300 font-medium">
                                Sign In
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}