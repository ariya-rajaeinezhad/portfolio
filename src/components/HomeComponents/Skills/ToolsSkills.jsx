import { useState, useEffect } from "react";
import { tools as localSkills } from "../../../data/skills";
const API_URL = "http://localhost:5000"

function ToolsSkills() {
    const [toolsSkills, setToolsSkills] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const getSkills = async () => {
            try {
                const res = await fetch(`${API_URL}/api/skills`);
                const data = await res.json();
                setToolsSkills(data.tools);
            } catch (error) {
                console.error("error while reading data from backend", error);
                setToolsSkills(localSkills)
            } finally {
                setLoading(false);
            };
        };
        getSkills();
    }, []);
    return (
        <>
            {loading ? (
                <p className="text-blue-800 font-bold">Loading Skills...</p>
            ) : (
                <div className="flex flex-wrap gap-3">
                    {toolsSkills.map((tool) => (
                        <span
                            key={tool._id}
                            className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium hover:-translate-y-1 transition"
                        >
                            {tool.name}
                        </span>
                    ))}
                </div>
            )}
        </>
    );
};

export default ToolsSkills;