"use client";

import { useEffect, useState, useRef } from "react";
import { Target, Compass, Heart, Share2 } from "lucide-react";
import { goalsData } from "@/data/goals-data";

export default function GoalsSection() {
    const [hasIntersected, setHasIntersected] = useState(false);
    const [hoveredId, setHoveredId] = useState<string | null>(null);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasIntersected(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const getGoalIcon = (id: string, isHovered: boolean) => {
        const iconClass = `w-5 h-5 transition-colors duration-500 ${
            isHovered ? "text-[#92FE9D]" : "text-[#00C9FF]"
        }`;

        switch (id) {
            case "short-term-mastery": return <Target className={iconClass} />;
            case "product-launch": return <Compass className={iconClass} />;
            case "community-impact": return <Heart className={iconClass} />;
            case "mentorship-growth": return <Share2 className={iconClass} />;
            default: return <Target className={iconClass} />;
        }
    };

    return (
        <section
            id="goals"
            ref={sectionRef}
            className="relative w-full max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 overflow-hidden bg-transparent"
        >
            {/* Fine Technical Grid Accent Lines matching Interests layout setup */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.04] select-none">
                <div className="absolute top-0 left-1/3 bottom-0 w-[1px] border-l border-dashed border-[#00C9FF]" />
                <div className="absolute top-0 left-2/3 bottom-0 w-[1px] border-l border-dashed border-[#92FE9D]" />
            </div>

            <div className="relative z-10 space-y-16 md:space-y-24">

                {/* ── HEADER ── */}
                <div
                    className={`space-y-4 max-w-xl transition-all duration-1000 ${
                        hasIntersected ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                    }`}
                >
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#00C9FF] to-[#92FE9D]" />
                        <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                            Future Outlook
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-zinc-50">
                        Objectives & Aspirations
                        <span className="bg-gradient-to-r from-[#00C9FF] to-[#92FE9D] bg-clip-text text-transparent">.</span>
                    </h2>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                        A clean look at what I am currently working toward, both in terms of technical craft and local community impact.
                    </p>
                </div>

                {/* ── INTERACTIVE TIMELINE / LIST LAYOUT ── */}
                <div 
                    className={`space-y-6 transition-all duration-1000 delay-200 ${
                        hasIntersected ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                    }`}
                >
                    {goalsData.map((goal, idx) => {
                        const isHovered = hoveredId === goal.id;
                        const displayIndex = String(idx + 1).padStart(2, "0");

                        return (
                            <div
                                key={goal.id}
                                onMouseEnter={() => setHoveredId(goal.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                className={`relative group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 p-6 md:p-8 rounded-2xl border transition-all duration-500 bg-white dark:bg-zinc-800/40 backdrop-blur-md ${
                                    isHovered
                                        ? "shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_30px_60px_rgba(0,0,0,0.3)] -translate-y-0.5"
                                        : "border-zinc-200 dark:border-zinc-700/60 shadow-[0_2px_12px_rgba(0,0,0,0.04)] dark:shadow-none"
                                }`}
                                style={{
                                    borderColor: isHovered ? "#00C9FF" : ""
                                }}
                            >
                                {/* Ambient Glass Aura inside card */}
                                <div className="absolute inset-0 rounded-2xl transition-opacity duration-700 pointer-events-none opacity-0 group-hover:opacity-100 bg-gradient-to-br from-[#00C9FF]/[0.02] to-[#92FE9D]/[0.02]" />

                                {/* Left Accent Active Bar */}
                                <div 
                                    className={`absolute left-0 top-1/2 -translate-y-1/2 w-[3px] rounded-r-full transition-all duration-500 ${
                                        isHovered ? "h-12 bg-gradient-to-b from-[#00C9FF] to-[#92FE9D]" : "h-0 bg-transparent"
                                    }`}
                                />

                                {/* Column 1: Index Number & Icon */}
                                <div className="md:col-span-3 flex items-center justify-between md:justify-start gap-4 relative z-10">
                                    <div className="flex items-center gap-3">
                                        <span className={`text-xs font-bold tracking-wider transition-colors duration-300 ${
                                            isHovered ? "text-[#00C9FF]" : "text-zinc-400 dark:text-zinc-600"
                                        }`}>
                                            {displayIndex}
                                        </span>
                                        <div 
                                            className="p-3 rounded-xl border border-zinc-200/80 dark:border-zinc-700/80 bg-white/90 dark:bg-zinc-900/90 shadow-sm transition-all duration-500 group-hover:scale-105"
                                            style={{ borderColor: isHovered ? "#92FE9D" : "" }}
                                        >
                                            {getGoalIcon(goal.id, isHovered)}
                                        </div>
                                    </div>
                                    
                                    {/* Category pill on mobile/tablet screens */}
                                    <span className="md:hidden text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400">
                                        {goal.category}
                                    </span>
                                </div>

                                {/* Column 2: Main Content Title & Description */}
                                <div className="md:col-span-6 space-y-1.5 relative z-10">
                                    <h3 className="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
                                        {goal.title}
                                    </h3>
                                    <p className="text-xs sm:text-[13px] text-zinc-500 dark:text-zinc-400 leading-relaxed font-normal group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors duration-300 max-w-2xl">
                                        {goal.description}
                                    </p>
                                </div>

                                {/* Column 3: Category Label (Desktop layout placement) */}
                                <div className="hidden md:col-span-3 md:flex items-center justify-end relative z-10">
                                    <span className={`text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full border transition-all duration-500 ${
                                        isHovered 
                                            ? "border-[#00C9FF]/30 text-[#00C9FF] bg-[#00C9FF]/[0.04]" 
                                            : "border-zinc-200 dark:border-zinc-800 text-zinc-400 dark:text-zinc-500"
                                    }`}>
                                        {goal.category}
                                    </span>
                                </div>

                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}