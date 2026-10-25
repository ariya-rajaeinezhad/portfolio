import { motion } from "motion/react";
import { TiLocation } from "react-icons/ti";
import { MdEmail } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

function AboutCard() {
    const info = [
        { id: 1, icon: TiLocation, label: "Shiraz, Iran" },
        { id: 2, icon: MdEmail, label: "aryarajaeinezhad@gmail.com" },
        { id: 3, icon: FaGraduationCap, label: "Computer Science" },
        { id: 4, icon: FaCheckCircle, label: "Student / Open To Internships" }
    ];

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {info.map((item, index) => {
                const Icon = item.icon;
                return (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        whileHover={{ y: -8, scale: 1.03 }}
                        className="dark-card p-6 rounded-2xl card-hover"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
                                <Icon className="text-2xl text-indigo-400" />
                            </div>
                            <p className="text-white font-semibold text-sm md:text-base">{item.label}</p>
                        </div>
                    </motion.div>
                );
            })}
        </section>
    );
}

export default AboutCard;