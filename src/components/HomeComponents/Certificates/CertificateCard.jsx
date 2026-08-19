import { FaAward } from "react-icons/fa";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
const API_URL = "http://localhost:5000"

function CertificateCard() {
    const [certificates, setCertificates] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const getSkills = async () => {
            try {
                const res = await fetch(`${API_URL}/api/certificates`);
                const data = await res.json();
                setCertificates(data);
            } catch (error) {
                console.error("error while reading data from backend", error);
            } finally {
                setLoading(false);
            };
        };
        getSkills();
    }, []);
    return (
        <>
            {loading ? (
                <p className="text-blue-800 font-bold">Loading Certificates...</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={cert._id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                            whileHover={{ y: -6 }}
                            className="bg-blue-600 p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center"
                        >
                            <span className="h-14 w-14 rounded-full bg-slate-100 text-blue-600 flex items-center justify-center text-2xl mb-4">
                                <FaAward />
                            </span>
                            <h3 className="text-lg font-bold text-white">{cert.title}</h3>
                            <p className="text-sm text-slate-200 mt-1">{cert.place}</p>
                            <p className="text-xs text-slate-400 font-medium mt-2">{cert.date}</p>
                        </motion.div>
                    ))}
                </div>
            )}
        </>
    );
};

export default CertificateCard;