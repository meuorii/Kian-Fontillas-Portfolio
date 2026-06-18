"use client";

import { useEffect, useState, useRef } from "react";
import { Sparkles, Copy, Check, ArrowUpRight, Activity, Send } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
    const [hasIntersected, setHasIntersected] = useState(false);
    const [copied, setCopied] = useState(false);
    const [emailForm, setEmailForm] = useState({ email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
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

    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText("fontillaskian@gmail.com");
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy email: ", err);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!emailForm.email || !emailForm.message) return;

        setIsSubmitting(true);

        // Calculate metadata context parameters dynamically
        const firstLetter = emailForm.email.charAt(0).toUpperCase();
        const currentTime = new Date().toLocaleString("en-US", {
            dateStyle: "medium",
            timeStyle: "short",
        });

        const templateParams = {
            user_email: emailForm.email,
            message: emailForm.message,
            first_letter: firstLetter,
            time: currentTime,
        };

        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                templateParams,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );

            setSubmitSuccess(true);
            setEmailForm({ email: "", message: "" });
            setTimeout(() => setSubmitSuccess(false), 4000);
        } catch (error) {
            console.error("EmailJS routing transmission failure:", error);
            alert("Failed to send the message. Please copy the email directly instead!");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            id="contact"
            ref={sectionRef}
            className="relative w-full max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-16 overflow-hidden bg-transparent select-none"
        >
            <div className="relative z-10 space-y-24">
                
                {/* ── HEADER BLOCK ── */}
                <div className={`max-w-3xl space-y-6 transition-all duration-1000 ${
                    hasIntersected ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200/80 dark:border-zinc-800 bg-transparent backdrop-blur-xl shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
                        <Sparkles className="w-3.5 h-3.5 text-[#00C9FF]" />
                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                            Open to new opportunities
                        </span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.08]">
                        Have a project in mind? <br />
                        Let's build something{" "}
                        <span className="bg-gradient-to-r from-[#00C9FF] to-[#92FE9D] bg-clip-text text-transparent">
                            amazing together.
                        </span>
                    </h2>

                    <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 font-normal max-w-xl leading-relaxed">
                        Feel free to drop me a message if you want to collaborate on a project, ask a question, or just say hi.
                    </p>
                </div>

                {/* ── MODERN BENTO CONTACT GRID ── */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                    
                    {/* LEFT CELL: Contact Form (7 Columns) */}
                    <div className={`lg:col-span-7 group relative rounded-3xl border border-zinc-200/80 dark:border-zinc-800/80 bg-transparent backdrop-blur-xl p-8 transition-all duration-700 flex flex-col justify-between ${
                        hasIntersected ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                    }`}>
                        <div className="absolute inset-0 rounded-3xl transition-opacity duration-1000 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-[#00C9FF]/[0.015] to-transparent pointer-events-none" />

                        <div className="relative z-10 w-full">
                            <div className="flex items-center justify-between font-mono text-[9px] text-zinc-400 dark:text-zinc-500 mb-8">
                                <span>CONTACT FORM</span>
                                <div className="flex items-center gap-1.5">
                                    <Activity className="w-3 h-3 text-[#92FE9D] animate-pulse" />
                                    <span>STATUS: READY</span>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                                        Your Email Address
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        placeholder="yourname@example.com"
                                        value={emailForm.email}
                                        onChange={(e) => setEmailForm({ ...emailForm, email: e.target.value })}
                                        className="w-full px-4 py-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-transparent font-mono text-xs text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-1 focus:ring-[#00C9FF] focus:border-[#00C9FF] dark:focus:border-[#00C9FF] transition-all"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                                        Your Message
                                    </label>
                                    <textarea
                                        rows={4}
                                        required
                                        placeholder="Tell me about your project ideas, questions, or timeline..."
                                        value={emailForm.message}
                                        onChange={(e) => setEmailForm({ ...emailForm, message: e.target.value })}
                                        className="w-full px-4 py-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-transparent text-sm text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-1 focus:ring-[#00C9FF] focus:border-[#00C9FF] dark:focus:border-[#00C9FF] transition-all resize-none leading-relaxed"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting || submitSuccess}
                                    className="w-full relative overflow-hidden inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-mono text-xs font-black uppercase tracking-wider text-white bg-zinc-900 dark:bg-zinc-100 dark:text-zinc-950 hover:opacity-90 active:scale-[0.99] transition-all shadow-md disabled:opacity-50"
                                >
                                    {isSubmitting ? (
                                        <div className="w-4 h-4 border-2 border-white dark:border-zinc-950 border-t-transparent rounded-full animate-spin" />
                                    ) : submitSuccess ? (
                                        <span className="flex items-center gap-2 text-[#92FE9D] dark:text-emerald-600">
                                            <Check className="w-4 h-4" /> Message Sent Successfully
                                        </span>
                                    ) : (
                                        <>
                                            <span>Send Message</span>
                                            <Send className="w-3.5 h-3.5 ml-1" />
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* RIGHT CELL: Quick Copy & Social Links (5 Columns) */}
                    <div className={`lg:col-span-5 flex flex-col gap-4 ${
                        hasIntersected ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                    }`}>
                        
                        {/* Quick Copy Action Card */}
                        <div className="p-6 rounded-3xl border border-zinc-200/80 dark:border-zinc-800/80 bg-transparent backdrop-blur-xl flex flex-col justify-between group h-1/2">
                            <div className="space-y-1.5">
                                <span className="text-[9px] font-mono font-bold text-zinc-400 dark:text-zinc-500 block uppercase tracking-wider">// Quick Copy</span>
                                <h4 className="text-sm font-bold text-zinc-800 dark:text-zinc-200">Copy Email Address</h4>
                            </div>
                            
                            <div className="flex items-center gap-2 mt-4">
                                <div className="flex-1 px-4 py-3.5 rounded-xl border border-zinc-200/60 dark:border-zinc-800/60 bg-transparent font-mono text-xs text-zinc-600 dark:text-zinc-400 overflow-x-auto whitespace-nowrap">
                                    fontillaskian@gmail.com
                                </div>
                                <button
                                    type="button"
                                    onClick={handleCopyEmail}
                                    className="p-3.5 rounded-xl border transition-all active:scale-95 bg-transparent border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 shadow-sm"
                                    style={{ borderColor: copied ? "#92FE9D" : "" }}
                                >
                                    {copied ? <Check className="w-4 h-4 text-[#92FE9D]" /> : <Copy className="w-4 h-4" />}
                                </button>
                            </div>
                        </div>

                        {/* Digital Network Footprints */}
                        <div className="p-6 rounded-3xl border border-zinc-200/80 dark:border-zinc-800/80 bg-transparent backdrop-blur-xl flex flex-col justify-between h-1/2">
                            <span className="text-[9px] font-mono font-bold text-zinc-400 dark:text-zinc-500 block uppercase tracking-wider">// Connect With Me</span>
                            
                            <div className="grid grid-cols-1 gap-2 mt-4">
                                {/* Github Link */}
                                <a
                                    href="https://github.com/meuorii"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between p-3 rounded-xl border border-zinc-100 dark:border-zinc-800/40 bg-transparent hover:border-[#00C9FF]/40 transition-all group/link"
                                >
                                    <div className="flex items-center gap-2.5 text-xs font-bold text-zinc-800 dark:text-zinc-300">
                                        <FaGithub className="w-4 h-4 text-zinc-900 dark:text-zinc-100" />
                                        <span>GitHub</span>
                                    </div>
                                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                                </a>

                                {/* LinkedIn Link */}
                                <a
                                    href="https://www.linkedin.com/in/kian-fontillas-30556b396/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between p-3 rounded-xl border border-zinc-100 dark:border-zinc-800/40 bg-transparent hover:border-[#00C9FF]/40 transition-all group/link"
                                >
                                    <div className="flex items-center gap-2.5 text-xs font-bold text-zinc-800 dark:text-zinc-300">
                                        <FaLinkedinIn className="w-4 h-4 text-[#0077B5]" />
                                        <span>LinkedIn</span>
                                    </div>
                                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                                </a>

                                {/* Facebook Link */}
                                <a
                                    href="https://www.facebook.com/lveyeon/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between p-3 rounded-xl border border-zinc-100 dark:border-zinc-800/40 bg-transparent hover:border-[#92FE9D]/40 transition-all group/link"
                                >
                                    <div className="flex items-center gap-2.5 text-xs font-bold text-zinc-800 dark:text-zinc-300">
                                        <FaFacebookF className="w-3.5 h-3.5 text-[#1877F2]" />
                                        <span>Facebook</span>
                                    </div>
                                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

                {/* ── FOOTER BAR ── */}
                <div className="pt-8 border-t border-zinc-200/60 dark:border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-zinc-400 dark:text-zinc-500">
                    <p className="tracking-wide">
                        &copy; 2026 <span className="text-zinc-900 dark:text-zinc-100 font-bold">Kian J. Fontillas</span>. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2 bg-transparent px-4 py-1.5 rounded-full border border-zinc-200/50 dark:border-zinc-800/50 shadow-sm">
                        <span>Designed and developed by me</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#92FE9D] animate-pulse" />
                    </div>
                </div>

            </div>
        </section>
    );
}