import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "AI Software Engineering Intern",
      company: "Vertiv",
      location: "Westerville, OH",
      duration: "May 2025 - Present",
      description: "Built intelligent data and retrieval systems that streamlined contract forecasting, automated data completion, and improved document search relevance using semantic similarity, RAG, and embedding techniques",
      technologies: ["Snowflake", "AWS", "PyTorch", "Matillion"],
      color: "from-pixel-orange to-pixel-pink"
    },
    {
      title: "AR Development Extern",
      company: "Snap Inc.",
      location: "Remote",
      duration: "Mar 2024 - May 2024",
      description: "Created a research-backed Augmented Reality Lens that reached thousands of users and drove strong daily engagement",
      technologies: ["Snap AR Studio", "CSS3", "JavaScript", "Figma"],
      color: "from-yellow-300 to-yellow-500"
    },
    {
      title: "Full Stack Software Engineering Intern",
      company: "Big Kitty Labs",
      location: "Columbus, OH",
      duration: "Sep 2023 - Aug 2024",
      description: "Created dynamic websites for clients using technologies like RAG, FastAPI, Ruby on Rails. Gained experience in project management and client communication",
      technologies: ["Ruby on Rails", "AWS", "FastAPI", "MySQL"],
      color: "from-purple-500 to-purple-700"
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
