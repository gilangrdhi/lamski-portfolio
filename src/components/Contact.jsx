import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Send, Star, Check, Sparkles } from "lucide-react";
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

    emailjs
      .send(
        "service_jrbregq",
        "template_smw64rk",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "Yk5WeS1XdRnpmMxrH"
      )
      .then(() => {
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
      })
      .catch((error) => {
        console.error("Gagal mengirim email:", error);
        alert(
          "Maaf, pesan gagal terkirim. Silakan coba lagi atau hubungi lewat kontak lainnya."
        );
      });
  };

  const contactCards = [
    {
      name: "Email",
      handle: personalInfo.email,
      icon: Mail,
      url: `mailto:${personalInfo.email}`,
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      name: "WhatsApp",
      handle: "+62 858-9572-8196",
      icon: MessageSquare,
      url: personalInfo.socials.whatsapp,
      color: "from-emerald-500/20 to-teal-500/20",
    },
    {
      name: "Instagram",
      handle: "@gln.hooks",
      icon: InstagramIcon,
      url: personalInfo.socials.instagram,
      color: "from-pink-500/20 to-purple-500/20",
    },
    {
      name: "GitHub",
      handle: "github.com/gilangrdhi",
      icon: GithubIcon,
      url: personalInfo.socials.github,
      color: "from-zinc-700/30 to-zinc-600/30",
    },
    {
      name: "LinkedIn",
      handle: "Gilang Ardhi",
      icon: LinkedinIcon,
      url: personalInfo.socials.linkedin,
      color: "from-sky-500/20 to-blue-600/20",
    },
  ];

  return (
    <section
      id="kontak"
      className="py-24 relative z-10 bg-zinc-900/90 border-y border-zinc-800/80 shadow-inner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* MULTI-LEVEL SECTION HEADER (Reference Image 2 style) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left mb-14"
        >
          <p className="text-xl sm:text-3xl font-extrabold text-cyan-400 tracking-wide mb-1 font-serif italic">
            Order? / Punya Project?
          </p>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-none">
            Contact Us.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-10">
            <div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {contactCards.map((card) => {
                  const IconComponent = card.icon;
                  return (
                    <motion.a
                      key={card.name}
                      href={card.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative p-5 rounded-2xl bg-zinc-800/70 border border-zinc-700/70 hover:border-cyan-400/60 flex flex-col items-center justify-center text-center transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-cyan-500/10 overflow-hidden"
                    >
                      {/* Card background subtle gradient overlay on hover */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                      />

                      <div className="relative z-10 p-3 rounded-xl bg-zinc-900/90 border border-zinc-700/80 text-white group-hover:text-cyan-400 group-hover:border-cyan-400/40 transition-colors mb-3 shadow-inner">
                        <IconComponent size={26} />
                      </div>
                      <h4 className="relative z-10 text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {card.name}
                      </h4>
                      <p className="relative z-10 text-[11px] text-zinc-400 group-hover:text-zinc-200 transition-colors truncate max-w-full px-1 mt-0.5">
                        {card.handle}
                      </p>
                    </motion.a>
                  );
                })}
              </div>
              <p className="text-xs font-mono font-semibold tracking-widest text-zinc-400 uppercase text-center mt-5 bg-zinc-950/40 py-2.5 px-4 rounded-xl border border-zinc-800/60">
                KLIK SALAH SATU IKON UNTUK MEMULAI PESANAN ATAU DISKUSI
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-6 sm:p-8 rounded-2xl bg-zinc-950/60 border border-zinc-800/90 shadow-xl"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Sparkles size={18} className="text-cyan-400" />
                <span>Kirim Pesan Langsung</span>
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
                        name="name"
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
                        Email / Kontak
                      </label>
                      <input
                        type="email"
                        name="email"
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
                      name="message"
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
                    className="w-full py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-bold text-sm tracking-wide transition-all shadow-lg shadow-cyan-500/15 flex items-center justify-center gap-2 cursor-pointer"
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
            className="lg:col-span-5"
          >
            <div className="p-6 sm:p-7 rounded-3xl bg-zinc-950/70 border border-zinc-800/90 shadow-2xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-zinc-800/80">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Star className="text-yellow-400 fill-yellow-400" size={18} />
                  <span>Ulasan Client & Rekan</span>
                </h3>
                <span className="text-xs font-semibold text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 px-2.5 py-1 rounded-full">
                  5.0 Rating
                </span>
              </div>

              <div className="space-y-3.5 pt-1">
                {testimonials.map((item) => (
                  <motion.div
                    key={item.id}
                    whileHover={{ scale: 1.01 }}
                    className="p-4 rounded-2xl bg-zinc-800/60 border border-zinc-700/50 hover:border-zinc-600 transition-all space-y-2.5 shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <img
                          src={item.avatar}
                          alt={item.name}
                          className="w-8 h-8 rounded-full object-cover border border-zinc-600 shrink-0"
                        />
                        <div>
                          <h4 className="text-xs font-bold text-white leading-tight">
                            {item.name}
                          </h4>
                          <p className="text-[10px] text-zinc-400">
                            {item.role}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-0.5">
                        {Array.from({ length: item.rating }).map((_, i) => (
                          <Star
                            key={i}
                            size={12}
                            className="text-yellow-400 fill-yellow-400"
                          />
                        ))}
                      </div>
                    </div>

                    <p className="text-zinc-300 text-xs leading-relaxed italic bg-zinc-900/60 p-2.5 rounded-xl border border-zinc-800/80">
                      "{item.text}"
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
