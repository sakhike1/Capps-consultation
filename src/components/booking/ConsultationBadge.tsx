import { motion } from 'framer-motion';

export const ConsultationBadge = () => {
  return (
    <motion.div
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 rounded-full mb-6"
    >
      <span className="text-sm font-semibold text-white">AI-Powered Consultation</span>
    </motion.div>
  );
};