import React from "react";
import { motion } from "framer-motion";
import { User, GraduationCap, Cpu, Sparkles, Code } from "lucide-react";
import { personalInfo, skills, timeline } from "../data/portfolioData";

export default function About() {
  return (
    <section
      id="tentang"
      className="py-24 relative z-10 bg-zinc-950/60 border-y border-zinc-800/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-300 mb-4">
            <User size={14} className="text-cyan-400" />
            <span>Profil & Pengalaman</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Tentang Saya
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Mahasiswa Pendidikan Teknologi Informasi (PTI) dengan minat tinggi pada
            arsitektur web modern, performa antarmuka, dan kualitas perangkat
            lunak.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-6 sm:p-8 rounded-2xl border border-zinc-800"
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Code className="text-cyan-400" size={20} />
                <span>Latar Belakang</span>
              </h3>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-4">
                {personalInfo.bio}
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Fokus utama saya mencakup pengembangan front-end interaktif
                menggunakan{" "}
                <strong className="text-zinc-200">
                  React.js & Tailwind CSS
                </strong>
                , dasar-dasar back-end, serta pemodelan sistem informasi.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="glass-card p-6 sm:p-8 rounded-2xl border border-zinc-800"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Cpu className="text-cyan-400" size={20} />
                <span>Teknologi & Keahlian</span>
              </h3>

              <div className="mb-6">
                <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3">
                  Bahasa Pemrograman
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((lang) => (
                    <div
                      key={lang.name}
                      className="px-3.5 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-200 flex items-center gap-2"
                    >
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: lang.color }}
                      />
                      <span className="font-semibold">{lang.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3">
                  Frontend & Framework
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((item) => (
                    <div
                      key={item.name}
                      className="px-3.5 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-200 flex items-center gap-2"
                    >
                      <Sparkles size={13} className="text-cyan-400" />
                      <span className="font-semibold">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3">
                  Backend, Database & Dev Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.backendTools.map((tool) => (
                    <div
                      key={tool.name}
                      className="px-3 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-300"
                    >
                      <span>{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-zinc-800">
              <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
                <GraduationCap className="text-cyan-400" size={22} />
                <span>Pengalaman & Edukasi</span>
              </h3>

              <div className="relative border-l border-zinc-800 pl-6 space-y-8 ml-2">
                {timeline.map((item, idx) => (
                  <div key={idx} className="relative group">
                    <div className="absolute -left-[30px] top-1.5 w-3.5 h-3.5 rounded-full bg-zinc-900 border-2 border-cyan-400 group-hover:bg-cyan-400 transition-colors" />

                    <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-semibold bg-zinc-900 text-cyan-400 border border-zinc-800 mb-1">
                      {item.year}
                    </span>

                    <h4 className="text-base font-bold text-white">
                      {item.title}
                    </h4>
                    <p className="text-xs text-zinc-400 mb-2">
                      {item.institution}
                    </p>

                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
