import { motion } from "motion/react";

function SkillBar({ name, level }) {
    return (
        <div>
            <div className="flex justify-between mb-1">
                <span className="font-medium text-slate-700">{name}</span>
                <span className="text-blue-600 font-bold">{level}%</span>
            </div>
            <div className="h-3 bg-blue-100 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-blue-600 rounded-full"
                />
            </div>
        </div>
    );
}

export default SkillBar;