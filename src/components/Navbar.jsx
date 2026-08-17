import { FiDownload } from "react-icons/fi";
import SideDrawer from "./TopDrawer";
import TopDrawer from "./TopDrawer";
function Navbar() {
    return (
        <header className="header shadow fixed w-full z-10">
            <section className="container mx-auto">
                <section className="hidden md:flex flex-wrap justify-between items-center p-4 px-5 text-blue-800 font-bold">
                    <div>
                        <h1>-Ariya Rajaei Nezhad-</h1>
                    </div>
                    <div>
                        <ul className="list-none flex gap-3">
                            <li className="hover:underline"><a href="#home">Home</a></li>
                            <li className="hover:underline"><a href="#about">About</a></li>
                            <li className="hover:underline"><a href="#resume">Resume</a></li>
                            <li className="hover:underline"><a href="#skills">Skills</a></li>
                            <li className="hover:underline"><a href="#projects">Projects</a></li>
                            <li className="hover:underline"><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <button className="main-color text-white p-2 px-3 rounded-4xl btn-resume hover:underline">
                            <a href="#" className="flex items-center gap-1"><FiDownload />Download Resume</a>
                        </button>
                    </div>
                </section>
                <section className="flex md:hidden flex-wrap justify-between items-center p-4 px-5 text-blue-800 font-bold">
                    <div>
                        <TopDrawer />
                    </div>
                    <div>
                        <button className="main-color text-white p-2 px-3 rounded-4xl btn-resume hover:underline">
                            <a href="#" className="flex items-center gap-1"><FiDownload />Download Resume</a>
                        </button>
                    </div>
                </section>
            </section>
        </header>
    )
};

export default Navbar;