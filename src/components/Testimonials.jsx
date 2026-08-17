import { motion } from "motion/react";
import { FaQuoteLeft } from "react-icons/fa";
import { testimonials } from "../data/testimonials";

function Testimonials() {
    return (
        <section id="testimonials" className="py-15 px-6 bg-slate-50 mx-2 rounded-b-3xl">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-5xl font-bold text-center text-slate-800 mb-12">
                    What People Say?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={t.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                            className="bg-blue-600 p-6 rounded-2xl shadow-md border border-gray-100 flex flex-col"
                        >
                            <FaQuoteLeft className="text-blue-100 text-2xl mb-4" />
                            <p className="text-slate-100 italic flex-1">"{t.quote}"</p>
                            <div className="mt-4">
                                <p className="font-bold text-slate-50">{t.name}</p>
                                <p className="text-sm text-slate-200">{t.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;