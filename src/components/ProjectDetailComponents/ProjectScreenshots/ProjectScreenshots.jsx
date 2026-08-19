function ProjectScreenshots({ screenshots, title }) {
    if (!screenshots || screenshots.length === 0) return null;

    return (
        <section>
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Screenshots</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {screenshots.map((s, i) => (
                    <img key={i} src={s} alt={`${title} screenshot ${i + 1}`} className="w-full h-64 object-cover rounded-xl shadow-md" />
                ))}
            </div>
        </section>
    );
}

export default ProjectScreenshots;