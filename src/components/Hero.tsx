
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* No overlay for hero section - clean start */}
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold font-mono mb-4 animate-float">
          <span className="text-pixel-neon">&lt;</span>
          Nimai Bhat
          <span className="text-pixel-neon">/&gt;</span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-bold font-mono mb-6 text-pixel-neon">
          Software Engineer
        </h2>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-200 font-mono">
          Crafting digital experiences with code and creativity
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            onClick={() => scrollToSection('projects')}
            className="bg-pixel-neon text-black hover:bg-pixel-blue-light hover:text-white transition-all duration-300 font-mono text-lg px-8 py-3"
          >
            View Projects
          </Button>
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-pixel-neon text-black hover:bg-pixel-blue-light hover:text-white transition-all duration-300 font-mono text-lg px-8 py-3"
          >
            Get In Touch
          </Button>
        </div>
        
        <div className="animate-bounce">
          <ChevronDown 
            className="w-8 h-8 text-pixel-neon cursor-pointer mx-auto" 
            onClick={() => scrollToSection('about')}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
