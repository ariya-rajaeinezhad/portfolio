import { useState, useEffect } from "react";
import { motion } from "motion/react";
import SkillBar from "./SkillBar";
import { technicalSkills as localSkills } from "../../../data/skills";

const API_URL = "http://localhost:5000";

function TechnicalSkills() {
    const [technicalSkills, setTechnicalSkills] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getSkills = async () => {
            try {
                const res = await fetch(`${API_URL}/api/skills`);
                const data = await res.json();
                setTechnicalSkills(data.technicalSkills);
            } catch (error) {
                console.error("error while reading data from backend", error);
                setTechnicalSkills(localSkills);
            } finally {
                setLoading(false);
            }
        };
        getSkills();
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="dark-card p-8 rounded-3xl"
        >
            <h3 className="text-3xl font-bold text-white mb-8">
                Technical Skills
            </h3>
            {loading ? (
                <div className="flex justify-center py-10">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full"
                    />
                </div>
            ) : (
                <div className="space-y-6">
                    {technicalSkills.map((skill, index) => (
                        <SkillBar
                            key={skill._id}
                            name={skill.name}
                            level={skill.level}
                            index={index}
                        />
                    ))}
                </div>
            )}
        </motion.div>
    );
}

export default TechnicalSkills;