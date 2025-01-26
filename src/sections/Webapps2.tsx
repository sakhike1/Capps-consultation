import React from 'react';
import { useColorCycle } from '../hooks/useColorCycle';
import { HeroImage } from '../components/HeroImage';
import { Link} from "react-router-dom";
import gifa from "../assets/images/videos/gifa.gif";

const WebDevHeroSection = () => {
  const colorClass = useColorCycle();

  return (
    <section className="px-4 -mt-[200px] pt-6 pb-8 lg:px-18 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900 via-gray-100 to-gray-50 lg:pb-18">
      <div className="rounded-2xl pt-4 lg:pt-10 px-4 lg:px-10 pb-4 lg:pb-14">
        <div className="flex flex-wrap -m-4 mb-8">
          <div className="w-full md:w-2/3 p-4">
            <div className="h-full bg-gradient-to-l from-blue-400 via-indigo-50 to-slate-50 shadow-md rounded-3xl py-10 lg:py-16 pl-4 lg:pl-12 pr-4 lg:pr-12">
              <h1 className="font-heading mb-6 font-semibold text-3xl sm:text-6xl xl:text-7xl max-w-7xl mt-10">
                <span className="relative z-10">Building the future</span>
                <span className="rounded-lg px-3 inline-block">one app at a time.</span>
              </h1>
              <h2 className="font-heading text-neutral-600 tracking-tight text-xl font-semibold mb-8">
                Expert web & mobile app development solutions for modern businesses.
              </h2>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  className="inline-flex justify-center items-center text-center h-14 px-8 font-semibold tracking-tight text-xl text-white bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 rounded-full transition duration-200 shadow-lg hover:shadow-xl"
                  to="/book-consultation"
                >
                  Start Your Project
                </Link>
                <Link
                  className="inline-flex justify-center items-center text-center h-14 px-8 font-semibold tracking-tight text-xl text-blue-600 border-2 border-blue-600 hover:bg-blue-50 focus:bg-blue-50 rounded-full transition duration-200"
                  to="/"
                >
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
            <div className="rounded-4xl rounded-[40px] shadow-2xl bg-gradient-to-l from-blue-400 via-indigo-50 to-slate-50 h-full p-8">
              <div className="flex items-center justify-between flex-wrap -m-2">
                <div className="w-full xl:w-1/2 p-2">
                  <h2 className="font-heading tracking-tight text-3xl font-semibold mb-4">95%+</h2>
                  <p className="text-neutral-600 tracking-tight text-lg font-medium max-w-xs">
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
            <div className="rounded-4xl rounded-[40px] shadow-2xl bg-gradient-to-l from-blue-400 via-indigo-50 to-slate-50 h-full p-8">
              <div className="flex items-center justify-between flex-wrap -m-2">
                <div className="w-full xl:w-1/2 p-2">
                  <h2 className="font-heading tracking-tight text-3xl font-semibold mb-4">500+</h2>
                  <p className="text-neutral-600 tracking-tight text-lg font-medium max-w-xs">
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