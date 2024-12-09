import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ConsultationCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay: number;
}

export const ConsultationCard = ({ icon, title, description, delay }: ConsultationCardProps) => {
  return (
    <motion.div
      className="w-full lg:w-1/2 p-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
    >
      <div className="relative bg-white/80 backdrop-blur-sm shadow-lg rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-white/20">
        <div className="absolute -top-3 -left-3 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white shadow-lg">
          {icon}
        </div>
        <div className="ml-12 pt-2">
          <h2 className="text-xl font-bold text-gray-800 mb-3">{title}</h2>
          <p className="text-gray-600">{description}</p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 hover:opacity-100 rounded-xl transition-opacity duration-300" />
      </div>
    </motion.div>
  );
};