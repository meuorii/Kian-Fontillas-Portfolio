"use client";

import { useEffect, useState, useRef } from "react";
import { Code2, Cpu, Database, Terminal } from "lucide-react";

export default function SkillsSection() {
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
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const skillCategories = [
        {
            title: "What Users See",
            icon: <Code2 className="w-5 h-5 text-[#00C9FF]" />,
            description: "Making smooth, clean, and beautiful web pages and mobile apps that fit perfectly on any screen.",
            technologies: ["React", "React Native", "TypeScript", "Tailwind CSS", "Next.js", "JavaScript"],
            slugs: "react,nextjs,tailwind,ts,js", // Fixed this back to slugs!
            gridClass: "lg:col-span-7",
        },
        {
            title: "Behind the Scenes",
            icon: <Terminal className="w-5 h-5 text-[#92FE9D]" />,
            description: "Creating the main systems and data rules that make the app run safely and fast.",
            technologies: ["Express.js", "Django", "Flask"],
            slugs: "express,django,flask,nodejs,python",
            gridClass: "lg:col-span-5",
        },
        {
            title: "Storing Data",
            icon: <Database className="w-5 h-5 text-[#00C9FF]" />,
            description: "Setting up clean digital filing systems to save, protect, and organize information.",
            technologies: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Supabase"],
            slugs: "mongodb,mysql,postgres,firebase,supabase",
            gridClass: "lg:col-span-5",
        },
        {
            title: "Smart Tools & AI",
            icon: <Cpu className="w-5 h-5 text-[#92FE9D]" />,
            description: "Using helper tools to track code history, manage projects, and teach smart AI models.",
            technologies: ["Git", "Postman", "Docker", "Redis", "PyTorch"],
            slugs: "git,postman,docker,redis,pytorch",
            gridClass: "lg:col-span-7",
        },
    ];

    return (
        <section
            id="skills"
            ref={sectionRef}
            className="relative w-full max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 overflow-hidden"
        >
            <div className="relative z-10 space-y-12">

                {/* ── ROW 1: FULL-WIDTH SPLIT HEADER ── */}
                <div
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-6 items-end transition-all duration-1000 ${
                        hasIntersected ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                    }`}
                >
                    <div className="lg:col-span-7 space-y-3">
                        <div className="w-16 h-[3px] bg-gradient-to-r from-[#00C9FF] to-[#92FE9D]" />
                        <div className="space-y-1">
                            <span className="text-[11px] font-bold uppercase tracking-widest text-text-dim theme-transition">
                                MY TOOLS & SKILLS
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-text-main leading-tight theme-transition">
                                What I use to build. <br />
                                <span className="bg-gradient-to-r from-[#00C9FF] to-[#92FE9D] bg-clip-text text-transparent">
                                    Crafted with powerful technology.
                                </span>
                            </h2>
                        </div>
                    </div>

                    <div className="lg:col-span-5 lg:pl-6 pb-1 space-y-4">
                        <p className="text-sm text-text-muted leading-relaxed font-normal border-l-2 border-card-border pl-4 theme-transition">
                            A chosen list of computer languages, code frameworks, and smart tools that I use to turn ideas into clean, fast, and easy-to-use apps.
                        </p>
                        <div className="flex items-start gap-2 pl-4 text-[11px] font-mono text-text-dim theme-transition">
                            <span className="text-[#00C9FF] font-bold">//</span>
                            <p className="leading-normal">
                                Always improving. Ready to adapt and <span className="text-text-muted font-semibold">excited to learn new things</span>, try new tools, and find the best answers to tricky problems.
                            </p>
                        </div>
                    </div>
                </div>

                {/* ── ROW 2: ASYMMETRIC BENTO GRID ── */}
                <div
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-6 w-full transition-all duration-1000 delay-150 ${
                        hasIntersected ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                    }`}
                >
                    {skillCategories.map((category) => (
                        <div
                            key={category.title}
                            className={`group flex flex-col justify-between bg-card backdrop-blur-md border border-card-border rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.05)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.15)] hover:border-text-dim/40 hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] theme-transition ${category.gridClass}`}
                        >
                            {/* Top Compartment */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-xl border border-card-border/40 bg-card-inner shadow-sm transition-transform duration-300 group-hover:scale-105 theme-transition">
                                        {category.icon}
                                    </div>
                                    <h3 className="font-bold text-base text-text-main tracking-tight theme-transition">
                                        {category.title}
                                    </h3>
                                </div>

                                <p className="text-xs sm:text-sm text-text-muted leading-relaxed max-w-xl font-normal theme-transition">
                                    {category.description}
                                </p>

                                {/* Tech Pills */}
                                <div className="flex flex-wrap gap-1.5 pt-1">
                                    {category.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-[11px] font-medium text-text-muted bg-card-inner border border-card-border/60 rounded-md px-2 py-0.5 transition-all hover:border-[#00C9FF]/40 hover:text-[#00C9FF]"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Bottom Identity Shelf */}
                            <div className="mt-8 pt-4 border-t border-card-border/60 flex items-center justify-between theme-transition">
                                <span className="text-[10px] font-mono tracking-widest text-text-dim uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 theme-transition">
                                    // tools_used
                                </span>
                                <div className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                                    <img
                                        src={`https://skillicons.dev/icons?i=${category.slugs}&theme=light`}
                                        alt={`${category.title} icons`}
                                        loading="lazy"
                                        className="h-8 object-contain max-w-full drop-shadow-[0_1px_2px_rgba(0,0,0,0.01)] dark:hidden"
                                    />
                                    <img
                                        src={`https://skillicons.dev/icons?i=${category.slugs}&theme=dark`}
                                        alt={`${category.title} icons`}
                                        loading="lazy"
                                        className="h-8 object-contain max-w-full hidden dark:inline-block"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}