"use client";

import { useState } from "react";
import HeroSection from "@/components/core/Hero-Section";
import AboutSection from "@/components/core/About-Section";
import SkillsSection from "@/components/core/Skills-Section";
import { Sun, X, MessageSquare, Send } from "lucide-react";

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#FCFCFC] font-sans antialiased text-zinc-900 selection:bg-[#00C9FF]/20">

      {/* ── AMBIENT BACKGROUND SYSTEM ─────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Primary teal orb — top right */}
        <div className="absolute -top-[15%] -right-[8%] w-[520px] h-[520px] rounded-full bg-[#00C9FF]/[0.07] blur-[100px]" />

        {/* Secondary green orb — mid left */}
        <div className="absolute top-[35%] -left-[12%] w-[680px] h-[680px] rounded-full bg-[#92FE9D]/[0.06] blur-[130px]" />

        {/* Soft base glow — bottom center */}
        <div className="absolute bottom-[-5%] left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-gradient-to-tr from-[#00C9FF]/[0.04] to-[#92FE9D]/[0.04] blur-[120px]" />

        {/* Subtle grid — fades toward bottom */}
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #80808012 1px, transparent 1px), linear-gradient(to bottom, #80808012 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage:
              "radial-gradient(ellipse 85% 60% at 50% 0%, #000 60%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 85% 60% at 50% 0%, #000 60%, transparent 100%)",
          }}
        />
      </div>

      {/* ── WIREFRAME-MATCHED NAVBAR ──────────────────────────────────────── */}
      <header className="sticky top-0 z-50 w-full border-b border-zinc-100 bg-[#FCFCFC]/80 backdrop-blur-md transition-all duration-300">
        <div className="mx-auto max-w-7xl flex h-20 items-center justify-between px-6 md:px-12">

          {/* Logo */}
          <a
            href="#"
            className="group flex items-center font-sans text-xl font-bold tracking-tight text-zinc-900"
          >
            kian.f
            <span className="text-[#00C9FF] group-hover:translate-x-0.5 transition-transform duration-300">
              _
            </span>
          </a>

          {/* Centered Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
            {[
              { label: "About", href: "#about" },
              { label: "Skills", href: "#skills" },
              { label: "Work", href: "#work" },
              { label: "Interests", href: "#interests" },
              { label: "Contact", href: "#contact" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="transition-colors duration-200 hover:text-zinc-950 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-[#00C9FF] hover:after:w-full after:transition-all after:duration-300"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Theme Switcher Action Icon */}
          <div className="flex items-center">
            <button
              aria-label="Toggle Theme"
              className="p-2 rounded-full border border-zinc-200 text-zinc-600 hover:text-[#00C9FF] hover:border-[#00C9FF]/30 hover:bg-zinc-50 transition-all duration-200"
            >
              <Sun className="w-5 h-5 stroke-[2]" />
            </button>
          </div>

        </div>
      </header>

      {/* ── MAIN CONTENT ─────────────────────────────────────────────────── */}
      <main className="relative z-10 flex flex-1 flex-col">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
      </main>

      {/* ── FLOATING STICKY AI ASSISTANT OVERLAY ─────────────────────────── */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">

        {/* AI Assistant Interface Window */}
        {isChatOpen && (
          <div className="w-[360px] sm:w-[380px] bg-[#FCFCFC] rounded-2xl border border-zinc-200 shadow-2xl p-5 flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-4 duration-200">

            {/* Header */}
            <div className="flex items-center justify-between border-b border-zinc-100 pb-3">
              <div>
                <h3 className="font-bold text-base text-zinc-900">AI Assistant</h3>
              </div>
              <button
                onClick={() => setIsChatOpen(false)}
                className="text-zinc-400 hover:text-zinc-600 transition-colors"
              >
                <X className="w-[18px] h-[18px] stroke-[2.5]" />
              </button>
            </div>

            {/* Conversation/Intro Area */}
            <div className="space-y-3 max-h-[240px] overflow-y-auto pr-1">
              <p className="text-sm text-zinc-600 leading-relaxed">
                Hi! I'm your AI assistant. Ask me anything about Kian, his projects, skills, or experience.
              </p>
            </div>

            {/* Suggested Contextual Pills */}
            <div className="flex flex-col gap-2">
              {[
                "What technologies does Kian use?",
                "Tell me about his projects",
                "What are Kian's interests?",
                "How can I contact Kian?",
              ].map((pillText) => (
                <button
                  key={pillText}
                  className="w-full text-left text-xs font-medium text-zinc-700 bg-zinc-50 border border-zinc-200 rounded-lg px-3 py-2.5 transition-all hover:bg-zinc-100 hover:border-[#00C9FF]/40 hover:text-[#00C9FF] active:scale-[0.99]"
                >
                  {pillText}
                </button>
              ))}
            </div>

            {/* Prompt Action input block */}
            <div className="relative mt-1">
              <input
                type="text"
                placeholder="Type your question..."
                className="w-full bg-zinc-50 border border-zinc-200 rounded-xl py-3 pl-4 pr-10 text-xs focus:outline-none focus:border-[#00C9FF] focus:bg-white transition-all text-zinc-900"
              />
              <button
                className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1.5 rounded-lg text-zinc-400 hover:text-[#00C9FF] transition-colors"
                aria-label="Send Message"
              >
                <Send className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>
        )}

        {/* Floating Bubble Action Trigger Button */}
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="h-14 w-14 rounded-full bg-gradient-to-tr from-[#00C9FF] to-[#92FE9D] text-white flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 relative group"
          style={{
            boxShadow: isChatOpen ? '0 10px 25px -5px rgba(0,201,255,0.3)' : '0 10px 20px -6px rgba(0,0,0,0.1)'
          }}
        >
          {isChatOpen ? (
            <X className="w-6 h-6 stroke-[2.5] text-zinc-950" />
          ) : (
            <div className="relative flex items-center justify-center">
              <MessageSquare className="w-6 h-6 stroke-[2.5] text-zinc-950" />
              <span className="absolute inset-0 flex items-center justify-center font-sans text-[8px] font-black tracking-tighter text-zinc-950 mt-[-2px]">
                AI
              </span>
            </div>
          )}
        </button>

      </div>

    </div>
  );
}