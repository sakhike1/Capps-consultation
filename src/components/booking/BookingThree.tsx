import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Lightbulb, 
  Palette, 
  Code, 
  Rocket, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

const AIAppCreationJourney = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [direction, setDirection] = useState(1);

  const appCreationSteps = [
    {
      icon: <Lightbulb className="text-amber-400" size={48} />,
      title: "AI-Driven Ideation",
      description: "Leveraging machine learning to generate innovative UI/UX concepts",
      details: "Neural networks analyze successful apps to inspire groundbreaking designs",
      color: "from-amber-500/20 to-orange-500/20"
    },
    {
      icon: <Palette className="text-purple-400" size={48} />,
      title: "Intelligent Design",
      description: "AI-enhanced visual design and interaction prototyping",
      details: "Smart algorithms optimize layouts and color harmonies for maximum impact",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: <Code className="text-blue-400" size={48} />,
      title: "Smart Development",
      description: "AI-assisted coding and component generation",
      details: "Automated optimization of React components and performance tuning",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: <Brain className="text-emerald-400" size={48} />,
      title: "Neural Integration",
      description: "Deep learning systems and intelligent features",
      details: "Advanced ML models providing real-time adaptive functionality",
      color: "from-emerald-500/20 to-teal-500/20"
    },
    {
      icon: <Rocket className="text-rose-400" size={48} />,
      title: "Smart Launch",
      description: "AI-optimized deployment and scaling strategy",
      details: "Intelligent systems ensuring optimal performance and user experience",
      color: "from-rose-500/20 to-red-500/20"
    }
  ];

  const handleNextStep = () => {
    setDirection(1);
    setActiveStep((prevStep) => (prevStep + 1) % appCreationSteps.length);
  };

  const handlePrevStep = () => {
    setDirection(-1);
    setActiveStep((prevStep) => (prevStep - 1 + appCreationSteps.length) % appCreationSteps.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextStep();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0
    })
  };

  const CircuitLine = ({ delay = 0, top, left, width }) => (
    <motion.div
      className="absolute bg-gradient-to-r from-blue-500/10 to-purple-500/10"
      style={{ 
        top: `${top}%`, 
        left: `${left}%`, 
        height: '1px', 
        width: `${width}px` 
      }}
      initial={{ scaleX: 0, opacity: 0 }}
      animate={{ 
        scaleX: 1, 
        opacity: [0, 1, 1, 0],
        transition: {
          duration: 3,
          delay,
          repeat: Infinity,
          repeatDelay: 2
        }
      }}
    />
  );

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.03),transparent_50%)]" />
      
      {Array.from({ length: 8 }).map((_, i) => (
        <CircuitLine 
          key={i}
          delay={i * 0.5}
          top={Math.random() * 100}
          left={Math.random() * 50}
          width={100 + Math.random() * 200}
        />
      ))}

      <div className="relative z-20 min-h-screen w-full flex flex-col items-center justify-center p-4 sm:p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-4xl"
        >
          <div className="text-center mb-8 sm:mb-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="inline-flex items-center gap-2 bg-gradient-to-l from-blue-800 via-rose-100 to-pink-100 rounded-full px-4 py-2 mb-4"
            >
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-black text-sm font-medium">AI-Powered Process</span>
            </motion.div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              AI App Creation Journey
            </h1>
          </div>

          <motion.div
            className="relative rounded-2xl overflow-hidden backdrop-blur-xl border border-white/10"
            style={{
              background: 'linear-gradient(169deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.05) 100%)'
            }}
          >
            <motion.div
              className={`absolute inset-0 bg-gradient-to-r ${appCreationSteps[activeStep].color} opacity-30`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ duration: 0.5 }}
            />

            <div className="relative p-4 sm:p-8">
              <AnimatePresence initial={false} mode="wait" custom={direction}>
                <motion.div
                  key={activeStep}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                  }}
                  className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-center sm:text-left"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/10"
                  >
                    {appCreationSteps[activeStep].icon}
                  </motion.div>

                  <div className="flex-grow">
                    <h2 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                      {appCreationSteps[activeStep].title}
                    </h2>
                    <p className="text-blue-200 mb-2">
                      {appCreationSteps[activeStep].description}
                    </p>
                    <p className="text-blue-300/70 text-sm">
                      {appCreationSteps[activeStep].details}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex justify-center gap-2 mt-6 sm:mt-8">
                {appCreationSteps.map((_, index) => (
                  <motion.div
                    key={index}
                    className={`h-1 rounded-full ${
                      index === activeStep ? 'w-8 bg-blue-400' : 'w-4 bg-white/20'
                    }`}
                    initial={false}
                    animate={{ 
                      backgroundColor: index === activeStep ? 'rgb(96, 165, 250)' : 'rgba(255,255,255,0.2)'
                    }}
                    transition={{ duration: 0.3 }}
                  />
                ))}
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
                <motion.button
                  onClick={handlePrevStep}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-full flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-500/20 transition-shadow"
                >
                  <ArrowRight size={20} className="rotate-180" />
                  <span>Previous</span>
                </motion.button>
                <motion.button
                  onClick={handleNextStep}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-500/20 transition-shadow"
                >
                  <span>Next</span>
                  <ArrowRight size={20} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AIAppCreationJourney;