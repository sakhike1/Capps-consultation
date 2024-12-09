import { motion } from "framer-motion";
import { Brain, Code, MessageSquare, Sparkles } from "lucide-react";
import { AnimatedBackground } from "./AnimatedBackground";
import { ConsultationCard } from "./ConsultationCard";

const BookingSecond = () => {
  const consultationItems = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Analysis",
      description: "Leverage cutting-edge AI to analyze and optimize your app's user experience.",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Technical Excellence",
      description: "Expert development with modern frameworks and best practices.",
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Collaborative Design",
      description: "Work directly with our UI/UX experts to perfect your vision.",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Innovation Focus",
      description: "Stay ahead with emerging technologies and innovative solutions.",
    },
  ];

  return (
    <div className="relative">
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
                  transition={{ duration: 0.5 }}
                  className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 rounded-full mb-6"
                >
                  <span className="text-sm font-semibold text-white">AI-Powered Consultation</span>
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="font-heading text-5xl font-bold mb-6 text-white leading-tight"
                >
                  Transform Your Vision with{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    AI-Enhanced
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
                {consultationItems.map((item, index) => (
                  <ConsultationCard
                    key={index}
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                    delay={index * 0.1 + 0.5}
                  />
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