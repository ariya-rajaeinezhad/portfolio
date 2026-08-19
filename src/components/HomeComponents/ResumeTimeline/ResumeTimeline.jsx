import TimelineItem from "./TimelineItem";
import { useState, useEffect } from "react";
const API_URL = "http://localhost:5000"

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
            } finally {
                setLoading(false);
            };
        };
        getSkills();
    }, []);
    return (
        <section id="resume" className="py-20 px-6 border-b-2 border-t-2 border-white">
            <div className="container mx-auto max-w-4xl ">
                <h2 className="text-5xl font-bold text-center text-white mb-12">
                    -My Journey-
                </h2>
                {loading ? (
                    <p className="text-blue-800 font-bold">Loading Timelines...</p>
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
};

export default ResumeTimeline;