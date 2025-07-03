
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and Stripe integration",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      demo: "#",
      color: "from-pixel-neon to-pixel-blue-light"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates and team features",
      tech: ["Next.js", "PostgreSQL", "Socket.io", "Tailwind"],
      github: "#",
      demo: "#",
      color: "from-pixel-pink to-pixel-purple"
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather dashboard with location-based forecasts and data visualization",
      tech: ["Vue.js", "Chart.js", "Weather API", "PWA"],
      github: "#",
      demo: "#",
      color: "from-pixel-orange to-pixel-pink"
    },
    {
      title: "Social Media Analytics",
      description: "Analytics dashboard for social media metrics with automated reporting",
      tech: ["Python", "Django", "PostgreSQL", "Chart.js"],
      github: "#",
      demo: "#",
      color: "from-pixel-blue-light to-pixel-neon"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-black/60 via-black/70 to-black/80">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 font-mono text-white">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-black/70 border-2 border-pixel-neon/30 hover:border-pixel-neon transition-all duration-300 hover:scale-105 backdrop-blur-sm group"
            >
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white font-mono flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${project.color} animate-pulse`} />
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-200 font-mono">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-pixel-purple/50 text-pixel-neon px-3 py-1 rounded-full text-sm font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 pt-4">
                  <Button 
                    size="sm"
                    className="bg-pixel-neon text-black hover:bg-pixel-blue-light hover:text-white transition-all duration-300 font-mono"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button 
                    size="sm"
                    className="bg-pixel-neon text-black hover:bg-pixel-blue-light hover:text-white transition-all duration-300 font-mono"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
