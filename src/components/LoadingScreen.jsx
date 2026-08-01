import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState("progress");

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setStage("logo");
          }, 80);
          return 100;
        }
        const increment = Math.floor(Math.random() * 20) + 15;
        return Math.min(prev + increment, 100);
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (stage === "logo") {
      const logoTimer = setTimeout(() => {
        setStage("complete");
        onComplete();
      }, 450);

      return () => clearTimeout(logoTimer);
    }
  }, [stage, onComplete]);

  const smoothTransition = {
    type: "spring",
    stiffness: 120,
    damping: 18,
    mass: 0.8,
  };

  return (
    <AnimatePresence>
      {stage !== "complete" && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98, filter: "blur(6px)" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-zinc-950 text-white overflow-hidden pointer-events-none"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          {stage === "progress" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96, y: -10 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center gap-4 w-72 max-w-[85vw]"
            >
              <div className="text-4xl font-extrabold tracking-tight text-white font-mono">
                {progress}%
              </div>
              <div className="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800 shadow-inner">
                <motion.div
                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.3 }}
                />
              </div>
            </motion.div>
          )}

          {stage === "logo" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 1 }}
              transition={smoothTransition}
              className="flex flex-col items-center justify-center select-none"
            >
              <motion.div
                layoutId="navbar-logo"
                transition={smoothTransition}
                className="flex items-center gap-2.5 px-5 py-2.5 rounded-2xl bg-zinc-900/90 border border-zinc-800 shadow-2xl backdrop-blur-md"
              >
                <div className="w-9 h-9 rounded-xl bg-cyan-500 flex items-center justify-center font-extrabold text-xl text-zinc-950 shadow-md">
                  L
                </div>
                <span className="font-extrabold text-2xl tracking-tight text-white">
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
