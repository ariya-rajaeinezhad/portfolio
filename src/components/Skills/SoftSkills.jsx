import { softSkills } from "../../data/skills";

function SoftSkills() {
    return (
        <div className="flex flex-wrap gap-3">
            {softSkills.map((skill) => (
                <span
                    key={skill}
                    className="main-color text-white px-4 py-2 rounded-full font-medium shadow-md hover:-translate-y-1 transition"
                >
                    {skill}
                </span>
            ))}
        </div>
    );
};

export default SoftSkills;