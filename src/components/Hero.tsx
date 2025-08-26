import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-4 h-4 bg-primary rounded-full glow-effect" />
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-6 h-6 bg-accent rounded-full glow-effect" />
      </div>
      <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: '4s' }}>
        <div className="w-3 h-3 bg-primary rounded-full glow-effect" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">Rahul GL</span>
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground mb-4">
            MERN Stack Developer
          </p>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Passionate full-stack developer with extensive hands-on experience in building 
            modern web applications using MongoDB, Express.js, React.js, and Node.js. 
            Dedicated to creating innovative solutions and delivering high-quality results.
          </p>
        </div>

        <div className="animate-slide-up flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground glow-effect transition-all duration-300 hover:scale-105"
            onClick={() => scrollToSection('projects')}
          >
            View My Work <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            onClick={() => scrollToSection('contact')}
          >
            Get In Touch
          </Button>
        </div>

        <div className="animate-slide-up flex items-center justify-center gap-6">
          <a 
            href="mailto:rahulnandhu0521@gmail.com"
            className="p-3 rounded-full bg-card hover:bg-primary text-muted-foreground hover:text-primary-foreground transition-all duration-300 hover:scale-110 glow-effect"
          >
            <Mail className="h-6 w-6" />
          </a>
          <a 
            href="https://linkedin.com/in/rahul-gl"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card hover:bg-primary text-muted-foreground hover:text-primary-foreground transition-all duration-300 hover:scale-110 glow-effect"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a 
            href="https://github.com/rahul-gl"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card hover:bg-primary text-muted-foreground hover:text-primary-foreground transition-all duration-300 hover:scale-110 glow-effect"
          >
            <Github className="h-6 w-6" />
          </a>
          <a 
            href="tel:8848481641"
            className="p-3 rounded-full bg-card hover:bg-primary text-muted-foreground hover:text-primary-foreground transition-all duration-300 hover:scale-110 glow-effect"
          >
            <span className="text-lg font-semibold">📞</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;