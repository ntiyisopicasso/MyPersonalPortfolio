import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "TicTacToe Game",
      description: "Interactive TicTacToe game built with HTML, CSS, and JavaScript featuring responsive design and smooth gameplay.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      githubUrl: "https://github.com/NtiyisoPicasso/TicTacToe",
      liveUrl: "",
      category: "Web Development"
    },
    {
      title: "PHP Login & Register System",
      description: "Complete authentication system for a movie website built for students with secure login and registration functionality.",
      technologies: ["PHP", "HTML", "CSS", "MySQL"],
      githubUrl: "https://github.com/NtiyisoPicasso/php-login-and-register",
      liveUrl: "",
      category: "Backend Development"
    },
    {
      title: "Interactive Quiz Game",
      description: "Dynamic quiz application with multiple questions, scoring system, and user-friendly interface.",
      technologies: ["JavaScript", "HTML", "CSS"],
      githubUrl: "https://github.com/NtiyisoPicasso/quiz-game",
      liveUrl: "",
      category: "Web Development"
    },
    {
      title: "Rock Paper Scissors",
      description: "Classic Rock Paper Scissors game with computer AI opponent and score tracking system.",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/NtiyisoPicasso/RockPaperScissors",
      liveUrl: "",
      category: "Game Development"
    },
    {
      title: "TO-DO List Application",
      description: "Task management application with add, edit, delete functionality and local storage persistence.",
      technologies: ["JavaScript", "HTML", "CSS"],
      githubUrl: "https://github.com/NtiyisoPicasso/TO_DO-list",
      liveUrl: "",
      category: "Web Development"
    }
  ];

  return (
    <section className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my work in web development, cybersecurity, and mathematical applications
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.title} className="group bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <Badge variant="outline" className="mb-2">
                    {project.category}
                  </Badge>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                      </a>
                    </Button>
                    {project.liveUrl && (
                      <Button variant="ghost" size="icon" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild className="hover:bg-primary hover:text-primary-foreground">
            <a href="https://github.com/NtiyisoPicasso" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2" size={20} />
              View All Repositories
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;