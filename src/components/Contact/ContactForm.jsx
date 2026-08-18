import { motion } from "motion/react";
import { FiSend } from "react-icons/fi";
import { useState } from "react";

function ContactForm() {
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
    );
};

export default ContactForm;