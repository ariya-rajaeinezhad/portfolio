import { stats } from "../data/stats";
import StatCard from "./StatCard";

function Stats() {
    return (
        <section className="py-6 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                    <StatCard
                        key={stat.id}
                        icon={stat.icon}
                        value={stat.value}
                        label={stat.label}
                        index={index}
                    />
                ))}
            </div>
        </section>
    );
}

export default Stats;