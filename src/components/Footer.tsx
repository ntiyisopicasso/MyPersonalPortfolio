import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Instagram, Mail, Heart, Phone, MapPin, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { icon: Github, href: "https://github.com/NtiyisoPicasso", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com/", label: "Instagram" },
];

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-20 pb-8 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-card via-background to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold font-heading text-gradient mb-4">
              Ntiyiso Picasso
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              A passionate web developer and computer science student, crafting beautiful 
              digital experiences and exploring the world of cybersecurity.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-muted/50 border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
                  aria-label={social.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{ y: -3 }}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h4 className="text-lg font-bold font-heading text-foreground mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h4 className="text-lg font-bold font-heading text-foreground mb-6">
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:ntiyisopicasso@icloud.com"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-3 group"
                >
                  <div className="p-2 rounded-lg bg-muted/50 group-hover:bg-primary/10 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-sm">ntiyisopicasso@icloud.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+27609375034"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-3 group"
                >
                  <div className="p-2 rounded-lg bg-muted/50 group-hover:bg-primary/10 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="text-sm">+27 60 937 5034</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <div className="p-2 rounded-lg bg-muted/50">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-sm">Limpopo, South Africa</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

        {/* Bottom Bar */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p className="text-muted-foreground text-sm flex items-center gap-2">
            © {currentYear} Ntiyiso Picasso. Made with{" "}
            <Heart className="w-4 h-4 text-destructive fill-destructive animate-pulse" />{" "}
            in South Africa
          </p>

          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="border-border hover:border-primary/50 hover:bg-primary/10 gap-2"
          >
            <ArrowUp className="w-4 h-4" />
            Back to Top
          </Button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
