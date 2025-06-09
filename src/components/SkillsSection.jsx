
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Rocket, Users, Target, Shield } from 'lucide-react';

const skillsData = [
  { name: 'HTML5', level: 100, icon: Code },
  { name: 'CSS', level: 90, icon: Code },
  { name: 'JavaScript', level: 70, icon: Code },
  { name: 'TypeScript', level: 80, icon: Code },
  { name: 'Python', level: 70, icon: Code },
  { name: 'Java', level: 50, icon: Code }
];

const leadershipData = [
  {
    icon: Users,
    title: 'Team Leadership',
    description: 'Successfully led development teams of 5-8 developers, coordinating sprints and ensuring project delivery.'
  },
  {
    icon: Target,
    title: 'Strategic Planning',
    description: 'Provide technical guidance and strategic advice for complex software architecture decisions.'
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'Expert in debugging, code review, and maintaining high code quality standards across projects.'
  },
  {
    icon: Rocket,
    title: 'Project Delivery',
    description: 'Proven track record of delivering full-scale projects on time and within budget specifications.'
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="scroll-reveal text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Technical Skills</h2>
          <p className="text-xl text-muted-foreground">
            Proficient in modern web technologies with continuous learning mindset
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="scroll-reveal">
            <h3 className="text-2xl font-semibold mb-8">Programming Languages</h3>
            <div className="space-y-6">
              {skillsData.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <skill.icon className="h-5 w-5 text-primary" />
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: index * 0.1 }}
                      className="h-full gradient-bg rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="scroll-reveal">
            <h3 className="text-2xl font-semibold mb-8">Leadership Capabilities</h3>
            <div className="grid gap-6">
              {leadershipData.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-effect p-6 rounded-xl tech-card"
                >
                  <item.icon className="h-8 w-8 text-primary mb-4" />
                  <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="scroll-reveal mt-16 text-center">
          <div className="glass-effect p-8 rounded-2xl inline-block">
            <Rocket className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Currently Learning</h3>
            <p className="text-muted-foreground">Mobile App Development</p>
            <p className="text-sm text-muted-foreground mt-2">React Native & Flutter</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
