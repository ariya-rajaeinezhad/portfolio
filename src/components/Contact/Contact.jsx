import { motion } from "motion/react";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

function Contact() {
    return (
        <section id="contact" className="py-20 px-6 ">
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <ContactInfo />
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}

export default Contact;