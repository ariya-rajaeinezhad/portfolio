import { Link } from "react-router-dom";
import { FiGithub, FiExternalLink, FiArrowLeft } from "react-icons/fi";

function ProjectHero({ project }) {
    return (
        <div className="main-color text-white py-20 px-6 shadow-2xl shadow-slate-400">
            <div className="container mx-auto max-w-5xl">
                <Link to="/" className="inline-flex items-center gap-2 text-blue-100 hover:text-blue-800 hover:bg-white mb-6 border-2 rounded-3xl p-2 border-blue-100">
                    <FiArrowLeft /> Back to Home
                </Link>
                <h1 className="text-4xl md:text-5xl font-bold">{project.title}</h1>
                <p className="text-blue-100 text-xl mt-3">{project.tagline}</p>
                <div className="flex flex-wrap gap-3 mt-6">
                    <span className="bg-white/15 px-4 py-1.5 rounded-full text-sm">Role: {project.role}</span>
                    <span className="bg-white/15 px-4 py-1.5 rounded-full text-sm">Duration: {project.duration}</span>
                    <span className="bg-white/15 px-4 py-1.5 rounded-full text-sm">Year: {project.year}</span>
                    <span className="bg-white/15 px-4 py-1.5 rounded-full text-sm">Status: {project.status}</span>
                </div>
                <div className="flex flex-wrap gap-4 mt-8">
                    {project.demo ? (
                        <a href={project.github} className="border-2 border-white px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-white/10 transition">
                            <FiGithub /> GitHub
                        </a>
                    ) : ("")
                    }

                </div>
            </div>
        </div>
    );
}

export default ProjectHero;