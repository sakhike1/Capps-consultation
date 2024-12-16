import React from 'react';
import { motion } from 'framer-motion';
import gifa from "../assets/images/videos/gifa.gif";

const WebDevConsultationSection = () => {
    return (
      <section
        className="px-4 -mt-[200px] pt-6 pb-8 lg:px-18 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-purple-900 via-gray-100 to-gray-50 lg:pb-18"
      >
        <div className="rounded-2xl pt-4 lg:pt-10 px-4 lg:px-10 pb-4 lg:pb-14">
          <div className="flex flex-wrap -m-4 mb-8">
            <div className="w-full md:w-2/3 p-4">
              <div className="h-full bg-gradient-to-l from-violet-400 via-orange-50 to-stone-50 shadow-md rounded-3xl py-10 lg:py-16 pl-4 lg:pl-12 pr-4 lg:pr-12">
                <h1 className="font-heading mb-6 font-semibold text-3xl sm:text-6xl xl:text-7xl max-w-7xl">
                  <span className="relative z-10">Join the community, and change</span>
                  <span className="rounded-lg px-3 inline-block">the future.</span>
                </h1>
                <h2 className="font-heading text-neutral-600 tracking-tight text-xl font-semibold mb-8">
                  Your journey to digital excellence starts here.
                </h2>
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    className="inline-flex justify-center items-center text-center h-14 px-8 font-semibold tracking-tight text-xl text-white bg-neutral-900 hover:bg-neutral-800 focus:bg-neutral-800 rounded-full transition duration-200 shadow-lg hover:shadow-xl"
                    href="#"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="relative h-56 md:h-full">
                <img
                  className="absolute inset-0 rounded-3xl w-full h-[700px] object-fill"
                  src={gifa}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -m-2">
            <div className="w-full md:w-1/3 p-2">
              <div className="rounded-4xl rounded-[40px] shadow-2xl bg-gradient-to-l from-violet-400 via-orange-50 to-stone-50 h-full p-8">
                <div className="flex items-center justify-between flex-wrap -m-2">
                  <div className="w-full xl:w-1/2 p-2">
                    <h2 className="font-heading tracking-tight text-3xl font-semibold mb-4">Over 88%</h2>
                    <p className="text-neutral-600 tracking-tight text-lg font-medium max-w-xs">
                      of royalties for artists in your streaming activity
                    </p>
                  </div>
                  <div className="w-full xl:w-1/2 p-2">
                    <img
                      className="w-full object-contain rounded-3xl shadow-2xl"
                      src={gifa}
                      alt="App Development"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default WebDevConsultationSection;