import React from 'react';
import { Heart } from 'lucide-react';
import { InstagramIcon, GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 rounded-lg bg-cyan-500 flex items-center justify-center font-bold text-sm text-zinc-950">
                L
              </div>
              <span className="font-bold text-lg tracking-tight text-white">
                Lamski<span className="text-cyan-400">.dev</span>
              </span>
            </div>
            <p className="text-xs text-zinc-400">
              Portofolio Mahasiswa RPL / PTI • React & Framer Motion
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-zinc-400">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#portofolio" className="hover:text-white transition-colors">Portofolio</a>
            <a href="#tentang" className="hover:text-white transition-colors">Tentang</a>
            <a href="#kontak" className="hover:text-white transition-colors">Kontak</a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
              aria-label="Instagram @gln.hooks"
            >
              <InstagramIcon size={16} />
            </a>
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={16} />
            </a>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-zinc-900 text-center text-xs text-zinc-500 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} Gilang. All rights reserved.</span>
          <span className="flex items-center gap-1">
            Dibuat dengan <Heart size={12} className="text-cyan-400 fill-cyan-400 inline" /> untuk Developer Portfolio
          </span>
        </div>
      </div>
    </footer>
  );
}
