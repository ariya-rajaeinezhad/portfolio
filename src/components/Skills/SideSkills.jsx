import { motion } from "motion/react";
import ToolsSkills from "./ToolsSkills";
import SoftSkills from "./SoftSkills";

function SideSkills() {
    return (
        <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-blue-800"
        >
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Tools
            </h3>
            <ToolsSkills />
            <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-6">
                Soft Skills
            </h3>
            <SoftSkills />
        </motion.div>
    );
};

export default SideSkills;