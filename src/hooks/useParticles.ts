import { useEffect, useRef } from 'react';

export const useParticles = (count: number = 50) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Create particles
    const particles: Particle[] = [];
    const colors = ['#00E5FF', '#FFFFFF', '#0A2540'];

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: Math.random() * 1 - 0.5,
        speedY: Math.random() * 1 - 0.5,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    // Animation loop
    let animationFrameId: number;

    const animate = () => {
      if (!ctx) return;

      // Clear canvas with a semi-transparent background for trail effect
      ctx.fillStyle = 'rgba(26, 26, 26, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach(particle => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Boundary check - wrap around
        if (particle.x > canvas.width) particle.x = 0;
        else if (particle.x < 0) particle.x = canvas.width;

        if (particle.y > canvas.height) particle.y = 0;
        else if (particle.y < 0) particle.y = canvas.height;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (canvas) {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [count]);

  return canvasRef;
};

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
}