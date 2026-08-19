import { FaCheckCircle } from "react-icons/fa";

function ProjectFeatures({ features }) {
    return (
        <section>
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((f) => (
                    <div key={f} className="bg-blue-600 p-4 rounded-xl shadow-md flex items-start gap-3">
                        <FaCheckCircle className="text-white mt-1" />
                        <p className="text-white">{f}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ProjectFeatures;