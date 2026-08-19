import StatCard from "./StatCard";
import { useState, useEffect } from "react";
const API_URL = "http://localhost:5000"

function Stats() {
    const [stats, setStats] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const getSkills = async () => {
            try {
                const res = await fetch(`${API_URL}/api/stats`);
                const data = await res.json();
                setStats(data);
            } catch (error) {
                console.error("error while reading data from backend", error);
            } finally {
                setLoading(false);
            };
        };
        getSkills();
    }, []);
    return (
        <section className="py-6 px-6">
            {loading ? (
                <p className="text-white font-bold">Loading Stats...</p>
            ) : (
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {stats.map((stat, index) => (
                        <StatCard
                            key={stat._id}
                            icon={stat.icon}
                            value={stat.value}
                            label={stat.label}
                            index={index}
                        />
                    ))}
                </div>
            )}
        </section>
    );
};

export default Stats;