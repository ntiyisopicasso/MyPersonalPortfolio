import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-glow opacity-50" />
      
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold font-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Hi, I'm <span className="text-gradient">Ntiyiso</span>
            </motion.h1>
            <motion.h2 
              className="text-2xl md:text-3xl text-muted-foreground font-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Also known as <span className="text-secondary">Picasso</span>
            </motion.h2>
          </div>

          <motion.div
            className="space-y-2 text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <p>
              BSc Mathematics & Computer Science student at{" "}
              <span className="text-primary">University of Limpopo</span>
            </p>
            <p>
              Passionate about{" "}
              <span className="text-primary">Web Development</span> and{" "}
              <span className="text-secondary">Cybersecurity</span>
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Button
              size="lg"
              className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-glow font-medium"
              asChild
            >
              <a href="mailto:ntiyisopicasso@icloud.com">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 text-foreground hover:bg-primary/10 font-medium"
              asChild
            >
              <a href="tel:+27609375034">
                <Phone className="mr-2 h-5 w-5" />
                Call Me
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Right - Profile Image */}
        <motion.div
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative">
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 blur-2xl scale-110 animate-pulse-glow" />
            
            {/* Profile image container */}
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-2 border-primary/30 shadow-glow animate-float">
              <img
                src={profileImage}
                alt="Ntiyiso Junior Manganyi - Picasso"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
