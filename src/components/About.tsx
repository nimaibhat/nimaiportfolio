import { Code2, Database, Globe, Wrench } from "lucide-react";

const About = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code2 className="w-5 h-5" />,
      skills: ["Python", "Java", "C/C++", "JavaScript", "HTML/CSS", "Ruby", "GoLang", "MATLAB"],
      color: "text-pixel-neon"
    },
    {
      title: "Frameworks", 
      icon: <Globe className="w-5 h-5" />,
      skills: ["PyTorch", "TensorFlow", "scikit-learn", "XGBoost", "LangChain", "Ruby on Rails", "SpringBoot", "React", "Next.js"],
      color: "text-pixel-pink"
    },
    {
      title: "Databases",
      icon: <Database className="w-5 h-5" />,
      skills: ["Snowflake", "Firebase", "MongoDB", "MySQL", "Oracle SQL", "PostgreSQL"],
      color: "text-pixel-blue-light"
    },
    {
      title: "Tools & Cloud",
      icon: <Wrench className="w-5 h-5" />,
      skills: ["AWS", "Git", "Docker", "Linux", "Jupyter Notebook", "MS Office", "Vim", "k6", "Matillion"],
      color: "text-pixel-orange"
    }
  ];

  return (
    <>
      {/* About Me Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-transparent via-black/10 to-black/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 font-mono text-white">
            About Me
          </h2>
          
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-base md:text-lg lg:text-xl text-gray-200 font-mono leading-relaxed mb-8">
              I've spent the past 3+ years building programming solutions that are fast, reliable, and easy to use. 
              What really drives me is the challenge of simplifying complexity, taking a messy problem and crafting a clean,
               thoughtful solution that just works. I have a particular interest in applications of AI and machine learning.
            </p>
            <p className="text-base md:text-lg text-gray-300 font-mono leading-relaxed">
              When I'm not coding, you'll find me playing tennis, playing pickleball with friends, reading,
              or brewing the perfect cup of tea to fuel my next coding session.
            </p>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="skills" className="py-20 bg-gradient-to-b from-black/20 via-black/30 to-black/40">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 font-mono text-white">
            Technologies & Skills
          </h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skillCategories.map((category, index) => (
                <div 
                  key={index}
                  className="bg-black/20 border border-pixel-neon/20 rounded-lg p-6 hover:border-pixel-neon/40 transition-all duration-300 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`${category.color}`}>
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white font-mono">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="bg-pixel-purple/30 border border-pixel-neon/30 text-pixel-neon px-3 py-1 rounded-full text-sm font-mono hover:border-pixel-neon hover:bg-pixel-neon/10 transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
