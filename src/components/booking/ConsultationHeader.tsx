import { motion } from 'framer-motion';
import { ConsultationBadge } from './ConsultationBadge';

export const ConsultationHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-10"
    >
      <ConsultationBadge />
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
  );
};