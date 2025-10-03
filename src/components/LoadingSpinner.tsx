import { motion } from 'framer-motion';
import React from 'react';

const spinnerVariants = {
  animate: {
    rotate: 360,
    transition: {
      repeat: Infinity,
      duration: 1.2,
      ease: 'linear',
    },
  },
};

const LoadingSpinner: React.FC<{ size?: number; color?: string }> = ({ size = 48, color = '#FFE066' }) => (
  <motion.div
    variants={spinnerVariants}
    animate="animate"
    style={{
      width: size,
      height: size,
      border: `4px solid ${color}`,
      borderTop: `4px solid transparent`,
      borderRadius: '50%',
      boxShadow: `0 0 24px ${color}`,
      margin: 'auto',
      background: 'none',
    }}
    aria-label="Loading..."
    role="status"
  />
);

export default LoadingSpinner;
