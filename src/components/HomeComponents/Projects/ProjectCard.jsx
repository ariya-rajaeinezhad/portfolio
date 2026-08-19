import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { FiGithub, FiExternalLink } from "react-icons/fi";

function ProjectCard({ id, title, description, image, tags = [], github, demo, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            whileHover={{ y: -8 }}
            className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col"
        >
            <Link to={`/project/${id}`} className="overflow-hidden h-48 block">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </Link>
            <div className="p-6 flex flex-col flex-1">
                <Link to={`/project/${id}`} className="hover:underline w-fit mb-2">
                    <h3 className="text-xl font-bold text-slate-800">{title}</h3>
                </Link>
                <p className="text-slate-600 mb-4 flex-1">{description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((tag) => (
                        <span key={tag} className="bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex gap-4">
                        <a href={github} className="flex items-center gap-1 text-blue-600 font-medium hover:underline">
                            <FiGithub /> Code
                        </a>
                        <a href={demo} className="flex items-center gap-1 text-blue-600 font-medium hover:underline">
                            <FiExternalLink /> Live Demo
                        </a>
                    </div>
                    <Link to={`/project/${id}`} className="text-blue-600 font-medium hover:underline">
                        Details
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}

export default ProjectCard;