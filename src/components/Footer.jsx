import { FaGithub, FaLinkedinIn, FaInstagram, FaTelegramPlane } from "react-icons/fa";

function Footer() {
    return (
        <footer className="border-t-2 text-white pt-16 pb-8 px-6">
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="border-white/15 md:border-r-2">
                        <h2 className="text-2xl font-bold">Ariya Rajaei Nezhad</h2>
                        <p className="text-blue-200 mt-3 leading-relaxed text-justify pr-5">
                            Computer Science student passionate about building modern
                            web experiences, on the way to becoming an AI engineer.
                        </p>
                    </div>
                    <div className="md:border-r-2 border-white/15">
                        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-blue-200">
                            <li><a href="#home" className="hover:text-white transition">Home</a></li>
                            <li><a href="#about" className="hover:text-white transition">About</a></li>
                            <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
                            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-4">Follow Me</h3>
                        <div className="flex gap-3">
                            <a href="#" aria-label="GitHub" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/25 hover:-translate-y-1 transition">
                                <FaGithub />
                            </a>
                            <a href="#" aria-label="LinkedIn" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/25 hover:-translate-y-1 transition">
                                <FaLinkedinIn />
                            </a>
                            <a href="#" aria-label="Instagram" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/25 hover:-translate-y-1 transition">
                                <FaInstagram />
                            </a>
                            <a href="#" aria-label="Telegram" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/25 hover:-translate-y-1 transition">
                                <FaTelegramPlane />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-white/15 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-blue-200">
                    <p>© {new Date().getFullYear()} Ariya Rajaei Nejad. All rights reserved.</p>
                    <p>
                        Illustrations by{" "}
                        <a href="https://storyset.com" className="underline hover:text-white">Storyset</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;