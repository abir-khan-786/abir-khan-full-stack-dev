import About from "@/components/About";
import AIExpertise from "@/components/AIExpertise";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";

export default function Home() {
    return (
        <main className="bg-[#0b1222] text-white">
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <AIExpertise />
            <Services />
            <Projects />
            <Contact />
            <Footer />
        </main>
    );
}