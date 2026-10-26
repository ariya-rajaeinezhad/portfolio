function ProjectScreenshots({ screenshots, title }) {
    if (!screenshots || screenshots.length === 0) return null;

    return (
        <section>
            <h2 className="text-3xl md:text-4xl font-bold main-color-text mb-8">Screenshots</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {screenshots.map((s, i) => (
                    <div key={i} className="dark-card p-2 rounded-2xl overflow-hidden card-hover">
                        <img
                            src={s}
                            alt={`${title} screenshot ${i + 1}`}
                            className="w-full h-64 md:h-80 object-cover rounded-xl"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ProjectScreenshots;