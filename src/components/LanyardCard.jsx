import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import gilangPhoto from '../assets/gilang.jpg';
import ubLogo from '../assets/logo-ub.png';

export default function LanyardCard() {
  const containerRef = useRef(null);

  // Motion values for real-time card drag position
  const cardX = useMotionValue(0);
  const cardY = useMotionValue(0);

  // SVG coordinate dimensions
  const svgWidth = 320;
  const anchorX = 160; // Fixed top hook hanging point
  const anchorY = 0;   // Top of canvas
  const restY = 95;    // Resting Y attachment point

  // Dynamic Bezier Rope curve calculated real-time as the card moves or bounces!
  const ropePath = useTransform([cardX, cardY], ([latestX, latestY]) => {
    const endX = anchorX + latestX;
    const endY = restY + latestY;
    
    // Natural gravity sag & sway dynamics
    const controlX = anchorX + latestX * 0.5;
    const controlY = anchorY + (endY - anchorY) * 0.5 + Math.abs(latestX) * 0.18;

    return `M ${anchorX} ${anchorY} Q ${controlX} ${controlY} ${endX} ${endY}`;
  });

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[340px] h-[460px] flex flex-col items-center justify-start select-none pt-2"
    >
      {/* Top Mount Hook / Hanger Base */}
      <div className="absolute top-0 z-10 w-12 h-2.5 bg-zinc-800 rounded-b-md border-b border-x border-zinc-700/80 shadow-md flex justify-center">
        <div className="w-4 h-4 rounded-full border-2 border-zinc-600 bg-zinc-950 -top-2.5 relative" />
      </div>

      {/* DYNAMIC REAL-TIME BOUNCY SVG LANYARD STRAP */}
      <svg
        className="absolute top-0 left-0 w-full h-[115px] pointer-events-none z-10 overflow-visible"
        viewBox={`0 0 ${svgWidth} ${restY + 20}`}
      >
        {/* Outer Rope Shadow */}
        <motion.path
          d={ropePath}
          fill="none"
          stroke="rgba(0, 0, 0, 0.45)"
          strokeWidth="10"
          strokeLinecap="round"
        />

        {/* Outer Canvas Lanyard Strap */}
        <motion.path
          d={ropePath}
          fill="none"
          stroke="#0891b2"
          strokeWidth="7"
          strokeLinecap="round"
        />

        {/* Inner Fabric Accent Line */}
        <motion.path
          d={ropePath}
          fill="none"
          stroke="#22d3ee"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="4 3"
        />
      </svg>

      {/* METAL SWIVEL HOOK ATTACHMENT */}
      <motion.div
        style={{ x: cardX, y: cardY }}
        transition={{ type: 'spring', stiffness: 180, damping: 9, mass: 1 }}
        className="absolute top-[82px] z-20 w-7 h-8 pointer-events-none flex flex-col items-center"
      >
        <div className="w-5 h-5 rounded-full border-2 border-zinc-400 bg-zinc-800 shadow-md flex items-center justify-center">
          <div className="w-2 h-2 bg-zinc-950 rounded-full" />
        </div>
        <div className="w-3.5 h-3 bg-gradient-to-b from-zinc-400 to-zinc-600 rounded-sm -mt-1 shadow-sm" />
      </motion.div>

      {/* DRAGGABLE PHYSICAL ID BADGE CARD (BOUNCY "TOENG-TOENG" SPRING PHYSICS) */}
      <motion.div
        drag
        dragConstraints={containerRef}
        dragElastic={0.3}
        dragSnapToOrigin={true}
        style={{ x: cardX, y: cardY }}
        whileDrag={{ cursor: 'grabbing', scale: 1.02 }}
        whileHover={{ scale: 1.01 }}
        // HIGHLY BOUNCY OVERSHOOT SPRING CONFIG (Damping: 9, Stiffness: 180, Mass: 1)
        transition={{
          type: 'spring',
          stiffness: 180,
          damping: 9,
          mass: 1,
          restDelta: 0.001
        }}
        className="absolute top-[100px] z-30 w-64 sm:w-72 rounded-2xl bg-zinc-900 border border-zinc-800/90 p-5 shadow-2xl shadow-black/80 cursor-grab flex flex-col items-center text-center transition-colors hover:border-zinc-700"
      >
        {/* Lanyard Hole Punch Slot */}
        <div className="w-9 h-1.5 bg-zinc-950 rounded-full mb-5 border border-zinc-800" />

        {/* Clean Portrait Profile Photo */}
        <div className="relative w-32 h-36 rounded-xl overflow-hidden border border-zinc-700/70 bg-zinc-950 shadow-inner mb-4 pointer-events-none">
          <img
            src={gilangPhoto}
            alt={personalInfo.name}
            draggable={false}
            className="w-full h-full object-cover object-top transition-transform duration-300 pointer-events-none select-none"
          />
        </div>

        {/* Student Identity Information */}
        <h3 className="text-xl font-bold text-white tracking-tight mb-1">
          {personalInfo.name}
        </h3>
        <p className="text-xs text-zinc-400 font-medium leading-relaxed mb-4 max-w-[220px]">
          Mahasiswa Pendidikan Teknologi Informasi
        </p>

        {/* Universitas Brawijaya Logo Footer */}
        <div className="w-full pt-3.5 border-t border-zinc-800/80 flex items-center justify-center gap-2.5 text-zinc-300">
          <img
            src={ubLogo}
            alt="Universitas Brawijaya Logo"
            draggable={false}
            className="h-6 w-auto object-contain shrink-0 filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] pointer-events-none select-none"
          />
          <span className="text-xs font-semibold tracking-wide text-zinc-200">
            Universitas Brawijaya
          </span>
        </div>
      </motion.div>
    </div>
  );
}
