import { motion } from 'framer-motion';
import PropTypes from 'prop-types';


const FloatingElement = ({
    children,
    delay = 0,
    duration = 3,
    className = '',
}) => {
    const floatingAnimation = {
        y: ['-10%', '10%'],
        transition: {
            duration,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
            delay,
        },
    };

    return (
        <motion.div
            animate={floatingAnimation}
            className={className}
        >
            {children}
        </motion.div>
    );
};

FloatingElement.propTypes = {
    children: PropTypes.node.isRequired,
    delay: PropTypes.number,
    duration: PropTypes.number,
    className: PropTypes.string,
};

export default FloatingElement;