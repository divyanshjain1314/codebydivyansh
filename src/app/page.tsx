import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import ResumeDownload from "@/components/ResumeDownload";
import Contact from "@/components/Contact";
import Footer from "@/components/footer";
import PersonalProjects from "@/components/PersonalProjects";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-blue-500/30 transition-colors duration-300">
      <Navbar />
      <div className="">
        <Hero />
        <Experience />
        <div id="projects">
          <Projects />
        </div>
        <PersonalProjects />
        <Skills />
        <ResumeDownload />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}