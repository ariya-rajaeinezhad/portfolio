import { timelineData } from "../data/timeline";
import TimelineItem from "./TimelineItem";

function ResumeTimeline() {
    return (
        <section id="resume" className="py-20 px-6 border-b-2 border-t-2 border-white">
            <div className="container mx-auto max-w-4xl ">

                <h2 className="text-5xl font-bold text-center text-white mb-12">
                    -My Journey-
                </h2>

                <div className="relative">
                    {timelineData.map((item, index) => (
                        <TimelineItem
                            key={item.id}
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

            </div>
        </section>
    );
}

export default ResumeTimeline;