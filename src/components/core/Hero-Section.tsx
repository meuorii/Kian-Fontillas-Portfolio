"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Download } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";

export default function HeroSection() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
            window.history.pushState(null, "", targetId);
        }
    };

    return (
        <section className="relative w-full h-auto lg:min-h-screen text-foreground bg-background flex items-start lg:items-center overflow-hidden pt-28 pb-16 md:pt-36 lg:py-0 theme-transition">

            {/* ── AMBIENT BACKDROP (Shared) ── */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-70 h-70 sm:w-112.5 sm:h-112.5 md:w-150 md:h-150 pointer-events-none z-0 opacity-25 dark:opacity-35 transition-opacity duration-300">
                <div className="absolute inset-0 rounded-full bg-linear-to-tr from-[#00C9FF]/10 to-[#92FE9D]/10 blur-[60px] sm:blur-[90px] animate-pulse duration-6000" />
                <div className="absolute inset-[-10%] border border-foreground/10 rounded-full border-dashed animate-[spin_160s_linear_infinite]" />
            </div>

            {/* Container wrapper for animation entry */}
            <div className={`mx-auto max-w-7xl w-full px-4 sm:px-6 md:px-12 relative z-10 h-full flex items-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                
                {/* ======================================================================
                  CODE 1: MOBILE & TABLET LAYOUT VIEWPORT (Visible on mobile, mini, air)
                  ======================================================================
                */}
                <div className="block lg:hidden space-y-8 w-full">
                    
                    {/* Top Row: Side-by-Side [Image] [Hi, Kian etc] */}
                    <div className="flex items-center justify-between gap-4 sm:gap-8">
                        
                        {/* LEFT SIDE: Portrait Cutout Image */}
                        <div className="w-1/2 flex justify-center items-end h-44 sm:h-60 md:h-72 relative select-none">
                            <div className="relative w-full h-full flex items-end justify-center">
                                <div className="absolute bottom-1 left-4 right-4 h-2 bg-foreground/10 blur-xl rounded-full" />
                                <Image
                                    src="/profile(1).png"
                                    alt="Kian J. Fontillas (Light)"
                                    width={270}
                                    height={360}
                                    priority
                                    className="dark:hidden object-contain object-bottom w-auto h-full max-h-full drop-shadow-[0_10px_20px_rgba(0,0,0,0.06)]"
                                />
                                <Image
                                    src="/profile_dark.png" 
                                    alt="Kian J. Fontillas (Dark)"
                                    width={270}
                                    height={360}
                                    priority
                                    className="hidden dark:block object-contain object-bottom w-auto h-full max-h-full drop-shadow-[0_15px_25px_rgba(0,0,0,0.4)]"
                                />
                            </div>
                        </div>

                        {/* RIGHT SIDE: Typography Intro Text */}
                        <div className="w-1/2 flex flex-col justify-center space-y-2 sm:space-y-3">
                            <div className="w-10 h-0.75 sm:w-14 bg-linear-to-r from-[#00C9FF] to-[#92FE9D]" />
                            <h1 className="text-xl sm:text-3xl md:text-4xl font-black tracking-tight leading-[1.1] text-foreground">
                                Hi, <br />
                                I'm <span className="bg-linear-to-r from-[#00B8E8] to-[#92FE9D] bg-clip-text text-transparent">Kian J. Fontillas</span>
                            </h1>
                            <p className="text-foreground/75 text-[10px] sm:text-xs leading-relaxed max-w-sm font-normal">
                                I am a Software Engineer and Full Stack Developer. I am always eager to grow, learn new technologies, and improve my skills to make a meaningful impact.
                            </p>
                        </div>

                    </div>

                    {/* Bottom Row: Controls for Actions & Socials */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-6 sm:gap-12 border-b border-foreground/15 pb-4">
                            
                            {/* Explore Work */}
                            <div className="space-y-1 flex-1">
                                <h4 className="text-[9px] sm:text-[10px] font-bold tracking-widest text-foreground/50 uppercase">Selected Projects</h4>
                                <a 
                                    href="#work" 
                                    onClick={(e) => handleSmoothScroll(e, "#work")}
                                    className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold tracking-wide text-foreground hover:text-[#00C9FF] group"
                                >
                                    EXPLORE MY WORK
                                    <ArrowUpRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </a>
                            </div>

                            {/* Download CV */}
                            <div className="space-y-1 flex-1">
                                <h4 className="text-[9px] sm:text-[10px] font-bold tracking-widest text-foreground/50 uppercase">My Experience</h4>
                                <a 
                                    href="/Kian-Fontillas-CV.pdf" 
                                    download 
                                    className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold tracking-wide text-foreground hover:text-[#00C9FF] group"
                                >
                                    DOWNLOAD CV
                                    <Download className="w-3 h-3 transition-transform duration-300 group-hover:translate-y-0.5" />
                                </a>
                            </div>

                        </div>

                        {/* Social Row */}
                        <div className="space-y-1.5">
                            <h4 className="text-[9px] sm:text-[10px] font-bold tracking-widest text-foreground/50 uppercase">Connect With Me</h4>
                            <div className="flex items-center gap-4 sm:gap-5 text-zinc-800 dark:text-zinc-200">
                                <a href="https://github.com/meuorii" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-[#00C9FF] hover:-translate-y-0.5 transition-all"><FaGithub className="w-4 h-4" /></a>
                                <a href="https://www.linkedin.com/in/kian-fontillas-30556b396/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-[#00C9FF] hover:-translate-y-0.5 transition-all"><FaLinkedinIn className="w-4 h-4" /></a>
                                <a href="https://www.facebook.com/lveyeon/" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-[#00C9FF] hover:-translate-y-0.5 transition-all"><FaFacebookF className="w-3.5 h-3.5" /></a>
                                <a href="#contact" onClick={(e) => handleSmoothScroll(e, "#contact")} aria-label="Mail" className="hover:text-[#00C9FF] hover:-translate-y-0.5 transition-all"><IoMailOutline className="w-4.5 h-4.5" /></a>
                            </div>
                        </div>
                    </div>

                </div>

                {/* =========================================================================
                  CODE 2: LAPTOP, DESKTOP, IPAD PRO LAYOUT VIEWPORT (Original Fluid Scaled Layout)
                  =========================================================================
                */}
                <div className="hidden lg:grid grid-cols-12 lg:gap-6 items-end h-full w-full">

                    {/* LEFT COLUMN: TYPOGRAPHY & BIO */}
                    <div className="col-span-4 flex flex-col justify-center space-y-6 pb-20">
                        <div className="w-16 bg-linear-to-r from-[#00C9FF] to-[#92FE9D] h-0.75" />
                        <div className="space-y-4">
                            <h1 className="text-4xl xl:text-6xl font-black tracking-tight leading-[1.1] text-foreground">
                                Hi, <br />
                                I'm <span className="bg-linear-to-r from-[#00B8E8] to-[#92FE9D] bg-clip-text text-transparent">Kian J. Fontillas</span>
                            </h1>
                            <p className="text-foreground/75 text-xs xl:text-sm leading-relaxed max-w-sm font-normal">
                                I am a Software Engineer and Full Stack Developer. I am always eager to grow, learn new technologies, and improve my skills so I can build better solutions and make a meaningful impact in the tech industry.
                            </p>
                        </div>
                    </div>

                    {/* CENTER COLUMN: PROFILE PORTRAIT (Restored original fluid height structure) */}
                    <div className="col-span-5 flex justify-center items-end h-[80vh] xl:h-[85vh] relative select-none">
                        <div className="relative w-full h-full flex items-end justify-center">
                            <div className="absolute bottom-2 left-6 right-6 h-2.5 bg-foreground/10 blur-xl rounded-full" />
                            <Image
                                src="/profile(1).png"
                                alt="Kian J. Fontillas Portrait (Light Mode)"
                                width={540}
                                height={720}
                                priority
                                className="dark:hidden object-contain object-bottom w-auto h-full max-h-full drop-shadow-[0_15px_30px_rgba(0,0,0,0.06)] filter saturate-[1.01] transition-all duration-500 hover:scale-[1.01]"
                            />
                            <Image
                                src="/profile_dark.png" 
                                alt="Kian J. Fontillas Portrait (Dark Mode)"
                                width={540}
                                height={720}
                                priority
                                className="hidden dark:block object-contain object-bottom w-auto h-full max-h-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)] filter saturate-[1.01] transition-all duration-500 hover:scale-[1.01]"
                            />
                        </div>
                    </div>

                    {/* RIGHT COLUMN: INTERACTIVE CTAs & SOCIALS */}
                    <div className="col-span-3 flex flex-col justify-center space-y-6 pl-4 text-left pb-20">
                        <div className="grid grid-cols-1 gap-6">
                            
                            {/* Action Block 1 */}
                            <div className="space-y-2 border-b border-foreground/15 pb-5">
                                <h4 className="text-[11px] font-bold tracking-widest text-foreground/50 uppercase">Selected Projects</h4>
                                <p className="text-xs text-foreground/75 leading-relaxed font-normal">Explore my latest responsive web apps and system solutions.</p>
                                <a 
                                    href="#work" 
                                    onClick={(e) => handleSmoothScroll(e, "#work")}
                                    className="inline-flex items-center gap-1 text-[11px] font-bold tracking-wide text-foreground hover:text-[#00C9FF] transition-colors group pt-1"
                                >
                                    EXPLORE MY WORK
                                    <ArrowUpRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </a>
                            </div>

                            {/* Action Block 2 */}
                            <div className="space-y-2 border-b border-foreground/15 pb-5">
                                <h4 className="text-[11px] font-bold tracking-widest text-foreground/50 uppercase">My Experience</h4>
                                <p className="text-xs text-foreground/75 leading-relaxed font-normal">Check out my core tech stack and development history.</p>
                                <a 
                                    href="/Kian-Fontillas-CV.pdf" 
                                    download 
                                    className="inline-flex items-center gap-1 text-[11px] font-bold tracking-wide text-foreground hover:text-[#00C9FF] transition-colors group pt-1"
                                >
                                    DOWNLOAD CV
                                    <Download className="w-3 h-3 transition-transform duration-300 group-hover:translate-y-0.5" />
                                </a>
                            </div>

                        </div>

                        {/* Social Row */}
                        <div className="space-y-3">
                            <h4 className="text-[11px] font-bold tracking-widest text-foreground/50 uppercase">Connect With Me</h4>
                            <div className="flex items-center gap-5 text-zinc-800 dark:text-zinc-200">
                                <a href="https://github.com/meuorii" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-[#00C9FF] hover:-translate-y-0.5 transition-all"><FaGithub className="w-4 h-4" /></a>
                                <a href="https://www.linkedin.com/in/kian-fontillas-30556b396/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-[#00C9FF] hover:-translate-y-0.5 transition-all"><FaLinkedinIn className="w-4 h-4" /></a>
                                <a href="https://www.facebook.com/lveyeon/" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-[#00C9FF] hover:-translate-y-0.5 transition-all"><FaFacebookF className="w-3.5 h-3.5" /></a>
                                <a href="#contact" onClick={(e) => handleSmoothScroll(e, "#contact")} aria-label="Mail" className="hover:text-[#00C9FF] hover:-translate-y-0.5 transition-all"><IoMailOutline className="w-4.5 h-4.5" /></a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}