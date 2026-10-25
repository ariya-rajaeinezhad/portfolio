import { MdEmail } from "react-icons/md";
import { TiLocation } from "react-icons/ti";
import { FaPhone } from "react-icons/fa";
import { motion } from "motion/react";

function ContactInfo() {
    return (
        <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="dark-card p-8 rounded-2xl flex flex-col justify-center gap-6"
        >
            <div className="flex items-center gap-4 p-4 bg-black rounded-2xl border border-zinc-800">
                <span className="h-12 w-12 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xl border border-indigo-500/30">
                    <MdEmail />
                </span>
                <div>
                    <p className="font-bold text-white">Email</p>
                    <p className="text-gray-400">aryarajaeinezhad@gmail.com</p>
                </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-black rounded-2xl border border-zinc-800">
                <span className="h-12 w-12 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xl border border-indigo-500/30">
                    <FaPhone />
                </span>
                <div>
                    <p className="font-bold text-white">Phone</p>
                    <p className="text-gray-400">+98 901 924 4618</p>
                </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-black rounded-2xl border border-zinc-800">
                <span className="h-12 w-12 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xl border border-indigo-500/30">
                    <TiLocation />
                </span>
                <div>
                    <p className="font-bold text-white">Location</p>
                    <p className="text-gray-400">Shiraz, Iran</p>
                </div>
            </div>
        </motion.div>
    );
}

export default ContactInfo;