import { useState, useEffect } from 'react';
import './ScrollProgress.css';
export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const calculateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollableHeight = documentHeight - windowHeight;

      const progress =
        scrollableHeight > 0
          ? Math.min((scrollTop / scrollableHeight) * 100, 100)
          : 0;

      setScrollProgress(progress);
    };

    window.addEventListener('scroll', calculateScrollProgress, {
      passive: true,
    });
    window.addEventListener('resize', calculateScrollProgress, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', calculateScrollProgress);
      window.removeEventListener('resize', calculateScrollProgress);
    };
  }, []);

  return (
    <div
      className="progress-bar"
      style={{
        width: `${scrollProgress}%`,
      }}
    />
  );
}
