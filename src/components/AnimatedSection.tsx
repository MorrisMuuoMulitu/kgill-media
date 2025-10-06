import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animationType?: 'fade' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'scale';
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  className = '',
  delay = 0,
  animationType = 'fade'
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const getAnimationVariants = () => {
    switch (animationType) {
      case 'slide-up':
        return {
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { delay, duration: 0.6, ease: "easeOut" } }
        };
      case 'slide-down':
        return {
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0, transition: { delay, duration: 0.6, ease: "easeOut" } }
        };
      case 'slide-left':
        return {
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0, transition: { delay, duration: 0.6, ease: "easeOut" } }
        };
      case 'slide-right':
        return {
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0, transition: { delay, duration: 0.6, ease: "easeOut" } }
        };
      case 'scale':
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1, transition: { delay, duration: 0.6, ease: "easeOut" } }
        };
      case 'fade':
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { delay, duration: 0.6, ease: "easeOut" } }
        };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={getAnimationVariants()}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;