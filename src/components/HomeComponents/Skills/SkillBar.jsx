import { motion } from "motion/react";

function SkillBar({ name, level, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
        >
            <div className="flex justify-between mb-2">
                <span className="font-semibold text-white text-lg">{name}</span>
                <span className="text-indigo-400 font-bold text-lg">{level}%</span>
            </div>
            <div className="h-4 bg-zinc-900 rounded-full overflow-hidden relative border border-zinc-800">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
                    className="h-full bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-500 rounded-full relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-white/20 animate-pulse" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                </motion.div>
            </div>
        </motion.div>
    );
}

export default SkillBar;