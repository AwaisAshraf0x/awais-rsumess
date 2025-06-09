
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const projectsData = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    status: 'Live'
  },
  {
    title: 'Task Management System',
    description: 'Collaborative project management tool with real-time updates, team coordination features, and advanced reporting capabilities.',
    tech: ['TypeScript', 'React', 'Socket.io', 'MongoDB'],
    status: 'Live'
  },
  {
    title: 'Mobile App Development',
    description: 'Currently learning React Native and Flutter to expand into mobile development. Building cross-platform applications.',
    tech: ['React Native', 'Flutter', 'Firebase'],
    status: 'In Progress'
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="scroll-reveal text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <p className="text-xl text-muted-foreground">
            Showcasing successful project deliveries and technical implementations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-effect p-6 rounded-xl tech-card group"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  project.status === 'Live' 
                    ? 'bg-green-500/20 text-green-400' 
                    : 'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {project.status}
                </span>
              </div>
              
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-primary/20 text-primary rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>
              
              <Button variant="ghost" size="sm" className="w-full group-hover:bg-primary/10" asChild>
                <a href="#" aria-label={`View details for ${project.title}`}>
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Details
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
