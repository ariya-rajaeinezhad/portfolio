function ProjectAbout({ project }) {
    return (
        <section>
            <h2 className="text-3xl font-bold text-slate-800 mb-4">About This Project</h2>
            <p className="text-slate-600 leading-relaxed text-lg text-justify">{project.fulldescription}</p>
        </section>
    );
}

export default ProjectAbout;