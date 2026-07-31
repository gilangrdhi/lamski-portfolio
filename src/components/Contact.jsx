import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Send, Star, Check } from "lucide-react";
import { InstagramIcon, GithubIcon, LinkedinIcon } from "./Icons";
import confetti from "canvas-confetti";
import { personalInfo, testimonials } from "../data/portfolioData";

export default function Contact() {
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;

    setFormSent(true);

    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 },
      colors: ["#06b6d4", "#3b82f6", "#ffffff"],
    });

    setTimeout(() => {
      setFormSent(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  const contactOptions = [
    {
      name: "WhatsApp",
      handle: "+62 858-9572-8196",
      icon: MessageSquare,
      url: personalInfo.socials.whatsapp,
    },
    {
      name: "Email",
      handle: personalInfo.email,
      icon: Mail,
      url: `mailto:${personalInfo.email}`,
    },
    {
      name: "Instagram",
      handle: "@gln.hooks",
      icon: InstagramIcon,
      url: personalInfo.socials.instagram,
    },
    {
      name: "GitHub",
      handle: "github.com/gilang",
      icon: GithubIcon,
      url: personalInfo.socials.github,
    },
    {
      name: "LinkedIn",
      handle: "linkedin.com/in/gilang",
      icon: LinkedinIcon,
      url: personalInfo.socials.linkedin,
    },
  ];

  return (
    <section id="kontak" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-300 mb-4">
            <Mail size={14} className="text-cyan-400" />
            <span>Mari Berdiskusi</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4 leading-tight">
            Punya Project? <br className="hidden sm:block" />
            Hubungi Saya.
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Terbuka untuk kolaborasi project, pekerjaan freelance, maupun
            diskusi seputar pengembangan web.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactOptions.map((opt) => {
                const IconComponent = opt.icon;
                return (
                  <motion.a
                    key={opt.name}
                    href={opt.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="glass-card p-4 sm:p-5 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-all duration-200 flex items-center gap-4 group"
                  >
                    <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 group-hover:text-cyan-400 transition-colors shadow-sm">
                      <IconComponent size={20} />
                    </div>
                    <div>
                      <h4 className="text-xs text-zinc-400 font-medium">
                        {opt.name}
                      </h4>
                      <p className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        {opt.handle}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-zinc-800"
            >
              <h3 className="text-xl font-bold text-white mb-6">
                Kirim Pesan Langsung
              </h3>

              {formSent ? (
                <div className="p-6 rounded-xl bg-zinc-900 border border-zinc-800 text-center space-y-3">
                  <div className="w-10 h-10 rounded-full bg-cyan-500 text-zinc-950 flex items-center justify-center mx-auto text-lg font-bold shadow-md">
                    <Check size={20} />
                  </div>
                  <h4 className="text-lg font-bold text-white">
                    Pesan Terkirim!
                  </h4>
                  <p className="text-xs text-zinc-400">
                    Terima kasih telah menghubungi. Saya akan membalas pesan
                    Anda sesegera mungkin.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                        Nama Anda
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Nama lengkap"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                        Email / Contacts
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="email@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                      Pesan
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tuliskan pesan atau kebutuhan project Anda..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-bold text-sm tracking-wide transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send size={16} />
                    <span>Kirim Pesan</span>
                  </button>
                </form>
              )}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-zinc-800">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Star className="text-yellow-400 fill-yellow-400" size={18} />
                  <span>Testimoni</span>
                </h3>
                <span className="text-xs font-semibold text-zinc-300 bg-zinc-900 px-2.5 py-1 rounded-full border border-zinc-800">
                  5.0 ★ Rating
                </span>
              </div>

              <div className="space-y-5">
                {testimonials.map((item) => (
                  <div
                    key={item.id}
                    className="p-5 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-3"
                  >
                    <div className="flex items-center gap-1">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </div>

                    <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                      "{item.text}"
                    </p>
                    <div className="flex items-center gap-3 pt-2 border-t border-zinc-800/80">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-9 h-9 rounded-full object-cover border border-zinc-700"
                      />
                      <div>
                        <h4 className="text-xs font-bold text-white">
                          {item.name}
                        </h4>
                        <p className="text-[11px] text-zinc-400">{item.role}</p>
                      </div>
                    </div>
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
