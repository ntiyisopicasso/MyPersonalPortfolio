import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Instagram, Mail, Heart } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/NtiyisoPicasso", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com/", label: "Instagram" },
  { icon: Mail, href: "mailto:ntiyisopicasso@icloud.com", label: "Email" },
];

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="container mx-auto">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo / Name */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold font-heading text-gradient">Picasso</h3>
            <p className="text-muted-foreground text-sm mt-1">
              Building the future, one line at a time
            </p>
          </div>

          {/* Social Links - Mobile */}
          <div className="flex gap-4 lg:hidden">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-destructive fill-destructive" /> by Ntiyiso
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
