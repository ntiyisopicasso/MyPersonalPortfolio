import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import herePortrait from "@/asserts/profile.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      
      <div className="container mx-auto max-w-6xl grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Content */}
        <div className="space-y-8 text-center lg:text-left">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Ntiyiso
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground">
              Also known as{" "}
              <span className="text-accent font-semibold animate-pulse">
                Picasso
              </span>
            </h2>
          </div>
          
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              BSc Mathematics & Computer Science student at{" "}
              <span className="text-primary font-medium">University of Limpopo</span>
            </p>
            <p className="text-xl font-medium">
              Passionate about{" "}
              <span className="text-primary">Web Development</span> and{" "}
              <span className="text-accent">Cybersecurity</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300" asChild>
              <a href="mailto:ntiyisopicasso@icloud.com">
                <Mail className="mr-2" size={20} />
                Get In Touch
              </a>
            </Button>
            <Button variant="outline" size="lg" className="hover:bg-primary hover:text-primary-foreground">
              <Download className="mr-2" size={20} />
              Download CV
            </Button>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-20 animate-pulse" />
            <img
              src={herePortrait}
              alt="Ntiyiso Junior Manganyi - Picasso"
              className="relative w-80 h-80 object-cover rounded-full border-4 border-primary/30 shadow-glow animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;