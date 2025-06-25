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
  Medal, 
  Users, 
  School, 
  Lightbulb, 
  Target, 
  Heart,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Star,
  ChevronRight,
  Cpu,
  Zap,
  Cog,
  Settings,
  Trophy,
  Crown,
  Sparkles
} from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-md z-50 border-b border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3 group">
              <img 
                src="/lovable-uploads/bd0ace43-2a7f-48d6-b49c-ab29e87ddeac.png" 
                alt="VS Tech Horizon Logo" 
                className="h-12 w-auto group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="hidden md:flex space-x-6">
              {['About', 'Work', 'Services', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-300 hover:text-blue-400 transition-all duration-300 font-medium relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 relative overflow-hidden">
        {/* 3D Robotics Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg transform rotate-12 animate-float"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg transform -rotate-45 animate-float delay-300"></div>
          <div className="absolute top-60 right-1/3 w-20 h-20 border-2 border-blue-400/30 rounded-lg transform rotate-45 animate-glow"></div>
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="animate-fade-in">
              <div className="flex justify-center mb-8">
                <div className="relative group">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-blue-400/30 group-hover:scale-110 transition-all duration-500">
                    <Brain className="h-16 w-16 text-blue-400 animate-pulse" />
                    <Bot className="h-12 w-12 text-purple-400 absolute -top-2 -right-2 group-hover:rotate-12 transition-transform duration-500" />
                    <Cpu className="h-8 w-8 text-cyan-400 absolute -bottom-1 -left-1 group-hover:scale-125 transition-transform duration-500" />
                  </div>
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                VS Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Horizon</span>
                <span className="block text-2xl md:text-3xl font-normal text-gray-300 mt-4 animate-fade-in delay-300">
                  Pioneering the Future of Robotics & AI
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-500">
                Transforming education and industry through cutting-edge robotics solutions, 
                AI innovations, and comprehensive training programs.
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group animate-fade-in delay-700"
                onClick={() => scrollToSection('work')}
              >
                Explore Our Robotics Solutions
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Robotics Showcase Section */}
      <section className="py-16 px-4 bg-gray-800/30 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-1/4 w-6 h-6 bg-blue-400/40 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-1/4 w-4 h-4 bg-purple-400/40 rounded-full animate-pulse delay-500"></div>
          <div className="absolute top-1/2 left-10 w-8 h-8 border border-cyan-400/30 rounded-full animate-float"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 animate-fade-in">Robotics & AI Innovation</h2>
            <p className="text-xl text-gray-300 animate-fade-in delay-200">See our cutting-edge robotics designs in action</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Bot,
                title: "Educational Robots",
                description: "Interactive learning companions designed to teach programming and robotics fundamentals",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: Brain,
                title: "AI-Powered Systems",
                description: "Smart automation solutions with machine learning capabilities for educational environments",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: Cog,
                title: "Industrial Automation",
                description: "Precision robotics for manufacturing processes and quality control systems",
                color: "from-orange-500 to-red-500"
              }
            ].map((robot, index) => (
              <Card key={index} className="bg-gray-800/60 border-gray-700 hover:bg-gray-700/60 transform hover:scale-105 hover:-translate-y-4 transition-all duration-500 group hover:shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10">
                  <div className="mx-auto mb-4">
                    <div className={`p-4 bg-gradient-to-br ${robot.color} rounded-2xl w-fit group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative`}>
                      <robot.icon className="h-12 w-12 text-white" />
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-white/30 rounded-full animate-ping"></div>
                    </div>
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors duration-300 text-center">
                    {robot.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-center text-gray-300 group-hover:text-white transition-colors duration-300">
                    {robot.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-gray-800/50 relative">
        {/* 3D Elements */}
        <div className="absolute top-20 right-10 w-24 h-24 border-2 border-blue-400/20 rounded-lg transform rotate-45 animate-glow"></div>
        <div className="absolute bottom-20 left-10 w-16 h-16 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full animate-float delay-700"></div>
        
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 animate-fade-in">About VS Tech Horizon</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in delay-200">
              We are a dynamic robotics and AI startup dedicated to bridging the gap between 
              cutting-edge technology and practical education solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Lightbulb,
                title: "Innovation",
                description: "Developing breakthrough robotics and AI solutions that push the boundaries of what's possible.",
                accent: "from-yellow-400 to-orange-500"
              },
              {
                icon: School,
                title: "Education",
                description: "Transforming learning experiences through hands-on robotics labs and comprehensive training programs.",
                accent: "from-green-400 to-blue-500"
              },
              {
                icon: Target,
                title: "Impact",
                description: "Creating meaningful change in communities through technology-driven educational initiatives.",
                accent: "from-purple-400 to-pink-500"
              }
            ].map((value, index) => (
              <Card key={index} className="bg-gray-800/80 border-gray-700 hover:bg-gray-700/80 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="text-center relative z-10">
                  <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full w-fit group-hover:scale-110 transition-transform duration-300 relative">
                    <value.icon className="h-8 w-8 text-white" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors duration-300">{value.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-center text-gray-300 group-hover:text-white transition-colors duration-300">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section id="work" className="py-16 px-4 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
        {/* 3D Background Elements */}
        <div className="absolute top-10 left-1/3 w-12 h-12 border border-blue-400/20 rounded-lg transform rotate-12 animate-float"></div>
        <div className="absolute bottom-40 right-1/4 w-8 h-8 bg-purple-500/20 rounded-full animate-pulse delay-300"></div>
        
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 animate-fade-in">Our Robotics Solutions</h2>
            <p className="text-xl text-gray-300 animate-fade-in delay-200">Transforming ideas into intelligent robotic reality</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Smart Robotics Lab Setup",
                description: "Complete robotics laboratories with AI-powered robots, sensors, and interactive programming environments.",
                category: "Education",
                icon: Bot
              },
              {
                title: "AI Training Programs",
                description: "Comprehensive artificial intelligence workshops with hands-on robotics integration and machine learning.",
                category: "Training",
                icon: Brain
              },
              {
                title: "Industrial Automation Bots",
                description: "Custom intelligent robotics solutions for manufacturing optimization and quality control systems.",
                category: "Industry",
                icon: Cog
              },
              {
                title: "Robotics R&D Projects",
                description: "Cutting-edge research in autonomous systems, human-robot interaction, and AI-driven robotics.",
                category: "Research",
                icon: Zap
              },
              {
                title: "Interactive Robotics Seminars",
                description: "Live demonstrations of robotics technology with hands-on programming and AI integration workshops.",
                category: "Education",
                icon: Settings
              },
              {
                title: "AI Robotics Consulting",
                description: "Strategic guidance for integrating intelligent robotics and AI automation into organizational workflows.",
                category: "Consulting",
                icon: Cpu
              }
            ].map((project, index) => (
              <Card key={index} className="bg-gray-800/60 border-gray-700 hover:bg-gray-700/60 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 group hover:shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <project.icon className="h-5 w-5 text-white" />
                      </div>
                      <CardTitle className="text-lg text-white group-hover:text-blue-400 transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                    </div>
                    <span className="text-xs bg-gradient-to-r from-blue-500 to-purple-600 text-white px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-gray-300 mb-4 group-hover:text-white transition-colors duration-300">
                    {project.description}
                  </CardDescription>
                  <div className="mt-4">
                    <Button variant="ghost" className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/20 p-0 group/btn">
                      Explore Solution
                      <ChevronRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section - Updated Theme */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-indigo-900/30 relative overflow-hidden">
        {/* Premium background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-16 h-16 bg-gradient-to-br from-gold-400/20 to-yellow-500/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-1/3 w-12 h-12 border-2 border-purple-400/30 rounded-lg transform rotate-45 animate-glow"></div>
          <div className="absolute top-1/2 left-10 w-8 h-8 bg-blue-500/20 rounded-full animate-float delay-500"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl border border-purple-400/30">
                <Crown className="h-12 w-12 text-purple-400" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4 animate-fade-in">Excellence & Recognition</h2>
            <p className="text-xl text-purple-200 animate-fade-in delay-200">Celebrating our journey of innovation and impact</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Trophy,
                title: "Innovation Excellence Award",
                year: "2024",
                description: "Best Robotics Startup",
                color: "from-purple-600 to-indigo-600"
              },
              {
                icon: Medal,
                title: "Education Impact Award",
                year: "2023",
                description: "Outstanding Contribution to STEM Education",
                color: "from-blue-600 to-purple-600"
              },
              {
                icon: Award,
                title: "Tech Entrepreneur Award",
                year: "2023",
                description: "Young Innovator Recognition",
                color: "from-indigo-600 to-blue-600"
              },
              {
                icon: Sparkles,
                title: "Research Excellence",
                year: "2022",
                description: "Best AI Research Project",
                color: "from-purple-600 to-pink-600"
              }
            ].map((achievement, index) => (
              <Card key={index} className="text-center bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-purple-500/30 hover:border-purple-400/50 backdrop-blur-sm transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 group hover:shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10">
                  <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-2xl w-fit group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border border-purple-400/20">
                    <achievement.icon className="h-10 w-10 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-lg text-white group-hover:text-purple-300 transition-colors duration-300 mb-2">{achievement.title}</CardTitle>
                  <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${achievement.color} text-white text-sm font-semibold`}>
                    {achievement.year}
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-purple-200 group-hover:text-white transition-colors duration-300">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 animate-fade-in">Services for Educational Institutions</h2>
            <p className="text-xl text-gray-300 animate-fade-in delay-200">Empowering the next generation through technology education</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                {
                  icon: School,
                  title: "Robotics Lab Setup",
                  description: "Complete laboratory installation with robots, sensors, programming tools, and comprehensive curriculum designed for different educational levels.",
                  link: "/services/robotics-lab"
                },
                {
                  icon: Users,
                  title: "AI Training & Workshops",
                  description: "Hands-on training sessions for teachers and students covering robotics fundamentals, AI concepts, and practical programming skills.",
                  link: "/services/ai-training"
                },
                {
                  icon: Brain,
                  title: "Industrial Automation",
                  description: "Precision robotics solutions for manufacturing processes and quality control systems that drive efficiency.",
                  link: "/services/industrial-automation"
                }
              ].map((service, index) => (
                <div key={index} className="flex space-x-4 group hover:bg-gray-800/30 p-4 rounded-lg transition-all duration-300 cursor-pointer" onClick={() => navigate(service.link)}>
                  <div className="flex-shrink-0 p-3 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">{service.title}</h3>
                    <p className="text-gray-300 mb-3">{service.description}</p>
                    <Button variant="ghost" className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/20 p-0 group/btn">
                      Learn More
                      <ChevronRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-700 hover:border-gray-600 transition-all duration-500">
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us?</h3>
              <ul className="space-y-4">
                {[
                  "Expert team with industry experience",
                  "Customized solutions for your needs",
                  "Ongoing support and maintenance",
                  "Proven track record with 50+ institutions",
                  "Award-winning innovative approach"
                ].map((point, index) => (
                  <li key={index} className="flex items-center space-x-3 group hover:translate-x-2 transition-transform duration-300">
                    <Star className="h-5 w-5 text-yellow-400 flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-gray-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 animate-fade-in">What Our Clients Say</h2>
            <p className="text-xl text-gray-300 animate-fade-in delay-200">Success stories from our educational partners</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Johnson",
                role: "Principal, Tech High School",
                content: "VS Tech Horizon transformed our STEM program. The robotics lab they set up has increased student engagement by 300% and our graduates are better prepared for engineering careers.",
                rating: 5
              },
              {
                name: "Prof. Michael Chen",
                role: "Dean of Engineering, State University",
                content: "Their AI training programs are exceptional. The hands-on approach and industry-relevant curriculum have significantly improved our students' job placement rates.",
                rating: 5
              },
              {
                name: "Amanda Rodriguez",
                role: "STEM Coordinator, Lincoln College",
                content: "The workshops conducted by VS Tech Horizon are always engaging and informative. Both teachers and students leave with practical skills they can immediately apply.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-gray-800/60 border-gray-700 hover:bg-gray-700/60 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 group hover:shadow-2xl">
                <CardHeader>
                  <div className="flex space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current group-hover:scale-125 transition-transform duration-300" style={{transitionDelay: `${i * 100}ms`}} />
                    ))}
                  </div>
                  <CardDescription className="text-gray-300 italic group-hover:text-white transition-colors duration-300">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-semibold">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">{testimonial.name}</h4>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 animate-fade-in">Get In Touch</h2>
            <p className="text-xl text-gray-300 animate-fade-in delay-200">Ready to transform your educational institution with cutting-edge technology?</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    title: "Email",
                    content: "contact@vstechhorizon.com"
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    content: "+1 (555) 123-4567"
                  },
                  {
                    icon: MapPin,
                    title: "Address",
                    content: "123 Innovation Drive, Tech City, TC 12345"
                  }
                ].map((contact, index) => (
                  <div key={index} className="flex items-center space-x-4 group hover:translate-x-2 transition-transform duration-300">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <contact.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">{contact.title}</h4>
                      <p className="text-gray-300">{contact.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-white">Name</Label>
                    <Input id="name" placeholder="Your name" className="bg-gray-800/60 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-400 transition-colors duration-300" />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-white">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" className="bg-gray-800/60 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-400 transition-colors duration-300" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="subject" className="text-white">Subject</Label>
                  <Input id="subject" placeholder="What can we help you with?" className="bg-gray-800/60 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-400 transition-colors duration-300" />
                </div>
                <div>
                  <Label htmlFor="message" className="text-white">Message</Label>
                  <Textarea id="message" placeholder="Tell us about your project..." className="bg-gray-800/60 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-400 transition-colors duration-300 min-h-[120px]" />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-4 border-t border-gray-800">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0 group">
              <img 
                src="/lovable-uploads/bd0ace43-2a7f-48d6-b49c-ab29e87ddeac.png" 
                alt="VS Tech Horizon Logo" 
                className="h-8 w-auto group-hover:scale-110 transition-transform duration-300"
              />
              <span className="text-xl font-bold">VS Tech Horizon Pvt. Ltd</span>
            </div>
            <div className="text-gray-400">
              <p>&copy; 2024 VS Tech Horizon. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
