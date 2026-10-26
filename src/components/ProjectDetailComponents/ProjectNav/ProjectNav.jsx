import { Link } from "react-router-dom";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

function ProjectNav({ prev, next }) {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-zinc-800 pt-10">
            {prev ? (
                <Link
                    to={`/project/${prev._id}`}
                    className="flex items-center gap-2 text-indigo-400 font-semibold hover:text-indigo-300 transition-colors group"
                >
                    <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" /> {prev.title}
                </Link>
            ) : <span />}

            <Link
                to="/#projects"
                className="btn-main px-8 py-3 rounded-full font-bold flex items-center gap-2"
            >
                All Projects
            </Link>

            {next ? (
                <Link
                    to={`/project/${next._id}`}
                    className="flex items-center gap-2 text-indigo-400 font-semibold hover:text-indigo-300 transition-colors group"
                >
                    {next.title} <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
            ) : <span />}
        </div>
    );
}

export default ProjectNav;