import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState, useEffect } from "react";
import AboutCard from "./AboutCard";
import { FiBookOpen } from "react-icons/fi";

function About() {
    const notebookRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: notebookRef,
        offset: ["start end", "end start"]
    });

    // ===== Mobile detection =====
    const [isMobile, setIsMobile] = useState(
        typeof window !== "undefined" ? window.innerWidth < 768 : false
    );
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // ===== DESKTOP: ULTRA SLOW, CINEMATIC ANIMATION =====
    // Spread across 7 keyframes for buttery smooth motion
    // Cover stays closed until 30%, then slowly opens over the remaining 70%
    const rotateY = useTransform(
        scrollYProgress,
        [0, 0.30, 0.45, 0.60, 0.75, 0.90, 1.0],
        [0, 0, -15, -55, -110, -155, -178]
    );

    // 3D LIFT: Cover lifts up slowly, peaks at middle, settles flat
    const liftZ = useTransform(
        scrollYProgress,
        [0, 0.30, 0.45, 0.60, 0.75, 0.90, 1.0],
        [0, 0, 20, 50, 40, 15, 0]
    );

    // Subtle X-axis bend for realistic paper feel
    const bendX = useTransform(
        scrollYProgress,
        [0, 0.30, 0.50, 0.70, 0.90, 1.0],
        [0, 0, -2, -3, -1, 0]
    );

    // Dynamic shadow - builds as cover lifts, softens as it settles
    const coverShadow = useTransform(
        scrollYProgress,
        [0, 0.30, 0.50, 0.70, 0.90, 1.0],
        [
            "0 10px 30px rgba(0,0,0,0.6), inset 0 0 60px rgba(0,0,0,0.4)",
            "0 10px 30px rgba(0,0,0,0.6), inset 0 0 60px rgba(0,0,0,0.4)",
            "20px 40px 80px rgba(0,0,0,0.85), inset 0 0 60px rgba(0,0,0,0.4)",
            "35px 70px 140px rgba(0,0,0,1), inset 0 0 60px rgba(0,0,0,0.4)",
            "15px 30px 60px rgba(0,0,0,0.7), inset 0 0 60px rgba(0,0,0,0.4)",
            "0 5px 20px rgba(0,0,0,0.5), inset 0 0 60px rgba(0,0,0,0.4)"
        ]
    );

    // Pages fade in VERY slowly, only after cover is well open (after 60%)
    const pagesOpacity = useTransform(scrollYProgress, [0.60, 0.85], [0, 1]);
    const pagesScale = useTransform(scrollYProgress, [0.60, 0.85], [0.96, 1]);

    // Cover title fades out slowly during the opening phase
    const titleFade = useTransform(scrollYProgress, [0.28, 0.48], [1, 0]);
    const titleScale = useTransform(scrollYProgress, [0.28, 0.48], [1, 0.88]);

    // Cover glow pulses as it's about to open
    const coverGlow = useTransform(
        scrollYProgress,
        [0, 0.22, 0.32, 0.45],
        [
            "0 0 30px rgba(99, 102, 241, 0.2)",
            "0 0 80px rgba(99, 102, 241, 0.7)",
            "0 0 50px rgba(99, 102, 241, 0.4)",
            "0 0 20px rgba(99, 102, 241, 0.1)"
        ]
    );

    const instructionOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);

    // ===== Mobile click handler =====
    const handleToggleOpen = () => {
        if (isMobile) setIsOpen((prev) => !prev);
    };

    return (
        <section id="about" className="py-20 px-6 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-indigo-600 rounded-full mix-blend-screen filter blur-[180px] opacity-15 pointer-events-none" />

            <div className="container mx-auto max-w-6xl relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-6xl font-bold text-center mb-4 main-color-text"
                >
                    About Me
                </motion.h2>

                {/* Desktop instruction */}
                {!isMobile && (
                    <motion.p
                        style={{ opacity: instructionOpacity }}
                        className="text-center text-gray-400 mb-16 flex items-center justify-center gap-2"
                    >
                        <FiBookOpen className="text-indigo-400" />
                        <span>Scroll down slowly to open the notebook</span>
                        <motion.span
                            animate={{ y: [0, 6, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="inline-block"
                        >
                            ↓
                        </motion.span>
                    </motion.p>
                )}

                {/* Mobile instruction */}
                {isMobile && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center text-gray-400 mb-8 flex items-center justify-center gap-2"
                    >
                        <FiBookOpen className="text-indigo-400" />
                        <span>
                            {isOpen ? "Tap the notebook to close" : "Tap the notebook to open"}
                        </span>
                    </motion.p>
                )}

                {/* ===== NOTEBOOK SCENE ===== */}
                <div
                    ref={notebookRef}
                    className="mx-auto"
                    style={{
                        maxWidth: isMobile ? "100%" : "950px",
                        perspective: "2500px",
                        perspectiveOrigin: "center center"
                    }}
                >
                    {/* Notebook container with fixed aspect ratio */}
                    <div
                        className="relative mx-auto"
                        style={{
                            width: "100%",
                            aspectRatio: isMobile ? "3 / 4.5" : "16 / 10"
                        }}
                    >
                        {/* BACK COVER (static, behind everything) */}
                        <div
                            className="absolute top-0 left-0 w-full h-full rounded-lg"
                            style={{
                                background:
                                    "linear-gradient(135deg, #1a1a1a 0%, #000000 50%, #1a1a1a 100%)",
                                border: "1px solid rgba(255, 255, 255, 0.08)",
                                boxShadow: "0 25px 60px rgba(0, 0, 0, 0.85)",
                                zIndex: 0
                            }}
                        />

                        {/* ===== PAGES CONTAINER ===== */}
                        <motion.div
                            style={{
                                opacity: isMobile ? (isOpen ? 1 : 0) : pagesOpacity,
                                scale: isMobile ? (isOpen ? 1 : 0.96) : pagesScale,
                                zIndex: 10
                            }}
                            className="absolute top-0 left-0 w-full h-full rounded-md overflow-hidden"
                        >
                            {/* Pages layout: flex column for mobile, grid for desktop */}
                            <div
                                className={`w-full h-full ${isMobile ? "flex flex-col" : "grid grid-cols-2"
                                    }`}
                            >
                                {/* TOP PAGE (mobile) / LEFT PAGE (desktop) - Image */}
                                <div
                                    className={`relative overflow-hidden notebook-page ${isMobile ? "h-1/2" : "h-full"
                                        }`}
                                >
                                    {/* Chapter label */}
                                    <div
                                        className={`absolute text-indigo-600/60 font-mono tracking-widest ${isMobile
                                                ? "top-2 left-4 text-[9px]"
                                                : "top-4 left-12 text-xs"
                                            }`}
                                    >
                                        Chapter 01
                                    </div>

                                    {/* Content centered */}
                                    <div
                                        className={`flex flex-col items-center justify-center h-full ${isMobile ? "px-4 py-6" : "p-6 md:p-10"
                                            }`}
                                    >
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.8, delay: 0.3 }}
                                            className={`relative aspect-square ${isMobile ? "w-[140px]" : "w-full max-w-[200px] md:max-w-[280px]"
                                                }`}
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg transform rotate-3 opacity-30 blur-xl" />
                                            <img
                                                src="/images/avatar.png"
                                                alt="Ariya Rajaei Nezhad"
                                                className="relative w-full h-full object-cover rounded-lg shadow-xl"
                                            />
                                        </motion.div>

                                        <div className={`${isMobile ? "mt-3" : "mt-4 md:mt-6"} text-center`}>
                                            <p
                                                className={`text-zinc-800 font-serif italic ${isMobile ? "text-[10px]" : "text-xs md:text-sm"
                                                    }`}
                                            >
                                                "Ariya Rajaei Nezhad"
                                            </p>
                                            <p
                                                className={`text-zinc-600 ${isMobile ? "text-[8px]" : "text-[10px] md:text-xs"
                                                    } mt-1 font-mono`}
                                            >
                                                Shiraz, Iran • 2026
                                            </p>
                                        </div>
                                    </div>

                                    {/* Page number at bottom */}
                                    <div
                                        className={`absolute left-1/2 -translate-x-1/2 text-zinc-500 font-mono ${isMobile ? "bottom-2 text-[9px]" : "bottom-3 text-xs"
                                            }`}
                                    >
                                        — 1 —
                                    </div>
                                </div>

                                {/* BOTTOM PAGE (mobile) / RIGHT PAGE (desktop) - Text */}
                                <div
                                    className={`relative overflow-hidden notebook-page ${isMobile ? "h-1/2" : "h-full"
                                        }`}
                                >
                                    {/* Page label */}
                                    <div
                                        className={`absolute text-indigo-600/60 font-mono tracking-widest ${isMobile
                                                ? "top-2 right-3 text-[9px]"
                                                : "top-4 right-6 text-xs"
                                            }`}
                                    >
                                        Page 01
                                    </div>

                                    {/* Content */}
                                    <div
                                        className={`flex flex-col justify-center h-full ${isMobile ? "px-4 py-6 pl-5" : "p-6 md:p-10 pl-6 md:pl-10"
                                            }`}
                                    >
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.8, delay: 0.4 }}
                                        >
                                            <h3
                                                className={`font-bold text-zinc-900 font-serif ${isMobile ? "text-sm mb-2" : "text-xl md:text-3xl mb-3 md:mb-4"
                                                    }`}
                                            >
                                                More About Me
                                            </h3>

                                            <div
                                                className={`text-zinc-700 leading-relaxed text-justify font-serif ${isMobile ? "text-[9px] space-y-1.5" : "text-xs md:text-base space-y-3"
                                                    }`}
                                            >
                                                <p>
                                                    Hello! I'm{" "}
                                                    <span className="font-bold text-indigo-700">Ariya</span>, a
                                                    19-year-old Computer Science student with a deep passion for
                                                    programming and problem-solving. I love building things from
                                                    scratch and turning ideas into working software.
                                                </p>
                                                <p className="hidden md:block">
                                                    What drives me most is the challenge of solving complex problems
                                                    and the satisfaction of seeing a project come to life. My journey
                                                    with technology started when I was 7 years old, fascinated by how
                                                    computers work and eager to write my first lines of code.
                                                </p>
                                                <p>
                                                    My goal is to become an{" "}
                                                    <span className="font-bold text-indigo-700">AI Engineer</span>,
                                                    and every project I build, every problem I solve, is a step closer
                                                    to that dream.
                                                </p>
                                            </div>

                                            <div
                                                className={`${isMobile ? "mt-3 pt-2" : "mt-4 md:mt-6 pt-3 md:pt-4"
                                                    } border-t border-zinc-300`}
                                            >
                                                <p
                                                    className={`text-zinc-500 italic font-serif ${isMobile ? "text-[8px]" : "text-[10px] md:text-xs"
                                                        }`}
                                                >
                                                    — Written with passion, coded with purpose.
                                                </p>
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Page number at bottom */}
                                    <div
                                        className={`absolute left-1/2 -translate-x-1/2 text-zinc-500 font-mono ${isMobile ? "bottom-2 text-[9px]" : "bottom-3 text-xs"
                                            }`}
                                    >
                                        — 2 —
                                    </div>
                                </div>

                                {/* 3D SPINE - horizontal on mobile, vertical on desktop */}
                                {isMobile ? (
                                    <div
                                        className="absolute left-0 right-0 top-1/2 -translate-y-1/2 pointer-events-none"
                                        style={{
                                            height: "28px",
                                            background:
                                                "linear-gradient(180deg, transparent 0%, rgba(139,92,42,0.15) 20%, rgba(139,92,42,0.35) 45%, rgba(0,0,0,0.5) 50%, rgba(139,92,42,0.35) 55%, rgba(139,92,42,0.15) 80%, transparent 100%)",
                                            boxShadow:
                                                "inset 0 3px 6px rgba(0,0,0,0.3), inset 0 -3px 6px rgba(0,0,0,0.3), 0 0 15px rgba(0,0,0,0.2)",
                                            zIndex: 15
                                        }}
                                    >
                                        {/* Stitching */}
                                        <div
                                            className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px w-full opacity-40"
                                            style={{
                                                backgroundImage:
                                                    "repeating-linear-gradient(to right, rgba(0,0,0,0.4) 0px, rgba(0,0,0,0.4) 4px, transparent 4px, transparent 10px)"
                                            }}
                                        />
                                    </div>
                                ) : (
                                    <div
                                        className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
                                        style={{
                                            width: "40px",
                                            background:
                                                "linear-gradient(90deg, transparent 0%, rgba(139,92,42,0.15) 20%, rgba(139,92,42,0.35) 45%, rgba(0,0,0,0.5) 50%, rgba(139,92,42,0.35) 55%, rgba(139,92,42,0.15) 80%, transparent 100%)",
                                            boxShadow:
                                                "inset 4px 0 8px rgba(0,0,0,0.3), inset -4px 0 8px rgba(0,0,0,0.3), 0 0 20px rgba(0,0,0,0.2)",
                                            zIndex: 15
                                        }}
                                    >
                                        <div
                                            className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px h-full opacity-40"
                                            style={{
                                                backgroundImage:
                                                    "repeating-linear-gradient(to bottom, rgba(0,0,0,0.4) 0px, rgba(0,0,0,0.4) 4px, transparent 4px, transparent 10px)"
                                            }}
                                        />
                                    </div>
                                )}
                            </div>
                        </motion.div>

                        {/* ===== FRONT COVER ===== */}
                        {isMobile ? (
                            /* ---------- MOBILE: CLICK TO OPEN (flips UP) ---------- */
                            <motion.div
                                onClick={handleToggleOpen}
                                animate={{
                                    rotateX: isOpen ? -178 : 0,
                                    pointerEvents: isOpen ? "none" : "auto"
                                }}
                                transition={{
                                    duration: 3.5,
                                    ease: [0.22, 1, 0.36, 1]
                                }}
                                style={{
                                    transformStyle: "preserve-3d",
                                    transformOrigin: "top center",
                                    backfaceVisibility: "hidden",
                                    zIndex: 20
                                }}
                                className="notebook-cover absolute top-0 left-0 w-full h-full rounded-lg flex items-center justify-center cursor-pointer"
                            >
                                {/* Leather texture */}
                                <div
                                    className="absolute inset-0 rounded-lg opacity-40 pointer-events-none"
                                    style={{
                                        backgroundImage: `radial-gradient(circle at 20% 30%, rgba(99,102,241,0.15) 0%, transparent 50%),
                                      radial-gradient(circle at 80% 70%, rgba(99,102,241,0.1) 0%, transparent 50%)`
                                    }}
                                />

                                {/* Binding rings on TOP edge (mobile hinge) */}
                                <div className="absolute top-0 left-0 right-0 h-6 flex flex-row justify-around px-8 z-20 bg-gradient-to-b from-black via-zinc-900 to-transparent">
                                    {[...Array(6)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="w-5 h-5 rounded-full bg-gradient-to-br from-zinc-300 via-zinc-500 to-zinc-800 border border-black"
                                            style={{
                                                boxShadow:
                                                    "inset 0 2px 4px rgba(0,0,0,0.8), 0 1px 2px rgba(255,255,255,0.1)"
                                            }}
                                        />
                                    ))}
                                </div>

                                {/* Cover content */}
                                <motion.div
                                    animate={{
                                        opacity: isOpen ? 0 : 1,
                                        scale: isOpen ? 0.85 : 1
                                    }}
                                    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                                    className="text-center px-6 relative z-10"
                                >
                                    <div className="mb-4 flex justify-center">
                                        <div
                                            className="w-16 h-16 rounded-full border-2 border-indigo-500/50 flex items-center justify-center"
                                            style={{ boxShadow: "0 0 40px rgba(99,102,241,0.4)" }}
                                        >
                                            <FiBookOpen className="text-3xl text-indigo-400" />
                                        </div>
                                    </div>

                                    <h3 className="text-3xl md:text-4xl font-bold main-color-text mb-3 tracking-wider font-serif">
                                        ABOUT ME
                                    </h3>

                                    <div className="flex items-center justify-center gap-3 mb-3">
                                        <div className="w-10 h-px bg-gradient-to-r from-transparent to-indigo-500" />
                                        <div className="w-2 h-2 rounded-full bg-indigo-500" />
                                        <div className="w-10 h-px bg-gradient-to-l from-transparent to-indigo-500" />
                                    </div>

                                    <p className="text-gray-400 text-xs tracking-[0.3em] uppercase">
                                        The Story of a Developer
                                    </p>

                                    {/* CLICK ME indicator */}
                                    <motion.div
                                        animate={{ y: [0, 8, 0], opacity: [0.6, 1, 0.6] }}
                                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                        className="mt-8 flex flex-col items-center gap-2"
                                    >
                                        <div className="w-10 h-10 rounded-full border-2 border-indigo-400 flex items-center justify-center">
                                            <span className="text-indigo-400 text-xl">↓</span>
                                        </div>
                                        <span className="text-indigo-400 text-sm font-bold tracking-widest uppercase">
                                            Click me
                                        </span>
                                    </motion.div>
                                </motion.div>

                                {/* Corner ornaments */}
                                <div className="absolute top-8 left-4 w-8 h-8 border-t-2 border-l-2 border-indigo-500/40" />
                                <div className="absolute top-8 right-4 w-8 h-8 border-t-2 border-r-2 border-indigo-500/40" />
                                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-indigo-500/40" />
                                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-indigo-500/40" />

                                {/* Bookmark ribbon */}
                                <div
                                    className="absolute -right-2 top-1/3 w-4 h-20 shadow-lg"
                                    style={{
                                        background:
                                            "linear-gradient(180deg, #4f46e5 0%, #7c3aed 50%, #4f46e5 100%)",
                                        clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 80%, 0 100%)"
                                    }}
                                />

                                {/* Edge highlight */}
                                <div
                                    className="absolute inset-0 rounded-lg pointer-events-none"
                                    style={{
                                        boxShadow:
                                            "inset 0 0 30px rgba(0,0,0,0.6), inset 0 0 2px rgba(99,102,241,0.3)"
                                    }}
                                />
                            </motion.div>
                        ) : (
                            /* ---------- DESKTOP: SCROLL TO OPEN (flips LEFT) ---------- */
                            <motion.div
                                style={{
                                    rotateY: rotateY,
                                    rotateX: bendX,
                                    translateZ: liftZ,
                                    boxShadow: coverShadow,
                                    transformStyle: "preserve-3d",
                                    transformOrigin: "left center",
                                    zIndex: 20
                                }}
                                className="notebook-cover absolute top-0 left-0 w-full h-full rounded-lg flex items-center justify-center"
                            >
                                {/* Leather texture */}
                                <div
                                    className="absolute inset-0 rounded-lg opacity-40 pointer-events-none"
                                    style={{
                                        backgroundImage: `radial-gradient(circle at 20% 30%, rgba(99,102,241,0.15) 0%, transparent 50%),
                                      radial-gradient(circle at 80% 70%, rgba(99,102,241,0.1) 0%, transparent 50%)`
                                    }}
                                />

                                {/* Binding rings on LEFT edge */}
                                <div className="absolute left-0 top-0 bottom-0 w-6 flex flex-col justify-around py-8 z-20 bg-gradient-to-r from-black via-zinc-900 to-transparent">
                                    {[...Array(8)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="w-5 h-5 rounded-full bg-gradient-to-br from-zinc-300 via-zinc-500 to-zinc-800 border border-black mx-auto"
                                            style={{
                                                boxShadow:
                                                    "inset 0 2px 4px rgba(0,0,0,0.8), 0 1px 2px rgba(255,255,255,0.1)"
                                            }}
                                        />
                                    ))}
                                </div>

                                {/* Cover content */}
                                <motion.div
                                    style={{ opacity: titleFade, scale: titleScale }}
                                    className="text-center px-8 relative z-10"
                                >
                                    <div className="mb-6 flex justify-center">
                                        <div
                                            className="w-20 h-20 rounded-full border-2 border-indigo-500/50 flex items-center justify-center"
                                            style={{ boxShadow: coverGlow }}
                                        >
                                            <FiBookOpen className="text-4xl text-indigo-400" />
                                        </div>
                                    </div>

                                    <h3 className="text-4xl md:text-6xl font-bold main-color-text mb-4 tracking-wider font-serif">
                                        ABOUT ME
                                    </h3>

                                    <div className="flex items-center justify-center gap-3 mb-4">
                                        <div className="w-12 h-px bg-gradient-to-r from-transparent to-indigo-500" />
                                        <div className="w-2 h-2 rounded-full bg-indigo-500" />
                                        <div className="w-12 h-px bg-gradient-to-l from-transparent to-indigo-500" />
                                    </div>

                                    <p className="text-gray-400 text-sm md:text-base tracking-[0.3em] uppercase">
                                        The Story of a Developer
                                    </p>
                                    <p className="text-gray-600 text-xs mt-6 tracking-widest font-mono">
                                        — ARIYA RAJAIE NEZHAD —
                                    </p>
                                </motion.div>

                                {/* Corner ornaments */}
                                <div className="absolute top-4 left-10 w-10 h-10 border-t-2 border-l-2 border-indigo-500/40" />
                                <div className="absolute top-4 right-4 w-10 h-10 border-t-2 border-r-2 border-indigo-500/40" />
                                <div className="absolute bottom-4 left-10 w-10 h-10 border-b-2 border-l-2 border-indigo-500/40" />
                                <div className="absolute bottom-4 right-4 w-10 h-10 border-b-2 border-r-2 border-indigo-500/40" />

                                {/* Bookmark ribbon */}
                                <div
                                    className="absolute -right-2 top-1/3 w-5 h-24 shadow-lg"
                                    style={{
                                        background:
                                            "linear-gradient(180deg, #4f46e5 0%, #7c3aed 50%, #4f46e5 100%)",
                                        clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 80%, 0 100%)"
                                    }}
                                />

                                {/* Edge highlight */}
                                <div
                                    className="absolute inset-0 rounded-lg pointer-events-none"
                                    style={{
                                        boxShadow:
                                            "inset 0 0 30px rgba(0,0,0,0.6), inset 0 0 2px rgba(99,102,241,0.3)"
                                    }}
                                />
                            </motion.div>
                        )}
                    </div>
                </div>

                {/* About cards below notebook */}
                <div className="mt-20">
                    <AboutCard />
                </div>
            </div>
        </section>
    );
}

export default About;