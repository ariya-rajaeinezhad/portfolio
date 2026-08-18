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
            className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col justify-center gap-6"
        >
            <div className="flex items-center gap-4 p-2 bg-blue-100 rounded-4xl">
                <span className="h-12 w-12 rounded-full bg-blue-300 text-white flex items-center justify-center text-xl"><MdEmail /></span>
                <div>
                    <p className="font-bold text-slate-800">Email</p>
                    <p className="text-slate-600">a.rajaeenezhad@gmail.com</p>
                </div>
            </div>
            <div className="flex items-center gap-4 p-2 bg-blue-100 rounded-4xl">
                <span className="h-12 w-12 rounded-full bg-blue-300 text-white flex items-center justify-center text-xl"><FaPhone /></span>
                <div>
                    <p className="font-bold text-slate-800">Phone</p>
                    <p className="text-slate-600">+98 901 924 4618</p>
                </div>
            </div>
            <div className="flex items-center gap-4 p-2 bg-blue-100 rounded-4xl">
                <span className="h-12 w-12 rounded-full bg-blue-300 text-white flex items-center justify-center text-xl"><TiLocation /></span>
                <div>
                    <p className="font-bold text-slate-800">Location</p>
                    <p className="text-slate-600">Shiraz, Iran</p>
                </div>
            </div>
        </motion.div>
    );
};

export default ContactInfo;