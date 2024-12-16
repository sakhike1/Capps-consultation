import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Lightbulb, 
  Palette, 
  Code, 
  Rocket, 
  ArrowRight 
} from 'lucide-react';

const AIAppCreationJourney = () => {
  const [activeStep, setActiveStep] = useState(0);

  const appCreationSteps = [
    {
      icon: <Lightbulb className="text-cyan-400" size={48} />,
      title: "UI/UX Ideation",
      backgroundColor: "bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-zinc-300 via-blue-500 to-gray-950",
      description: "Brainstorming session with design team to conceptualize app vision",
      details: "Collaborative meeting exploring user experience, wireframing initial concepts"
    },
    {
      icon: <Palette className="text-purple-400" size={48} />,
      title: "Design Mockups",
      backgroundColor: "bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-fuchsia-100 via-rose-50 to-teal-300",
      description: "Creating detailed visual designs and interaction prototypes",
      details: "Developing color schemes, typography, and component layouts"
    },
    {
      icon: <Code className="text-green-400" size={48} />,
      title: "Initial Development",
      backgroundColor: "bg-gradient-to-tl from-indigo-800 via-gray-400 to-neutral-300",
      description: "Translating design into functional React components",
      details: "Setting up project structure, implementing base UI elements"
    },
    {
      icon: <Brain className="text-pink-400" size={48} />,
      title: "AI Integration",
      backgroundColor: "bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-50 via-pink-50 to-slate-500",
      description: "Embedding intelligent interactions and machine learning capabilities",
      details: "Implementing AI-driven features, training models, creating smart interactions"
    },
    {
      icon: <Rocket className="text-orange-400" size={48} />,
      title: "Deployment",
      backgroundColor: "bg-gradient-to-r from-fuchsia-300 via-violet-900 to-gray-900",
      description: "Launching the application and preparing for user interaction",
      details: "Final testing, optimization, and release to production environment"
    }
  ];

  // Function to move to the next step
  const handleNextStep = () => {
    setActiveStep((prevStep) => (prevStep + 1) % appCreationSteps.length);
  };

  // Auto-advance steps using setInterval
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextStep();
    }, 3000); // Change step every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <motion.div 
      className={`relative min-h-screen w-full overflow-hidden transition-colors duration-500 ${appCreationSteps[activeStep].backgroundColor}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Content */}
      <div className="relative z-20 min-h-screen w-full flex flex-col items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full hover:shadow-2xl max-w-4xl bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-lime-700 via-neutral-200 to-sky-100 bg-opacity-80 rounded-2xl p-8 shadow-2xl backdrop-blur-sm"
        >
          <h1 className="text-4xl font-bold text-center mb-12 text-gray-600">
            AI App Creation Journey
          </h1>

          <motion.div
            key={activeStep}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex items-center space-x-8"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex-shrink-0"
            >
              {appCreationSteps[activeStep].icon}
            </motion.div>

            <div className="flex-grow">
              <h2 className="text-2xl font-semibold text-gray-500">
                {appCreationSteps[activeStep].title}
              </h2>
              <p className="text-gray-400 mt-2">
                {appCreationSteps[activeStep].description}
              </p>
              <p className="text-gray-400 mt-1 italic">
                {appCreationSteps[activeStep].details}
              </p>
            </div>
          </motion.div>

          <div className="flex justify-center mt-12">
            <motion.button
              onClick={handleNextStep}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-cyan-500 text-black px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-cyan-400 transition-colors"
            >
              <span>Next Step</span>
              <ArrowRight size={20} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AIAppCreationJourney;
