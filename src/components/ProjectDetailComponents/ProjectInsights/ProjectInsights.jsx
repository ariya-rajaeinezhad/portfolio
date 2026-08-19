import { FaLightbulb, FaPuzzlePiece } from "react-icons/fa";

function ProjectInsights({ learned, challenge }) {
return (
<section className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div className="bg-white p-8 rounded-2xl shadow-lg text-justify">
        <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-2 mb-4">
            <FaLightbulb className="text-blue-600" /> What I Learned
        </h3>
        <ul className="space-y-3">
            {learned.map((l) => (
            <li key={l} className="text-slate-600 flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span> {l}
            </li>
            ))}
        </ul>
    </div>
    <div className="bg-white p-8 rounded-2xl shadow-lg text-justify">
        <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-2 mb-4">
            <FaPuzzlePiece className="text-blue-600" /> The Challenge
        </h3>
        <p className="text-slate-600 leading-relaxed">{challenge}</p>
    </div>
</section>
);
}

export default ProjectInsights;