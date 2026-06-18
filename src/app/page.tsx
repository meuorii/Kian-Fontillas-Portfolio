"use client";

import { useState, useEffect } from "react";
import { ThemeProvider, useTheme } from "@/context/ThemeContext";
import HeroSection from "@/components/core/Hero-Section";
import AboutSection from "@/components/core/About-Section";
import SkillsSection from "@/components/core/Skills-Section";
import WorksSection from "@/components/core/Works-Section";
import InterestsSection from "@/components/core/Interests-Section";
import GoalsSection from "@/components/core/Goals-Section";
import ContactSection from "@/components/core/Contact-Section";
import { Sun, Moon, X, MessageSquare, Menu, Sparkles, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

// ── SUB-COMPONENT WRAPPER TO ACCURATELY CONSUME THEME CONTEXT ──
function MainLayout() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Close mobile menu if window resizing expands past mobile breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ── PREMIUM JAVASCRIPT ANCHOR SCROLLING ──
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false); // Close mobile tray on click
    
    let targetElement = document.querySelector(targetId);
    if (!targetElement && targetId === "#work") {
      targetElement = document.querySelector("#works");
    }

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      window.history.pushState(null, "", targetId);
    }
  };

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Work", href: "#work" },
    { label: "Interests", href: "#interests" },
    { label: "Goals", href: "#goals" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="relative min-h-screen w-full bg-background text-foreground font-sans antialiased theme-transition">
      
      {/* ── AMBIENT BACKGROUND SYSTEM ── */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[5%] right-[5%] w-72 h-72 md:w-138 md:h-130 rounded-full bg-[#00C9FF]/3 blur-[80px] md:blur-[120px] theme-transition" />
        <div className="absolute top-[20%] left-[5%] w-80 h-80 md:w-170 md:h-170 rounded-full bg-[#92FE9D]/2 blur-[90px] md:blur-[140px] theme-transition" />
        <div className="absolute top-[50%] right-[5%] w-76 h-76 md:w-160 md:h-160 rounded-full bg-[#00C9FF]/2 blur-[80px] md:blur-[130px] theme-transition" />
        
        {/* Technical Layout Wireframe Grid Overlay */}
        <div
          className="absolute inset-0 opacity-[0.15] dark:opacity-[0.10] theme-transition"
          style={{
            backgroundImage:
              "linear-gradient(to right, #80808015 1px, transparent 1px), linear-gradient(to bottom, #80808015 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            maskImage:
              "radial-gradient(ellipse 95% 70% at 50% 0%, #000 50%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 95% 70% at 50% 0%, #000 50%, transparent 100%)",
          }}
        />
      </div>

      {/* ── NAVBAR (PREMIUM FLOATING CAPSULE DESIGN) ── */}
      <header className="sticky top-0 z-50 w-full pt-4 px-4 sm:px-6 md:px-8 transition-all duration-300">
        <div className="mx-auto max-w-7xl">
          <div className="w-full h-16 flex items-center justify-between px-4 sm:px-6 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 bg-[#FCFCFC]/70 dark:bg-zinc-950/70 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.03)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.2)] theme-transition relative overflow-visible">
            
            {/* 1. Brand Logo Section */}
            <a
              href="https://github.com/meuorii"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 font-sans theme-transition cursor-pointer"
            >
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 group-hover:border-[#00C9FF]/50 transition-all duration-300 shadow-xs">
                <img 
                  src="https://github.com/meuorii.png" 
                  alt="meuorii profile" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#00C9FF]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>

              <div className="flex flex-col justify-center">
                <div className="flex items-center text-sm sm:text-base font-bold tracking-wide text-zinc-900 dark:text-[#FCFCFC] transition-colors group-hover:text-[#00C9FF]">
                  <span>@meuorii</span>
                  <span className="text-[#00C9FF] ml-0.5 animate-pulse font-sans">_</span>
                </div>
                <div className="flex items-center gap-1 text-[10px] font-medium tracking-wider text-zinc-400 dark:text-zinc-500 uppercase transition-colors group-hover:text-zinc-500 dark:group-hover:text-zinc-400">
                  <FaGithub className="w-3 h-3 text-zinc-400 dark:text-zinc-500 group-hover:text-[#00C9FF] transition-colors" />
                  <span>in github</span>
                </div>
              </div>
            </a>

            {/* 2. Desktop Nav Links */}
            <nav className="hidden md:flex items-center gap-1 text-xs font-bold uppercase tracking-widest theme-transition">
              {navLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={(e) => handleScroll(e, href)}
                  className="px-4 py-2 rounded-xl text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-[#FCFCFC] hover:bg-zinc-900/5 dark:hover:bg-[#FCFCFC]/5 active:scale-[0.97] transition-all duration-200 relative group"
                >
                  {label}
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#00C9FF] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </a>
              ))}
            </nav>

            {/* 3. Actions Button Interface */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleTheme}
                aria-label="Toggle Theme"
                className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800/80 text-zinc-700 dark:text-zinc-300 hover:text-[#00C9FF] hover:border-[#00C9FF]/40 dark:hover:border-[#00C9FF]/40 hover:bg-[#00C9FF]/5 theme-transition cursor-pointer flex items-center justify-center transition-all active:scale-95"
              >
                {theme === "light" ? (
                  <Moon className="w-4 h-4 stroke-[2.5]" />
                ) : (
                  <Sun className="w-4 h-4 stroke-[2.5]" />
                )}
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle Menu"
                className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800/80 text-zinc-700 dark:text-zinc-300 hover:text-[#00C9FF] hover:border-[#00C9FF]/40 hover:bg-[#00C9FF]/5 md:hidden theme-transition cursor-pointer flex items-center justify-center transition-all active:scale-95"
              >
                {isMobileMenuOpen ? (
                  <X className="w-4 h-4 stroke-[2.5]" />
                ) : (
                  <Menu className="w-4 h-4 stroke-[2.5]" />
                )}
              </button>
            </div>

          </div>

          {/* ── MOBILE & TABLET NAVIGATION DROP-DOWN CONTAINER ── */}
          {isMobileMenuOpen && (
            <div className="absolute top-22 left-4 right-4 bg-[#FCFCFC]/95 dark:bg-zinc-950/95 border border-zinc-200/80 dark:border-zinc-800/80 px-4 py-4 flex flex-col gap-2 md:hidden rounded-2xl animate-in fade-in slide-in-from-top-4 duration-200 z-50 shadow-xl backdrop-blur-xl">
              {navLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={(e) => handleScroll(e, href)}
                  className="text-xs font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-[#FCFCFC] px-4 py-3 rounded-xl hover:bg-zinc-900/5 dark:hover:bg-[#FCFCFC]/5 transition-all"
                >
                  {label}
                </a>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* ── MAIN CONTENT ── */}
      <main className="relative z-10 flex flex-1 flex-col overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        
        <div id="work" className="scroll-mt-16 md:scroll-mt-20">
          <WorksSection />
        </div>
        
        <InterestsSection />

        <div id="goals" className="scroll-mt-16 md:scroll-mt-20">
          <GoalsSection />
        </div>

        <ContactSection />
      </main>

      {/* ── FLOATING STICKY AI ASSISTANT OVERLAY (MICRO-UX "SOON" UPGRADE) ── */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-3 max-w-[calc(100vw-2rem)]">

        {isChatOpen && (
          <div className="w-full sm:w-85 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-lg p-6 flex flex-col gap-5 max-h-[75vh]">
            
            {/* Header Area */}
            <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 pb-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                Update
              </span>
              <button
                onClick={() => setIsChatOpen(false)}
                className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 text-xs font-medium px-1 cursor-pointer"
                aria-label="Close"
              >
                Close
              </button>
            </div>

            {/* Core Content */}
            <div className="space-y-2">
              <h3 className="text-zinc-900 dark:text-zinc-100 font-bold text-base">
                AI Chat Coming Soon
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                I am working on an AI assistant for this site. Soon you can chat with it to learn more about my work, skills, and experience.
              </p>
            </div>

            {/* Links / Shortcuts */}
            <div className="flex flex-col gap-2 pt-3 border-t border-zinc-100 dark:border-zinc-800">
              <span className="text-[10px] font-medium text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-1">
                Explore sections:
              </span>
              {[
                { text: "View Skills", target: "#skills" },
                { text: "View Projects", target: "#work" },
                { text: "Contact Me", target: "#contact" },
              ].map((pill) => (
                <a
                  key={pill.text}
                  href={pill.target}
                  onClick={(e) => {
                    handleScroll(e, pill.target);
                    setIsChatOpen(false);
                  }}
                  className="w-full flex items-center justify-between text-sm text-zinc-600 dark:text-zinc-400 bg-zinc-50 dark:bg-zinc-800/30 border border-zinc-200/50 dark:border-zinc-800/50 rounded-lg px-4 py-3 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800/80 hover:text-zinc-900 dark:hover:text-zinc-100"
                >
                  <span>{pill.text}</span>
                  <span className="text-zinc-400 text-xs">→</span>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Trigger Button Component */}
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-linear-to-tr from-[#00C9FF] to-[#92FE9D] flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 relative group cursor-pointer"
          aria-label="Toggle AI Assistant Information"
          style={{
            boxShadow: isChatOpen ? '0 10px 25px -5px rgba(0,201,255,0.3)' : '0 10px 20px -6px rgba(0,0,0,0.1)'
          }}
        >
          {/* Persistent Floating "Soon" Ribbon */}
          <span className="absolute -top-1.5 -right-1.5 bg-zinc-950 dark:bg-[#FCFCFC] text-[#FCFCFC] dark:text-zinc-950 font-black text-[8px] uppercase tracking-widest px-1.5 py-0.5 rounded-md shadow-md border border-zinc-800 dark:border-zinc-200 transition-transform group-hover:scale-110 select-none">
            Soon
          </span>

          {isChatOpen ? (
            <X className="w-4.5 h-4.5 sm:w-5 sm:h-5 stroke-[2.5] text-zinc-900" />
          ) : (
            <MessageSquare className="w-4.5 h-4.5 sm:w-5 sm:h-5 stroke-[2.5] text-zinc-900" />
          )}
        </button>

      </div>

    </div>
  );
}

// ── CORE THEME SEPARATOR ENTRY POINT ──
export default function Home() {
  return (
    <ThemeProvider>
      <MainLayout />
    </ThemeProvider>
  );
}