import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Stats from "../components/Stats/Stats";
import About from "../components/About/About";
import ResumeTimeline from "../components/ResumeTimeline/ResumeTimeline";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Certificates from "../components/Certificates/Certificates";
import Testimonials from "../components/Testimonials/Testimonials";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import ScrollTopButton from "../components/ScrollTopButton";
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