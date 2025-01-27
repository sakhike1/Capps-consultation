import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code2, Rocket, Globe, ArrowRight, Sparkles } from 'lucide-react';

const floatingIconVariants = {
  initial: { opacity: 0, scale: 0.5 },
  animate: {
    opacity: [0.5, 1, 0.5],
    scale: [1, 1.2, 1],
    rotate: [0, 10, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const buttonHoverVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.1
    }
  }
};

const WebDevConsultationSection = () => {
  return (
    <section className="relative py-8 sm:py-12 md:py-16 bg-gradient-to-br from-white via-gray-50 to-blue-50 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-56 h-56 sm:w-64 sm:h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-20 right-10 w-56 h-56 sm:w-64 sm:h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-4 left-20 w-56 h-56 sm:w-64 sm:h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      {/* Floating Icons */}
      <motion.div
        variants={floatingIconVariants}
        initial="initial"
        animate="animate"
        className="hidden lg:block absolute top-16 left-20 text-blue-500"
      >
        <Code2 size={32} />
      </motion.div>

      <motion.div
        variants={floatingIconVariants}
        initial="initial"
        animate="animate"
        className="hidden lg:block absolute top-24 right-32 text-purple-500"
      >
        <Globe size={32} />
      </motion.div>

      <motion.div
        variants={floatingIconVariants}
        initial="initial"
        animate="animate"
        className="hidden lg:block absolute bottom-16 left-1/4 text-pink-500"
      >
        <Rocket size={32} />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm mb-4 sm:mb-6"
          >
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Transforming Ideas into Digital Reality
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-900 bg-clip-text text-transparent"
          >
            Maximize Your Online Presence Every Day
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-base lg:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed"
          >
            Our tailored web development solutions ensure seamless digital experiences, 
            helping you build a captivating brand that resonates with your audience. 
            We integrate cutting-edge technologies to give you the edge you need.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/about" className="w-full sm:w-auto">
              <motion.button
                variants={buttonHoverVariants}
                whileHover="hover"
                whileTap="tap"
                className="group relative w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-medium shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <span className="relative flex items-center justify-center gap-2 text-white">
                  Learn More
                  <motion.span
                    className="inline-block"
                    animate={{ x: [0, 2, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.span>
                </span>
              </motion.button>
            </Link>
            
            <Link to="/book-consultation" className="w-full sm:w-auto">
              <motion.button
                variants={buttonHoverVariants}
                whileHover="hover"
                whileTap="tap"
                className="group relative w-full sm:w-auto px-6 py-3 rounded-full font-medium border border-gray-200 transition-all duration-300 overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-300 via-pink-100 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <span className="relative bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-purple-700 transition-all duration-300">
                  Get Started
                </span>
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WebDevConsultationSection;