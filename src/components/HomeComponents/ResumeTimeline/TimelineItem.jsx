import { motion } from "motion/react";

function TimelineItem({ type, title, place, date, description, image, index }) {
    return (
        <div className="relative pl-8 pb-10 border-l-2 border-indigo-500/30 last:pb-0">
            <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.4,
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 200
                }}
                className="absolute -left-2.5 top-1.5 w-5 h-5 bg-indigo-500 rounded-full border-2 border-black shadow-lg shadow-indigo-500/50"
            />
            <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                    ease: "easeOut"
                }}
                whileHover={{ y: -4 }}
                className="dark-card p-5 rounded-xl flex items-center justify-between card-hover"
            >
                <div className="flex-1">
                    <span className="text-sm text-indigo-400 font-bold uppercase">{type}</span>
                    <h3 className="text-xl font-bold text-white mt-1">{title}</h3>
                    <p className="text-sm text-gray-500 mb-2">{place} • {date}</p>
                    <p className="text-gray-400">{description}</p>
                </div>
                <img
                    src={image}
                    alt={title}
                    className="w-36 h-36 object-contain hidden sm:block"
                />
            </motion.div>
        </div>
    );
}

export default TimelineItem;