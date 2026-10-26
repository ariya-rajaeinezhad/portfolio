import { Link } from "react-router-dom";
import { FiGithub, FiExternalLink, FiArrowLeft } from "react-icons/fi";

function ProjectHero({ project }) {
    return (
        <div className="relative py-24 px-6 overflow-hidden bg-zinc-950 border-b border-zinc-800">
            {/* Background gradient orbs */}
            <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 pointer-events-none" />

            <div className="container mx-auto max-w-5xl relative z-10">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-indigo-400 mb-8 transition-colors group"
                >
                    <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Home
                </Link>

                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                    {project.title}
                </h1>
                <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed">
                    {project.tagline}
                </p>

                <div className="flex flex-wrap gap-3 mt-8">
                    <span className="bg-indigo-500/10 text-indigo-300 border border-indigo-500/30 px-4 py-1.5 rounded-full text-sm font-medium">
                        Role: {project.role}
                    </span>
                    <span className="bg-indigo-500/10 text-indigo-300 border border-indigo-500/30 px-4 py-1.5 rounded-full text-sm font-medium">
                        Duration: {project.duration}
                    </span>
                    <span className="bg-indigo-500/10 text-indigo-300 border border-indigo-500/30 px-4 py-1.5 rounded-full text-sm font-medium">
                        Year: {project.year}
                    </span>
                    <span className="bg-indigo-500/10 text-indigo-300 border border-indigo-500/30 px-4 py-1.5 rounded-full text-sm font-medium">
                        Status: {project.status}
                    </span>
                </div>

                <div className="flex flex-wrap gap-4 mt-10">
                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-main px-6 py-3 rounded-full font-bold flex items-center gap-2"
                        >
                            <FiExternalLink /> Live Demo
                        </a>
                    )}
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline px-6 py-3 rounded-full font-bold flex items-center gap-2"
                    >
                        <FiGithub /> GitHub
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProjectHero;