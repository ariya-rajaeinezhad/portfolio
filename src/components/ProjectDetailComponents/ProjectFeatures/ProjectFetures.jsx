import { FaCheckCircle } from "react-icons/fa";

function ProjectFeatures({ features }) {
    return (
        <section>
            <h2 className="text-3xl md:text-4xl font-bold main-color-text mb-8">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((f, index) => (
                    <div
                        key={index}
                        className="dark-card p-5 rounded-xl flex items-start gap-4 card-hover"
                    >
                        <FaCheckCircle className="text-indigo-400 text-xl mt-1 flex-shrink-0" />
                        <p className="text-gray-300 leading-relaxed">{f}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ProjectFeatures;