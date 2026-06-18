"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";

export default function HeroSection() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="relative w-full min-h-screen text-foreground bg-background flex items-center overflow-hidden pt-20 pb-16 md:pt-28 md:pb-20 lg:py-0 theme-transition">

            {/* ── AMBIENT BACKDROP ── */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[450px] sm:h-[450px] md:w-[600px] md:h-[600px] pointer-events-none z-0 opacity-25 dark:opacity-35 transition-opacity duration-300">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#00C9FF]/10 to-[#92FE9D]/10 blur-[60px] sm:blur-[90px] animate-pulse duration-[6000ms]" />
                <div className="absolute inset-[-10%] border border-foreground/10 rounded-full border-dashed animate-[spin_160s_linear_infinite]" />
            </div>

            {/* ── STRUCTURED ASYMMETRIC GRID ── */}
            <div className={`mx-auto max-w-7xl w-full px-4 sm:px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-6 items-center lg:items-end relative z-10 h-full transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>

                {/* ── LEFT COLUMN: TYPOGRAPHY, BIO & CTA TRIGGERS ── */}
                {/* Laging una sa mobile at nasa kaliwa sa desktop */}
                <div className="col-span-1 lg:col-span-4 flex flex-col justify-center h-full pb-0 lg:pb-20 pt-4 md:pt-8 lg:pt-0 space-y-5 sm:space-y-6 z-20 order-1">
                    <div className="w-14 h-[3px] sm:w-16 bg-gradient-to-r from-[#00C9FF] to-[#92FE9D]" />

                    <div className="space-y-3 sm:space-y-4">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-foreground">
                            Hi, <br className="hidden sm:inline" />
                            I'm <span className="bg-gradient-to-r from-[#00C9FF] via-[#00B8E8] to-[#92FE9D] bg-clip-text text-transparent">Kian J. Fontillas</span>
                        </h1>
                        <p className="text-foreground/75 text-xs sm:text-sm leading-relaxed max-w-md lg:max-w-sm font-normal transition-colors duration-300">
                            I am an aspiring Full Stack Software Web Developer and AI Enthusiast, deeply committed to continuous growth and learning within the industry. I excel at bridging the gap between heavy algorithmic backends and sleek, fluid user interfaces—building web applications while training models and occasionally making fun of AI hallucinations along the way.
                        </p>
                    </div>

                    <div className="pt-1 flex items-center gap-4">
                        <a
                            href="#work"
                            className="group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-foreground text-background transition-all duration-300 hover:bg-[#00C9FF] hover:text-zinc-950 hover:scale-110 hover:shadow-[0_10px_25px_rgba(0,201,255,0.3)]"
                        >
                            <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5] transition-transform duration-300 group-hover:translate-y-0.5" />
                        </a>
                        <span className="text-[10px] sm:text-xs font-bold tracking-widest text-foreground/50 uppercase select-none transition-colors">
                            Scroll To Projects
                        </span>
                    </div>
                </div>

                {/* ── CENTER COLUMN: GIANT FRAMELESS PORTRAIT CUTOUT ── */}
                <div className="col-span-1 md:col-span-2 lg:col-span-5 flex justify-center items-end h-[300px] sm:h-[380px] md:h-[460px] lg:h-[80vh] xl:h-[85vh] relative z-10 order-2 lg:order-2 select-none my-6 lg:my-0">
                    <div className="relative w-full h-full max-w-[240px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-none flex items-end justify-center">
                        <div className="absolute bottom-2 left-6 right-6 h-[10px] bg-foreground/10 blur-xl rounded-full transition-colors" />
                        
                        {/* LIGHT MODE IMAGE (Nakatago kapag dark mode) */}
                        <Image
                            src="/profile(1).png"
                            alt="Kian J. Fontillas Cutout Portrait (Light Mode)"
                            width={540}
                            height={720}
                            priority
                            className="dark:hidden object-contain object-bottom w-auto h-full max-h-full drop-shadow-[0_15px_30px_rgba(0,0,0,0.06)] filter saturate-[1.01] transition-all duration-500 hover:scale-[1.01]"
                        />

                        {/* DARK MODE IMAGE (Nakatago kapag light mode, ipapakita kapag dark mode) */}
                        <Image
                            src="/profile_dark.png" 
                            alt="Kian J. Fontillas Cutout Portrait (Dark Mode)"
                            width={540}
                            height={720}
                            priority
                            className="hidden dark:block object-contain object-bottom w-auto h-full max-h-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)] filter saturate-[1.01] transition-all duration-500 hover:scale-[1.01]"
                        />
                    </div>
                </div>

                {/* ── RIGHT COLUMN: ASYMMETRIC METADATA BLOCKS & SOCIAL ROW ── */}
                {/* INAYOS: Ginawang `order-3` para ito ang maging pinakahuli sa mobile/tablet viewports */}
                <div className="col-span-1 lg:col-span-3 flex flex-col justify-center h-full pb-4 lg:pb-20 space-y-6 sm:space-y-8 z-20 order-3 lg:order-3 lg:pl-4 text-left">

                    {/* Action Block 1: Explore Work */}
                    <div className="space-y-2 border-b border-foreground/15 pb-4 sm:pb-5 transition-colors duration-300">
                        <h4 className="text-[10px] sm:text-[11px] font-bold tracking-widest text-foreground/50 uppercase">
                            Portfolio Navigation
                        </h4>
                        <p className="text-[11px] sm:text-xs text-foreground/75 leading-relaxed font-normal transition-colors max-w-md lg:max-w-none">
                            Review custom interactive layout setups, lightweight web platforms, and optimized algorithmic backend schemas.
                        </p>
                        <a href="#work" className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold tracking-wide text-foreground hover:text-[#00C9FF] dark:hover:text-[#00C9FF] transition-colors group pt-0.5">
                            EXPLORE MY WORK
                            <ArrowUpRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                    </div>

                    {/* Action Block 2: Download CV */}
                    <div className="space-y-2 border-b border-foreground/15 pb-4 sm:pb-5 transition-colors duration-300">
                        <h4 className="text-[10px] sm:text-[11px] font-bold tracking-widest text-foreground/50 uppercase">
                            Credentials
                        </h4>
                        <p className="text-[11px] sm:text-xs text-foreground/75 leading-relaxed font-normal transition-colors max-w-md lg:max-w-none">
                            Access complete professional history, framework specializations, and deep learning engineering metrics.
                        </p>
                        <a href="/cv.pdf" download className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold tracking-wide text-foreground hover:text-[#00C9FF] dark:hover:text-[#00C9FF] transition-colors group pt-0.5">
                            DOWNLOAD CV
                            <Download className="w-3 h-3 transition-transform duration-300 group-hover:translate-y-0.5" />
                        </a>
                    </div>

                    {/* Action Block 3: Social Row */}
                    <div className="space-y-2 sm:space-y-3">
                        <h4 className="text-[10px] sm:text-[11px] font-bold tracking-widest text-foreground/50 uppercase">
                            Follow Me
                        </h4>
                        <div className="flex items-center gap-4 sm:gap-5 text-foreground/60">
                            {[
                                {
                                    label: "GitHub",
                                    href: "https://github.com",
                                    svg: <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.024A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.293 2.747-1.024 2.747-1.024.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                                },
                                {
                                    label: "LinkedIn",
                                    href: "https://linkedin.com",
                                    svg: <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                },
                                {
                                    label: "Facebook",
                                    href: "https://facebook.com",
                                    svg: <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z" />
                                }
                            ].map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={social.label}
                                    className="transition-all duration-300 hover:text-foreground hover:-translate-y-0.5"
                                >
                                    <svg className="w-4 h-4 fill-current transition-transform duration-300" viewBox="0 0 24 24">
                                        {social.svg}
                                    </svg>
                                </a>
                            ))}
                            <a
                                href="mailto:your-email@example.com"
                                aria-label="Email"
                                className="transition-all duration-300 hover:text-foreground hover:-translate-y-0.5"
                            >
                                <svg className="w-4 h-4 fill-none stroke-current stroke-[2] transition-transform duration-300" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                                    <rect width="20" height="16" x="2" y="4" rx="2" />
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}