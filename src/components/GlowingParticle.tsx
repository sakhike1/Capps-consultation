import { motion } from 'framer-motion';
import PropTypes from 'prop-types';


const GlowingParticle = ({
    size = 4,
    color = 'rgba(255, 255, 255, 0.5)',
    delay = 0,
    className = '',
    style,
}) => {
    const particleAnimation = {
        scale: [1, 1.5, 1],
        opacity: [0.3, 0.7, 0.3],
        transition: {
            duration: 3,
            repeat: Infinity,
            delay,
        },
    };

    return (
        <motion.div
            animate={particleAnimation}
            className={`rounded-full ${className}`}
            style={{
                width: size,
                height: size,
                backgroundColor: color,
                boxShadow: `0 0 ${size * 2}px ${color}`,
                ...style,
            }}
        />
    );
};

GlowingParticle.propTypes = {
    size: PropTypes.number,
    color: PropTypes.string,
    delay: PropTypes.number,
    className: PropTypes.string,
    style: PropTypes.object,
};

export default GlowingParticle;