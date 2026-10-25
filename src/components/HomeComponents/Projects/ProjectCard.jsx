import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { FiGithub, FiExternalLink } from "react-icons/fi";

function ProjectCard({ id, title, description, image, tags = [], github, demo, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: index * 0.15, ease: [0.4, 0, 0.2, 1] }}
            whileHover={{ y: -12, scale: 1.02 }}
            className="group dark-card rounded-2xl overflow-hidden card-hover"
        >
            <Link to={`/project/${id}`} className="overflow-hidden h-56 block relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
            </Link>

            <div className="p-6 flex flex-col">
                <Link to={`/project/${id}`} className="hover:underline w-fit mb-3">
                    <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                        {title}
                    </h3>
                </Link>

                <p className="text-gray-400 mb-4 flex-1 leading-relaxed">{description}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                    {tags.slice(0, 4).map((tag) => (
                        <span
                            key={tag}
                            className="bg-indigo-500/10 text-indigo-300 text-xs font-semibold px-3 py-1.5 rounded-full border border-indigo-500/30"
                        >
                            {tag}
                        </span>
                    ))}
                    {tags.length > 4 && (
                        <span className="text-xs text-gray-500 font-medium px-2 py-1">
                            +{tags.length - 4} more
                        </span>
                    )}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
                    <div className="flex gap-4">
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-white font-semibold hover:text-indigo-400 transition-colors"
                        >
                            <FiGithub size={18} /> Code
                        </a>
                        {demo && (
                            <a
                                href={demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 text-white font-semibold hover:text-indigo-400 transition-colors"
                            >
                                <FiExternalLink size={18} /> Demo
                            </a>
                        )}
                    </div>

                    <Link
                        to={`/project/${id}`}
                        className="text-indigo-400 font-bold hover:underline flex items-center gap-1"
                    >
                        Details →
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}

export default ProjectCard;