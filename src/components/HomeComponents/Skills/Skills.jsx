import TechnicalSkills from "./TechnichalSkills";
import SideSkills from "./SideSkills";
import { motion } from "motion/react";

function Skills() {
    return (
        <section id="skills" className="py-20 px-6">
            <div className="container mx-auto max-w-6xl">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-6xl font-bold text-center mb-16 main-color-text"
                >
                    My Skills
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <TechnicalSkills />
                    <SideSkills />
                </div>
            </div>
        </section>
    );
}

export default Skills;