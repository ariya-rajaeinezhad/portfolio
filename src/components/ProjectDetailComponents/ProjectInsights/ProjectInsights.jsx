import { FaLightbulb, FaPuzzlePiece } from "react-icons/fa";

function ProjectInsights({ learned, challenge }) {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="dark-card p-8 rounded-2xl card-hover">
                <h3 className="text-2xl font-bold text-white flex items-center gap-3 mb-6">
                    <FaLightbulb className="text-indigo-400 text-3xl" /> What I Learned
                </h3>
                <ul className="space-y-4">
                    {learned.map((l, index) => (
                        <li key={index} className="text-gray-400 flex items-start gap-3 leading-relaxed">
                            <span className="text-indigo-400 mt-1.5 text-xl">•</span> {l}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="dark-card p-8 rounded-2xl card-hover">
                <h3 className="text-2xl font-bold text-white flex items-center gap-3 mb-6">
                    <FaPuzzlePiece className="text-indigo-400 text-3xl" /> The Challenge
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                    {challenge}
                </p>
            </div>
        </section>
    );
}

export default ProjectInsights;