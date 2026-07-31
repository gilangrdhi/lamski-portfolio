import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, CheckCircle, Layers, Sparkles } from "lucide-react";
import { GithubIcon } from "./Icons";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-zinc-950/80 backdrop-blur-md -z-10"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl bg-zinc-900 border border-zinc-700/80 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden glow-cyan"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors"
          >
            <X size={20} />
          </button>

          <div className="relative w-full h-56 sm:h-64 rounded-xl overflow-hidden mb-6 border border-zinc-800">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-80" />
            <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-semibold backdrop-blur-md">
              {project.category}
            </div>
          </div>

          <h3 className="text-2xl font-bold text-white mb-2 font-mono">
            {project.title}
          </h3>
          <p className="text-zinc-300 text-sm leading-relaxed mb-6">
            {project.description}
          </p>

          {project.highlights && (
            <div className="mb-6">
              <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Sparkles size={14} />
                Fitur Utama Project:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {project.highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-zinc-800/80 border border-zinc-700/50 text-xs text-zinc-200 flex items-center gap-2"
                  >
                    <CheckCircle size={14} className="text-cyan-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mb-8">
            <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Layers size={14} />
              Tech Stack:
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 pt-4 border-t border-zinc-800">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-medium text-sm transition-all flex items-center gap-2"
            >
              <GithubIcon size={18} />
              <span>Source Code</span>
            </a>
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-zinc-950 font-bold text-sm transition-all flex items-center gap-2 shadow-md shadow-cyan-500/20"
            >
              <span>Live Demo</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
