import { motion } from "motion/react";
import CertificateCard from "./CertificateCard";

function Certificates() {
    return (
        <section id="certificates" className="py-20 px-6">
            <div className="container mx-auto max-w-6xl">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-6xl font-bold text-center mb-12 main-color-text"
                >
                    Certificates
                </motion.h2>
                <CertificateCard />
            </div>
        </section>
    );
}

export default Certificates;