"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Download, User } from "lucide-react";

export default function HeroSection() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="mx-auto max-w-7xl px-6 md:px-12 pt-16 pb-20 md:pt-24 md:pb-28 relative">
            <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center transition-all duration-1000 cubic-bezier(0.16,1,0.3,1) transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>

                {/* ── LEFT SIDE: TEXT CONTENT & CTAs ───────────────────────────────── */}
                <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">

                    {/* Top Info Capsule Pill */}
                    <div className="inline-flex items-center gap-1.5 rounded-full border border-current/10 px-4 py-1.5 text-xs font-medium text-inherit/80 shadow-sm transition-all duration-300 hover:border-[#00C9FF]/50">
                        <span>Developer</span>
                        <span className="opacity-20">•</span>
                        <span className="text-[#00C9FF] font-semibold">AI Enthusiast</span>
                        <span className="opacity-20">•</span>
                        <span>Problem Solver</span>
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-inherit leading-[1.1]">
                        Hi, I'm <br />
                        <span className="bg-gradient-to-r from-[#00C9FF] to-[#92FE9D] bg-clip-text text-transparent">
                            Kian J. Fontillas
                        </span>
                    </h1>

                    {/* Expanded Core Bio Body */}
                    <p className="max-w-xl text-sm sm:text-base leading-relaxed text-inherit/80 font-normal">
                        I am an aspiring Full Stack Software Web Developer and AI Enthusiast,
                        deeply committed to continuous growth and learning within the industry. I
                        excel at bridging the gap between heavy algorithmic backends and sleek,
                        fluid user interfaces—building web applications while training models and
                        occasionally making fun of AI hallucinations along the way.
                    </p>

                    {/* Call To Action Buttons Block */}
                    <div className="flex flex-wrap items-center gap-4 pt-2 w-full">

                        {/* Primary: Explore Work */}
                        <a
                            href="#work"
                            className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-xl bg-[#00C9FF] px-7 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-98 hover:bg-[#92FE9D] hover:text-zinc-950 hover:shadow-[#92FE9D]/20"
                        >
                            {/* Shimmer Effect */}
                            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] transition-transform duration-1000 group-hover:translate-x-full" />
                            <span className="relative z-10 flex items-center gap-1.5">
                                Explore My Work
                                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </span>
                        </a>

                        {/* Secondary: Download CV */}
                        <a
                            href="/cv.pdf"
                            download
                            className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-current/15 px-7 text-sm font-semibold text-inherit/80 transition-all duration-300 hover:border-[#00C9FF] hover:text-[#00C9FF] hover:-translate-y-0.5 active:translate-y-0 active:scale-98"
                        >
                            <span>Download CV</span>
                            <Download className="w-4 h-4 opacity-50 transition-all duration-300 group-hover:translate-y-0.5 group-hover:text-[#00C9FF] group-hover:opacity-100" />
                        </a>
                    </div>

                    {/* Social Icons Array under CTAs using standard SVGs */}
                    <div className="flex items-center gap-5 pt-4 text-inherit/60">
                        {[
                            {
                                label: "GitHub",
                                href: "https://github.com",
                                path: <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.024A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.293 2.747-1.024 2.747-1.024.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                            },
                            {
                                label: "LinkedIn",
                                href: "https://linkedin.com",
                                path: <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            },
                            {
                                label: "Facebook",
                                href: "https://facebook.com",
                                path: <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z" />
                            },
                            {
                                label: "Email",
                                href: "mailto:your-email@example.com",
                                path: <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
                            }
                        ].map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={social.label}
                                className="group transition-all duration-300 hover:text-[#00C9FF] hover:-translate-y-1 active:scale-90 transform text-current"
                            >
                                <svg
                                    className="w-5 h-5 fill-currentColor transition-transform duration-300 group-hover:scale-110"
                                    viewBox="0 0 24 24"
                                >
                                    {social.path}
                                </svg>
                            </a>
                        ))}
                    </div>

                </div>

                {/* ── RIGHT SIDE: WIREFRAME COMPONENT LAYOUT IMAGE FRAME ─────────────── */}
                <div className="lg:col-span-5 flex justify-center lg:justify-end relative">

                    {/* Micro-Dot Grid Graphic Array Background */}
                    <div className="absolute -top-6 right-0 lg:-right-4 w-28 h-28 opacity-20 z-0 hidden sm:block"
                        style={{
                            backgroundImage: "radial-gradient(currentColor 1.5px, transparent 1.5px)",
                            backgroundSize: "12px 12px"
                        }}
                    />

                    {/* Wireframe Portrait Layout Circle Ring Wrapper */}
                    <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full border border-current/10 flex items-center justify-center p-2 z-10 shadow-[0_8px_30px_rgb(0,0,0,0.01)] overflow-hidden group">

                        {/* Soft inner glow gradient accent with specified color space */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#00C9FF]/10 to-[#92FE9D]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                        {/* The Outer Wireframe Cross Axis Layout Guidelines */}
                        <div className="absolute inset-0 pointer-events-none border border-dashed border-current/10 rounded-full scale-[0.98]" />
                        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                            <div className="w-full h-[1px] border-t border-current/10 rotate-45 absolute" />
                            <div className="w-full h-[1px] border-t border-current/10 -rotate-45 absolute" />
                        </div>

                        {/* Inner profile wrapper */}
                        <div className="relative w-full h-full rounded-full border border-current/5 overflow-hidden flex items-center justify-center">

                            {/* Optimized Next.js Image Element */}
                            <Image
                                src="/profile.png"
                                alt="Kian J. Fontillas"
                                fill
                                sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
                                priority
                                className="object-cover object-center transition-transform duration-700 scale-100 group-hover:scale-105 z-10"
                            />

                            {/* Minimal Wireframe Placeholder Visual Fallback Layer */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-20 pointer-events-none z-0">
                                <User className="w-1/3 h-1/3 opacity-30 text-current stroke-[1.25]" />
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}