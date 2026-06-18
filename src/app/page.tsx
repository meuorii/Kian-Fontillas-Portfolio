"use client";

import { useState, useEffect } from "react";
import { ThemeProvider, useTheme } from "@/context/ThemeContext";
import HeroSection from "@/components/core/Hero-Section";
import AboutSection from "@/components/core/About-Section";
import SkillsSection from "@/components/core/Skills-Section";
import WorksSection from "@/components/core/Works-Section";
import InterestsSection from "@/components/core/Interests-Section";
import ContactSection from "@/components/core/Contact-Section";
import { Sun, Moon, X, MessageSquare, Send, Menu } from "lucide-react";

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
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-background text-foreground font-sans antialiased theme-transition">
      {/* ── AMBIENT BACKGROUND SYSTEM ── */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[5%] right-[5%] w-72 h-72 md:w-138 md:h-130 rounded-full bg-[#00C9FF]/[0.03] blur-[80px] md:blur-[120px] theme-transition" />
        <div className="absolute top-[20%] left-[5%] w-80 h-80 md:w-170 md:h-170 rounded-full bg-[#92FE9D]/[0.02] blur-[90px] md:blur-[140px] theme-transition" />
        <div className="absolute top-[50%] right-[5%] w-76 h-76 md:w-160 md:h-160 rounded-full bg-[#00C9FF]/[0.02] blur-[80px] md:blur-[130px] theme-transition" />
        
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

      {/* ── NAVBAR (STICKY FOR ALL DEVICES) ── */}
      <header className="sticky top-0 z-50 w-full border-b border-foreground/15 bg-background/80 backdrop-blur-md shadow-[0_1px_4px_-2px_rgba(0,0,0,0.05)] theme-transition">
        <div className="mx-auto max-w-7xl flex h-16 md:h-20 items-center justify-between px-4 sm:px-6 md:px-12">

          {/* Logo */}
          <a
            href="#"
            className="group flex items-center font-sans text-lg md:text-xl font-bold tracking-tight text-foreground theme-transition"
          >
            kian.f
            <span className="text-[#00C9FF] group-hover:translate-x-0.5 transition-transform duration-300">
              _
            </span>
          </a>

          {/* Desktop & Laptop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium theme-transition">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={(e) => handleScroll(e, href)}
                className="transition-colors duration-200 text-foreground/80 hover:text-foreground relative after:absolute after:bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-[#00C9FF] hover:after:w-full after:transition-all after:duration-300"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Actions Button Interface */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2.5 rounded-xl border border-foreground/20 text-foreground hover:text-[#00C9FF] hover:border-[#00C9FF]/30 hover:bg-foreground/5 theme-transition cursor-pointer flex items-center justify-center"
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4 md:w-4.5 md:h-4.5 stroke-2" />
              ) : (
                <Sun className="w-4 h-4 md:w-4.5 md:h-4.5 stroke-2" />
              )}
            </button>

            {/* Mobile Hamburger Trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
              className="p-2.5 rounded-xl border border-foreground/20 text-foreground hover:text-[#00C9FF] hover:border-[#00C9FF]/30 hover:bg-foreground/5 md:hidden theme-transition cursor-pointer flex items-center justify-center"
            >
              {isMobileMenuOpen ? (
                <X className="w-4 h-4 stroke-2" />
              ) : (
                <Menu className="w-4 h-4 stroke-2" />
              )}
            </button>
          </div>

        </div>

        {/* ── MOBILE & TABLET NAVIGATION TRAY ── */}
        {isMobileMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-background/98 border-b border-foreground/15 px-6 py-6 flex flex-col gap-5 md:hidden animate-in fade-in slide-in-from-top-4 duration-200 z-50 shadow-xl backdrop-blur-lg">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={(e) => handleScroll(e, href)}
                className="text-base font-medium text-foreground/80 hover:text-foreground py-1 border-b border-foreground/5 transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* ── MAIN CONTENT ── */}
      <main className="relative z-10 flex flex-1 flex-col">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        
        <div id="work" className="scroll-mt-16 md:scroll-mt-20">
          <WorksSection />
        </div>
        
        <InterestsSection />
        <ContactSection />
      </main>

      {/* ── FLOATING STICKY AI ASSISTANT OVERLAY (RESPONSIVE) ── */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-3 max-w-[calc(100vw-2rem)]">

        {isChatOpen && (
          <div className="w-full sm:w-90 md:w-95 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-2xl p-4 sm:p-5 flex flex-col gap-3 sm:gap-4 animate-in fade-in slide-in-from-bottom-4 duration-200 max-h-[75vh] sm:max-h-[600px]">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 pb-3">
              <div>
                <h3 className="font-bold text-sm sm:text-base text-zinc-900 dark:text-zinc-50 theme-transition">AI Assistant</h3>
              </div>
              <button
                onClick={() => setIsChatOpen(false)}
                className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors p-1"
              >
                <X className="w-4.5 h-4.5 stroke-[2.5]" />
              </button>
            </div>

            {/* Intro / Chat Display Area */}
            <div className="space-y-3 overflow-y-auto pr-1 text-xs sm:text-sm">
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed theme-transition">
                Hi! I'm your AI assistant. Ask me anything about Kian, his projects, skills, or experience.
              </p>
            </div>

            {/* Contextual Pills */}
            <div className="flex flex-col gap-1.5 sm:gap-2 overflow-y-auto max-h-40 sm:max-h-none py-1">
              {[
                { text: "What technologies does Kian use?", target: "#skills" },
                { text: "Tell me about his projects", target: "#work" },
                { text: "What are Kian's interests?", target: "#interests" },
                { text: "How can I contact Kian?", target: "#contact" },
              ].map((pill) => (
                <a
                  key={pill.text}
                  href={pill.target}
                  onClick={(e) => {
                    handleScroll(e, pill.target);
                    setIsChatOpen(false);
                  }}
                  className="w-full text-left text-[11px] sm:text-xs font-medium text-zinc-700 dark:text-zinc-300 bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200 dark:border-zinc-800/80 rounded-lg px-3 py-2 sm:py-2.5 transition-all hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:border-[#00C9FF]/40 hover:text-[#00C9FF] dark:hover:text-[#00C9FF] active:scale-[0.99]"
                >
                  {pill.text}
                </a>
              ))}
            </div>

            {/* Input Block */}
            <div className="relative mt-auto pt-1">
              <input
                type="text"
                placeholder="Type your question..."
                className="w-full bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-800 rounded-xl py-2.5 sm:py-3 pl-4 pr-10 text-[11px] sm:text-xs focus:outline-none focus:border-[#00C9FF] dark:focus:border-[#00C9FF] focus:bg-white dark:focus:bg-zinc-900 transition-all text-zinc-900 dark:text-zinc-100"
              />
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg text-zinc-400 hover:text-[#00C9FF] transition-colors"
                aria-label="Send Message"
              >
                <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>
        )}

        {/* Floating Bubble Button */}
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-linear-to-tr from-[#00C9FF] to-[#92FE9D] flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 relative group cursor-pointer"
          style={{
            boxShadow: isChatOpen ? '0 10px 25px -5px rgba(0,201,255,0.3)' : '0 10px 20px -6px rgba(0,0,0,0.1)'
          }}
        >
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