"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { ExternalLink, ArrowUpRight, Smartphone, Laptop, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { projectsData } from "@/data/project-data";

export default function WorksSection() {
    const [hasIntersected, setHasIntersected] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);
    const carouselRef = useRef<HTMLDivElement>(null);
    const [activeImages, setActiveImages] = useState<Record<string, number>>({});

    const sortedProjects = [...projectsData].sort((a, b) => {
        const parseEndDate = (dateStr: string | undefined) => {
            if (!dateStr || dateStr.toLowerCase() === "present") {
                return new Date(8640000000000000).getTime();
            }
            return new Date(dateStr).getTime();
        };
        return parseEndDate(b.meta.endTimeline) - parseEndDate(a.meta.endTimeline);
    });

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasIntersected(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.02 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!hasIntersected) return;

        const interval = setInterval(() => {
            setActiveImages((prev) => {
                const updated = { ...prev };
                sortedProjects.forEach((project) => {
                    if (project.images && project.images.length > 1) {
                        const currentIdx = prev[project.id] ?? 0;
                        updated[project.id] = (currentIdx + 1) % project.images.length;
                    }
                });
                return updated;
            });
        }, 5000);

        return () => clearInterval(interval);
    }, [hasIntersected, sortedProjects]);

    const handleImageSwitch = (projectId: string, index: number) => {
        setActiveImages((prev) => ({ ...prev, [projectId]: index }));
    };

    const handleScroll = () => {
        if (!carouselRef.current) return;
        const container = carouselRef.current;
        const scrollLeft = container.scrollLeft;
        
        const firstItem = container.querySelector("[data-carousel-item]");
        if (!firstItem) return;
        
        const itemWidth = firstItem.getBoundingClientRect().width;
        const newIndex = Math.round(scrollLeft / itemWidth);
        
        if (newIndex !== activeIndex && newIndex >= 0 && newIndex < sortedProjects.length) {
            setActiveIndex(newIndex);
        }
    };

    const scrollToProject = (index: number) => {
        if (!carouselRef.current) return;
        const container = carouselRef.current;
        const firstItem = container.querySelector("[data-carousel-item]");
        if (!firstItem) return;

        const itemWidth = firstItem.getBoundingClientRect().width;
        container.scrollTo({ left: index * itemWidth, behavior: "smooth" });
        setActiveIndex(index);
    };

    const handleArrowClick = (direction: "left" | "right") => {
        let nextIndex = direction === "left" ? activeIndex - 1 : activeIndex + 1;
        if (nextIndex < 0) nextIndex = sortedProjects.length - 1;
        if (nextIndex >= sortedProjects.length) nextIndex = 0;
        scrollToProject(nextIndex);
    };

    return (
        <section
            id="works"
            ref={sectionRef}
            className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-16 sm:py-24 md:py-32 overflow-hidden bg-transparent"
        >
            <div className="relative z-10 space-y-12 md:space-y-16">

                {/* ── ROW 1: EDITORIAL HEADER ── */}
                <div
                    className={`grid grid-cols-1 md:grid-cols-12 gap-6 items-end transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        hasIntersected ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                    }`}
                >
                    <div className="md:col-span-9 space-y-3 sm:space-y-4">
                        <div className="w-16 sm:w-20 h-1 bg-linear-to-r from-[#00C9FF] to-[#92FE9D]" />
                        <div className="space-y-1.5 sm:space-y-2">
                            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-zinc-500">
                                SHOWCASE
                            </span>
                            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-zinc-900 dark:text-zinc-50 leading-tight">
                                My Works. <br />
                                <span className="bg-linear-to-r from-[#00C9FF] to-[#92FE9D] bg-clip-text text-transparent">
                                    Team-built with modern tools.
                                </span>
                            </h2>
                        </div>
                    </div>
                </div>

                {/* ── ROW 2: CAROUSEL ── */}
                <div className="relative w-full">
                    <div
                        ref={carouselRef}
                        onScroll={handleScroll}
                        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none rounded-3xl pt-2 px-0.5 scroll-smooth w-full"
                        style={{ WebkitOverflowScrolling: "touch" }}
                    >
                        {sortedProjects.map((project, index) => {
                            const currentActiveIndex = activeImages[project.id] ?? 0;
                            const isMobileProject = project.category?.toLowerCase().includes("mobile");

                            return (
                                <div
                                    key={project.id}
                                    data-carousel-item
                                    className={`w-full shrink-0 snap-start snap-always
                                        flex flex-col md:flex-row gap-6 sm:gap-8 lg:gap-12 items-stretch 
                                        bg-white dark:bg-zinc-800/40 backdrop-blur-md 
                                        border border-zinc-200 dark:border-zinc-700/60
                                        rounded-3xl overflow-hidden p-5 sm:p-7 md:p-8 lg:p-10 
                                        shadow-[0_4px_20px_rgba(0,0,0,0.06)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.2)]
                                        hover:border-zinc-300 dark:hover:border-zinc-600/80
                                        hover:shadow-[0_8px_32px_rgba(0,0,0,0.09)] dark:hover:shadow-[0_32px_64px_rgba(0,0,0,0.25)]
                                        group transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                                        hasIntersected ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                                    }`}
                                    style={{ transitionDelay: `${index * 50}ms` }}
                                >
                                    {/* LEFT: Image Canvas */}
                                    <div className="w-full md:w-[48%] lg:w-[56%] aspect-video sm:aspect-16/10 bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-700/50 rounded-2xl overflow-hidden shadow-[inset_0_1px_4px_rgba(0,0,0,0.005)] flex flex-col justify-between p-3 relative transition-all duration-500 group-hover:border-zinc-300 dark:group-hover:border-zinc-600 shrink-0">

                                        {/* Browser Mockup Bar */}
                                        <div className="flex items-center justify-between w-full border-b border-zinc-100 dark:border-zinc-800 pb-2 z-20 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm absolute top-0 inset-x-0 px-3 sm:px-4 pt-2.5 sm:pt-3">
                                            <div className="flex items-center gap-1.5">
                                                <div className="w-1.5 h-1.5 rounded-full bg-zinc-200 dark:bg-zinc-700 group-hover:bg-red-400/80 transition-colors duration-300" />
                                                <div className="w-1.5 h-1.5 rounded-full bg-zinc-200 dark:bg-zinc-700 group-hover:bg-yellow-400/80 transition-colors duration-300" />
                                                <div className="w-1.5 h-1.5 rounded-full bg-zinc-200 dark:bg-zinc-700 group-hover:bg-green-400/80 transition-colors duration-300" />
                                            </div>
                                            <span className="text-[7px] sm:text-[8px] font-mono font-medium text-zinc-400 dark:text-zinc-500 tracking-tight">
                                                view_0{currentActiveIndex + 1}.config
                                            </span>
                                        </div>

                                        {/* Image Asset Canvas */}
                                        <div className="absolute inset-0 overflow-hidden rounded-2xl pt-8 sm:pt-10 pb-1 px-1 flex items-center justify-center bg-white dark:bg-zinc-900">
                                            {project.images && project.images.length > 0 && (
                                                <div className="relative w-full h-full">
                                                    {project.images.map((img, imgIdx) => (
                                                        <Image
                                                            key={imgIdx}
                                                            src={img}
                                                            alt={`${project.title} canvas screen`}
                                                            fill
                                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 55vw"
                                                            className={`object-contain object-center transition-all duration-700 ease-in-out transform ${
                                                                currentActiveIndex === imgIdx
                                                                    ? "opacity-100 scale-100 group-hover:scale-[1.015]"
                                                                    : "opacity-0 scale-95 pointer-events-none"
                                                            }`}
                                                            priority={index === 0 && imgIdx === 0}
                                                        />
                                                    ))}
                                                </div>
                                            )}

                                            {/* Thumbnail Selector */}
                                            {project.images && project.images.length > 1 && (
                                                <div className="absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-1.5 bg-[#1C1C1C]/90 backdrop-blur-md px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-xl border border-white/10 shadow-lg z-30 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 max-w-[90%] overflow-x-auto scrollbar-none">
                                                    {project.images.map((img, imgIdx) => (
                                                        <button
                                                            key={imgIdx}
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                e.stopPropagation();
                                                                handleImageSwitch(project.id, imgIdx);
                                                            }}
                                                            className={`relative h-4 w-7 sm:h-5 sm:w-8 rounded overflow-hidden border transition-all duration-300 shrink-0 ${
                                                                currentActiveIndex === imgIdx
                                                                    ? "border-[#00C9FF] scale-105"
                                                                    : "border-transparent opacity-40 hover:opacity-100"
                                                            }`}
                                                        >
                                                            <Image
                                                                src={img}
                                                                alt="snapshot anchor thumbnail"
                                                                fill
                                                                sizes="32px"
                                                                className="object-cover"
                                                            />
                                                        </button>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* RIGHT: Data Shelf */}
                                    <div className="flex flex-col flex-1 justify-between pt-2 md:py-1 space-y-4 sm:space-y-6">
                                        <div className="space-y-3 sm:space-y-4">
                                            <div className="flex items-center justify-between gap-2">
                                                {/* CONDITIONAL ICON CONTAINER - Theme inverted for accessibility */}
                                                <div className="flex items-center gap-1.5 text-[9px] sm:text-[10px] font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">
                                                    {isMobileProject ? (
                                                        <Smartphone className="w-3.5 h-3.5 text-zinc-900 dark:text-zinc-100" />
                                                    ) : (
                                                        <Laptop className="w-3.5 h-3.5 text-zinc-900 dark:text-zinc-100" />
                                                    )}
                                                    {project.category}
                                                </div>

                                                {project.collaborators && project.collaborators.length > 0 ? (
                                                    <div className="flex items-center">
                                                        <div className="flex -space-x-1 overflow-hidden p-0.5">
                                                            {project.collaborators.map((user, uIdx) => (
                                                                <a
                                                                    key={uIdx}
                                                                    href={user.github}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="relative transition-all duration-300 hover:scale-110 hover:z-30 block group/avatar"
                                                                    title={`Open ${user.name}'s Profile`}
                                                                >
                                                                    <div className="relative h-5 w-5 rounded-full ring-2 ring-white dark:ring-zinc-800 overflow-hidden group-hover/avatar:ring-[#00C9FF]/50">
                                                                        <Image
                                                                            src={user.avatar}
                                                                            alt={user.name}
                                                                            fill
                                                                            sizes="20px"
                                                                            className="object-cover"
                                                                        />
                                                                    </div>
                                                                </a>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <span className="text-[8px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-tight bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded-md">
                                                        Solo Project
                                                    </span>
                                                )}
                                            </div>

                                            <div className="space-y-0.5 sm:space-y-1">
                                                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:text-[#00C9FF] transition-colors duration-300 leading-tight">
                                                    {project.title}
                                                </h3>
                                                <p className="text-[11px] sm:text-xs font-semibold text-zinc-400 dark:text-zinc-500 tracking-tight leading-snug">
                                                    {project.subtitle}
                                                </p>
                                            </div>

                                            <p className="text-xs sm:text-[13px] text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal line-clamp-4 md:line-clamp-5 lg:line-clamp-6">
                                                {project.description}
                                            </p>
                                        </div>

                                        {/* Bottom Row */}
                                        <div className="space-y-4 pt-1">
                                            <div className="flex items-center min-h-6 overflow-hidden">
                                                {project.slugs && (
                                                    <>
                                                        {/* Light Mode Layout: Shows darker badge theme */}
                                                        <img
                                                            src={`https://skillicons.dev/icons?i=${project.slugs}&theme=dark`}
                                                            alt={`${project.title} development bundle badges`}
                                                            className="h-6 sm:h-7 object-contain opacity-90 group-hover:opacity-100 transition-all duration-300 dark:hidden"
                                                        />
                                                        {/* Dark Mode Layout: Shows lighter badge theme */}
                                                        <img
                                                            src={`https://skillicons.dev/icons?i=${project.slugs}&theme=light`}
                                                            alt={`${project.title} development bundle badges`}
                                                            className="h-6 sm:h-7 object-contain opacity-90 group-hover:opacity-100 transition-all duration-300 hidden dark:inline-block"
                                                        />
                                                    </>
                                                )}
                                            </div>

                                            <div className="flex items-center justify-between border-t border-zinc-200/55 dark:border-zinc-700/55 pt-3.5">
                                                <div className="flex flex-wrap items-center gap-x-1.5 gap-y-1 font-mono text-[8px] sm:text-[9px] text-zinc-400 dark:text-zinc-500">
                                                    <Calendar className="w-3.5 h-3.5 inline shrink-0" />
                                                    <span>{project.meta.startTimeline} – {project.meta.endTimeline}</span>
                                                    <span className="text-zinc-300 dark:text-zinc-600 hidden sm:inline">•</span>
                                                    <span className="text-zinc-500 dark:text-zinc-400 font-bold uppercase tracking-wider block sm:inline w-full sm:w-auto">{project.meta.role}</span>
                                                </div>

                                                <div className="flex items-center gap-3 sm:gap-3.5 shrink-0">
                                                    {project.links.github && (
                                                        <a
                                                            href={project.links.github}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center gap-1 text-xs font-bold text-zinc-900 dark:text-zinc-200 hover:text-[#00C9FF] dark:hover:text-[#00C9FF] transition-colors group/link"
                                                        >
                                                            <SiGithub className="w-3.5 h-3.5" /> 
                                                            <ArrowUpRight className="w-2.5 h-2.5 text-zinc-400 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                                        </a>
                                                    )}
                                                    {project.links.live && (
                                                        <a
                                                            href={project.links.live}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center gap-0.5 text-xs font-bold text-zinc-900 dark:text-zinc-200 hover:text-[#00C9FF] dark:hover:text-[#00C9FF] transition-colors group/link"
                                                        >
                                                            <ExternalLink className="w-3.5 h-3.5 stroke-2" />
                                                            <ArrowUpRight className="w-2.5 h-2.5 text-zinc-400 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* ── ROW 3: BOTTOM CONTROLS ── */}
                <div className="flex items-center justify-between border-t border-zinc-200/50 dark:border-zinc-700/50 pt-5 px-1">
                    {/* Dot Indicators */}
                    <div className="flex items-center gap-2">
                        {sortedProjects.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => scrollToProject(idx)}
                                className={`h-1.5 rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                                    activeIndex === idx
                                        ? "w-8 sm:w-10 bg-linear-to-r from-[#00C9FF] to-[#92FE9D] opacity-100"
                                        : "w-1.5 sm:w-2 bg-zinc-300 dark:bg-zinc-600 hover:bg-zinc-400 dark:hover:bg-zinc-500 opacity-60"
                                }`}
                                aria-label={`Go to project slide ${idx + 1}`}
                            />
                        ))}
                    </div>

                    {/* Arrow Buttons */}
                    <div className="flex items-center gap-2.5">
                        <button
                            onClick={() => handleArrowClick("left")}
                            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-zinc-200 dark:border-zinc-700 bg-white/80 dark:bg-zinc-800/80 backdrop-blur-md flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:text-[#00C9FF] hover:border-zinc-300 dark:hover:border-zinc-600 active:scale-95 shadow-[0_4px_12px_rgba(0,0,0,0.02)] transition-all"
                            aria-label="Scroll left"
                        >
                            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                        </button>
                        <button
                            onClick={() => handleArrowClick("right")}
                            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-zinc-200 dark:border-zinc-700 bg-white/80 dark:bg-zinc-800/80 backdrop-blur-md flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:text-[#00C9FF] hover:border-zinc-300 dark:hover:border-zinc-600 active:scale-95 shadow-[0_4px_12px_rgba(0,0,0,0.02)] transition-all"
                            aria-label="Scroll right"
                        >
                            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}