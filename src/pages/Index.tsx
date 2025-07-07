import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, 
  Brain, 
  Users, 
  School, 
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Cpu,
  Cog,
  Menu,
  Play,
  CheckCircle,
  Award,
  Globe,
  Zap,
  Shield,
  TrendingUp,
  ExternalLink,
  Calendar,
  Target
} from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const navigateToPage = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation - Boston Dynamics style */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3 group">
              <img 
                src="/lovable-uploads/bf4614f9-4165-4a87-b5e4-9004f19c4109.png" 
                alt="VS Tech Horizon Logo" 
                className="h-8 w-8 group-hover:scale-110 transition-transform duration-300"
              />
              <span className="text-xl font-bold text-white">VS TECH HORIZON</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-8">
              {[
                { name: 'HOME', action: () => scrollToSection('home') },
                { name: 'ABOUT', action: () => navigateToPage('/about') },
                { name: 'SERVICES', action: () => navigateToPage('/services') },
                { name: 'PORTFOLIO', action: () => navigateToPage('/portfolio') },
                { name: 'CONTACT', action: () => scrollToSection('contact') }
              ].map((item, index) => (
                <button
                  key={item.name}
                  onClick={item.action}
                  className="text-gray-300 hover:text-white transition-all duration-300 font-medium text-sm tracking-wider relative group"
                  style={{animationDelay: `${index * 100}ms`}}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white hover:bg-gray-800"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-gray-800">
              <div className="flex flex-col space-y-4 pt-4">
                {[
                  { name: 'HOME', action: () => scrollToSection('home') },
                  { name: 'ABOUT', action: () => navigateToPage('/about') },
                  { name: 'SERVICES', action: () => navigateToPage('/services') },
                  { name: 'PORTFOLIO', action: () => navigateToPage('/portfolio') },
                  { name: 'CONTACT', action: () => scrollToSection('contact') }
                ].map((item) => (
                  <button
                    key={item.name}
                    onClick={item.action}
                    className="text-gray-300 hover:text-white transition-colors duration-300 font-medium text-left text-sm tracking-wider"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - Boston Dynamics style */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video/Animation Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1)_0%,transparent_50%)]"></div>
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse delay-500"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              THE FUTURE OF
              <br />
              <span className="text-blue-500">ROBOTICS EDUCATION</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto font-light">
              Transforming learning through advanced robotics solutions, AI innovation, 
              and cutting-edge technology integration.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-medium tracking-wide group border-0"
                onClick={() => navigateToPage('/services')}
              >
                EXPLORE SOLUTIONS
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-gray-600 text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-medium tracking-wide group bg-transparent"
              >
                <Play className="mr-2 h-5 w-5" />
                WATCH DEMO
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products/Services Section - Boston Dynamics style */}
      <section className="py-24 px-6 bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              OUR SOLUTIONS
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Advanced robotics and AI solutions designed for the next generation of learners
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            {[
              {
                icon: School,
                title: "ROBOTICS LAB",
                subtitle: "Complete Educational Setup",
                description: "State-of-the-art robotics laboratories with cutting-edge hardware, software integration, and comprehensive curriculum design.",
                image: "/lovable-uploads/bd0ace43-2a7f-48d6-b49c-ab29e87ddeac.png",
                link: "/services/robotics-lab"
              },
              {
                icon: Brain,
                title: "AI TRAINING",
                subtitle: "Advanced Learning Programs",
                description: "Comprehensive artificial intelligence workshops featuring machine learning, neural networks, and hands-on robotics integration.",
                image: "/lovable-uploads/bd0ace43-2a7f-48d6-b49c-ab29e87ddeac.png",
                link: "/services/ai-training"
              },
              {
                icon: Cog,
                title: "INDUSTRIAL AUTOMATION",
                subtitle: "Smart Manufacturing Solutions",
                description: "Custom intelligent robotics solutions for manufacturing optimization, quality control, and process automation.",
                image: "/lovable-uploads/bd0ace43-2a7f-48d6-b49c-ab29e87ddeac.png",
                link: "/services/industrial-automation"
              }
            ].map((service, index) => (
              <Card key={index} className="bg-black border-gray-800 hover:border-blue-500 transition-all duration-500 group overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <service.icon className="h-8 w-8 text-blue-500" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-white font-bold tracking-wide">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-blue-400 font-medium">
                    {service.subtitle}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <Button 
                    variant="outline"
                    className="w-full border-gray-700 text-white hover:bg-blue-600 hover:border-blue-600 bg-transparent"
                    onClick={() => navigate(service.link)}
                  >
                    LEARN MORE
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Boston Dynamics style */}
      <section className="py-24 px-6 bg-black border-y border-gray-800">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-12 text-center">
            {[
              { number: "100+", label: "INSTITUTIONS", description: "Educational partners worldwide" },
              { number: "5000+", label: "STUDENTS", description: "Successfully trained" },
              { number: "50+", label: "EXPERTS", description: "Industry professionals" },
              { number: "95%", label: "SUCCESS RATE", description: "Project completion" }
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-4xl md:text-5xl font-bold text-blue-500 mb-2">{stat.number}</div>
                <div className="text-lg font-bold text-white mb-2 tracking-wider">{stat.label}</div>
                <div className="text-gray-400 text-sm">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-24 px-6 bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              CUTTING-EDGE TECHNOLOGY
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Powered by the latest advancements in robotics and artificial intelligence
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "RELIABLE & SECURE",
                description: "Industrial-grade security protocols and fail-safe mechanisms ensure safe learning environments."
              },
              {
                icon: Zap,
                title: "HIGH PERFORMANCE",
                description: "Advanced processing capabilities delivering real-time responses and seamless user experiences."
              },
              {
                icon: Globe,
                title: "GLOBAL CONNECTIVITY",
                description: "Cloud-integrated systems enabling remote learning and collaborative robotics projects worldwide."
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-black border-gray-800 hover:border-blue-500 transition-all duration-300 text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 bg-gray-800 rounded-full w-fit">
                    <feature.icon className="h-8 w-8 text-blue-500" />
                  </div>
                  <CardTitle className="text-xl text-white font-bold tracking-wide">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-black border-t border-gray-800">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
              READY TO INNOVATE?
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Transform your institution with cutting-edge robotics and AI solutions. 
              Join the future of education today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-medium tracking-wide"
                onClick={() => scrollToSection('contact')}
              >
                GET STARTED
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-gray-600 text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-medium tracking-wide bg-transparent"
              >
                SCHEDULE DEMO
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              CONTACT US
            </h2>
            <p className="text-xl text-gray-400">
              Ready to transform your educational institution?
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 tracking-wide">GET IN TOUCH</h3>
              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    title: "EMAIL",
                    content: "contact@vstechhorizon.com",
                    subtitle: "Response within 24 hours"
                  },
                  {
                    icon: Phone,
                    title: "PHONE",
                    content: "+1 (555) 123-4567",
                    subtitle: "Mon-Fri, 9AM-6PM EST"
                  },
                  {
                    icon: MapPin,
                    title: "LOCATION",
                    content: "123 Innovation Drive, Tech City, TC 12345",
                    subtitle: "Visit our facility"
                  }
                ].map((contact, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-black border border-gray-800 rounded-lg">
                    <div className="p-3 bg-gray-800 rounded-lg">
                      <contact.icon className="h-6 w-6 text-blue-500" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-white mb-1 tracking-wide">{contact.title}</h4>
                      <p className="text-gray-300 font-medium mb-1">{contact.content}</p>
                      <p className="text-sm text-gray-500">{contact.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <Card className="bg-black border-gray-800">
              <CardHeader>
                <CardTitle className="text-2xl text-white font-bold tracking-wide">SEND MESSAGE</CardTitle>
                <CardDescription className="text-gray-400">Tell us about your project requirements</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-gray-300 font-medium">NAME *</Label>
                      <Input id="name" placeholder="Your name" className="mt-1 bg-gray-800 border-gray-700 text-white focus:border-blue-500" />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-gray-300 font-medium">EMAIL *</Label>
                      <Input id="email" type="email" placeholder="your@email.com" className="mt-1 bg-gray-800 border-gray-700 text-white focus:border-blue-500" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="subject" className="text-gray-300 font-medium">SUBJECT *</Label>
                    <Input id="subject" placeholder="Project inquiry" className="mt-1 bg-gray-800 border-gray-700 text-white focus:border-blue-500" />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-gray-300 font-medium">MESSAGE *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Describe your project requirements..." 
                      className="mt-1 bg-gray-800 border-gray-700 text-white focus:border-blue-500 min-h-[120px]" 
                    />
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 font-medium tracking-wide">
                    SEND MESSAGE
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <img 
                  src="/lovable-uploads/bf4614f9-4165-4a87-b5e4-9004f19c4109.png" 
                  alt="VS Tech Horizon Logo" 
                  className="h-8 w-8"
                />
                <span className="text-xl font-bold text-white">VS TECH HORIZON</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Advancing the future of robotics and AI education through innovative technology solutions.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6 tracking-wide">NAVIGATION</h3>
              <ul className="space-y-3">
                {['About', 'Services', 'Portfolio', 'Contact'].map((link) => (
                  <li key={link}>
                    <button className="text-gray-400 hover:text-white transition-colors duration-300 text-sm tracking-wide">
                      {link.toUpperCase()}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6 tracking-wide">SOLUTIONS</h3>
              <ul className="space-y-3">
                {['Robotics Lab', 'AI Training', 'Industrial Automation', 'Consulting'].map((service) => (
                  <li key={service} className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer text-sm tracking-wide">
                    {service.toUpperCase()}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6 tracking-wide">CONTACT</h3>
              <div className="space-y-4">
                <div className="text-gray-400 text-sm">
                  <p>contact@vstechhorizon.com</p>
                  <p>+1 (555) 123-4567</p>
                  <p>123 Innovation Drive<br />Tech City, TC 12345</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-500 text-sm">&copy; 2024 VS Tech Horizon Pvt. Ltd. All rights reserved.</p>
              <div className="flex space-x-6">
                <button className="text-gray-500 hover:text-white transition-colors duration-300 text-sm">
                  Privacy Policy
                </button>
                <button className="text-gray-500 hover:text-white transition-colors duration-300 text-sm">
                  Terms of Service
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
