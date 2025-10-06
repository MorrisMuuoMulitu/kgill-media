import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, AnimationProps } from 'framer-motion';

interface ComponentInViewProps {
  children: React.ReactNode;
  className?: string;
  animation?: AnimationProps['animate'];
  initial?: AnimationProps['initial'];
  transition?: AnimationProps['transition'];
  once?: boolean; // Whether to animate only once or on every view
  threshold?: number; // Intersection observer threshold
  rootMargin?: string; // Intersection observer root margin
}

const ComponentInView: React.FC<ComponentInViewProps> = ({ 
  children, 
  className = '',
  animation = { opacity: 1, y: 0 },
  initial = { opacity: 0, y: 50 },
  transition = { duration: 0.6, ease: "easeOut" },
  once = true,
  threshold = 0.1,
  rootMargin = "0px"
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start(animation);
          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          controls.start(initial);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    // Cleanup
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [controls, initial, animation, once, threshold, rootMargin]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={controls}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default ComponentInView;