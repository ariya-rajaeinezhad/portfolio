import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { tools as localSkills } from "../../../data/skills";

const API_URL = "http://localhost:5000";

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
                setToolsSkills(localSkills);
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
                    {toolsSkills.map((tool, index) => (
                        <motion.span
                            key={tool._id}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            whileHover={{ scale: 1.1, y: -5 }}
                            className="bg-indigo-500/10 text-indigo-300 px-5 py-2.5 rounded-full font-semibold border border-indigo-500/30 hover:border-indigo-400 hover:bg-indigo-500/20 transition-all cursor-default"
                        >
                            {tool.name}
                        </motion.span>
                    ))}
                </div>
            )}
        </>
    );
}

export default ToolsSkills;