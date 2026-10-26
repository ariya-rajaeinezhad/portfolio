function ProjectTechStack({ tags }) {
    return (
        <section>
            <h2 className="text-3xl md:text-4xl font-bold main-color-text mb-8">Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
                {tags.map((t, index) => (
                    <span
                        key={index}
                        className="bg-indigo-500/10 text-indigo-300 px-5 py-2.5 rounded-full font-semibold border border-indigo-500/30 hover:border-indigo-400 hover:bg-indigo-500/20 transition-all cursor-default"
                    >
                        {t}
                    </span>
                ))}
            </div>
        </section>
    );
}

export default ProjectTechStack;