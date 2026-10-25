import { motion } from "motion/react";
import { FaQuoteLeft } from "react-icons/fa";
import { useState, useEffect } from "react";
import { testimonials as localTestimonials } from "../../../data/testimonials";

const API_URL = "http://localhost:5000";

function TestimonialCard() {
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getSkills = async () => {
            try {
                const res = await fetch(`${API_URL}/api/testimonials`);
                const data = await res.json();
                setTestimonials(data);
            } catch (error) {
                console.error("error while reading data from backend", error);
                setTestimonials(localTestimonials);
            } finally {
                setLoading(false);
            }
        };
        getSkills();
    }, []);

    return (
        <>
            {loading ? (
                <div className="flex justify-center py-10">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full"
                    />
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={t._id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                            whileHover={{ y: -6 }}
                            className="dark-card p-6 rounded-2xl flex flex-col card-hover"
                        >
                            <FaQuoteLeft className="text-indigo-500/40 text-3xl mb-4" />
                            <p className="text-gray-300 italic flex-1">"{t.quote}"</p>
                            <div className="mt-4 pt-4 border-t border-zinc-800">
                                <p className="font-bold text-white">{t.name}</p>
                                <p className="text-sm text-gray-500">{t.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}
        </>
    );
}

export default TestimonialCard;