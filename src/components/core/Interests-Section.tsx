"use client";

import { useEffect, useState, useRef } from "react";
import { Sparkles, Terminal, Layers, Eye, Globe, ArrowUpRight, Activity } from "lucide-react";
import { interestsData } from "@/data/interests-data";

export default function InterestsSection() {
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

    const getInterestIcon = (id: string, isHovered: boolean) => {
        const iconClass = `w-5 h-5 transition-colors duration-300 ${
            isHovered ? "text-[#92FE9D]" : "text-[#00C9FF]"
        }`;

        switch (id) {
            case "ai-ml-architecture": return <Terminal className={iconClass} />;
            case "full-stack-engineering": return <Layers className={iconClass} />;
            case "ui-ux-craftsmanship": return <Eye className={iconClass} />;
            case "civic-tech": return <Globe className={iconClass} />;
            default: return <Sparkles className={iconClass} />;
        }
    };

    const getGridSpanClass = (index: number) => {
        if (index === 0) return "md:col-span-7 lg:col-span-8";
        if (index === 1) return "md:col-span-5 lg:col-span-4";
        if (index === 2) return "md:col-span-5 lg:col-span-4";
        return "md:col-span-7 lg:col-span-8";
    };

    return (
        <section
            id="interests"
            ref={sectionRef}
            className="relative w-full max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 overflow-hidden bg-transparent"
        >
            {/* Fine Technical Grid Accent Lines */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.04] select-none">
                <div className="absolute top-0 left-1/3 bottom-0 w-[1px] border-l border-dashed border-[#00C9FF]" />
                <div className="absolute top-0 left-2/3 bottom-0 w-[1px] border-l border-dashed border-[#92FE9D]" />
            </div>

            <div className="relative z-10 space-y-12">

                {/* ── HEADER ── */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-200/60 dark:border-zinc-700/60 pb-8">
                    <div
                        className={`space-y-3 max-w-xl transition-all duration-1000 ${
                            hasIntersected ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                        }`}
                    >
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#00C9FF] to-[#92FE9D]" />
                            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-500">
                                Technical Affiliations
                            </span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-zinc-50 leading-none">
                            Research & Fascinations
                            <span className="bg-gradient-to-r from-[#00C9FF] to-[#92FE9D] bg-clip-text text-transparent">.</span>
                        </h2>
                    </div>

                    <div
                        className={`flex items-center gap-3 font-mono text-[10px] tracking-wider transition-all duration-1000 delay-200 ${
                            hasIntersected ? "opacity-100" : "opacity-0"
                        }`}
                        style={{ color: "#00C9FF" }}
                    >
                        <Activity className="w-3.5 h-3.5 animate-pulse text-[#92FE9D]" />
                        <span className="text-zinc-500 dark:text-zinc-500">METRICS: SYSTEM_PASSION_ALIGNED</span>
                    </div>
                </div>

                {/* ── BENTO GRID ── */}
                <div
                    className={`grid grid-cols-1 md:grid-cols-12 gap-5 transition-all duration-1000 delay-150 ${
                        hasIntersected ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                    }`}
                >
                    {interestsData.map((interest, idx) => {
                        const isHovered = hoveredId === interest.id;
                        const spanClass = getGridSpanClass(idx);

                        return (
                            <div
                                key={interest.id}
                                onMouseEnter={() => setHoveredId(interest.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                className={`relative flex flex-col justify-between p-6 md:p-8 rounded-2xl border transition-all duration-500 bg-white dark:bg-zinc-800/40 backdrop-blur-md group ${spanClass} ${
                                    isHovered
                                        ? "shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_30px_60px_rgba(0,0,0,0.3)] -translate-y-1"
                                        : "border-zinc-200 dark:border-zinc-700/60 shadow-[0_2px_12px_rgba(0,0,0,0.04)] dark:shadow-none"
                                }`}
                                style={{
                                    borderColor: isHovered ? "#00C9FF" : ""
                                }}
                            >
                                {/* Ambient Aura */}
                                <div className="absolute inset-0 rounded-2xl transition-opacity duration-700 pointer-events-none opacity-0 group-hover:opacity-100 bg-gradient-to-br from-[#00C9FF]/[0.03] to-[#92FE9D]/[0.03]" />

                                {/* Top Meta Header */}
                                <div className="flex items-start justify-between relative z-10">
                                    <div className="flex items-center gap-4">
                                        <div
                                            className="p-3 rounded-xl border border-zinc-200/80 dark:border-zinc-700/80 bg-white/90 dark:bg-zinc-900/90 shadow-sm transition-all duration-500 group-hover:scale-105"
                                            style={{ borderColor: isHovered ? "#92FE9D" : "" }}
                                        >
                                            {getInterestIcon(interest.id, isHovered)}
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[9px] font-mono tracking-widest text-zinc-400 dark:text-zinc-500 uppercase">
                                                {interest.category}
                                            </span>
                                            <span
                                                className="text-[10px] font-mono font-bold mt-0.5 transition-colors duration-300"
                                                style={{ color: isHovered ? "#00C9FF" : "#A1A1AA" }}
                                            >
                                                ID_0{idx + 1} //
                                            </span>
                                        </div>
                                    </div>

                                    <div
                                        className="p-1.5 rounded-full border bg-white dark:bg-zinc-900 shadow-sm transition-all duration-300"
                                        style={{
                                            borderColor: isHovered ? "#00C9FF" : "rgba(228,228,231,0.6)",
                                            color: isHovered ? "#00C9FF" : "#A1A1AA"
                                        }}
                                    >
                                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-45" />
                                    </div>
                                </div>

                                {/* Main Content */}
                                <div className="mt-8 space-y-2.5 relative z-10">
                                    <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
                                        {interest.title}
                                    </h3>
                                    <p className="text-xs sm:text-[13px] text-zinc-500 dark:text-zinc-400 leading-relaxed font-normal group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors duration-300 max-w-2xl">
                                        {interest.description}
                                    </p>
                                </div>

                                {/* Footer Verification Line */}
                                <div className="mt-6 pt-4 border-t border-zinc-100/80 dark:border-zinc-700/60 flex items-center justify-between font-mono text-[9px] text-zinc-400 dark:text-zinc-500 relative z-10">
                                    <div className="flex items-center gap-1.5">
                                        <span
                                            className="w-1.5 h-1.5 rounded-full transition-all duration-500"
                                            style={{ backgroundColor: isHovered ? "#92FE9D" : "#E4E4E7" }}
                                        />
                                        <span className="group-hover:text-zinc-500 dark:group-hover:text-zinc-400 transition-colors">VERIFIED_ALIGNMENT</span>
                                    </div>
                                    <span
                                        className="opacity-0 group-hover:opacity-100 transition-all duration-300 font-bold tracking-tighter"
                                        style={{ color: "#00C9FF" }}
                                    >
                                        {interest.id.toUpperCase().replace(/-/g, '_')}
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