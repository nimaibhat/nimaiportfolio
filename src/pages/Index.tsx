
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Fixed Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat pixel-art z-0"
        style={{
          backgroundImage: `url('/lovable-uploads/10d0b345-2db7-43d6-8429-d41162a59c08.png')`
        }}
      />
      
      {/* Content Container */}
      <div className="relative z-10">
        <Navigation />
        <main>
          <div id="hero">
            <Hero />
          </div>
          <About />
          <Experience />
          <Projects />
          <Contact />
        </main>
        
        {/* Footer */}
        <footer className="bg-black/80 border-t border-pixel-neon/30 py-8 backdrop-blur-sm">
          <div className="container mx-auto px-4 text-center">
            <p className="text-gray-300 font-mono">
              Built with <span className="text-pixel-neon">❤️</span> and lots of coffee
            </p>
            <p className="text-gray-500 font-mono text-sm mt-2">
              © 2024 Nimai Bhat - Software Engineer Portfolio
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
