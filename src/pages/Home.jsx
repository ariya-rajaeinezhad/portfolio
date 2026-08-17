import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import About from "../components/About";
import ResumeTimeline from "../components/ResumeTimeline";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Certificates from "../components/Certificates";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
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