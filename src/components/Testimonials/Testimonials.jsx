import TestimonialCard from "./TestimonialCard";

function Testimonials() {
    return (
        <section id="testimonials" className="py-15 px-6 bg-slate-50 mx-2 rounded-b-3xl">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-5xl font-bold text-center text-slate-800 mb-12">
                    What People Say?
                </h2>
                <TestimonialCard />
            </div>
        </section>
    );
}

export default Testimonials;