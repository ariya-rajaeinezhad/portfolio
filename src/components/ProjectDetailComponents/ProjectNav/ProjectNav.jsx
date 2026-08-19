import { Link } from "react-router-dom";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

function ProjectNav({ prev, next }) {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-gray-200 pt-8">
            {prev ? (
                <Link to={`/project/${prev._id}`} className="flex items-center gap-2 text-blue-600 font-medium hover:underline">
                    <FiArrowLeft /> {prev.title}
                </Link>
            ) : <span />}

            <Link to="/#projects" className="main-color text-white px-6 py-3 rounded-full font-medium">
                All Projects
            </Link>

            {next ? (
                <Link to={`/project/${next._id}`} className="flex items-center gap-2 text-blue-600 font-medium hover:underline">
                    {next.title} <FiArrowRight />
                </Link>
            ) : <span />}
        </div>
    );
}

export default ProjectNav;