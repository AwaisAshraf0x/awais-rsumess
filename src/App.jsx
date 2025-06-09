
import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';
import { toast } from '@/components/ui/use-toast';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { supabase } from '@/lib/supabaseClient'; 

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  useEffect(() => {
    const checkSupabaseConnection = async () => {
      try {
        const { data, error } = await supabase.from('test_connection_table').select('*').limit(1);
        if (error && error.message.includes("relation \"test_connection_table\" does not exist")) {
          console.info("Supabase connection successful (table doesn't exist, this is fine for a connection check).");
          toast({
            title: "Supabase Connected!",
            description: "Successfully connected to your Supabase project.",
            variant: "default", 
          });
        } else if (error) {
          console.error("Supabase connection error:", error);
          toast({
            title: "Supabase Connection Error",
            description: `Failed to connect: ${error.message}`,
            variant: "destructive",
          });
        } else {
          console.info("Supabase connection successful.");
           toast({
            title: "Supabase Connected!",
            description: "Successfully connected to your Supabase project.",
            variant: "default",
          });
        }
      } catch (e) {
        console.error("Supabase client instantiation error:", e);
        toast({
          title: "Supabase Client Error",
          description: "Failed to initialize Supabase client.",
          variant: "destructive",
        });
      }
    };

    checkSupabaseConnection();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight * 0.4;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }

      const reveals = document.querySelectorAll('.scroll-reveal');
      reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          reveal.classList.add('revealed');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      <HeroSection y={y} />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
