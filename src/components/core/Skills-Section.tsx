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
            title: "Frontend Development",
            icon: <Code2 className="w-5 h-5 text-[#00C9FF]" />,
            description: "Engineering fluid, interactive, and responsive user interfaces with type safety.",
            technologies: ["React", "React Native", "TypeScript", "Tailwind CSS", "Next.js", "JavaScript"],
            slugs: "react,nextjs,tailwind,ts,js",
            gridClass: "lg:col-span-7",
        },
        {
            title: "Backend Architecture",
            icon: <Terminal className="w-5 h-5 text-[#92FE9D]" />,
            description: "Building robust backend services, routing engines, and automation pipelines.",
            technologies: ["Express.js", "Django", "Flask"],
            slugs: "express,django,flask,nodejs,python",
            gridClass: "lg:col-span-5",
        },
        {
            title: "Database Systems",
            icon: <Database className="w-5 h-5 text-[#00C9FF]" />,
            description: "Designing relational structures, flexible document schemas, and cloud instances.",
            technologies: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Supabase"],
            slugs: "mongodb,mysql,postgres,firebase,supabase",
            gridClass: "lg:col-span-5",
        },
        {
            title: "Tools & Machine Learning",
            icon: <Cpu className="w-5 h-5 text-[#92FE9D]" />,
            description: "Managing version control, workspace environments, and training frameworks.",
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
                                TECHNICAL STACK
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-text-main leading-tight theme-transition">
                                Tools of the trade. <br />
                                <span className="bg-gradient-to-r from-[#00C9FF] to-[#92FE9D] bg-clip-text text-transparent">
                                    Powered by modern infrastructure.
                                </span>
                            </h2>
                        </div>
                    </div>

                    <div className="lg:col-span-5 lg:pl-6 pb-1 space-y-4">
                        <p className="text-sm text-text-muted leading-relaxed font-normal border-l-2 border-card-border pl-4 theme-transition">
                            A curated selection of languages, architectural frameworks, and machine learning tools leveraged to map algorithmic logic into sleek, high-end interfaces.
                        </p>
                        <div className="flex items-start gap-2 pl-4 text-[11px] font-mono text-text-dim theme-transition">
                            <span className="text-[#00C9FF] font-bold">//</span>
                            <p className="leading-normal">
                                Always evolving. Highly adaptable and <span className="text-text-muted font-semibold">actively driven to learn and explore</span> alternative frameworks, languages, and emerging tools to solve arbitrary system challenges.
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
                                    // verified_stack
                                </span>
                                <div className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                                    {/* skillicons.dev theme toggling remains controlled cleanly via native CSS hidden/dark layers */}
                                    <img
                                        src={`https://skillicons.dev/icons?i=${category.slugs}&theme=light`}
                                        alt={`${category.title} badges`}
                                        loading="lazy"
                                        className="h-8 object-contain max-w-full drop-shadow-[0_1px_2px_rgba(0,0,0,0.01)] dark:hidden"
                                    />
                                    <img
                                        src={`https://skillicons.dev/icons?i=${category.slugs}&theme=dark`}
                                        alt={`${category.title} badges`}
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