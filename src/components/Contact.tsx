
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Github, Linkedin } from "lucide-react";
import ContactForm from "./ContactForm";

const Contact = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "Click me!",
      href: "mailto:hello@developer.com",
      color: "text-pixel-neon",
      clickable: true
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "@nimaibhat",
      href: "https://github.com/nimaibhat",
      color: "text-pixel-pink",
      clickable: false
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "/in/nimai-bhat",
      href: "https://www.linkedin.com/in/nimai-bhat/",
      color: "text-pixel-blue-light",
      clickable: false
    }
  ];

  const handleContactClick = (contact: typeof contactInfo[0]) => {
    if (contact.clickable) {
      setShowContactForm(true);
    } else {
      window.open(contact.href, '_blank');
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black/80 to-black/90">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 font-mono text-pixel-neon">
          Let's Connect
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-lg md:text-xl text-gray-200 font-mono leading-relaxed">
              I'm always interested in new opportunities and collaborations. 
              Feel free to reach out if you'd like to work together!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((contact, index) => (
              <Card 
                key={index} 
                className="bg-black/70 border-2 border-pixel-neon/30 hover:border-pixel-neon transition-all duration-300 hover:scale-105 backdrop-blur-sm cursor-pointer"
                onClick={() => handleContactClick(contact)}
              >
                <CardContent className="p-6 text-center">
                  <div className={`${contact.color} mb-4 flex justify-center`}>
                    {contact.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white font-mono">
                    {contact.label}
                  </h3>
                  <span className="text-gray-300 hover:text-pixel-neon transition-colors duration-300 font-mono text-sm">
                    {contact.value}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      <ContactForm 
        open={showContactForm} 
        onOpenChange={setShowContactForm}
      />
    </section>
  );
};

export default Contact;
