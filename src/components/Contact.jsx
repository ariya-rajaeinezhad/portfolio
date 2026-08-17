import { useState } from "react";
import { motion } from "motion/react";
import { MdEmail } from "react-icons/md";
import { TiLocation } from "react-icons/ti";
import { FaPhone } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = encodeURIComponent(`Portfolio message from ${name}`);
        const body = encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`);
        window.location.href = `mailto:a.rajaeenezhad@gmail.com?subject=${subject}&body=${body}`;
    };

    return (
        <section id="contact" className="py-20 px-6 ">
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
                    >
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="w-full p-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-none"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full p-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-none"
                            />
                            <textarea
                                placeholder="Your Message"
                                rows="5"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                                className="w-full p-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-none resize-none"
                            />
                            <button
                                type="submit"
                                className="main-color text-white p-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition"
                            >
                                <FiSend /> Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Contact;