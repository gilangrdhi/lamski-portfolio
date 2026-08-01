import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Eye,
  FolderGit2,
  Globe,
  Sparkles,
} from "lucide-react";
import { GithubIcon } from "./Icons";
import { projects, projectCategories } from "../data/portfolioData";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const filteredProjects =
    selectedCategory === "Semua"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setCurrentIndex(0);
    setDirection(0);
  };

  const safeIndex = Math.min(
    currentIndex,
    Math.max(0, filteredProjects.length - 1),
  );
  const currentProject = filteredProjects[safeIndex] || projects[0];
  const nextProject =
    filteredProjects.length > 1
      ? filteredProjects[(safeIndex + 1) % filteredProjects.length]
      : null;

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev === 0 ? filteredProjects.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) =>
      prev === filteredProjects.length - 1 ? 0 : prev + 1,
    );
  };

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 60 : dir < 0 ? -60 : 0,
      opacity: 0,
      scale: 0.96,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir) => ({
      x: dir < 0 ? 60 : dir > 0 ? -60 : 0,
      opacity: 0,
      scale: 0.96,
    }),
  };

  return (
    <section id="portofolio" className="py-24 relative z-10 overflow-hidden">
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-semibold text-cyan-400 mb-4 shadow-sm">
            <FolderGit2 size={14} />
            <span>Showcase Karya & Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4">
            Portofolio Project
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Kumpulan aplikasi web, aplikasi mobile, serta eksperimen perangkat
            lunak yang telah saya bangun.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-12"
        >
          {projectCategories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 border ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-zinc-950 border-cyan-400 shadow-lg shadow-cyan-500/25 scale-105"
                    : "bg-zinc-900/80 text-zinc-400 border-zinc-800 hover:text-white hover:border-zinc-700 hover:bg-zinc-800"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </motion.div>

        {filteredProjects.length > 0 && (
          <div className="relative max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              <div className="lg:col-span-6 order-1">
                <div className="perspective-1000">
                  <motion.div
                    className="relative rounded-2xl bg-zinc-950 border border-zinc-800/90 shadow-2xl shadow-cyan-500/10 overflow-hidden transform transition-all duration-500 hover:scale-[1.02]"
                    style={{
                      transform:
                        "perspective(1000px) rotateY(-6deg) rotateX(3deg)",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <div className="px-4 py-3 bg-zinc-900/90 border-b border-zinc-800/80 flex items-center justify-between gap-3 backdrop-blur-md">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/90 shadow-sm" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/90 shadow-sm" />
                        <div className="w-3 h-3 rounded-full bg-green-500/90 shadow-sm" />
                      </div>

                      <div className="flex-1 max-w-[260px] mx-auto bg-zinc-950/80 border border-zinc-800/90 rounded-full px-3 py-1 flex items-center gap-2 text-[11px] font-mono text-zinc-400 overflow-hidden shadow-inner">
                        <Globe size={12} className="text-cyan-400 shrink-0" />
                        <span className="truncate">
                          https://
                          {currentProject.title
                            .toLowerCase()
                            .replace(/[^a-z0-9]/g, "")}
                          .lamski.dev
                        </span>
                      </div>

                      <div className="w-12 text-right">
                        <span className="text-[10px] font-mono text-zinc-500 px-2 py-0.5 rounded bg-zinc-800/60">
                          3D
                        </span>
                      </div>
                    </div>

                    <div className="relative aspect-[16/10] w-full bg-zinc-950 overflow-hidden">
                      <AnimatePresence mode="wait" custom={direction}>
                        <motion.img
                          key={currentProject.id}
                          custom={direction}
                          variants={slideVariants}
                          initial="enter"
                          animate="center"
                          exit="exit"
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          src={currentProject.image}
                          alt={currentProject.title}
                          className="w-full h-full object-cover"
                        />
                      </AnimatePresence>

                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60 pointer-events-none" />

                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                        <span className="px-3 py-1 rounded-lg bg-zinc-950/85 border border-zinc-800 text-cyan-300 text-xs font-mono font-semibold backdrop-blur-md shadow-md">
                          {currentProject.category}
                        </span>
                        {currentProject.featured && (
                          <span className="px-2.5 py-1 rounded-lg bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-semibold backdrop-blur-md flex items-center gap-1">
                            <Sparkles size={12} />
                            Featured
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              <div className="lg:col-span-6 order-2 relative">
                {filteredProjects.length > 1 && (
                  <div className="absolute inset-0 translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 rounded-3xl bg-zinc-900/60 border border-zinc-800/60 rotate-2 pointer-events-none -z-10 shadow-xl overflow-hidden">
                    {nextProject && (
                      <div className="p-6 opacity-30 blur-[1px]">
                        <span className="text-xs font-mono text-cyan-400">
                          {nextProject.category}
                        </span>
                        <h4 className="text-lg font-bold text-white mt-1 truncate">
                          {nextProject.title}
                        </h4>
                      </div>
                    )}
                  </div>
                )}

                <div className="relative rounded-3xl bg-gradient-to-br from-zinc-900/95 via-zinc-900/90 to-zinc-950/95 border border-zinc-800/90 p-6 sm:p-8 shadow-2xl backdrop-blur-xl min-h-[440px] flex flex-col justify-between">
                  <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                      key={currentProject.id}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="flex-1 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-4 mb-4">
                          <span className="px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-bold tracking-wide">
                            {currentProject.category}
                          </span>
                          <span className="text-xs font-mono font-bold text-zinc-500 tracking-widest bg-zinc-950/60 px-3 py-1 rounded-full border border-zinc-800">
                            {String(safeIndex + 1).padStart(2, "0")} /{" "}
                            {String(filteredProjects.length).padStart(2, "0")}
                          </span>
                        </div>

                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-3 leading-tight">
                          {currentProject.title}
                        </h3>
                        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
                          {currentProject.description}
                        </p>

                        {currentProject.highlights && (
                          <div className="mb-6 space-y-2">
                            <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block font-semibold">
                              Fitur Utama:
                            </span>
                            <div className="flex flex-wrap gap-2">
                              {currentProject.highlights.map((h, i) => (
                                <span
                                  key={i}
                                  className="text-xs text-zinc-300 bg-zinc-800/70 border border-zinc-700/60 px-2.5 py-1 rounded-md flex items-center gap-1.5"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                                  {h}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      <div>
                        <div className="mb-6">
                          <div className="flex flex-wrap gap-1.5">
                            {currentProject.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1 rounded-md bg-zinc-950 border border-zinc-800 text-zinc-400 text-xs font-mono font-medium"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-zinc-800/80">
                          <button
                            onClick={() => setSelectedProject(currentProject)}
                            className="flex-1 py-3 px-5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-zinc-950 font-extrabold text-xs sm:text-sm transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:scale-[1.02] flex items-center justify-center gap-2"
                          >
                            <Eye size={16} />
                            <span>Lihat Detail</span>
                          </button>
                          <a
                            href={currentProject.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white transition-all border border-zinc-700/80 hover:scale-105"
                            title="Source Code"
                          >
                            <GithubIcon size={18} />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-10 px-2">
              <div className="flex items-center gap-3 order-2 sm:order-1">
                <button
                  onClick={handlePrev}
                  className="w-12 h-12 rounded-full bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700/80 text-white flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all backdrop-blur-md hover:border-cyan-500/50 hover:text-cyan-400 group"
                  aria-label="Previous Project"
                >
                  <ChevronLeft
                    size={22}
                    className="group-hover:-translate-x-0.5 transition-transform"
                  />
                </button>
                <button
                  onClick={handleNext}
                  className="w-12 h-12 rounded-full bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700/80 text-white flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all backdrop-blur-md hover:border-cyan-500/50 hover:text-cyan-400 group"
                  aria-label="Next Project"
                >
                  <ChevronRight
                    size={22}
                    className="group-hover:translate-x-0.5 transition-transform"
                  />
                </button>
              </div>

              <div className="flex items-center gap-2 order-1 sm:order-2">
                {filteredProjects.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setDirection(idx > safeIndex ? 1 : -1);
                      setCurrentIndex(idx);
                    }}
                    className={`transition-all duration-300 ${
                      idx === safeIndex
                        ? "w-8 h-2.5 rounded-full bg-cyan-400 shadow-md shadow-cyan-500/50"
                        : "w-2.5 h-2.5 rounded-full bg-zinc-700 hover:bg-zinc-500"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
