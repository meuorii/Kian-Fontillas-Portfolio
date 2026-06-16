"use client";

import { Code2, Cpu, Database, Terminal } from "lucide-react";

export default function SkillsSection() {
    const skillCategories = [
        {
            title: "Frontend Development",
            icon: <Code2 className="w-5 h-5 text-[#00C9FF]" />,
            description: "Engineering fluid, interactive, and responsive user interfaces with type safety.",
            technologies: ["React", "React Native", "TypeScript", "Tailwind CSS", "Next.js", "JavaScript"],
            slugs: "react,nextjs,tailwind,ts,js",
        },
        {
            title: "Backend Architecture",
            icon: <Terminal className="w-5 h-5 text-[#92FE9D]" />,
            description: "Building robust backend services, routing engines, and automation pipelines.",
            technologies: ["Express.js", "Django", "Flask"],
            slugs: "express,django,flask,nodejs,python",
        },
        {
            title: "Database Systems",
            icon: <Database className="w-5 h-5 text-[#00C9FF]" />,
            description: "Designing relational structures, flexible document schemas, and cloud instances.",
            technologies: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Supabase"],
            slugs: "mongodb,mysql,postgres,firebase,supabase",
        },
        {
            title: "Tools & Machine Learning",
            icon: <Cpu className="w-5 h-5 text-[#92FE9D]" />,
            description: "Managing version control, workspace environments, and training frameworks.",
            technologies: ["Git", "Postman", "Docker", "Redis", "PyTorch"],
            slugs: "git,postman,docker,redis,pytorch",
        },
    ];

    return (
        <section id="skills" className="mx-auto max-w-7xl px-6 md:px-12 py-20 relative">

            {/* ── SECTION HEADER ──────────────────────────────────────────────── */}
            <div className="space-y-3 mb-16 max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-widest text-[#00C9FF]">
                    TECHNICAL STACK
                </span>
                <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 leading-tight">
                    Tools of the trade. <br />
                    <span className="bg-gradient-to-r from-[#00C9FF] to-[#92FE9D] bg-clip-text text-transparent">
                        Powered by modern infrastructure.
                    </span>
                </h2>
                <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal pt-1">
                    A collection of languages, frameworks, and tools I leverage to translate complex computational logic into premium digital experiences.
                </p>
            </div>

            {/* ── SKILLS INTERFACE GRID ───────────────────────────────────────── */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                {skillCategories.map((category) => (
                    <div
                        key={category.title}
                        className="group flex flex-col justify-between bg-[#FCFCFC]/60 backdrop-blur-sm border border-zinc-200/80 rounded-2xl p-6 shadow-sm hover:border-zinc-300 transition-all duration-300"
                    >
                        {/* Top Info Layout */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2.5 rounded-xl border border-zinc-100 bg-white shadow-sm group-hover:scale-105 transition-transform duration-300">
                                    {category.icon}
                                </div>
                                <h3 className="font-bold text-base text-zinc-900 tracking-tight">
                                    {category.title}
                                </h3>
                            </div>

                            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                                {category.description}
                            </p>

                            {/* Inline Technology Pills */}
                            <div className="flex flex-wrap gap-1.5 pt-1">
                                {category.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-[11px] font-medium text-zinc-700 bg-zinc-50 border border-zinc-200/60 rounded-md px-2 py-1 transition-colors hover:border-[#00C9FF]/30 hover:text-[#00C9FF]"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Bottom Dynamic Skill Badges */}
                        <div className="mt-6 pt-5 border-t border-zinc-100/80">
                            <div className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">
                                <img
                                    src={`https://skillicons.dev/icons?i=${category.slugs}&theme=light`}
                                    alt={`${category.title} badges`}
                                    loading="lazy"
                                    className="h-10 object-contain max-w-full drop-shadow-[0_1px_2px_rgba(0,0,0,0.03)]"
                                />
                            </div>
                        </div>

                    </div>
                ))}
            </div>

        </section>
    );
}