import { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";
import { motion } from "motion/react";

function ScrollTopButton() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 300);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    if (!visible) return null;

    return (
        <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full main-color text-white text-xl shadow-lg flex items-center justify-center hover:scale-110 transition"
        >
            <FiArrowUp />
        </motion.button>
    );
}

export default ScrollTopButton;