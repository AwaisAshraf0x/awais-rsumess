
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Alex Chen. Built with React, Tailwind CSS, and Framer Motion.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
