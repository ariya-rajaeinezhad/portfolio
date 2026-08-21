import { motion } from "motion/react";
import { TiLocation } from "react-icons/ti";
import { MdEmail } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

function AboutCard() {
    const info = [
        {
            id: 1,
            icon: TiLocation,
            label: "Shiraz, Iran"
        },
        {
            id: 2,
            icon: MdEmail,
            label: "aryarajaeinezhad@gmail.com"
        },
        {
            id: 3,
            icon: FaGraduationCap,
            label: "Computer Science"
        },
        {
            id: 4,
            icon: FaCheckCircle,
            label: "Student/ Open To Internships"
        }
    ];

    return (
        <section className="container mx-auto">
            <section className="grid grid-cols-1 md:grid-cols-2 shadow rounded-b-3xl lg:grid-cols-4 py-5 px-10 bg-white text-white gap-3 justify-center items-center text-md md:text-lg font-medium">
                {info.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <motion.span
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                                ease: "easeOut"
                            }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="flex items-center gap-2 main-color p-5 rounded-4xl shadow-md shadow-blue-800"
                        >
                            <Icon className="text-2xl" />
                            {item.label}
                        </motion.span>
                    );
                })}
            </section>
        </section>
    );
}

export default AboutCard;