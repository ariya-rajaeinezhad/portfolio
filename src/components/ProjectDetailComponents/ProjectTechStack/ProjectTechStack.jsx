function ProjectTechStack({ tags }) {
    return (
        <section>
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
                {tags.map((t) => (
                    <span key={t} className="bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-medium">{t}</span>
                ))}
            </div>
        </section>
    );
}

export default ProjectTechStack;