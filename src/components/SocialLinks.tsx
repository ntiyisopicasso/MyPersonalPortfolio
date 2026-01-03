import { Github, Linkedin, Twitter, Mail, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const SocialLinks = () => {
  const socialLinks = [
    { 
      icon: Github, 
      href: "https://github.com/NtiyisoPicasso", 
      label: "GitHub",
      hoverColor: "hover:text-primary-glow"
    },
    { 
      icon: Linkedin, 
      href: "https://linkedin.com/", 
      label: "LinkedIn",
      hoverColor: "hover:text-primary-glow"
    },
    { 
      icon: Twitter, 
      href: "https://twitter.com/", 
      label: "Twitter",
      hoverColor: "hover:text-primary-glow"
    },
    { 
      icon: Instagram, 
      href: "https://instagram.com/", 
      label: "Instagram",
      hoverColor: "hover:text-accent-glow"
    },
    { 
      icon: Mail, 
      href: "mailto:ntiyisopicasso@icloud.com", 
      label: "Email",
      hoverColor: "hover:text-accent-glow"
    }
  ];

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
      {socialLinks.map((social) => {
        const Icon = social.icon;
        return (
          <Button
            key={social.label}
            variant="ghost"
            size="icon"
            asChild
            className={`transition-all duration-300 ${social.hoverColor} hover:scale-110 hover:shadow-glow bg-card/30 backdrop-blur-sm border border-border/50`}
          >
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
            >
              <Icon size={20} />
            </a>
          </Button>
        );
      })}
    </div>
  );
};

export default SocialLinks;