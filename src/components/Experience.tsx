
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Tech Company",
      location: "San Francisco, CA",
      duration: "Jun 2024 - Aug 2024",
      description: "Developed full-stack web applications using React and Node.js. Collaborated with senior engineers on feature implementation and code reviews.",
      technologies: ["React", "Node.js", "TypeScript", "MongoDB"],
      color: "from-pixel-neon to-pixel-blue-light"
    },
    {
      title: "Frontend Developer Intern",
      company: "Startup Inc",
      location: "Remote",
      duration: "Jan 2024 - May 2024",
      description: "Built responsive user interfaces and improved website performance. Worked closely with design team to implement pixel-perfect designs.",
      technologies: ["Vue.js", "CSS3", "JavaScript", "Figma"],
      color: "from-pixel-pink to-pixel-purple"
    },
    {
      title: "Web Development Intern",
      company: "Digital Agency",
      location: "New York, NY",
      duration: "Sep 2023 - Dec 2023",
      description: "Created dynamic websites for clients using modern web technologies. Gained experience in project management and client communication.",
      technologies: ["HTML5", "CSS3", "JavaScript", "WordPress"],
      color: "from-pixel-orange to-pixel-pink"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-black/40 via-black/50 to-black/60">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 font-mono text-white">
          My Experience
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-pixel-neon/30"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-pixel-neon rounded-full border-4 border-black z-10"></div>
                
                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <Card className="bg-black/70 border-2 border-pixel-neon/30 hover:border-pixel-neon transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className={`w-12 h-1 bg-gradient-to-r ${exp.color} mb-4 rounded-full`}></div>
                      
                      <h3 className="text-xl font-bold text-white font-mono mb-2">
                        {exp.title}
                      </h3>
                      
                      <h4 className="text-lg text-pixel-neon font-mono mb-3">
                        {exp.company}
                      </h4>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4 text-gray-300">
                        <div className="flex items-center gap-1 font-mono text-sm">
                          <Calendar className="w-4 h-4" />
                          {exp.duration}
                        </div>
                        <div className="flex items-center gap-1 font-mono text-sm">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>
                      
                      <p className="text-gray-200 font-mono mb-4 leading-relaxed">
                        {exp.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="bg-pixel-purple/50 text-pixel-neon px-3 py-1 rounded-full text-sm font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
