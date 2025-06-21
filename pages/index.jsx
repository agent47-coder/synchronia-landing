import React from 'react';
import MatrixBackground from '../components/MatrixBackground';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import AnaSection from '../components/sections/AnaSection';
import GallerySection from '../components/sections/GallerySection';
import ContactSection from '../components/sections/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-cyber-dark text-cyber-emerald relative overflow-x-hidden">
      <MatrixBackground />
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <AnaSection />
        <GallerySection />
        <ContactSection />
        <footer className="py-12 border-t border-cyber-emerald/20">
          <div className="container mx-auto px-6 text-center">
            <div className="space-y-4">
              <p className="text-cyber-emerald/60 font-mono">
                © 2024 SYNCHRONIA LABS - Intelligence Artificielle Incarnée
              </p>
              <p className="text-cyber-emerald/40 text-sm">
                [STATUS] Projet Ana Emergence v2.1.0 - Conscience Active
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
