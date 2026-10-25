import { FiDownload } from "react-icons/fi";
import TopDrawer from "./TopDrawer";

function Navbar() {
    return (
        <header className="header fixed w-full z-50">
            <section className="container mx-auto">
                <section className="hidden md:flex flex-wrap justify-between items-center p-4 px-8">
                    <div>
                        <h1 className="text-xl font-bold text-white">
                            <span className="main-color-text">Ariya</span> Rajaei
                        </h1>
                    </div>

                    <div>
                        <ul className="list-none flex gap-8">
                            {['Home', 'About', 'Resume', 'Skills', 'Projects', 'Contact'].map((item) => (
                                <li key={item} className="relative group">
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        className="text-white font-medium hover:text-indigo-400 transition-colors"
                                    >
                                        {item}
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 group-hover:w-full transition-all duration-300" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <button className="btn-main px-5 py-2.5 rounded-full font-semibold flex items-center gap-2">
                            <a href="/Ariya-Rajaeinezhad-Resume.pdf" className="flex items-center gap-2">
                                <FiDownload /> Resume
                            </a>
                        </button>
                    </div>
                </section>

                <section className="flex md:hidden flex-wrap justify-between items-center p-4 px-5">
                    <div>
                        <TopDrawer />
                    </div>
                    <div>
                        <button className="btn-main px-4 py-2 rounded-full font-semibold flex items-center gap-2 text-sm">
                            <a href="/Ariya-Rajaeinezhad-Resume.pdf" className="flex items-center gap-2">
                                <FiDownload /> Resume
                            </a>
                        </button>
                    </div>
                </section>
            </section>
        </header>
    );
}

export default Navbar;