import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Indicadores animados que muestran el progreso del scroll y sugieren interacción
const ScrollIndicators = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const total = scrollHeight - clientHeight;
      const current = total ? scrollTop / total : 0;
      setProgress(Math.min(Math.max(current, 0), 1));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed bottom-8 left-1/2 hidden -translate-x-1/2 transform sm:flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-slate-400">
      <span>Desplaza</span>
      <motion.span
        className="h-[2px] w-24 bg-slate-700"
        style={{
          background: 'linear-gradient(90deg, rgba(34,211,238,0.9), rgba(99,102,241,0.9))'
        }}
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: progress }}
      />
    </div>
  );
};

export default ScrollIndicators;