
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, Linkedin } from 'lucide-react';

const Navbar = ({ activeSection, scrollToSection }) => {
  return (
    <nav className="fixed top-0 w-full z-50 glass-effect">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold gradient-text"
          >
            Alex Chen
          </motion.div>
          <div className="hidden md:flex space-x-8">
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`transition-colors hover:text-primary ${
                  activeSection === item.toLowerCase() ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="flex space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/alexchen" target="_blank" rel="noopener noreferrer" aria-label="Alex Chen's Github Profile">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://linkedin.com/in/alexchen" target="_blank" rel="noopener noreferrer" aria-label="Alex Chen's LinkedIn Profile">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
