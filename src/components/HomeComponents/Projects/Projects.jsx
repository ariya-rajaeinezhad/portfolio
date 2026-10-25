import ProjectCard from "./ProjectCard";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { projects as localProjects } from "../../../data/projects";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const API_URL = "http://localhost:5000";
const PROJECTS_PER_PAGE = 4;

function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const getProjects = async () => {
            try {
                const res = await fetch(`${API_URL}/api/projects`);
                const data = await res.json();
                setProjects(data);
            } catch (error) {
                console.error("error while reading data from backend", error);
                setProjects(localProjects);
            } finally {
                setLoading(false);
            }
        };
        getProjects();
    }, []);

    const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);
    const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
    const endIndex = startIndex + PROJECTS_PER_PAGE;
    const currentProjects = projects.slice(startIndex, endIndex);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        const el = document.getElementById('projects');
        if (el) window.scrollTo({ top: el.offsetTop - 100, behavior: 'smooth' });
    };

    return (
        <section id="projects" className="py-20 px-6">
            <div className="container mx-auto max-w-6xl">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-6xl font-bold text-center mb-16 main-color-text"
                >
                    My Projects
                </motion.h2>

                {loading ? (
                    <div className="flex justify-center items-center py-20">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full"
                        />
                    </div>
                ) : (
                    <>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentPage}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
                            >
                                {currentProjects.map((project, index) => (
                                    <ProjectCard
                                        key={project._id}
                                        id={project._id}
                                        {...project}
                                        index={index}
                                    />
                                ))}
                            </motion.div>
                        </AnimatePresence>

                        {totalPages > 1 && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="flex justify-center items-center gap-4"
                            >
                                <button
                                    onClick={() => handlePageChange(currentPage - 1)}
                                    disabled={currentPage === 1}
                                    className="p-3 rounded-full bg-zinc-900 border border-zinc-700 text-white hover:bg-indigo-600 hover:border-indigo-500 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                                >
                                    <FiChevronLeft size={24} />
                                </button>

                                <div className="flex gap-2">
                                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                        <button
                                            key={page}
                                            onClick={() => handlePageChange(page)}
                                            className={`w-12 h-12 rounded-full font-bold transition-all ${currentPage === page
                                                    ? 'main-color text-white shadow-lg scale-110'
                                                    : 'bg-zinc-900 border border-zinc-700 text-white hover:bg-zinc-800'
                                                }`}
                                        >
                                            {page}
                                        </button>
                                    ))}
                                </div>

                                <button
                                    onClick={() => handlePageChange(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                    className="p-3 rounded-full bg-zinc-900 border border-zinc-700 text-white hover:bg-indigo-600 hover:border-indigo-500 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                                >
                                    <FiChevronRight size={24} />
                                </button>
                            </motion.div>
                        )}
                    </>
                )}
            </div>
        </section>
    );
}

export default Projects;