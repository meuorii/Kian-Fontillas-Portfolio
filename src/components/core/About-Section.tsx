"use client";

import { useEffect, useState, useRef } from "react";
import { Target, Rocket, Brain, Code2, Calendar } from "lucide-react";
// Imported data structure to accurately parse total project count
import { projectsData } from "@/data/project-data";

export default function AboutSection() {
    const [hasIntersected, setHasIntersected] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasIntersected(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="about"
            ref={sectionRef}
            className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12 md:py-20 lg:py-24 overflow-hidden"
        >
            {/* Multi-Viewport Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-start relative z-10">

                {/* ── SECTION 1: PRIMARY BIOGRAPHY STORY (First on Mobile/Tablet via source order, takes middle columns on Desktop) ── */}
                <div
                    className={`order-1 lg:order-2 col-span-1 lg:col-span-6 flex flex-col space-y-4 sm:space-y-6 z-10 lg:px-4 transition-all duration-1000 delay-150 ${
                        hasIntersected ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                    }`}
                >
                    <div className="space-y-1">
                        <h4 className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-text-dim theme-transition">
                            ABOUT THE DEVELOPER
                        </h4>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-text-main leading-tight theme-transition">
                            Building clean logic.<br />
                            <span className="bg-linear-to-r from-[#00C9FF] to-[#92FE9D] bg-clip-text text-transparent">
                                Engineering standard experiences.
                            </span>
                        </h2>
                    </div>

                    <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-text-muted font-normal theme-transition">
                        <p>
                            I am a fresh graduate from{" "}
                            <span className="font-semibold text-text-main theme-transition">
                                President Ramon Magsaysay State University (PRMSU)
                            </span>
                            . I love building smart systems and clean user interfaces. My goal is simple: make software powerful on the inside but very easy to use for everyone.
                        </p>
                        <p>
                            During my time as a <span className="font-semibold text-text-main theme-transition">Frontend Developer Intern</span>, I focused on creating practical digital solutions. I helped automate document processing workflows, making it fast and efficient to review, revise, and manage digital paperless files.
                        </p>
                        <p>
                            Whether developing a deep learning-powered <span className="text-text-main font-medium theme-transition">Face Recognition Attendance System</span> for my thesis or designing responsive client portals, my priority is quality. I ensure that backend architectures remain solid while frontend visuals stay clean, elegant, and minimalist.
                        </p>
                    </div>
                </div>

                {/* ── SECTION 2: STRATEGIC VALUES BLOCKS (Second on Mobile/Tablet, inline elements on single line) ── */}
                <div
                    className={`order-2 lg:order-3 col-span-1 lg:col-span-3 grid grid-cols-3 lg:grid-cols-1 gap-4 lg:gap-0 lg:space-y-6 z-20 lg:pl-4 transition-all duration-1000 delay-300 ${
                        hasIntersected ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                    }`}
                >
                    {/* Value Block 1: Purpose */}
                    <div className="space-y-2 border-r lg:border-r-0 lg:border-b border-card-border/60 pr-2 lg:pr-0 lg:pb-4 theme-transition group">
                        <div className="flex items-center gap-2">
                            <Target className="w-3.5 h-3.5 text-[#00C9FF] transition-transform duration-300 group-hover:scale-110" />
                            <h4 className="text-[10px] sm:text-[11px] font-bold tracking-widest text-text-dim uppercase theme-transition">
                                Purpose
                            </h4>
                        </div>
                        <p className="text-[11px] sm:text-xs text-text-muted leading-relaxed font-normal theme-transition group-hover:text-text-main">
                            Connecting advanced backend systems with simple, beautiful layouts.
                        </p>
                    </div>

                    {/* Value Block 2: Drive */}
                    <div className="space-y-2 border-r lg:border-r-0 lg:border-b border-card-border/60 px-2 lg:px-0 lg:pb-4 theme-transition group">
                        <div className="flex items-center gap-2">
                            <Rocket className="w-3.5 h-3.5 text-[#92FE9D] transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5" />
                            <h4 className="text-[10px] sm:text-[11px] font-bold tracking-widest text-text-dim uppercase theme-transition">
                                Drive
                            </h4>
                        </div>
                        <p className="text-[11px] sm:text-xs text-text-muted leading-relaxed font-normal theme-transition group-hover:text-text-main">
                            Focused on clear architecture, optimized code, and smooth performance.
                        </p>
                    </div>

                    {/* Value Block 3: Mindset */}
                    <div className="space-y-2 pl-2 lg:pl-0 lg:pb-4 group">
                        <div className="flex items-center gap-2">
                            <Brain className="w-3.5 h-3.5 text-[#00C9FF] transition-transform duration-300 group-hover:scale-110" />
                            <h4 className="text-[10px] sm:text-[11px] font-bold tracking-widest text-text-dim uppercase theme-transition">
                                Mindset
                            </h4>
                        </div>
                        <p className="text-[11px] sm:text-xs text-text-muted leading-relaxed font-normal theme-transition group-hover:text-text-main">
                            Always learning and improving to make powerful technology feel completely effortless.
                        </p>
                    </div>
                </div>

                {/* ── SECTION 3: IDENTITY & QUICK METRICS (Last on Mobile/Tablet, takes first column on Desktop) ── */}
                <div
                    className={`order-3 lg:order-1 col-span-1 lg:col-span-3 flex flex-col space-y-4 sm:space-y-6 z-20 transition-all duration-1000 ${
                        hasIntersected ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                    }`}
                >
                    <div className="w-16 h-0.75 bg-linear-to-r from-[#00C9FF] to-[#92FE9D]" />

                    {/* Identity Glassmorphic Card */}
                    <div className="bg-card backdrop-blur-md rounded-2xl border border-card-border p-5 shadow-[0_2px_12px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.15)] flex items-center gap-4 theme-transition hover:border-text-dim/50">
                        <div className="w-12 h-12 rounded-xl border border-card-border/40 flex items-center justify-center bg-card-inner text-[#00C9FF] shadow-sm shrink-0 theme-transition">
                            <Brain className="w-5 h-5 stroke-[1.5]" />
                        </div>
                        <div className="flex flex-col min-w-0">
                            <span className="font-mono text-xs font-bold text-text-main tracking-tight truncate theme-transition">
                                kian.fontillas
                            </span>
                            <span className="text-[11px] font-medium text-text-muted truncate theme-transition">
                                Full Stack Developer
                            </span>
                        </div>
                    </div>

                    {/* Metrics Row: Adjusted grid setup to make both cards render inline on a single line for mobile/tablet */}
                    <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4 lg:space-y-3">
                        {/* Projects Built Dynamic Card */}
                        <div className="bg-card backdrop-blur-md border border-card-border rounded-xl p-4 flex items-center gap-4 group hover:border-[#00C9FF]/40 theme-transition shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                            <div className="p-2 rounded-lg border border-card-border/40 bg-card-inner text-text-muted group-hover:text-[#00C9FF] theme-transition shadow-sm">
                                <Code2 className="w-4 h-4 stroke-[1.75]" />
                            </div>
                            <div className="min-w-0">
                                <div className="text-xl font-black text-text-main tracking-tight theme-transition">
                                    {projectsData ? `${projectsData.length}` : "20+"}
                                </div>
                                <div className="text-[10px] font-bold tracking-wide uppercase text-text-dim theme-transition truncate">Projects Built</div>
                            </div>
                        </div>

                        {/* Professional Status Card */}
                        <div className="bg-card backdrop-blur-md border border-card-border rounded-xl p-4 flex items-center gap-4 group hover:border-[#92FE9D]/50 theme-transition shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                            <div className="p-2 rounded-lg border border-card-border/40 bg-card-inner text-text-muted group-hover:text-[#92FE9D] theme-transition shadow-sm">
                                <Calendar className="w-4 h-4 stroke-[1.75]" />
                            </div>
                            <div className="min-w-0">
                                <div className="text-xl font-black text-text-main tracking-tight theme-transition">Entry</div>
                                <div className="text-[10px] font-bold tracking-wide uppercase text-text-dim theme-transition truncate">Fresh Graduate</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}