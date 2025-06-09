
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail, Download, ChevronDown } from 'lucide-react';

const HeroSection = ({ y }) => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center hero-bg relative overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl floating-animation" style={{ animationDelay: '2s' }}></div>
      </motion.div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img className="w-32 h-32 rounded-full mx-auto mb-8 border-4 border-primary/50 pulse-glow" alt="Professional headshot of Alex Chen, a full stack developer and team leader" src="https://images.unsplash.com/photo-1636369555100-e0ba574af653" />
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Full Stack Developer
            <span className="block gradient-text">& Team Leader</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Transforming ideas into powerful digital solutions while leading teams to deliver exceptional results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-bg hover:opacity-90 transition-opacity" onClick={scrollToContact}>
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/alex_chen_resume.pdf" download="Alex_Chen_Resume.pdf" aria-label="Download Alex Chen's Resume">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="h-8 w-8 animate-bounce text-primary" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
