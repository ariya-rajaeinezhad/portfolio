import { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";

function ScrollTopButton() {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 300);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    if (!visible) return null;
    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full bg-black text-white text-xl shadow-lg border-2 border-slate-400 flex items-center justify-center hover:-translate-y-1 transition"
        >
            <FiArrowUp />
        </button>
    );
}

export default ScrollTopButton;