import TechnicalSkills from "./TechnichalSkills";
import SideSkills from "./SideSkills";

function Skills() {
    return (
        <section id="skills" className="py-20 px-6">
            <div className="container mx-auto max-w-9xl bg-white py-10 px-8 rounded-3xl shadow-lg">
                <h2 className="text-5xl font-bold text-center text-blue-800 mb-12">
                    -My Skills-
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <TechnicalSkills />
                    <SideSkills />
                </div>
            </div>
        </section>
    );
}

export default Skills;