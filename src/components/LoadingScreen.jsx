import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState('progress'); // 'progress' | 'logo' | 'complete'

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setStage('logo');
          }, 200);
          return 100;
        }
        const increment = Math.floor(Math.random() * 15) + 8;
        return Math.min(prev + increment, 100);
      });
    }, 70);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (stage === 'logo') {
      const logoTimer = setTimeout(() => {
        setStage('complete');
        onComplete();
      }, 1000);

      return () => clearTimeout(logoTimer);
    }
  }, [stage, onComplete]);

  return (
    <AnimatePresence>
      {stage !== 'complete' && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-zinc-950 text-white overflow-hidden"
        >
          {/* Ambient subtle light */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* STAGE 1: PROGRESS BAR */}
          {stage === 'progress' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center gap-4 w-72 max-w-[85vw]"
            >
              {/* Progress Percentage */}
              <div className="text-4xl font-extrabold tracking-tight text-white">
                {progress}%
              </div>

              {/* Progress Bar Container */}
              <div className="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800">
                <motion.div
                  className="h-full bg-cyan-400 rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: 'easeOut' }}
                />
              </div>
            </motion.div>
          )}

          {/* STAGE 2: CENTER LOGO REVEAL */}
          {stage === 'logo' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1.05 }}
              exit={{ opacity: 1 }}
              transition={{ duration: 0.5, type: 'spring', stiffness: 140 }}
              className="flex flex-col items-center justify-center select-none"
            >
              <motion.div
                layoutId="navbar-logo"
                transition={{ duration: 0.7, type: 'spring', bounce: 0.15 }}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800"
              >
                <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center font-bold text-lg text-zinc-950">
                  L
                </div>
                <span className="font-bold text-xl tracking-tight text-white">
                  Lamski<span className="text-cyan-400">.dev</span>
                </span>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
