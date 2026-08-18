import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { technicalSkills as localSkills } from "../../data/skills";
import SkillBar from "./SkillBar";
const API_URL = "http://localhost:5000"

function TechnicalSkills() {
    const [technicalSkills, setTechnicalSkills] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const getSkills = async () => {
            try {
                const res = await fetch(`${API_URL}/api/skills`);
                const data = await res.json();
                setTechnicalSkills(data);
            } catch (error) {
                console.error("error while reading data from backend", error);
                setTechnicalSkills(localSkills);
            } finally {
                setLoading(false);
            };
        };
        getSkills();
    }, []);
    return (
        <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-blue-800"
        >
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Technical Skills
            </h3>
            {loading ? (
                <p className="bg-slate-700">Loading Skills...</p>
            ) : (
                <div className="space-y-5">
                    {technicalSkills.map((skill) => (
                        <SkillBar
                            key={skill.id}
                            name={skill.name}
                            level={skill.level}
                        />
                    ))}
                </div>
            )}
        </motion.div>
    );
};

export default TechnicalSkills;