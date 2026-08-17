import { motion } from "motion/react";
import { technicalSkills, tools, softSkills } from "../data/skills";
import SkillBar from "./SkillBar";

function Skills() {
    return (
        <section id="skills" className="py-20 px-6">
            <div className="container mx-auto max-w-9xl bg-white py-10 px-8 rounded-3xl shadow-lg">
                <h2 className="text-5xl font-bold text-center text-blue-800 mb-12">
                    -My Skills-
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                        <div className="space-y-5">
                            {technicalSkills.map((skill) => (
                                <SkillBar
                                    key={skill.id}
                                    name={skill.name}
                                    level={skill.level}
                                />
                            ))}
                        </div>
                    </motion.div>
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

                        <div className="flex flex-wrap gap-3">
                            {tools.map((tool) => (
                                <span
                                    key={tool}
                                    className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium hover:-translate-y-1 transition"
                                >
                                    {tool}
                                </span>
                            ))}
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-6">
                            Soft Skills
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {softSkills.map((skill) => (
                                <span
                                    key={skill}
                                    className="main-color text-white px-4 py-2 rounded-full font-medium shadow-md hover:-translate-y-1 transition"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Skills;