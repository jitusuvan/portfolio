import { useState, useEffect } from 'react';

export const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      try {
        const scrollTop = Math.max(0, window.scrollY || 0);
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        
        if (docHeight <= 0) {
          setProgress(0);
          return;
        }
        
        const scrollPercent = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100));
        setProgress(scrollPercent);
      } catch (error) {
        setProgress(0);
      }
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
    
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return progress;
};