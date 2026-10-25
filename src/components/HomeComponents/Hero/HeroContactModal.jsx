import { FiX, FiMail, FiPhone } from "react-icons/fi";

function ContactModal({ isOpen, onClose }) {
    if (!isOpen) return null;
    return (
        <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={onClose}
        >
            <div
                className="bg-zinc-900 border border-indigo-500/30 rounded-2xl p-8 max-w-md w-full relative shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white"
                >
                    <FiX size={24} />
                </button>
                <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
                <a
                    href="mailto:aryarajaeinezhad@gmail.com"
                    className="flex items-center gap-4 p-4 bg-black rounded-xl hover:bg-zinc-800 transition mb-3 border border-zinc-800"
                >
                    <FiMail className="text-indigo-400" size={22} />
                    <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="text-white font-medium">aryarajaeinezhad@gmail.com</p>
                    </div>
                </a>
                <a
                    href="tel:+989019244618"
                    className="flex items-center gap-4 p-4 bg-black rounded-xl hover:bg-zinc-800 transition border border-zinc-800"
                >
                    <FiPhone className="text-indigo-400" size={22} />
                    <div>
                        <p className="text-sm text-gray-500">Phone</p>
                        <p className="text-white font-medium">+98 901 924 4618</p>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default ContactModal;