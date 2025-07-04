
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "OpenMatch",
      description: "Full-stack React platform to match users to open source issues based on their profile",
      tech: ["scikit-learn", "GitHub API", "PostgreSQL", "Flask"],
      github: "#",
      demo: null, // No demo available
      color: "from-pixel-neon to-pixel-blue-light"
    },
    {
      title: "LiftSense.AI",
      description: "Dashboard implementing computer vision to detect weightlifting form and provide real-time feedback",
      tech: ["NumPy", "MediaPipe", "Pandas", "OpenAI API"],
      github: "https://github.com/24amishra/Hack-AI",
      demo: "https://github.com/24amishra/Hack-AI/tree/main",
      color: "from-pixel-pink to-pixel-purple"
    },
    {
      title: "Go CRUD Book Management",
      description: "Lightweight, but highly scalable CRUD API project for managing books with Go",
      tech: ["GoLang", "MongoDB", "CORS", "k6"],
      github: "https://github.com/nimaibhat/GoCrudBookManagement",
      demo: "https://github.com/nimaibhat/GoCrudBookManagement",
      color: "from-pixel-orange to-pixel-pink"
    },
    {
      title: "Parkinsons Prediction",
      description: "Machine learning program that stacks multiple of the most used models to create a 95% accurate Parkinson's prediction model",
      tech: ["Python", "scikit-learn", "SMOTE", "PyTorch"],
      github: "https://github.com/nimaibhat/Parkinsons-Prediction",
      demo: "https://github.com/nimaibhat/Parkinsons-Prediction",
      color: "from-pixel-blue-light to-pixel-neon"
    }
  ];

  const handleGithubClick = (githubUrl: string) => {
    if (githubUrl && githubUrl !== "#") {
      window.open(githubUrl, '_blank');
    }
  };

  const handleDemoClick = (demoUrl: string) => {
    if (demoUrl) {
      window.open(demoUrl, '_blank');
    }
  };

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
                    onClick={() => handleGithubClick(project.github)}
                    className="bg-pixel-neon text-black hover:bg-pixel-blue-light hover:text-white transition-all duration-300 font-mono"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  {project.demo && (
                    <Button 
                      size="sm"
                      onClick={() => handleDemoClick(project.demo)}
                      className="bg-pixel-neon text-black hover:bg-pixel-blue-light hover:text-white transition-all duration-300 font-mono"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  )}
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
