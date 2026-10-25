import { motion } from "motion/react";
import ToolsSkills from "./ToolsSkills";
import SoftSkills from "./SoftSkills";

function SideSkills() {
    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="dark-card p-8 rounded-3xl"
        >
            <h3 className="text-3xl font-bold text-white mb-8">
                Tools
            </h3>
            <ToolsSkills />

            <h3 className="text-3xl font-bold text-white mt-10 mb-8">
                Soft Skills
            </h3>
            <SoftSkills />
        </motion.div>
    );
}

export default SideSkills;