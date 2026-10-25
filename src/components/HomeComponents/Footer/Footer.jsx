import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { motion } from "motion/react";

function Footer() {
    return (
        <footer className="bg-black text-white pt-20 pb-8 px-6 border-t border-zinc-900">
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-2xl font-bold mb-4">
                            <span className="main-color-text">Ariya</span> Rajaei Nezhad
                        </h2>
                        <p className="text-gray-400 leading-relaxed">
                            Computer Science student passionate about building modern
                            web experiences, on the way to becoming an AI engineer.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        className="text-gray-400 hover:text-indigo-400 transition-colors"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h3 className="text-lg font-bold mb-4">Follow Me</h3>
                        <div className="flex gap-4">
                            <a
                                href="https://github.com/ariya-rajaeinezhad"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="h-12 w-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-indigo-600 hover:border-indigo-500 hover:scale-110 transition-all"
                            >
                                <FaGithub size={20} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/ariya-rajaei-nezhad-7a5b9142b/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="h-12 w-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-indigo-600 hover:border-indigo-500 hover:scale-110 transition-all"
                            >
                                <FaLinkedinIn size={20} />
                            </a>
                        </div>
                    </motion.div>
                </div>

                <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} Ariya Rajaei Nejad. All rights reserved.</p>
                    <p>
                        Illustrations by{" "}
                        <a href="https://storyset.com" className="text-indigo-400 hover:underline">
                            Storyset
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;