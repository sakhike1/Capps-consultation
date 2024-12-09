import React from "react";
import { motion } from "framer-motion";

const BookingSecond = () => {
  return (
    <div>
      <section className="py-20 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-purple-500 via-red-200 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -m-4 items-center">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 p-4">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-block bg-blue-500 px-3 py-1 text-xs font-bold text-white rounded-full mb-6">
                  App Consultation
                </div>
                <h1 className="font-heading text-5xl font-bold mb-6 max-w-sm text-blue-900 leading-tight">
                  Transform Your Vision with Expert App Consultation
                </h1>
                <p className="text-gray-700 max-w-md text-lg">
                  Partner with our UI/UX team to bring your app idea to life. We dive deep into understanding your needs and project requests to ensure a seamless development process.
                </p>
              </motion.div>
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-1/2 p-4">
              <div className="flex flex-wrap -m-4">
                {[
                  {
                    icon: "📋",
                    title: "Meet the Team",
                    description: "Collaborate with our expert UI/UX designers to achieve your project goals.",
                  },
                  {
                    icon: "🛠️",
                    title: "Understanding Your Needs",
                    description: "Tailored solutions for your app requirements.",
                  },
                  {
                    icon: "🎯",
                    title: "Tailored Project Requests",
                    description: "Define scope and deliverables with our guidance.",
                  },
                  {
                    icon: "🔧",
                    title: "Ongoing Support",
                    description: "Updates and support during and after development.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="w-full lg:w-1/2 p-4"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
                      <div className="text-4xl text-blue-500 mb-4">{item.icon}</div>
                      <h2 className="text-xl font-bold text-blue-900 mb-4">{item.title}</h2>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookingSecond;

