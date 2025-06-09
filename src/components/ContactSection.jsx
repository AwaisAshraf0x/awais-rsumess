
import React from 'react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Mail, Github, Linkedin, Star } from 'lucide-react';
import { supabase } from '@/lib/supabaseClient';

const ContactSection = () => {
  const handleContactSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const projectType = formData.get('projectType');
    const message = formData.get('message');

    try {
      const { data, error } = await supabase
        .from('contacts')
        .insert([{ name, email, project_type: projectType, message }]);

      if (error) {
        throw error;
      }

      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out! I'll get back to you within 24 hours.",
      });
      e.target.reset();
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Uh oh! Something went wrong.",
        description: `There was a problem sending your message: ${error.message}. Please try again.`,
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="scroll-reveal text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your project to life? Let's discuss how I can help you achieve your goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="scroll-reveal">
            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <span>alex.chen@email.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Github className="h-6 w-6 text-primary" />
                  <span>github.com/alexchen</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Linkedin className="h-6 w-6 text-primary" />
                  <span>linkedin.com/in/alexchen</span>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-semibold mb-4">What I Can Help With:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {[
                    'Full-stack web development', 
                    'Team leadership and coordination', 
                    'Code review and debugging', 
                    'Project architecture planning'
                  ].map(item => (
                    <li key={item} className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="scroll-reveal">
            <form onSubmit={handleContactSubmit} className="glass-effect p-8 rounded-2xl space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="projectType" className="block text-sm font-medium mb-2">Project Type</label>
                <select 
                  id="projectType" 
                  name="projectType"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                >
                  <option>Web Development</option>
                  <option>Team Leadership</option>
                  <option>Code Review</option>
                  <option>Consulting</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <Button type="submit" className="w-full gradient-bg hover:opacity-90 transition-opacity">
                <Mail className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
