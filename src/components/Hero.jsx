import { FiPhoneCall } from "react-icons/fi";
function Hero() {
    return (
        <section id="home" className="container mx-auto">
            <section className=" flex flex-wrap w-full pt-52 pb-48 justify-center items-center">
                <div className="flex flex-col gap-7 items-center justify-center text-white">
                    <h1 className="text-5xl font-bold text-shadow-black sm:text-6xl">Ariya Rajaei Nezhad</h1>
                    <span className="text-2xl text-shadow-black">CS Student & Programer</span>
                    <div className="flex justify-center items-center gap-4 font-bold pt-3">
                        <button><a href="#" className="flex items-center btn-main p-4 rounded-tl-4xl rounded-br-4xl">View Resume</a></button>
                        <button><a href="#" className="flex items-center gap-1 btn-main p-4 rounded-bl-4xl rounded-tr-4xl"><FiPhoneCall />Contact ME</a></button>
                    </div>
                </div>
            </section>
        </section>

    )
};

export default Hero;