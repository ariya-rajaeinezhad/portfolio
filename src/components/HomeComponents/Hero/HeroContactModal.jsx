import { FiX, FiMail, FiPhone } from "react-icons/fi";

function ContactModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-2xl p-8 max-w-md w-full relative shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-slate-400 hover:text-slate-700"
                >
                    <FiX size={24} />
                </button>
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Get In Touch</h3>

                <a
                    href="mailto:aryarajaeinezhad@gmail.com"
                    className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-blue-50 transition mb-3"
                >
                    <FiMail className="text-blue-600" size={22} />
                    <div>
                        <p className="text-sm text-slate-500">Email</p>
                        <p className="text-slate-800 font-medium">aryarajaeinezhad@gmail.com</p>
                    </div>
                </a>
                <a
                    href="tel:+989019244618"
                    className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-blue-50 transition"
                >
                    <FiPhone className="text-blue-600" size={22} />
                    <div>
                        <p className="text-sm text-slate-500">Phone</p>
                        <p className="text-slate-800 font-medium">+98 901 924 4618</p>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default ContactModal;