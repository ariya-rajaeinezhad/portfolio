import { FiPhoneCall, FiArrowDown } from "react-icons/fi";
import { useState } from "react";
import { motion } from "motion/react";
import HeroContactModal from "./HeroContactModal";

function Hero() {
    const [isContactOpen, setIsContactOpen] = useState(false);

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Background gradient orbs */}
            <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-600 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-float" />
            <div className="absolute top-40 right-10 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }} />
            <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '4s' }} />

            {/* Grid background */}
            <div className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}
            />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
                    className="flex flex-col items-center text-center"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mb-8"
                    >
                        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 p-1 animate-glow">
                            <img
                                src="/images/avatar.png"
                                alt="Ariya Rajaei Nezhad"
                                className="w-full h-full rounded-full object-cover"
                            />
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-5xl md:text-7xl font-bold text-white mb-4"
                    >
                        Ariya <span className="main-color-text">Rajaei Nezhad</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl"
                    >
                        CS Student & Full-Stack Developer
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        <button className="btn-main px-8 py-4 rounded-full font-bold flex items-center gap-2 text-lg">
                            <a href="/Ariya-Rajaeinezhad-Resume.pdf">View Resume</a>
                        </button>
                        <button
                            onClick={() => setIsContactOpen(true)}
                            className="btn-outline px-8 py-4 rounded-full font-bold flex items-center gap-2 text-lg"
                        >
                            <FiPhoneCall /> Contact Me
                        </button>
                        <HeroContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.5 }}
                        className="absolute bottom-10 left-1/2 -translate-x-1/2"
                    >
                        <a href="#about" className="flex flex-col items-center gap-2 text-gray-500 hover:text-indigo-400 transition-colors">
                            <span className="text-sm font-medium">Scroll Down</span>
                            <FiArrowDown className="animate-bounce" size={24} />
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export default Hero;