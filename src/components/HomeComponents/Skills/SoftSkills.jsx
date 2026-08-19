import { useState, useEffect } from "react";
const API_URL = "http://localhost:5000"

function SoftSkills() {
    const [softSkills, setSoftSkills] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const getSkills = async () => {
            try {
                const res = await fetch(`${API_URL}/api/skills`);
                const data = await res.json();
                setSoftSkills(data.softSkills);
            } catch (error) {
                console.error("error while reading data from backend", error);
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
                    {softSkills.map((skill) => (
                        <span
                            key={skill._id}
                            className="main-color text-white px-4 py-2 rounded-full font-medium shadow-md hover:-translate-y-1 transition"
                        >
                            {skill.name}
                        </span>
                    ))}
                </div>
            )}
        </>
    );
};

export default SoftSkills;