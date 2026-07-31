import React from "react";
import { SiReact, SiTailwindcss } from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { personalInfo } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/80 bg-zinc-950 pt-16 pb-12 relative z-10 text-zinc-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-zinc-800/60">
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-cyan-400 shadow-md hover:scale-105 transition-transform">
                <SiReact size={22} />
              </div>
              <div className="w-11 h-11 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-blue-400 shadow-md hover:scale-105 transition-transform">
                <VscCode size={22} />
              </div>
              <div className="w-11 h-11 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-teal-400 shadow-md hover:scale-105 transition-transform">
                <SiTailwindcss size={22} />
              </div>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              Berfokus pada React.js, mahir Tailwind CSS, dan terbiasa dengan VS Code — menghasilkan solusi aplikasi web yang modern, rapi, dan profesional.
            </p>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="space-y-3">
              <h4 className="text-white font-bold text-base mb-4">About</h4>
              <ul className="space-y-2.5 text-xs text-zinc-400">
                <li>
                  <a href="#home" className="hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#portofolio" className="hover:text-white transition-colors">
                    Portofolio
                  </a>
                </li>
                <li>
                  <a href="#tentang" className="hover:text-white transition-colors">
                    Tentang
                  </a>
                </li>
                <li>
                  <a href="#kontak" className="hover:text-white transition-colors">
                    Testimoni
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-white font-bold text-base mb-4">Services</h4>
              <ul className="space-y-2.5 text-xs text-zinc-400">
                <li>
                  <span className="hover:text-white transition-colors">
                    Fullstack Web Dev
                  </span>
                </li>
                <li>
                  <span className="hover:text-white transition-colors">
                    Frontend Slicing
                  </span>
                </li>
                <li>
                  <span className="hover:text-white transition-colors">
                    Laravel & API Integration
                  </span>
                </li>
                <li>
                  <span className="hover:text-zinc-400 italic">
                    Custom Web Solutions
                  </span>
                </li>
              </ul>
            </div>

            <div className="space-y-3 col-span-2 sm:col-span-1">
              <h4 className="text-white font-bold text-base mb-4">Social</h4>
              <ul className="space-y-2.5 text-xs text-zinc-400">
                <li>
                  <a
                    href={personalInfo.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href={personalInfo.socials.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href={personalInfo.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 text-center text-xs text-zinc-500">
          © {new Date().getFullYear()} Gilang Ardhi Maulana. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
