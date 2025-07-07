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
  Sparkles,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  X,
  Play,
  CheckCircle,
  Quote,
  Calendar,
  Clock,
  User,
  MessageSquare,
  TrendingUp,
  Shield,
  Rocket,
  Globe,
  ExternalLink
} from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-200 shadow-sm animate-fade-in">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3 group">
              <img 
                src="/lovable-uploads/fdc0c3ef-d2b3-4ae6-b208-5aa7c1730f95.png" 
                alt="VS Tech Horizon Logo" 
                className="h-10 w-auto group-hover:scale-110 transition-transform duration-300"
              />
              <span className="text-xl font-bold text-gray-800" style={{fontFamily: 'Times, serif'}}>VS Tech Horizon Pvt. Ltd.</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-600 hover:text-blue-600 transition-all duration-300 font-medium relative group animate-fade-in"
                  style={{animationDelay: `${index * 100}ms`}}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float delay-300"></div>
          <div className="absolute -bottom-32 left-1/2 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float delay-700"></div>
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="animate-fade-in">
              <div className="flex justify-center items-center mb-8">
                <img 
                  src="/lovable-uploads/fdc0c3ef-d2b3-4ae6-b208-5aa7c1730f95.png" 
                  alt="VS Tech Horizon Logo" 
                  className="h-20 w-auto mr-4"
                />
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900" style={{fontFamily: 'Times, serif'}}>
                  VS Tech Horizon Pvt. Ltd.
                </h1>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Pioneering the Future of 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 block">
                  Robotics & AI
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-300">
                Transforming education and industry through cutting-edge robotics solutions, 
                AI innovations, and comprehensive training programs that prepare students for tomorrow's challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-500">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl group"
                  onClick={() => scrollToSection('services')}
                >
                  Explore Our Solutions
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 text-lg rounded-full group"
                >
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in">
              Why Choose VS Tech Horizon?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in delay-200">
              We combine cutting-edge technology with practical education solutions to create meaningful impact
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Trusted by 100+ Institutions",
                description: "Our proven track record speaks for itself with successful implementations across educational institutions worldwide.",
                color: "text-green-600"
              },
              {
                icon: Rocket,
                title: "Cutting-Edge Technology",
                description: "Stay ahead with the latest in robotics and AI technology, ensuring your students learn with tomorrow's tools today.",
                color: "text-blue-600"
              },
              {
                icon: Users,
                title: "Expert Support Team",
                description: "Dedicated support from our team of robotics engineers and education specialists throughout your journey.",
                color: "text-purple-600"
              }
            ].map((feature, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-500 group animate-fade-in" style={{animationDelay: `${index * 200}ms`}}>
                <CardHeader className="pb-4">
                  <div className="mx-auto mb-4 p-4 bg-gray-50 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className={`h-8 w-8 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Transforming Education Through Innovation
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At VS Tech Horizon, we believe that the future belongs to those who understand technology. 
                Our mission is to bridge the gap between cutting-edge robotics and practical education, 
                preparing the next generation for a technology-driven world.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Award-winning robotics education programs",
                  "Industry-leading AI training curriculum",
                  "Hands-on learning with real-world applications",
                  "Comprehensive support and ongoing development"
                ].map((point, index) => (
                  <div key={index} className="flex items-center space-x-3 animate-fade-in" style={{animationDelay: `${index * 150}ms`}}>
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full">
                Learn More About Us
              </Button>
            </div>
            <div className="relative animate-fade-in delay-300">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Bot className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">AI Robot Assistant</h3>
                        <p className="text-sm text-gray-500">Teaching Mode Active</p>
                      </div>
                    </div>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="text-sm text-gray-700">Processing student query...</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3">
                      <p className="text-sm text-blue-700">Generating personalized learning path</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in delay-200">
              Comprehensive robotics and AI solutions designed for educational excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: School,
                title: "Robotics Lab Setup",
                description: "Complete laboratory installation with cutting-edge robots, sensors, and programming environments tailored for educational excellence.",
                features: ["Hardware Setup", "Software Integration", "Curriculum Design", "Teacher Training"],
                link: "/services/robotics-lab",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: Brain,
                title: "AI Training Programs",
                description: "Comprehensive artificial intelligence workshops with hands-on robotics integration and machine learning applications.",
                features: ["Machine Learning", "Neural Networks", "Computer Vision", "Practical Projects"],
                link: "/services/ai-training",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                icon: Cog,
                title: "Industrial Automation",
                description: "Custom intelligent robotics solutions for manufacturing optimization and quality control systems.",
                features: ["Process Automation", "Quality Control", "System Integration", "Maintenance Support"],
                link: "/services/industrial-automation",
                gradient: "from-orange-500 to-red-500"
              }
            ].map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 group overflow-hidden animate-fade-in" style={{animationDelay: `${index * 200}ms`}}>
                <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 bg-gradient-to-br ${service.gradient} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-2">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-full"
                    onClick={() => navigate(service.link)}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in">
              Our Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in delay-200">
              Explore our successful implementations and innovative projects across educational institutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Tech High School - Complete Robotics Lab",
                description: "Implementation of a state-of-the-art robotics laboratory with 30 workstations, complete curriculum development, and teacher training program.",
                image: "photo-1605810230434-7631ac76ec81",
                category: "Education",
                impact: "300% increase in STEM enrollment",
                link: "#"
              },
              {
                title: "State University - AI Research Center",
                description: "Development of an advanced AI training facility with machine learning capabilities, computer vision systems, and neural network laboratories.",
                image: "photo-1518770660439-4636190af475",
                category: "Research",
                impact: "50+ AI specialists trained",
                link: "#"
              },
              {
                title: "Manufacturing Plant - Automation System",
                description: "Custom industrial automation solution with intelligent robotics for quality control and process optimization in manufacturing environment.",
                image: "photo-1581091226825-a6a2a5aee158",
                category: "Industry",
                impact: "40% efficiency improvement",
                link: "#"
              },
              {
                title: "Lincoln College - STEM Workshop Series",
                description: "Comprehensive workshop series covering robotics fundamentals, AI applications, and hands-on project development for students and faculty.",
                image: "photo-1488590528505-98d2b5aba04b",
                category: "Training",
                impact: "500+ students trained",
                link: "#"
              },
              {
                title: "Innovation Hub - Smart City Project",
                description: "Development of smart city solutions using IoT sensors, AI analytics, and robotic systems for urban planning and management.",
                image: "photo-1526374965328-7f61d4dc18c5",
                category: "Smart City",
                impact: "City-wide implementation",
                link: "#"
              },
              {
                title: "Community College - Robotics Competition",
                description: "Organization and technical support for annual robotics competition, including robot design, programming challenges, and innovation awards.",
                image: "photo-1461749280684-dccba630e2f6",
                category: "Competition",
                impact: "200+ participating teams",
                link: "#"
              }
            ].map((project, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 group overflow-hidden animate-fade-in" style={{animationDelay: `${index * 200}ms`}}>
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/${project.image}?auto=format&fit=crop&w=800&q=80`}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-2">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed mb-4">
                    {project.description}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-green-600 font-medium">{project.impact}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      View Details
                    </Button>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "100+", label: "Educational Institutions", icon: School },
              { number: "5000+", label: "Students Trained", icon: Users },
              { number: "50+", label: "Expert Trainers", icon: User },
              { number: "95%", label: "Success Rate", icon: TrendingUp }
            ].map((stat, index) => (
              <div key={index} className="animate-fade-in" style={{animationDelay: `${index * 200}ms`}}>
                <div className="mb-4">
                  <stat.icon className="h-12 w-12 mx-auto mb-4 opacity-80" />
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                  <div className="text-lg opacity-90">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 animate-fade-in delay-200">
              Success stories from our educational partners
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Johnson",
                role: "Principal, Tech High School",
                content: "VS Tech Horizon transformed our STEM program completely. The robotics lab they set up has increased student engagement by 300% and our graduates are significantly better prepared for engineering careers.",
                image: "SJ",
                rating: 5
              },
              {
                name: "Prof. Michael Chen",
                role: "Dean of Engineering, State University",
                content: "Their AI training programs are exceptional. The hands-on approach and industry-relevant curriculum have significantly improved our students' job placement rates in tech companies.",
                image: "MC",
                rating: 5
              },
              {
                name: "Amanda Rodriguez",
                role: "STEM Coordinator, Lincoln College",
                content: "The workshops conducted by VS Tech Horizon are always engaging and informative. Both teachers and students leave with practical skills they can immediately apply in real-world scenarios.",
                image: "AR",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-500 group bg-white animate-fade-in" style={{animationDelay: `${index * 200}ms`}}>
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-lg">
                        {testimonial.image}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                      <div className="flex space-x-1 mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <Quote className="h-8 w-8 text-blue-200 mb-2" />
                  <CardDescription className="text-gray-700 italic leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Ready to Transform Your Institution?
            </h2>
            <p className="text-xl mb-8 opacity-90 animate-fade-in delay-200">
              Join the robotics revolution and prepare your students for the future of technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-400">
              <Button 
                size="lg" 
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl"
                onClick={() => scrollToSection('contact')}
              >
                Get Started Today
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg rounded-full"
              >
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 animate-fade-in delay-200">
              Ready to transform your educational institution with cutting-edge technology?
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16">
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    title: "Email",
                    content: "contact@vstechhorizon.com",
                    subtitle: "We'll respond within 24 hours"
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    content: "+1 (555) 123-4567",
                    subtitle: "Mon-Fri, 9AM-6PM EST"
                  },
                  {
                    icon: MapPin,
                    title: "Address",
                    content: "123 Innovation Drive, Tech City, TC 12345",
                    subtitle: "Visit our state-of-the-art facility"
                  }
                ].map((contact, index) => (
                  <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300 group animate-fade-in" style={{animationDelay: `${index * 150}ms`}}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-blue-50 rounded-xl group-hover:bg-blue-100 transition-colors duration-300">
                          <contact.icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-1">{contact.title}</h4>
                          <p className="text-gray-800 font-medium mb-1">{contact.content}</p>
                          <p className="text-sm text-gray-500">{contact.subtitle}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <Card className="border-0 shadow-xl animate-fade-in delay-300">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Send us a Message</CardTitle>
                <CardDescription>We'd love to hear about your project and how we can help</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-gray-700 font-medium">Name *</Label>
                      <Input id="name" placeholder="Your full name" className="mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500" />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-gray-700 font-medium">Email *</Label>
                      <Input id="email" type="email" placeholder="your@email.com" className="mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="subject" className="text-gray-700 font-medium">Subject *</Label>
                    <Input id="subject" placeholder="What can we help you with?" className="mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500" />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-gray-700 font-medium">Message *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your project and requirements..." 
                      className="mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500 min-h-[120px]" 
                    />
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4 relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center space-x-3">
                <img 
                  src="/lovable-uploads/fdc0c3ef-d2b3-4ae6-b208-5aa7c1730f95.png" 
                  alt="VS Tech Horizon Logo" 
                  className="h-10 w-auto"
                />
                <span className="text-xl font-bold" style={{fontFamily: 'Times, serif'}}>VS Tech Horizon Pvt. Ltd.</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Pioneering the future of robotics and AI education through innovative solutions and cutting-edge technology.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, href: "#", label: "Facebook" },
                  { icon: Instagram, href: "#", label: "Instagram" },
                  { icon: X, href: "#", label: "X" },
                  { icon: Youtube, href: "#", label: "YouTube" },
                  { icon: Linkedin, href: "#", label: "LinkedIn" }
                ].map((social, index) => (
                  <a 
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-all duration-300 group hover:scale-110"
                  >
                    <social.icon className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="animate-fade-in delay-200">
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {[
                  { name: "About Us", action: () => scrollToSection('about') },
                  { name: "Services", action: () => scrollToSection('services') },
                  { name: "Portfolio", action: () => scrollToSection('portfolio') },
                  { name: "Contact", action: () => scrollToSection('contact') },
                  { name: "Robotics Lab", action: () => navigate('/services/robotics-lab') },
                  { name: "AI Training", action: () => navigate('/services/ai-training') }
                ].map((link, index) => (
                  <li key={link.name}>
                    <button
                      onClick={link.action}
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-2 group"
                    >
                      <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span>{link.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="animate-fade-in delay-300">
              <h3 className="text-lg font-semibold mb-6">Our Services</h3>
              <ul className="space-y-3">
                {[
                  "Robotics Lab Setup",
                  "AI Training Programs", 
                  "Industrial Automation",
                  "Educational Workshops",
                  "Technical Consulting",
                  "Research & Development"
                ].map((service, index) => (
                  <li key={service} className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="animate-fade-in delay-400">
              <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-blue-400 mt-1" />
                  <div>
                    <p className="text-gray-400">Email</p>
                    <p className="text-white font-medium">contact@vstechhorizon.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-blue-400 mt-1" />
                  <div>
                    <p className="text-gray-400">Phone</p>
                    <p className="text-white font-medium">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-blue-400 mt-1" />
                  <div>
                    <p className="text-gray-400">Address</p>
                    <p className="text-white font-medium">123 Innovation Drive<br />Tech City, TC 12345</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
                <p className="text-gray-400">&copy; 2024 VS Tech Horizon Pvt. Ltd. All rights reserved.</p>
                <div className="flex space-x-6">
                  <button className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                    Privacy Policy
                  </button>
                  <button className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                    Terms of Service
                  </button>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Heart className="h-4 w-4 text-red-400" />
                <span className="text-sm">Made with passion for innovation</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
