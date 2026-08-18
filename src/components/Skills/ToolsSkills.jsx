import { tools } from "../../data/skills";

function ToolsSkills() {
    return (
        <div className="flex flex-wrap gap-3">
            {tools.map((tool) => (
                <span
                    key={tool}
                    className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium hover:-translate-y-1 transition"
                >
                    {tool}
                </span>
            ))}
        </div>
    );
};

export default ToolsSkills;