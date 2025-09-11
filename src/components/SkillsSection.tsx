import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const SkillsSection = () => {
  const skills = [
    { name: "HTML5", category: "Frontend", level: "Advanced" },
    { name: "CSS3", category: "Frontend", level: "Advanced" },
    { name: "JavaScript", category: "Frontend", level: "Advanced" },
    { name: "Angular", category: "Frontend", level: "Intermediate" },
    { name: "React", category: "Frontend", level: "Advanced" },
    { name: "Tailwind CSS", category: "Frontend", level: "Advanced" },
    { name: "Python", category: "Backend", level: "Advanced" },
    { name: "Django", category: "Backend", level: "Intermediate" },
    { name: "PHP", category: "Backend", level: "Advanced" },
    { name: "Java", category: "Programming", level: "Intermediate" },
    { name: "C++", category: "Programming", level: "Intermediate" },
    { name: "Git", category: "Tools", level: "Advanced" },
    { name: "AWS", category: "Cloud", level: "Intermediate" },
    { name: "Firebase", category: "Cloud", level: "Intermediate" },
    { name: "Netlify", category: "Deployment", level: "Advanced" },
    { name: "Vercel", category: "Deployment", level: "Advanced" },
    { name: "Heroku", category: "Deployment", level: "Intermediate" },
    { name: "GitHub Pages", category: "Deployment", level: "Advanced" }
  ];

  const categories = ["Frontend", "Backend", "Programming", "Cloud", "Deployment", "Tools"];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit built through academic study and hands-on experience
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Card key={category} className="p-6 bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-primary">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <Badge
                      key={skill.name}
                      variant="secondary"
                      className="transition-all duration-300 hover:scale-105 hover:shadow-md"
                    >
                      {skill.name}
                    </Badge>
                  ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;