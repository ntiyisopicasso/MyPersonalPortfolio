import Hero from "@/components/Hero";
import SocialSidebar from "@/components/SocialSidebar";
import Skills from "@/components/Skills";
import GitHubActivity from "@/components/GitHubActivity";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <SocialSidebar />
      <Hero />
      <Skills />
      <GitHubActivity />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
