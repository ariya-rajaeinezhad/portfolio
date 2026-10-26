function ProjectAbout({ project }) {
    return (
        <section>
            <h2 className="text-3xl md:text-4xl font-bold main-color-text mb-6">About This Project</h2>
            <p className="text-gray-400 leading-relaxed text-lg text-justify">
                {project.fulldescription}
            </p>
        </section>
    );
}

export default ProjectAbout;