import { motion } from 'framer-motion';
import { useCallback } from 'react';

export const AnimatedBackground = () => {
  const generateParticle = useCallback((index: number) => {
    const width = Math.random() * 300 + 50;
    return {
      width,
      height: width,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: Math.random() * 5 + 5,
      offset: Math.random() * 2 * Math.PI,
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-10" />
      {[...Array(20)].map((_, i) => {
        const particle = generateParticle(i);
        return (
          <motion.div
            key={i}
            className="absolute bg-blue-500/10 rounded-full"
            style={{
              width: particle.width,
              height: particle.height,
              left: particle.left,
              top: particle.top,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.offset,
            }}
          />
        );
      })}
    </div>
  );
};