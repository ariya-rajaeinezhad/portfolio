import TimelineItem from "./TimelineItem";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { timeline as localTimeline } from "../../../data/timeline";

const API_URL = "http://localhost:5000";

function ResumeTimeline() {
    const [timeline, setTimeline] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getSkills = async () => {
            try {
                const res = await fetch(`${API_URL}/api/timeline`);
                const data = await res.json();
                setTimeline(data);
            } catch (error) {
                console.error("error while reading data from backend", error);
                setTimeline(localTimeline);
            } finally {
                setLoading(false);
            }
        };
        getSkills();
    }, []);

    return (
        <section id="resume" className="py-20 px-6">
            <div className="container mx-auto max-w-4xl">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-6xl font-bold text-center mb-12 main-color-text"
                >
                    My Journey
                </motion.h2>
                {loading ? (
                    <div className="flex justify-center py-10">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full"
                        />
                    </div>
                ) : (
                    <div className="relative">
                        {timeline.map((item, index) => (
                            <TimelineItem
                                key={item._id}
                                type={item.type}
                                title={item.title}
                                place={item.place}
                                date={item.date}
                                description={item.description}
                                image={item.image}
                                index={index}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

export default ResumeTimeline;