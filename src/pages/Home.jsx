import Navbar from "../components/HomeComponents/Navbar/Navbar";
import Hero from "../components/HomeComponents/Hero/Hero";
import Stats from "../components/HomeComponents/Stats/Stats";
import About from "../components/HomeComponents/About/About";
import ResumeTimeline from "../components/HomeComponents/ResumeTimeline/ResumeTimeline";
import Skills from "../components/HomeComponents/Skills/Skills";
import Projects from "../components/HomeComponents/Projects/Projects";
import Certificates from "../components/HomeComponents/Certificates/Certificates";
import Testimonials from "../components/HomeComponents/Testimonials/Testimonials";
import Contact from "../components/HomeComponents/Contact/Contact";
import Footer from "../components/HomeComponents/Footer/Footer";
import ScrollTopButton from "../components/HomeComponents/ScrollTopButton";
import { useEffect } from "react";

function Home() {
    useEffect(() => {
        if (window.location.hash) {
            const el = document.querySelector(window.location.hash);
            if (el) el.scrollIntoView({ behavior: "smooth" });
        }
    }, []);
    return (
        <>
            <Navbar />
            <Hero />
            <Stats />
            <About />
            <ResumeTimeline />
            <Skills />
            <Projects />
            <Certificates />
            <Testimonials />
            <Contact />
            <ScrollTopButton />
            <Footer />
        </>
    );
};

export default Home;