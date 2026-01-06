import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "Angular", "React", "Tailwind CSS"],
    gradient: "from-primary to-blue-400",
  },
  {
    title: "Backend",
    skills: ["Python", "Django", "PHP"],
    gradient: "from-secondary to-pink-400",
  },
  {
    title: "Programming",
    skills: ["Java", "C++"],
    gradient: "from-green-500 to-emerald-400",
  },
  {
    title: "Cloud",
    skills: ["AWS", "Firebase"],
    gradient: "from-orange-500 to-yellow-400",
  },
  {
    title: "Deployment",
    skills: ["Netlify", "Vercel", "Heroku", "GitHub Pages"],
    gradient: "from-primary to-secondary",
  },
  {
    title: "Tools",
    skills: ["Git"],
    gradient: "from-red-500 to-orange-400",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-glow opacity-30" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit built through academic study and hands-on experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="bg-gradient-card rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-300 shadow-card group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <h3 className={`text-xl font-bold font-heading mb-4 bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-muted/50 rounded-lg text-foreground/90 border border-border/50 hover:border-primary/30 transition-colors"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05, duration: 0.3 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
