import React, { useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";
import BackgroundParticles from "./components/BackgroundParticles";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    if (loading) return;

    const sections = ["home", "portofolio", "tentang", "kontak"];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-100 bg-grid-pattern selection:bg-cyan-500 selection:text-zinc-950 font-sans antialiased">
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

      <BackgroundParticles />

      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
