import { useState, useRef, useEffect } from "react";
import { HiXMark } from "react-icons/hi2";
import { TiThMenu } from "react-icons/ti";
import { FiDownload } from "react-icons/fi";

function TopDrawer() {
    const [isOpen, setIsOpen] = useState(false);
    const drawerRef = useRef(null);
    const buttonRef = useRef(null);
    useEffect(() => {
        function handleClickOutside(event) {
            if (
                drawerRef.current && !drawerRef.current.contains(event.target) &&
                buttonRef.current && !buttonRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        }

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);
    return (
        <>
            <div className="text-center flex items-center justify-center">
                <button
                    ref={buttonRef}
                    onClick={() => setIsOpen(true)}
                    className="inline-flex items-center justify-center font-bold rounded-lg text-[30px] hover:text-blue-400"
                    type="button"
                >
                    <TiThMenu />
                </button>
            </div>
            <div
                ref={drawerRef}
                className={`fixed top-0 left-0 right-0 z-40 w-full p-4 transition-transform duration-300 bg-white border-b border-gray-200 shadow-lg ${isOpen ? "translate-y-0" : "-translate-y-full"
                    }`}
                tabIndex="-1"
            >
                <div className="border-b border-gray-200 pb-4 mb-5 flex items-center">
                    <h5 className="inline-flex items-center text-lg font-bold text-blue-800">
                        -Ariya Rajaei Nezhad-
                    </h5>
                    <button
                        type="button"
                        onClick={() => setIsOpen(false)}
                        className="text-gray-800 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg w-9 h-9 absolute top-2.5 end-2.5 flex items-center justify-center"
                    >
                        <HiXMark className="w-5 h-5" />
                        <span className="sr-only">Close menu</span>
                    </button>
                </div>
                <div>
                    <nav className="list-none flex flex-col items-start text-lg font-medium gap-1">
                        <li className="hover:bg-gray-100 w-full h-12 flex items-center px-3 rounded-lg hover:shadow-lg">
                            <a href="#home" onClick={() => setIsOpen(false)} className="w-full">Home</a>
                        </li>
                        <li className="hover:bg-gray-100 w-full h-12 flex items-center px-3 rounded-lg hover:shadow-lg">
                            <a href="#about" onClick={() => setIsOpen(false)} className="w-full">About</a>
                        </li>
                        <li className="hover:bg-gray-100 w-full h-12 flex items-center px-3 rounded-lg hover:shadow-lg">
                            <a href="#resume" onClick={() => setIsOpen(false)} className="w-full">Resume</a>
                        </li>
                        <li className="hover:bg-gray-100 w-full h-12 flex items-center px-3 rounded-lg hover:shadow-lg">
                            <a href="#skills" onClick={() => setIsOpen(false)} className="w-full">Skills</a>
                        </li>
                        <li className="hover:bg-gray-100 w-full h-12 flex items-center px-3 rounded-lg hover:shadow-lg">
                            <a href="#projects" onClick={() => setIsOpen(false)} className="w-full">Projects</a>
                        </li>
                        <li className="hover:bg-gray-100 w-full h-12 flex items-center px-3 rounded-lg hover:shadow-lg">
                            <a href="#contact" onClick={() => setIsOpen(false)} className="w-full">Contact</a>
                        </li>
                    </nav>
                </div>
                <div className="flex items-center gap-4 py-5 px-3">
                    <button className="main-color text-white p-2 px-3 rounded-lg btn-resume hover:underline">
                        <a href="/Ariya-Rajaeinezhad-Resume.pdf" className="flex items-center gap-1"><FiDownload />Download Resume</a>
                    </button>
                </div>
            </div>
        </>
    );
}

export default TopDrawer;