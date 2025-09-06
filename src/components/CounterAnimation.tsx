import React, { useState, useEffect } from 'react';

interface CounterAnimationProps {
  target: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

const CounterAnimation: React.FC<CounterAnimationProps> = ({ 
  target, 
  duration = 2000, 
  suffix = '', 
  prefix = ''
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start: number | null = null;
    const increment = target / (duration / 16);
    
    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      
      if (progress < duration) {
        setCount(Math.min(increment * (progress / 16), target));
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };
    
    requestAnimationFrame(animate);
  }, [target, duration]);

  return (
    <div className="text-4xl md:text-5xl font-bold font-montserrat gradient-text tilt-3d">
      {prefix}
      {Math.floor(count).toLocaleString()}
      {suffix}
    </div>
  );
};

export default CounterAnimation;