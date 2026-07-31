import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code, Check } from "lucide-react";
import LanyardCard from "./LanyardCard";
import { personalInfo } from "../data/portfolioData";

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const headlines = ["Mahasiswa PTI.", "Web Developer.", "Software Explorer."];
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    const currentHeadline = headlines[textIndex];

    if (!isDeleting && displayText === currentHeadline) {
      timeout = setTimeout(() => setIsDeleting(true), 1600);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % headlines.length);
    } else {
      const typingSpeed = isDeleting ? 40 : 80;
      timeout = setTimeout(() => {
        const targetText = isDeleting
          ? currentHeadline.substring(0, displayText.length - 1)
          : currentHeadline.substring(0, displayText.length + 1);
        setDisplayText(targetText);
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden"
    >
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center items-center lg:order-1"
          >
            <LanyardCard />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-7 flex flex-col justify-center text-left lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-300 w-fit mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>
                Pendidikan Teknologi Informasi • Universitas Brawijaya
              </span>
            </div>

            <p className="text-lg sm:text-xl font-medium text-zinc-400 mb-2">
              Halo, saya{" "}
              <span className="text-white font-semibold">
                {personalInfo.name}
              </span>
            </p>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 min-h-[1.2em]">
              <span>{displayText}</span>
              <span className="animate-pulse text-cyan-400 ml-1">|</span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed mb-8">
              Mahasiswa{" "}
              <strong className="text-zinc-200">
                Pendidikan Teknologi Informasi (UB)
              </strong>{" "}
              yang berfokus pada pengembangan aplikasi web modern, arsitektur
              perangkat lunak yang bersih, dan antarmuka interaktif yang
              responsif.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {[
                "React.js",
                "Tailwind CSS",
                "Framer Motion",
                "TypeScript",
                "Node.js",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 font-medium flex items-center gap-1.5"
                >
                  <Check size={12} className="text-cyan-400" />
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#portofolio"
                className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-semibold text-sm transition-all flex items-center gap-2 shadow-lg shadow-cyan-500/15"
              >
                <span>Lihat Portofolio</span>
                <ArrowRight size={16} />
              </a>

              <a
                href="#kontak"
                className="px-6 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 font-medium text-sm transition-all flex items-center gap-2"
              >
                <Code size={16} className="text-cyan-400" />
                <span>Hubungi Saya</span>
              </a>
            </div>

            <div className="pt-6 border-t border-zinc-800/80 grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white font-mono">
                  10+
                </div>
                <div className="text-xs text-zinc-400">Project Selesai</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white font-mono">
                  UB
                </div>
                <div className="text-xs text-zinc-400">Teknologi Informasi</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white font-mono">
                  100%
                </div>
                <div className="text-xs text-zinc-400">Clean Code Passion</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
