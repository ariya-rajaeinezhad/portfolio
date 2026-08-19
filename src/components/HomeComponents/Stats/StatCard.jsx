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
            className="h-64 w-full rounded-4xl bg-white flex flex-col gap-4 justify-center items-center shadow-2xl"
        >
            <Icon className="text-blue-700 flex items-center justify-center text-8xl" />
            <p className="font-extrabold text-blue-800 text-3xl bg-blue-100 p-2 px-4 rounded-2xl">{value}</p>
            <p className="font-bold text-blue-800 text-2xl">{label}</p>
        </motion.div>
    );
};

export default StatCard;