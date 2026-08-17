import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
    return (
        <section id="projects" className="pb-40 pt-10 px-6">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-5xl font-bold text-center text-white mb-12">
                    -My Projects-
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            {...project}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;