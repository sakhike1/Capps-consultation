import React from 'react';
import { useColorCycle } from '../hooks/useColorCycle';
import { HeroImage } from '../components/HeroImage';
import { Link } from "react-router-dom";
import { Sparkles, Bot, Code } from 'lucide-react';
import gifa from "../assets/images/videos/gifa.gif";

const WebDevHeroSection = () => {
  const colorClass = useColorCycle();

  return (
    <section className="px-4 -mt-[200px] pt-6 pb-8 lg:px-18 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900 via-gray-100 to-gray-50 lg:pb-18">
      <div className="rounded-2xl pt-4 lg:pt-10 px-4 lg:px-10 pb-4 lg:pb-14">
        <div className="flex flex-wrap -m-4 mb-8">
          <div className="w-full md:w-2/3 p-4">
            <div className="h-full bg-gradient-to-r from-violet-400/20 via-fuchsia-50 to-cyan-50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500 rounded-3xl py-10 lg:py-16 pl-4 lg:pl-12 pr-4 lg:pr-12 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h1 className="font-heading mb-6 font-semibold text-3xl sm:text-6xl xl:text-7xl max-w-7xl mt-10">
                <span className="relative z-10 bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent animate-pulse">Building the future</span>
                <span className="rounded-lg px-3 inline-block bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">one app at a time.</span>
              </h1>
              <h2 className="font-heading text-neutral-600 tracking-tight text-xl font-semibold mb-8 transform transition-all duration-300 group-hover:translate-x-2">
                Expert web & mobile app development solutions for modern businesses.
              </h2>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  className="inline-flex justify-center items-center text-center h-14 px-8 font-semibold tracking-tight text-xl text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group"
                  to="/book-consultation"
                >
                  <Bot className="w-6 h-6 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  Start Your Project
                </Link>
                <Link
                  className="inline-flex justify-center items-center text-center h-14 px-8 font-semibold tracking-tight text-xl text-indigo-600 border-2 border-indigo-600 hover:bg-indigo-50 rounded-full transition-all duration-300 hover:scale-105 group"
                  to="/"
                >
                  <Code className="w-6 h-6 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <HeroImage src={gifa} alt="Web Development Services" colorClass={colorClass} height="h-[600px]" />
          </div>
        </div>
        <div className="flex flex-wrap -m-2">
          <div className="w-full md:w-1/3 p-2">
            <div className="rounded-4xl rounded-[40px] shadow-2xl bg-gradient-to-r from-violet-400/20 via-fuchsia-50 to-indigo-50 h-full p-8 hover:scale-105 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-center justify-between flex-wrap -m-2">
                <div className="w-full xl:w-1/2 p-2">
                  <h2 className="font-heading tracking-tight text-3xl font-semibold mb-4">
                    <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent flex items-center">
                      95%+ <Sparkles className="w-6 h-6 ml-2 animate-pulse" />
                    </span>
                  </h2>
                  <p className="text-neutral-600 tracking-tight text-lg font-medium max-w-xs transform transition-all duration-300 group-hover:translate-x-2">
                    Client satisfaction rate with our custom development solutions
                  </p>
                </div>
                <div className="w-full xl:w-1/2 p-2">
                  <HeroImage src={gifa} alt="Development Statistics" colorClass={colorClass} height="h-[200px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-2">
            <div className="rounded-4xl rounded-[40px] shadow-2xl bg-gradient-to-r from-cyan-400/20 via-blue-50 to-indigo-50 h-full p-8 hover:scale-105 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-center justify-between flex-wrap -m-2">
                <div className="w-full xl:w-1/2 p-2">
                  <h2 className="font-heading tracking-tight text-3xl font-semibold mb-4">
                    <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent flex items-center">
                      500+ <Sparkles className="w-6 h-6 ml-2 animate-pulse" />
                    </span>
                  </h2>
                  <p className="text-neutral-600 tracking-tight text-lg font-medium max-w-xs transform transition-all duration-300 group-hover:translate-x-2">
                    Successfully completed projects across various industries
                  </p>
                </div>
                <div className="w-full xl:w-1/2 p-2">
                  <HeroImage src={gifa} alt="Project Portfolio" colorClass={colorClass} height="h-[200px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDevHeroSection;