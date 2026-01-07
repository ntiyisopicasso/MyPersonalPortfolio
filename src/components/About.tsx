import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Calendar } from "lucide-react";

interface TimelineItem {
  id: string;
  type: "education" | "work";
  title: string;
  organization: string;
  period: string;
  description: string;
  skills?: string[];
}

const timelineData: TimelineItem[] = [
  {
    id: "1",
    type: "education",
    title: "BSc Mathematics & Computer Science",
    organization: "University of Limpopo",
    period: "2022 - Present",
    description:
      "Currently pursuing a Bachelor of Science degree with a focus on Mathematics and Computer Science. Developing strong foundations in algorithms, data structures, and mathematical problem-solving.",
    skills: ["Python", "Java", "Data Structures", "Algorithms", "Mathematics"],
  },
  {
    id: "2",
    type: "work",
    title: "Freelance Web Developer",
    organization: "Self-Employed",
    period: "2023 - Present",
    description:
      "Building modern, responsive websites and web applications for clients. Specializing in React, TypeScript, and modern front-end technologies.",
    skills: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
  },
  {
    id: "3",
    type: "education",
    title: "High School Diploma",
    organization: "Matric Graduate",
    period: "2021",
    description:
      "Completed high school with a focus on Mathematics and Physical Sciences, laying the groundwork for further studies in computer science.",
    skills: ["Mathematics", "Physical Sciences"],
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-glow opacity-20" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A passionate developer and student on a journey to create impactful
            digital experiences
          </p>
        </motion.div>

        {/* About Description */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            I'm <span className="text-foreground font-medium">Ntiyiso Junior Manganyi</span>, 
            also known as <span className="text-secondary font-medium">Picasso</span>. 
            I'm a BSc Mathematics & Computer Science student at the University of Limpopo 
            with a passion for web development and cybersecurity. I love creating beautiful, 
            functional websites and exploring the fascinating world of security.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

          {timelineData.map((item, index) => (
            <motion.div
              key={item.id}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary shadow-glow -translate-x-1/2 mt-6" />

              {/* Content */}
              <div
                className={`flex-1 ml-16 md:ml-0 ${
                  index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
                }`}
              >
                <div className="bg-gradient-card rounded-xl p-6 border border-border shadow-card hover:border-primary/30 transition-colors">
                  <div
                    className={`flex items-center gap-3 mb-3 ${
                      index % 2 === 0 ? "md:justify-end" : ""
                    }`}
                  >
                    <div className="p-2 rounded-lg bg-primary/10">
                      {item.type === "education" ? (
                        <GraduationCap className="h-5 w-5 text-primary" />
                      ) : (
                        <Briefcase className="h-5 w-5 text-secondary" />
                      )}
                    </div>
                    <span
                      className={`text-xs font-medium px-3 py-1 rounded-full ${
                        item.type === "education"
                          ? "bg-primary/20 text-primary"
                          : "bg-secondary/20 text-secondary"
                      }`}
                    >
                      {item.type === "education" ? "Education" : "Experience"}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-primary font-medium mb-2">
                    {item.organization}
                  </p>
                  <div
                    className={`flex items-center gap-2 text-sm text-muted-foreground mb-3 ${
                      index % 2 === 0 ? "md:justify-end" : ""
                    }`}
                  >
                    <Calendar className="h-4 w-4" />
                    <span>{item.period}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {item.skills && (
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        index % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
