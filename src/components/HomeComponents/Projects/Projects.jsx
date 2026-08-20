import ProjectCard from "./ProjectCard";
import { useState, useEffect } from "react";
import { projects as localProjects } from "../../../data/projects";
const API_URL = "http://localhost:5000"

function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const getSkills = async () => {
            try {
                const res = await fetch(`${API_URL}/api/projects`);
                const data = await res.json();
                setProjects(data);
            } catch (error) {
                console.error("error while reading data from backend", error);
                setProjects(localProjects)
            } finally {
                setLoading(false);
            };
        };
        getSkills();
    }, []);
    return (
        <section id="projects" className="pb-40 pt-10 px-6">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-5xl font-bold text-center text-white mb-12">
                    -My Projects-
                </h2>
                {loading ? (
                    <p className="text-blue-800 font-bold">Loading Projects...</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={project._id}
                                id={project._id}
                                {...project}
                                index={index}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

export default Projects;