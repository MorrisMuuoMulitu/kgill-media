import React, { useState, useEffect } from 'react';

interface CounterAnimationProps {
  target: number;
  duration?: number;
  suffix?: string;
}

const CounterAnimation: React.FC<CounterAnimationProps> = ({ 
  target, 
  duration = 2000, 
  suffix = '' 
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const increment = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration]);

  return (
    <div className="text-4xl md:text-5xl font-bold font-montserrat text-transparent bg-clip-text bg-gradient-to-r from-marigold to-terracotta">
      {count}{suffix}
    </div>
  );
};

export default CounterAnimation;