import { motion } from "motion/react";
import CertificateCard from "./CertificateCard";

function Certificates() {
    return (
        <section id="certificates" className="py-15 px-6 bg-slate-50 mx-2 rounded-t-3xl border-b-2 border-slate-600">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-5xl font-bold text-center text-slate-800 mb-12">
                    "Certificates!"
                </h2>
                <CertificateCard />
            </div>
        </section>
    );
}

export default Certificates;