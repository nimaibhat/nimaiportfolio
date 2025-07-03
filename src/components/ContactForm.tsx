
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface ContactFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactForm = ({ open, onOpenChange }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) throw error;

      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon!",
      });

      setFormData({ name: "", email: "", message: "" });
      onOpenChange(false);
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-black/90 border-2 border-pixel-neon/50 backdrop-blur-sm text-white max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-mono text-pixel-neon text-center">
            Get In Touch
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-mono text-pixel-neon mb-2">
              Name
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className="w-full p-3 bg-black/70 border border-pixel-neon/30 rounded-md text-white font-mono focus:outline-none focus:border-pixel-neon"
              placeholder="Your name"
            />
          </div>
          
          <div>
            <label className="block text-sm font-mono text-pixel-neon mb-2">
              Email
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="w-full p-3 bg-black/70 border border-pixel-neon/30 rounded-md text-white font-mono focus:outline-none focus:border-pixel-neon"
              placeholder="your@email.com"
            />
          </div>
          
          <div>
            <label className="block text-sm font-mono text-pixel-neon mb-2">
              Message
            </label>
            <Textarea
              required
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              className="w-full p-3 bg-black/70 border border-pixel-neon/30 rounded-md text-white font-mono focus:outline-none focus:border-pixel-neon resize-none"
              placeholder="Your message..."
              rows={4}
            />
          </div>
          
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-pixel-neon text-black hover:bg-pixel-blue-light hover:text-white font-mono text-lg py-3"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactForm;
