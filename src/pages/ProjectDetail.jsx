import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import { FiGithub, FiExternalLink, FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { FaCheckCircle, FaLightbulb, FaPuzzlePiece, FaRocket } from "react-icons/fa";

function ProjectDetail() {
    const { id } = useParams();
    const project = projects.find((p) => p.id === Number(id));
    const index = projects.findIndex((p) => p.id === Number(id));
    const prev = projects[index - 1];
    const next = projects[index + 1];
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-6">
                <h1 className="text-3xl font-bold text-slate-800">Project not found</h1>
                <p className="text-slate-600 mt-2">The project you are looking for does not exist.</p>
                <Link to="/" className="mt-6 main-color text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition">
                    ← Back to Home
                </Link>
            </div>
        );
    }
    return (
        <div className="min-h-screen bg-slate-50">
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
                        <a href={project.demo} className="bg-white text-blue-700 px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-blue-50 transition">
                            <FiExternalLink /> Live Demo
                        </a>
                        <a href={project.github} className="border-2 border-white px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-white/10 transition">
                            <FiGithub /> GitHub
                        </a>
                    </div>
                </div>
            </div>
            <div className="container mx-auto max-w-5xl px-6 py-16 space-y-16">
                <img src={project.image} alt={project.title} className="w-full rounded-2xl shadow-lg object-cover" />
                <section>
                    <h2 className="text-3xl font-bold text-slate-800 mb-4">About This Project</h2>
                    <p className="text-slate-600 leading-relaxed text-lg text-justify">{project.fulldescription}</p>
                </section>
                <section>
                    <h2 className="text-3xl font-bold text-slate-800 mb-6">Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {project.features.map((f) => (
                            <div key={f} className="bg-blue-600 p-4 rounded-xl shadow-md flex items-start gap-3">
                                <FaCheckCircle className="text-white mt-1" />
                                <p className="text-white">{f}</p>
                            </div>
                        ))}
                    </div>
                </section>
                <section>
                    <h2 className="text-3xl font-bold text-slate-800 mb-6">Tech Stack</h2>
                    <div className="flex flex-wrap gap-3">
                        {project.tags.map((t) => (
                            <span key={t} className="bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-medium">{t}</span>
                        ))}
                    </div>
                </section>
                {project.screenshots && project.screenshots.length > 0 && (
                    <section>
                        <h2 className="text-3xl font-bold text-slate-800 mb-6">Screenshots</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {project.screenshots.map((s, i) => (
                                <img key={i} src={s} alt={`${project.title} screenshot ${i + 1}`} className="w-full h-64 object-cover rounded-xl shadow-md" />
                            ))}
                        </div>
                    </section>
                )}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-2xl shadow-lg text-justify">
                        <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-2 mb-4">
                            <FaLightbulb className="text-blue-600" /> What I Learned
                        </h3>
                        <ul className="space-y-3">
                            {project.learned.map((l) => (
                                <li key={l} className="text-slate-600 flex items-start gap-2">
                                    <span className="text-blue-600 mt-1">•</span> {l}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-lg text-justify">
                        <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-2 mb-4">
                            <FaPuzzlePiece className="text-blue-600" /> The Challenge
                        </h3>
                        <p className="text-slate-600 leading-relaxed">{project.challenge}</p>
                    </div>
                </section>
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-gray-200 pt-8">
                    {prev ? (
                        <Link to={`/project/${prev.id}`} className="flex items-center gap-2 text-blue-600 font-medium hover:underline">
                            <FiArrowLeft /> {prev.title}
                        </Link>
                    ) : <span />}

                    <Link to="/#projects" className="main-color text-white px-6 py-3 rounded-full font-medium">
                        All Projects
                    </Link>

                    {next ? (
                        <Link to={`/project/${next.id}`} className="flex items-center gap-2 text-blue-600 font-medium hover:underline">
                            {next.title} <FiArrowRight />
                        </Link>
                    ) : <span />}
                </div>
            </div>
        </div>
    );
}

export default ProjectDetail;