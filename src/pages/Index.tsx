import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContributionGraph from "@/components/ContributionGraph";
import SocialLinks from "@/components/SocialLinks";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SocialLinks />
      <HeroSection />
      <SkillsSection />
      <ContributionGraph />
      <ProjectsSection />
    </div>
  );
};

export default Index;
