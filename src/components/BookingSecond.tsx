import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Code, MessageSquare, Sparkles, ArrowRight, Circle } from "lucide-react";

const FloatingIcon = ({ children, index }) => {
  const randomDelay = Math.random() * 2;
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ 
        y: [-10, 10, -10],
        rotate: [0, 5, -5, 0]
      }}
      transition={{
        duration: 6,
        delay: randomDelay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="absolute"
      style={{
        left: `${(index * 25) + Math.random() * 10}%`,
        top: `${Math.random() * 80}%`
      }}
    >
      {children}
    </motion.div>
  );
};

const ConsultationCard = ({ icon, title, description, delay }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        delay: delay,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      className="w-full md:w-1/2 p-4"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative h-full overflow-hidden rounded-2xl bg-white/5 p-6 backdrop-blur-lg border border-white/10 hover:border-purple-500/50 transition-all duration-300">
        <div className="relative z-10">
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: isHovered ? 1.1 : 1 }}
            className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20"
          >
            {icon}
          </motion.div>
          <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
          <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
          
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
            className="mt-4 flex items-center text-purple-400"
          >
            <span className="text-sm mr-2">Learn more</span>
            <ArrowRight className="w-4 h-4" />
          </motion.div>
        </div>
        
        {/* Background gradient effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
};

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(100,100,255,0.1),transparent_50%)]" />
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-[2px] w-full bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"
          animate={{
            y: ["100%", "-100%"],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 5,
            delay: i * 2,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
      {[Brain, Code, MessageSquare, Sparkles].map((Icon, i) => (
        <FloatingIcon key={i} index={i}>
          <Icon className="w-6 h-6 text-purple-500/20" />
        </FloatingIcon>
      ))}
    </div>
  );
};

const BookingSecond = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const consultationItems = [
    {
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      title: "AI-Powered Analysis",
      description: "Leverage cutting-edge AI to analyze and optimize your app's user experience with real-time insights.",
    },
    {
      icon: <Code className="w-8 h-8 text-blue-400" />,
      title: "Technical Excellence",
      description: "Expert development with modern frameworks and cloud-native architecture for scalable solutions.",
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-green-400" />,
      title: "Collaborative Design",
      description: "Work directly with our UI/UX experts to create intuitive and engaging user experiences.",
    },
    {
      icon: <Sparkles className="w-8 h-8 text-yellow-400" />,
      title: "Innovation Focus",
      description: "Stay ahead with emerging technologies like AI, blockchain, and advanced analytics.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % consultationItems.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-purple-950/20 to-black">
      <AnimatedBackground />
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -m-4 items-center">
            <div className="w-full lg:w-1/2 p-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10"
              >
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2 rounded-full mb-6"
                >
                  <motion.span 
                    className="text-sm font-semibold text-white flex items-center gap-2"
                    animate={{ 
                      backgroundColor: ["rgba(147,51,234,0.2)", "rgba(59,130,246,0.2)"],
                      transition: { duration: 2, repeat: Infinity, repeatType: "reverse" }
                    }}
                  >
                    <Circle className="w-3 h-3 fill-current animate-pulse" />
                    AI-Powered Consultation
                  </motion.span>
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="font-heading text-5xl md:text-6xl font-bold mb-6 text-white leading-tight"
                >
                  Transform Your Vision with{" "}
                  <span className="relative">
                    <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                      AI-Enhanced
                    </span>
                    <motion.span
                      className="absolute inset-x-0 bottom-0 h-3 bg-purple-500/20 -z-10"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.8, duration: 0.6 }}
                    />
                  </span>{" "}
                  App Development
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-gray-300 max-w-md text-lg leading-relaxed"
                >
                  Experience the future of app development with our AI-powered consultation process. 
                  We combine human expertise with artificial intelligence to create exceptional digital experiences.
                </motion.p>
              </motion.div>
            </div>

            <div className="w-full lg:w-1/2 p-4">
              <div className="flex flex-wrap -m-4">
                <AnimatePresence>
                  {consultationItems.map((item, index) => (
                    <ConsultationCard
                      key={index}
                      icon={item.icon}
                      title={item.title}
                      description={item.description}
                      delay={index * 0.1 + 0.5}
                    />
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookingSecond;