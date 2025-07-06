
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
  Award, 
  Users, 
  School, 
  Target, 
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Star,
  ChevronRight,
  Cpu,
  Cog,
  Trophy,
  Sparkles,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  X,
  Play,
  CheckCircle,
  Quote,
  User,
  TrendingUp,
  Shield,
  Rocket,
  Globe,
  Menu,
  MousePointer
} from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Modern Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/bd0ace43-2a7f-48d6-b49c-ab29e87ddeac.png" 
                alt="VS Tech Horizon Logo" 
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold text-gray-900">VS Tech Horizon</span>
            </div>
            <div className="hidden lg:flex items-center space-x-8">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About', id: 'about' },
                { name: 'Services', id: 'services' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => item.name === 'About' ? navigate('/about') : item.name === 'Contact' ? navigate('/contact') : scrollToSection(item.id)}
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium"
              >
                Get Started
              </Button>
              <button className="lg:hidden">
                <Menu className="h-6 w-6 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Clean & Modern */}
      <section id="home" className="pt-24 pb-20 px-6 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Building the Future with 
                  <span className="text-blue-600 block">Robotics & AI</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Transform your educational institution with cutting-edge robotics laboratories 
                  and comprehensive AI training programs.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md group"
                  onClick={() => scrollToSection('services')}
                >
                  Explore Solutions
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="px-8 py-4 rounded-md group"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">100+</div>
                  <div className="text-sm text-gray-600">Institutions</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">5000+</div>
                  <div className="text-sm text-gray-600">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">95%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="/lovable-uploads/5d30a3de-1c0d-4ef6-8be4-c9fac0f7f9b9.png"
                  alt="Robotics Technology"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose VS Tech Horizon?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver comprehensive robotics and AI solutions with proven results
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Proven Excellence",
                description: "Trusted by 100+ educational institutions worldwide with a track record of successful implementations."
              },
              {
                icon: Rocket,
                title: "Advanced Technology",
                description: "Cutting-edge robotics and AI solutions that prepare students for the future of technology."
              },
              {
                icon: Users,
                title: "Expert Support",
                description: "Dedicated team of robotics engineers and education specialists providing comprehensive support."
              }
            ].map((feature, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="mx-auto mb-4 p-4 bg-blue-50 rounded-2xl w-fit group-hover:bg-blue-100 transition-colors duration-300">
                    <feature.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions for modern education
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: School,
                title: "Robotics Lab Setup",
                description: "Complete laboratory solutions with cutting-edge equipment and comprehensive training programs.",
                image: "/lovable-uploads/1ce762e4-d4b9-4559-9ab3-7fa27e0a92f2.png",
                link: "/services/robotics-lab"
              },
              {
                icon: Brain,
                title: "AI Training Programs",
                description: "Advanced artificial intelligence workshops with hands-on robotics integration.",
                image: "/lovable-uploads/35d2ac7d-ef3a-434c-a7d2-ff6db9b99f62.png",
                link: "/services/ai-training"
              },
              {
                icon: Cog,
                title: "Industrial Automation",
                description: "Custom robotics solutions for manufacturing and process optimization.",
                image: "/lovable-uploads/74002a48-5100-46e2-a5c9-d02577557c89.png",
                link: "/services/industrial-automation"
              }
            ].map((service, index) => (
              <Card key={index} className="group cursor-pointer border-0 shadow-lg hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="p-2 bg-white/90 rounded-lg">
                      <service.icon className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="w-full bg-gray-900 hover:bg-blue-600 text-white"
                    onClick={() => navigate(service.link)}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Success stories from our partners</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Johnson",
                role: "Principal, Tech High School",
                content: "VS Tech Horizon transformed our STEM program completely. Student engagement increased by 300%.",
                rating: 5
              },
              {
                name: "Prof. Michael Chen", 
                role: "Dean of Engineering",
                content: "Exceptional AI training programs that significantly improved our students' job placement rates.",
                rating: 5
              },
              {
                name: "Amanda Rodriguez",
                role: "STEM Coordinator",
                content: "The workshops are always engaging and provide practical skills for real-world applications.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                      <div className="flex space-x-1 mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <Quote className="h-6 w-6 text-blue-200 mb-2" />
                  <CardDescription className="text-gray-700 italic leading-relaxed">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-6 bg-blue-600">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Institution?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join hundreds of institutions already using our solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4"
                onClick={() => navigate('/contact')}
              >
                Get Started Today
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img 
                  src="/lovable-uploads/bd0ace43-2a7f-48d6-b49c-ab29e87ddeac.png" 
                  alt="VS Tech Horizon Logo" 
                  className="h-8 w-auto"
                />
                <span className="text-xl font-bold">VS Tech Horizon</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Pioneering the future of robotics and AI education through innovative solutions.
              </p>
              <div className="flex space-x-4">
                {[Facebook, Instagram, X, Youtube, Linkedin].map((Social, index) => (
                  <a 
                    key={index}
                    href="#"
                    className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                  >
                    <Social className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {[
                  { name: "About Us", action: () => navigate('/about') },
                  { name: "Services", action: () => scrollToSection('services') },
                  { name: "Contact", action: () => navigate('/contact') },
                  { name: "Robotics Lab", action: () => navigate('/services/robotics-lab') }
                ].map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={link.action}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                {[
                  "Robotics Lab Setup",
                  "AI Training Programs",
                  "Industrial Automation",
                  "Technical Consulting"
                ].map((service) => (
                  <li key={service}>
                    <span className="text-gray-400">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-blue-400 mt-0.5" />
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white">contact@vstechhorizon.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-blue-400 mt-0.5" />
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400">&copy; 2024 VS Tech Horizon. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <button className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  Privacy Policy
                </button>
                <button className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
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
