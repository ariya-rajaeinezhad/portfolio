import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

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
            <p className="min-h-screen flex items-center justify-center text-blue-600">
                Loading project...
            </p>
        );
    }
    const project = projects.find((p) => p._id === id);
    const index = projects.findIndex((p) => p._id === id);
    const prev = projects[index - 1];
    const next = projects[index + 1];
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
            <ProjectHero project={project} />

            <div className="container mx-auto max-w-5xl px-6 py-16 space-y-16">
                <img src={project.image} alt={project.title} className="w-full rounded-2xl shadow-lg object-cover" />
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