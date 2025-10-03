import { motion, AnimatePresence } from 'framer-motion';
import { easeInOut } from 'framer-motion';
import React from 'react';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easeInOut,
    },
  },
  exit: {
    opacity: 0,
    y: -30,
    transition: {
      duration: 0.5,
      ease: easeInOut,
    },
  },
};

const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <AnimatePresence mode="wait">
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ width: '100%' }}
    >
      {children}
    </motion.div>
  </AnimatePresence>
);

export default PageTransition;
