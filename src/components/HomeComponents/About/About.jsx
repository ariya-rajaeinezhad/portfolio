import { motion } from "motion/react";
import AboutCard from "./AboutCard";

function About() {
    return (
        <section id="about" className="container mx-auto">
            <section className="flex flex-wrap flex-col py-48 px-2">
                <section className="grid grid-cols-1 md:grid-cols-2">
                    <div className="h-auto bg-white md:rounded-tl-3xl border-b-2 shadow-lg text-slate-700 rounded-t-3xl md:rounded-tr-none overflow-hidden">
                        <motion.img
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            src="/images/avatar.png"
                            alt="Ariya Rajaei Nejad"
                            className="h-full w-full md:rounded-tl-3xl md:rounded-tr-none rounded-t-3xl"
                        />
                    </div>
                    <div className="max-w-3xl mx-auto px-8 py-12 border-b-2 text-justify leading-relaxed text-slate-700 font-medium text-lg bg-white md:rounded-tr-3xl shadow-lg md:border-l-2">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                            className="space-y-4"
                        >
                            <p className="flex justify-center pb-3 items-center text-3xl font-bold text-blue-800">
                                More About Me
                            </p>

                            <p>
                                Hello! I'm Ariya, a 19-year-old Computer Science student with a deep
                                passion for programming and problem-solving. I love building things from scratch and turning ideas into working
                                software. What drives me most is the challenge of solving complex
                                problems and the satisfaction of seeing a project come to life. My journey with technology started when I was 7 years old, fascinated
                                by how computers work and eager to write my first lines of code. That
                                childhood curiosity grew into a genuine love for programming and shaped
                                my decision to pursue this career. My goal is to become an AI Engineer, and every project I build, every
                                problem I solve, is a step closer to that dream.
                            </p>
                        </motion.div>
                    </div>
                </section>
                <section>
                    <AboutCard />
                </section>
            </section>
        </section>
    );
}

export default About;