
import React from 'react';
import { Brain, Zap, Award } from 'lucide-react';

const aboutData = [
  {
    icon: Brain,
    title: 'Technical Expertise',
    description: 'Proficient in multiple programming languages with strong problem-solving abilities. Experienced in debugging complex issues and optimizing application performance.'
  },
  {
    icon: Zap,
    title: 'Project Delivery',
    description: 'Capable of managing full project lifecycles from conception to deployment. Experienced in live website deployment and ongoing maintenance.'
  },
  {
    icon: Award,
    title: 'Leadership Skills',
    description: 'Natural leader with experience coordinating development teams and providing strategic technical guidance for complex software projects.'
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="scroll-reveal text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate developer with expertise in modern web technologies and a proven track record of leading successful development teams.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="scroll-reveal">
            <img className="w-full rounded-2xl shadow-2xl" alt="Modern developer workspace with multiple monitors displaying code" src="https://images.unsplash.com/photo-1698919585695-546e4a31fc8f" />
          </div>
          
          <div className="scroll-reveal space-y-6">
            {aboutData.map((item, index) => (
              <div key={index} className="glass-effect p-6 rounded-xl">
                <item.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
