import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/NtiyisoPicasso", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com/", label: "Instagram" },
  { icon: Mail, href: "mailto:ntiyisopicasso@icloud.com", label: "Email" },
];

const SocialSidebar = () => {
  return (
    <motion.div
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
    >
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-lg bg-card/80 backdrop-blur-sm border border-border hover:border-primary/50 hover:shadow-glow transition-all duration-300 group"
          whileHover={{ scale: 1.1, x: -5 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9 + index * 0.1, duration: 0.4 }}
          aria-label={social.label}
        >
          <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialSidebar;
