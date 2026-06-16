"use client";

import { useEffect, useState, useRef } from "react";
import { Target, Rocket, Brain, Code2, Calendar } from "lucide-react";

export default function AboutSection() {
    const [hasIntersected, setHasIntersected] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasIntersected(true);
                    observer.disconnect(); // I-disconnect kapag nag-trigger na para sa smooth transition
                }
            },
            { threshold: 0.15 } // Mag-ti-trigger kapag 15% ng section ay nakikita na
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
            className="relative w-full max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 overflow-hidden"
        >

            {/* ── EXACT 3-COLUMN ASYMMETRIC GRID COPIED FROM HERO ARCHITECTURE ── */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-start relative z-10">

                {/* ── COLUMN 1 (LEFT): IDENTITY & BASELINE STATUS ── */}
                <div
                    className={`lg:col-span-3 flex flex-col space-y-6 z-20 transition-all duration-1000 cubic-bezier(0.16,1,0.3,1) ${hasIntersected ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                        }`}
                >
                    {/* Minimalist Accent Line Rule matching Hero Style */}
                    <div className="w-16 h-[3px] bg-gradient-to-r from-[#00C9FF] to-[#92FE9D]" />

                    {/* Premium Glassmorphic Identity Block */}
                    <div className="bg-white/40 backdrop-blur-md rounded-2xl border border-zinc-200/60 p-5 shadow-[0_8px_30px_rgb(0,0,0,0.02)] flex items-center gap-3.5 transition-all duration-300 hover:border-zinc-300">
                        <div className="w-12 h-12 rounded-xl border border-zinc-200/80 flex items-center justify-center bg-white text-[#00C9FF] shadow-sm flex-shrink-0">
                            <Brain className="w-5 h-5 stroke-[1.5]" />
                        </div>
                        <div className="flex flex-col min-w-0">
                            <span className="font-mono text-xs font-bold text-[#1C1C1C] tracking-tight truncate">
                                kian.fontillas
                            </span>
                            <span className="text-[11px] font-medium text-zinc-400 truncate">
                                Full Stack & Automation
                            </span>
                        </div>
                    </div>

                    {/* Quick Metrics Stacked Directly Under Profile */}
                    <div className="space-y-3">
                        {/* Metric 1 */}
                        <div className="bg-white/40 backdrop-blur-md border border-zinc-200/60 rounded-xl p-4 flex items-center gap-4 group hover:border-[#00C9FF]/30 transition-all duration-300">
                            <div className="p-2 rounded-lg border border-zinc-200 bg-white text-zinc-500 group-hover:text-[#00C9FF] transition-colors shadow-sm">
                                <Code2 className="w-4 h-4 stroke-[1.75]" />
                            </div>
                            <div>
                                <div className="text-xl font-black text-[#1C1C1C] tracking-tight">20+</div>
                                <div className="text-[10px] font-bold tracking-wide uppercase text-zinc-400">Projects Built</div>
                            </div>
                        </div>

                        {/* Metric 2 */}
                        <div className="bg-white/40 backdrop-blur-md border border-zinc-200/60 rounded-xl p-4 flex items-center gap-4 group hover:border-[#92FE9D]/50 transition-all duration-300">
                            <div className="p-2 rounded-lg border border-zinc-200 bg-white text-zinc-500 group-hover:text-[#92FE9D] transition-colors shadow-sm">
                                <Calendar className="w-4 h-4 stroke-[1.75]" />
                            </div>
                            <div>
                                <div className="text-xl font-black text-[#1C1C1C] tracking-tight">Entry</div>
                                <div className="text-[10px] font-bold tracking-wide uppercase text-zinc-400">Fresh Graduate</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── COLUMN 2 (CENTER): MAIN TYPOGRAPHY & STORY BODY ── */}
                <div
                    className={`lg:col-span-6 flex flex-col space-y-6 z-10 lg:px-4 transition-all duration-1000 delay-150 cubic-bezier(0.16,1,0.3,1) ${hasIntersected ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                        }`}
                >
                    <div className="space-y-1">
                        <h4 className="text-[11px] font-bold uppercase tracking-widest text-zinc-400">
                            ABOUT THE DEVELOPER
                        </h4>
                        <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#1C1C1C] leading-tight">
                            Designing logic.<br />
                            <span className="bg-gradient-to-r from-[#00C9FF] to-[#92FE9D] bg-clip-text text-transparent">
                                Engineering aesthetics.
                            </span>
                        </h2>
                    </div>

                    <div className="space-y-4 text-sm leading-relaxed text-[#1C1C1C]/80 font-normal">
                        <p>
                            As a fresh graduate from{" "}
                            <span className="font-semibold text-[#1C1C1C]">
                                President Ramon Magsaysay State University (PRMSU)
                            </span>
                            , I am driven by the intersection of complex architectural logic and human-centric UI systems.
                            My core philosophy is straightforward: powerful technology shouldn't feel over-engineered or complicated to the end user.
                        </p>
                        <p>
                            During my time as a <span className="font-semibold text-[#1C1C1C]">Frontend Developer Intern</span>, I focused on building practical, high-impact systems, notably contributing to the <span className="text-[#1C1C1C] font-medium">AutomatingProposalDocsProcess</span> pipeline. This system streamlined Paperless Proposals by engineering seamless workflows for document Review, Revision, and lifecycle management.
                        </p>
                        <p>
                            Whether I am developing our research and capstone project—a deep learning-powered <span className="text-[#1C1C1C] font-medium">Face Recognition Attendance Monitoring System</span>—or wireframing responsive client portals, my focus stays anchored on crisp execution. I build digital experiences that remain structurally scalable on the backend while staying visually premium on the frontend—favoring modern, minimalist design, glassmorphic finishes, and clean codebases.
                        </p>
                    </div>
                </div>

                {/* ── COLUMN 3 (RIGHT): ASYMMETRIC VALUES BLOCKS ── */}
                <div
                    className={`lg:col-span-3 flex flex-col space-y-6 z-20 lg:pl-4 transition-all duration-1000 delay-300 cubic-bezier(0.16,1,0.3,1) ${hasIntersected ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                        }`}
                >

                    {/* Value Block 1: Purpose */}
                    <div className="space-y-2 border-b border-zinc-200 pb-4 group">
                        <div className="flex items-center gap-2 text-zinc-400">
                            <Target className="w-3.5 h-3.5 text-[#00C9FF] transition-transform duration-300 group-hover:scale-110" />
                            <h4 className="text-[11px] font-bold tracking-widest text-zinc-400 uppercase">
                                Purpose
                            </h4>
                        </div>
                        <p className="text-xs text-zinc-500 leading-relaxed font-normal transition-colors duration-300 group-hover:text-zinc-800">
                            Bridging complex systemic logic with seamless, user-first visual interfaces.
                        </p>
                    </div>

                    {/* Value Block 2: Drive */}
                    <div className="space-y-2 border-b border-zinc-200 pb-4 group">
                        <div className="flex items-center gap-2 text-zinc-400">
                            <Rocket className="w-3.5 h-3.5 text-[#92FE9D] transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5" />
                            <h4 className="text-[11px] font-bold tracking-widest text-zinc-400 uppercase">
                                Drive
                            </h4>
                        </div>
                        <p className="text-xs text-zinc-500 leading-relaxed font-normal transition-colors duration-300 group-hover:text-zinc-800">
                            Obsessed with code layout integrity, clean architecture, and fluid performance.
                        </p>
                    </div>

                    {/* Value Block 3: Mindset */}
                    <div className="space-y-2 pb-4 group">
                        <div className="flex items-center gap-2 text-zinc-400">
                            <Brain className="w-3.5 h-3.5 text-[#00C9FF] transition-transform duration-300 group-hover:scale-110" />
                            <h4 className="text-[11px] font-bold tracking-widest text-zinc-400 uppercase">
                                Mindset
                            </h4>
                        </div>
                        <p className="text-xs text-zinc-500 leading-relaxed font-normal transition-colors duration-300 group-hover:text-zinc-800">
                            Continuous engineering optimization—making powerful tech feel completely effortless.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}