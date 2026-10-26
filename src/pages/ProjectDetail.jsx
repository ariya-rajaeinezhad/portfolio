import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { projects as localProjects } from "../data/projects";
import ProjectHero from "../components/ProjectDetailComponents/ProjectHero/ProjectHero";
import ProjectAbout from "../components/ProjectDetailComponents/ProjectAbout/ProjectAbout";
import ProjectFeatures from "../components/ProjectDetailComponents/ProjectFeatures/ProjectFetures";
import ProjectTechStack from "../components/ProjectDetailComponents/ProjectTechStack/ProjectTechStack";
import ProjectScreenshots from "../components/ProjectDetailComponents/ProjectScreenshots/ProjectScreenshots";
import ProjectInsights from "../components/ProjectDetailComponents/ProjectInsights/ProjectInsights";
import ProjectNav from "../components/ProjectDetailComponents/ProjectNav/ProjectNav";

const API_URL = "http://localhost:5000";

function ProjectDetail() {
    const { id } = useParams();
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getProjects = async () => {
            try {
                const res = await fetch(`${API_URL}/api/projects`);
                const data = await res.json();
                setProjects(data);
            } catch (error) {
                console.error("error while reading file from backend", error);
                setProjects(localProjects);
            } finally {
                setLoading(false);
            }
        };
        getProjects();
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

    const project = projects.find((p) => p._id === id);
    const index = projects.findIndex((p) => p._id === id);
    const prev = projects[index - 1];
    const next = projects[index + 1];

    if (!project) {
        return (
            <div className="min-h-screen bg-black flex flex-col items-center justify-center px-6 text-center">
                <h1 className="text-3xl font-bold text-white mb-2">Project not found</h1>
                <p className="text-gray-400 mb-6">The project you are looking for does not exist.</p>
                <Link to="/" className="btn-main px-6 py-3 rounded-full font-medium inline-flex items-center gap-2">
                    ← Back to Home
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white">
            <ProjectHero project={project} />
            <div className="container mx-auto max-w-5xl px-6 py-16 space-y-16">
                <div className="dark-card p-2 rounded-2xl overflow-hidden">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full rounded-xl object-cover"
                    />
                </div>
                <ProjectAbout project={project} />
                <ProjectFeatures features={project.features} />
                <ProjectTechStack tags={project.tags} />
                <ProjectScreenshots screenshots={project.screenshots} title={project.title} />
                <ProjectInsights learned={project.learned} challenge={project.challenge} />
                <ProjectNav prev={prev} next={next} />
            </div>
        </div>
    );
}

export default ProjectDetail;