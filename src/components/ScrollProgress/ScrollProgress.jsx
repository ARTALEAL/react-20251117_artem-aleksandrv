import { useState, useEffect } from 'react';
import './ScrollProgress.css';
export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

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

  useEffect(() => {
    const handleScroll = () => {
      calculateScrollProgress();
    };

    const handleResize = () => {
      calculateScrollProgress();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className="progress-bar"
      style={{
        width: `${scrollProgress}%`,
      }}
    ></div>
  );
}
