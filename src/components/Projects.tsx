import { motion } from "framer-motion";
import { ExternalLink, Github, Star, GitFork } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useGitHubRepos } from "@/hooks/useGitHubData";
import { Skeleton } from "@/components/ui/skeleton";

const languageColors: Record<string, string> = {
  JavaScript: "from-yellow-400 to-yellow-600",
  TypeScript: "from-blue-400 to-blue-600",
  Python: "from-green-400 to-blue-500",
  Java: "from-orange-400 to-red-500",
  HTML: "from-orange-500 to-orange-700",
  CSS: "from-blue-500 to-purple-500",
  PHP: "from-purple-400 to-purple-600",
  "C++": "from-pink-500 to-rose-500",
  default: "from-primary to-secondary",
};

const Projects = () => {
  const { data: repos, isLoading, error } = useGitHubRepos();

  if (isLoading) {
    return (
      <section id="projects" className="py-24 px-6 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Skeleton className="h-12 w-64 mx-auto mb-4" />
            <Skeleton className="h-6 w-96 mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Skeleton key={i} className="h-64 rounded-xl" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error || !repos) {
    return null;
  }

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-glow opacity-20" />

      <div className="container mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            Recent <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My latest work from GitHub - live repositories I'm actively working on
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo, index) => {
            const gradient = languageColors[repo.language || "default"] || languageColors.default;
            
            return (
              <motion.article
                key={repo.id}
                className="bg-gradient-card rounded-xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 shadow-card group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                {/* Language badge */}
                <div className="p-6 pb-0">
                  {repo.language && (
                    <span
                      className={`text-xs font-medium px-3 py-1 rounded-full bg-gradient-to-r ${gradient} text-white`}
                    >
                      {repo.language}
                    </span>
                  )}
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold font-heading text-foreground group-hover:text-primary transition-colors line-clamp-1">
                    {repo.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 min-h-[40px]">
                    {repo.description || "No description available"}
                  </p>

                  {/* Topics */}
                  {repo.topics && repo.topics.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {repo.topics.slice(0, 3).map((topic) => (
                        <span
                          key={topic}
                          className="px-2 py-1 text-xs bg-muted/50 rounded-md text-muted-foreground border border-border/50"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Stats */}
                  <div className="flex items-center gap-4 text-muted-foreground text-sm">
                    {repo.stargazers_count > 0 && (
                      <span className="flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        {repo.stargazers_count}
                      </span>
                    )}
                    {repo.forks_count > 0 && (
                      <span className="flex items-center gap-1">
                        <GitFork className="w-4 h-4" />
                        {repo.forks_count}
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 pt-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-muted-foreground hover:text-primary"
                      asChild
                    >
                      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    {repo.homepage && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-muted-foreground hover:text-primary"
                        asChild
                      >
                        <a href={repo.homepage} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Button
            variant="outline"
            size="lg"
            className="border-primary/50 text-foreground hover:bg-primary/10"
            asChild
          >
            <a
              href="https://github.com/NtiyisoPicasso?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5 mr-2" />
              View All Repositories
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
