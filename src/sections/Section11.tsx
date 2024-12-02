import { FloatingElement } from '../components/FloatingElement'; // Ensure the path is correct
import { Code, Smartphone, Sparkles, Zap, Binary, Boxes } from 'lucide-react'; // Ensure these are correct imports

export const HeroSection11 = () => {
    return (
        <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 w-full h-full">
                <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse -top-10 -left-10"></div>
                <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000 top-1/2 right-0"></div>
            </div>

            {/* Floating icons */}
            <div className="absolute inset-0 w-full h-full">
                <FloatingElement className="absolute top-20 left-10" delay={0}>
                    <Binary className="w-8 h-8 text-purple-300/40" />
                </FloatingElement>
                <FloatingElement className="absolute top-40 right-20" delay={1000}>
                    <Boxes className="w-10 h-10 text-blue-300/40" />
                </FloatingElement>
                <FloatingElement className="absolute bottom-32 left-1/4" delay={2000}>
                    <Code className="w-12 h-12 text-indigo-300/40" />
                </FloatingElement>
            </div>

            {/* Main content */}
            <div className="relative container mx-auto px-6 pt-32 pb-24">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left content */}
                    <div className="space-y-8">
                        <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 rounded-full border border-purple-500/20 backdrop-blur-sm">
                            <Sparkles className="w-4 h-4 text-purple-400 mr-2" />
                            <span className="text-sm text-purple-200">AI-Powered App Solutions</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                            Transform Your{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                                Digital Vision
                            </span>{' '}
                            Into Reality
                        </h1>

                        <p className="text-lg text-gray-300">
                            Expert app design and consultation services powered by cutting-edge AI technology.
                            We turn complex ideas into elegant, user-centric applications.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-white font-semibold hover:scale-105 transition-transform flex items-center justify-center group">
                                Start Your Journey
                                <Zap className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
                            </button>

                            <button className="px-8 py-4 bg-white/10 rounded-lg text-white font-semibold hover:bg-white/20 transition-all backdrop-blur-sm border border-white/10">
                                View Our Work
                            </button>
                        </div>

                        <div className="flex items-center gap-4 pt-8">
                            <div className="flex -space-x-4">
                                {[...Array(4)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="w-12 h-12 rounded-full border-2 border-white bg-gradient-to-br from-purple-400 to-blue-400"
                                    ></div>
                                ))}
                            </div>
                            <div>
                                <p className="text-white font-semibold">Trusted by 500+ clients</p>
                                <p className="text-gray-400 text-sm">Across 30 countries</p>
                            </div>
                        </div>
                    </div>

                    {/* Right content */}
                    <div className="relative">
                        <div className="relative z-10 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl p-8 backdrop-blur-lg border border-white/10">
                            <div className="aspect-square relative">
                                <FloatingElement delay={500} className="absolute inset-0">
                                    <div className="w-full h-full bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl opacity-20 animate-pulse"></div>
                                </FloatingElement>
                                <div className="relative z-10 grid grid-cols-2 gap-4 p-4">
                                    <div className="space-y-4">
                                        <div className="h-32 bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors">
                                            <Smartphone className="w-6 h-6 text-purple-400" />
                                            <p className="text-white mt-2">Mobile First</p>
                                        </div>
                                        <div className="h-32 bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors">
                                            <Binary className="w-6 h-6 text-blue-400" />
                                            <p className="text-white mt-2">AI Integration</p>
                                        </div>
                                    </div>
                                    <div className="space-y-4 mt-8">
                                        <div className="h-32 bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors">
                                            <Code className="w-6 h-6 text-indigo-400" />
                                            <p className="text-white mt-2">Clean Code</p>
                                        </div>
                                        <div className="h-32 bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors">
                                            <Boxes className="w-6 h-6 text-purple-400" />
                                            <p className="text-white mt-2">Scalable</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
