"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";

export default function HeroSection() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    // Reusable smooth scroll function
    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
            window.history.pushState(null, "", targetId);
        }
    };

    return (
        <section className="relative w-full min-h-screen text-foreground bg-background flex items-center overflow-hidden pt-20 pb-16 md:pt-28 md:pb-20 lg:py-0 theme-transition">

            {/* ── AMBIENT BACKDROP ── */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-70 h-70 sm:w-112.5 sm:h-112.5 md:w-150 md:h-150 pointer-events-none z-0 opacity-25 dark:opacity-35 transition-opacity duration-300">
                <div className="absolute inset-0 rounded-full bg-linear-to-tr from-[#00C9FF]/10 to-[#92FE9D]/10 blur-[60px] sm:blur-[90px] animate-pulse duration-6000" />
                <div className="absolute inset-[-10%] border border-foreground/10 rounded-full border-dashed animate-[spin_160s_linear_infinite]" />
            </div>

            {/* ── STRUCTURED ASYMMETRIC GRID ── */}
            <div className={`mx-auto max-w-7xl w-full px-4 sm:px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-6 items-center lg:items-end relative z-10 h-full transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>

                {/* ── LEFT COLUMN: TYPOGRAPHY, BIO & CTA TRIGGERS ── */}
                <div className="col-span-1 lg:col-span-4 flex flex-col justify-center h-full pb-0 lg:pb-20 pt-4 md:pt-8 lg:pt-0 space-y-5 sm:space-y-6 z-20 order-1">
                    <div className="w-14 h-0.75 sm:w-16 bg-linear-to-r from-[#00C9FF] to-[#92FE9D]" />

                    <div className="space-y-3 sm:space-y-4">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-foreground">
                            Hi, <br className="hidden sm:inline" />
                            I'm <span className="bg-linear-to-r from-[#00C9FF] via-[#00B8E8] to-[#92FE9D] bg-clip-text text-transparent">Kian J. Fontillas</span>
                        </h1>
                        <p className="text-foreground/75 text-xs sm:text-sm leading-relaxed max-w-md lg:max-w-sm font-normal transition-colors duration-300">
                            I am a Software Engineer and Full Stack Developer. I am always eager to grow, learn new technologies, and improve my skills so I can build better solutions and make a meaningful impact in the tech industry.
                        </p>
                    </div>

                    <div className="pt-1 flex items-center gap-4">
                        <a
                            href="#work"
                            onClick={(e) => handleSmoothScroll(e, "#work")}
                            className="group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-foreground text-background transition-all duration-300 hover:bg-[#00C9FF] hover:text-zinc-950 hover:scale-110 hover:shadow-[0_10px_25px_rgba(0,201,255,0.3)]"
                        >
                            <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5] transition-transform duration-300 group-hover:translate-y-0.5" />
                        </a>
                        <span className="text-[10px] sm:text-xs font-bold tracking-widest text-foreground/50 uppercase select-none transition-colors">
                            See my work
                        </span>
                    </div>
                </div>

                {/* ── CENTER COLUMN: PORTRAIT ── */}
                <div className="col-span-1 md:col-span-2 lg:col-span-5 flex justify-center items-end h-75 sm:h-95 md:h-115 lg:h-[80vh] xl:h-[85vh] relative z-10 order-2 lg:order-2 select-none my-6 lg:my-0">
                    <div className="relative w-full h-full max-w-60 sm:max-w-[320px] md:max-w-95 lg:max-w-none flex items-end justify-center">
                        <div className="absolute bottom-2 left-6 right-6 h-2.5 bg-foreground/10 blur-xl rounded-full transition-colors" />
                        
                        {/* LIGHT MODE IMAGE */}
                        <Image
                            src="/profile(1).png"
                            alt="Kian J. Fontillas Cutout Portrait (Light Mode)"
                            width={540}
                            height={720}
                            priority
                            className="dark:hidden object-contain object-bottom w-auto h-full max-h-full drop-shadow-[0_15px_30px_rgba(0,0,0,0.06)] filter saturate-[1.01] transition-all duration-500 hover:scale-[1.01]"
                        />

                        {/* DARK MODE IMAGE */}
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
                <div className="col-span-1 lg:col-span-3 flex flex-col justify-center h-full pb-4 lg:pb-20 space-y-6 sm:space-y-8 z-20 order-3 lg:order-3 lg:pl-4 text-left">

                    {/* Action Block 1: Explore Work */}
                    <div className="space-y-2 border-b border-foreground/15 pb-4 sm:pb-5 transition-colors duration-300">
                        <h4 className="text-[10px] sm:text-[11px] font-bold tracking-widest text-foreground/50 uppercase">
                            Selected Projects
                        </h4>
                        <p className="text-[11px] sm:text-xs text-foreground/75 leading-relaxed font-normal transition-colors max-w-md lg:max-w-none">
                            Explore my latest work, featuring responsive web apps, interactive tools, and optimized system backends.
                        </p>
                        <a 
                            href="#work" 
                            onClick={(e) => handleSmoothScroll(e, "#work")}
                            className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold tracking-wide text-foreground hover:text-[#00C9FF] dark:hover:text-[#00C9FF] transition-colors group pt-0.5"
                        >
                            EXPLORE MY WORK
                            <ArrowUpRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                    </div>

                    {/* Action Block 2: Download CV */}
                    <div className="space-y-2 border-b border-foreground/15 pb-4 sm:pb-5 transition-colors duration-300">
                        <h4 className="text-[10px] sm:text-[11px] font-bold tracking-widest text-foreground/50 uppercase">
                            My Experience
                        </h4>
                        <p className="text-[11px] sm:text-xs text-foreground/75 leading-relaxed font-normal transition-colors max-w-md lg:max-w-none">
                            Check out my technical background, core framework specializations, and complete professional history.
                        </p>
                        <a href="/Kian-Fontillas-CV.pdf" download className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold tracking-wide text-foreground hover:text-[#00C9FF] dark:hover:text-[#00C9FF] transition-colors group pt-0.5">
                            DOWNLOAD CV
                            <Download className="w-3 h-3 transition-transform duration-300 group-hover:translate-y-0.5" />
                        </a>
                    </div>

                    {/* Action Block 3: Social Row */}
                    <div className="space-y-2 sm:space-y-3">
                        <h4 className="text-[10px] sm:text-[11px] font-bold tracking-widest text-foreground/50 uppercase">
                            Connect With Me
                        </h4>
                        <div className="flex items-center gap-4 sm:gap-5 text-zinc-800 dark:text-zinc-200">
                            {[
                                {
                                    label: "GitHub",
                                    href: "https://github.com/meuorii",
                                    icon: <FaGithub className="w-4 h-4" />
                                },
                                {
                                    label: "LinkedIn",
                                    href: "https://www.linkedin.com/in/kian-fontillas-30556b396/",
                                    icon: <FaLinkedinIn className="w-4 h-4" />
                                },
                                {
                                    label: "Facebook",
                                    href: "https://www.facebook.com/lveyeon/",
                                    icon: <FaFacebookF className="w-3.5 h-3.5" />
                                }
                            ].map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={social.label}
                                    className="transition-all duration-300 hover:text-[#00C9FF] dark:hover:text-[#00C9FF] hover:-translate-y-0.5 flex items-center justify-center"
                                >
                                    {social.icon}
                                </a>
                            ))}
                            {/* Updated Email Trigger to Smooth Scroll to Contact Section */}
                            <a
                                href="#contact"
                                onClick={(e) => handleSmoothScroll(e, "#contact")}
                                aria-label="Scroll to Contact"
                                className="transition-all duration-300 hover:text-[#00C9FF] dark:hover:text-[#00C9FF] hover:-translate-y-0.5 flex items-center justify-center"
                            >
                                <IoMailOutline className="w-4.5 h-4.5" />
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}