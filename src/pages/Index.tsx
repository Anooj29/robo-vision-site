import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Play, ArrowRight, Menu, X } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen cosmic-bg font-jakarta">
      {/* Cosmic particle background */}
      <div className="particles fixed inset-0 pointer-events-none z-0">
        <div className="particle" style={{ top: '20%', left: '10%' }}></div>
        <div className="particle" style={{ top: '60%', left: '20%' }}></div>
        <div className="particle" style={{ top: '40%', left: '80%' }}></div>
        <div className="particle" style={{ top: '80%', left: '60%' }}></div>
        <div className="particle" style={{ top: '30%', left: '90%' }}></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border animate-fade-in">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3 group">
              <img 
                src="/lovable-uploads/fdc0c3ef-d2b3-4ae6-b208-5aa7c1730f95.png" 
                alt="VS Tech Horizon Logo" 
                className="h-8 w-auto group-hover:scale-110 transition-transform duration-300"
              />
              <span className="text-lg font-bold text-cool-white tracking-wide">VS TECH HORIZON</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Services', 'Contact'].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-muted-foreground hover:text-electric-blue transition-all duration-300 font-medium relative group animate-fade-in uppercase tracking-wider text-sm"
                  style={{animationDelay: `${index * 100}ms`}}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-electric-blue transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-cool-white"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    scrollToSection(item.toLowerCase());
                    setMobileMenuOpen(false);
                  }}
                  className="block text-muted-foreground hover:text-electric-blue transition-all duration-300 font-medium uppercase tracking-wider text-sm"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - Full Screen */}
      <section className="min-h-screen flex items-center justify-center px-4 relative z-10">
        <div className="container mx-auto text-center">
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Main Title */}
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-cool-white mb-4 leading-tight tracking-wide uppercase">
                VS Tech Horizon
                <span className="block text-3xl md:text-4xl lg:text-5xl font-normal tracking-widest text-muted-foreground mt-2">
                  Pvt. Ltd.
                </span>
              </h1>
            </div>

            {/* Powerful Tagline */}
            <div className="animate-fade-in delay-300">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-electric-blue via-neon-purple to-electric-blue mb-6 leading-tight uppercase tracking-wide animate-gradient-shift text-shimmer">
                Pioneering Robotics & AI
                <span className="block text-2xl md:text-3xl lg:text-4xl mt-2">
                  for a Smarter Tomorrow
                </span>
              </h2>
            </div>

            {/* Subtext */}
            <div className="animate-fade-in delay-500">
              <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed font-light tracking-wide">
                Advancing education and industry with intelligent robotics, AI innovations, and next-gen training programs.
              </p>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in delay-700">
              <Button 
                size="lg" 
                className="bg-electric-blue hover:bg-electric-blue/80 text-deep-space px-12 py-6 text-lg font-bold rounded-full shadow-2xl hover:shadow-electric-blue/50 group uppercase tracking-wider border-2 border-electric-blue animate-electric-glow"
                onClick={() => scrollToSection('services')}
              >
                Get Started
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-deep-space px-12 py-6 text-lg font-bold rounded-full group uppercase tracking-wider bg-transparent backdrop-blur-sm"
              >
                <Play className="mr-3 h-6 w-6 group-hover:scale-125 transition-transform duration-300" />
                Watch Vision
              </Button>
            </div>
          </div>
        </div>

        {/* Floating geometric elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 border border-electric-blue/30 rotate-45 animate-float opacity-40"></div>
        <div className="absolute top-3/4 right-10 w-16 h-16 border border-neon-purple/30 rotate-12 animate-float delay-300 opacity-40"></div>
        <div className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-electric-blue/20 rounded-full animate-particle-float opacity-60"></div>
        <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-neon-purple/20 rounded-full animate-particle-float delay-500 opacity-60"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-4 relative z-10">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-6xl font-bold text-cool-white mb-8 uppercase tracking-wide">
                The Future is
                <span className="block text-electric-blue animate-neon-pulse">Intelligent</span>
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
                We bridge the gap between cutting-edge robotics and practical education, 
                preparing the next generation for a technology-driven world through innovation, 
                precision, and intelligent design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-4 relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-cool-white mb-6 uppercase tracking-wide animate-fade-in">
              Our Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in delay-200 font-light">
              Comprehensive robotics and AI solutions designed for educational excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {[
              {
                title: "Robotics Lab Setup",
                description: "Complete laboratory installation with cutting-edge robots and programming environments.",
                link: "/services/robotics-lab",
                number: "01"
              },
              {
                title: "AI Training Programs", 
                description: "Comprehensive artificial intelligence workshops with hands-on robotics integration.",
                link: "/services/ai-training",
                number: "02"
              },
              {
                title: "Industrial Automation",
                description: "Custom intelligent robotics solutions for manufacturing optimization.",
                link: "/services/industrial-automation", 
                number: "03"
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className="group cursor-pointer animate-fade-in card-hover"
                style={{animationDelay: `${index * 200}ms`}}
                onClick={() => navigate(service.link)}
              >
                <div className="bg-card/50 backdrop-blur-md border border-border/50 rounded-2xl p-8 h-full hover:border-electric-blue/50 transition-all duration-500">
                  <div className="text-6xl font-bold text-electric-blue/20 mb-6 group-hover:text-electric-blue/40 transition-colors duration-500">
                    {service.number}
                  </div>
                  <h3 className="text-2xl font-bold text-cool-white mb-4 uppercase tracking-wide group-hover:text-electric-blue transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-light group-hover:text-foreground transition-colors duration-300">
                    {service.description}
                  </p>
                  <div className="mt-8 flex items-center text-electric-blue group-hover:translate-x-2 transition-transform duration-300">
                    <span className="font-semibold tracking-wide uppercase text-sm">Learn More</span>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-4 relative z-10">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-6xl font-bold text-cool-white mb-8 uppercase tracking-wide">
                Ready to
                <span className="block text-neon-purple animate-neon-pulse">Transform?</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-12 font-light">
                Let's discuss how we can revolutionize your educational or industrial environment
              </p>
              <Button 
                size="lg" 
                className="bg-neon-purple hover:bg-neon-purple/80 text-deep-space px-12 py-6 text-lg font-bold rounded-full shadow-2xl hover:shadow-neon-purple/50 uppercase tracking-wider border-2 border-neon-purple"
              >
                Start Conversation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-12 px-4 border-t border-border/30 relative z-10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img 
                src="/lovable-uploads/fdc0c3ef-d2b3-4ae6-b208-5aa7c1730f95.png" 
                alt="VS Tech Horizon Logo" 
                className="h-6 w-auto"
              />
              <span className="text-sm text-muted-foreground tracking-wider">VS TECH HORIZON</span>
            </div>
            <div className="flex space-x-8 text-sm text-muted-foreground">
              <button className="hover:text-electric-blue transition-colors duration-300 uppercase tracking-wide">Terms</button>
              <button className="hover:text-electric-blue transition-colors duration-300 uppercase tracking-wide">Contact</button>
              <button className="hover:text-electric-blue transition-colors duration-300 uppercase tracking-wide">Privacy</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;