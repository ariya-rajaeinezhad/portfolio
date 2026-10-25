import { motion } from "motion/react";
import { MdWork } from "react-icons/md";
import { RiCertificate2Fill } from "react-icons/ri";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";

const iconMap = {
    Work: MdWork,
    Check: FaRegCheckCircle,
    Certificate: RiCertificate2Fill,
    Graduation: FaGraduationCap
};

function StatCard({ value, label, icon, index }) {
    const Icon = iconMap[icon];
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ y: -6 }}
            className="h-64 w-full rounded-3xl dark-card flex flex-col gap-4 justify-center items-center card-hover"
        >
            <Icon className="text-indigo-400 flex items-center justify-center text-7xl" />
            <p className="font-extrabold main-color-text text-3xl">{value}</p>
            <p className="font-bold text-white text-xl">{label}</p>
        </motion.div>
    );
}

export default StatCard;