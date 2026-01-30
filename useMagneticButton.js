
import { useEffect } from 'react';

export const useMagneticButton = (ref, { magneticRange = 100, strength = 0.3 } = {}) => {
  useEffect(() => {
    // Disable magnetic effect on touch devices or screens that don't support hover
    if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) {
      return;
    }

    const element = ref.current;
    if (!element) return;

    let mouseX = 0;
    let mouseY = 0;
    let rafId;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      if (!element) return;
      
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate distance from mouse to center of button
      const dist = Math.hypot(mouseX - centerX, mouseY - centerY);

      if (dist < magneticRange) {
        element.classList.add('magnetic-button-active');
        
        // Calculate pull
        const x = (mouseX - centerX) * strength;
        const y = (mouseY - centerY) * strength;
        
        element.style.transform = `translate(${x}px, ${y}px)`;
      } else {
        element.classList.remove('magnetic-button-active');
        element.style.transform = 'translate(0, 0)';
      }

      rafId = requestAnimationFrame(animate);
    };

    // Add listeners
    window.addEventListener('mousemove', handleMouseMove);
    rafId = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
      if (element) {
        element.style.transform = '';
        element.classList.remove('magnetic-button-active');
      }
    };
  }, [ref, magneticRange, strength]);
};
