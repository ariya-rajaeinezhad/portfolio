import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { softSkills as localSkills } from "../../../data/skills";

const API_URL = "http://localhost:5000";

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
                setSoftSkills(localSkills);
            } finally {
                setLoading(false);
            }
        };
        getSkills();
    }, []);

    return (
        <>
            {loading ? (
                <div className="flex justify-center py-10">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full"
                    />
                </div>
            ) : (
                <div className="flex flex-wrap gap-3">
                    {softSkills.map((skill, index) => (
                        <motion.span
                            key={skill._id}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            whileHover={{ scale: 1.1, y: -5 }}
                            className="main-color text-white px-5 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-indigo-500/50 transition-all cursor-default"
                        >
                            {skill.name}
                        </motion.span>
                    ))}
                </div>
            )}
        </>
    );
}

export default SoftSkills;