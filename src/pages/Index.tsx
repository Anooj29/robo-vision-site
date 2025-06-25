
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
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
  ChevronRight
} from 'lucide-react';

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-blue-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Bot className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-800">VS Tech Horizon</span>
            </div>
            <div className="hidden md:flex space-x-6">
              {['About', 'Work', 'Services', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <div className="animate-fade-in">
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <Brain className="h-24 w-24 text-blue-600 animate-pulse" />
                  <div className="absolute -top-2 -right-2">
                    <Bot className="h-12 w-12 text-indigo-500" />
                  </div>
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                VS Tech <span className="text-blue-600">Horizon</span>
                <span className="block text-2xl md:text-3xl font-normal text-gray-600 mt-4">
                  Pioneering the Future of Robotics & AI
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                Transforming education and industry through cutting-edge robotics solutions, 
                AI innovations, and comprehensive training programs.
              </p>
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full hover-scale group"
                onClick={() => scrollToSection('work')}
              >
                Explore Our Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About VS Tech Horizon</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are a dynamic robotics and AI startup dedicated to bridging the gap between 
              cutting-edge technology and practical education solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Lightbulb,
                title: "Innovation",
                description: "Developing breakthrough robotics and AI solutions that push the boundaries of what's possible."
              },
              {
                icon: School,
                title: "Education",
                description: "Transforming learning experiences through hands-on robotics labs and comprehensive training programs."
              },
              {
                icon: Target,
                title: "Impact",
                description: "Creating meaningful change in communities through technology-driven educational initiatives."
              }
            ].map((value, index) => (
              <Card key={index} className="hover-scale bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-100">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-blue-600 rounded-full w-fit">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section id="work" className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Work</h2>
            <p className="text-xl text-gray-600">Transforming ideas into reality through innovative projects</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Robotics Lab Setup",
                description: "Complete robotics laboratories for schools and colleges with state-of-the-art equipment and curriculum.",
                category: "Education"
              },
              {
                title: "AI Training Programs",
                description: "Comprehensive artificial intelligence workshops and certification programs for students and professionals.",
                category: "Training"
              },
              {
                title: "Industrial Automation",
                description: "Custom robotics solutions for manufacturing and industrial process optimization.",
                category: "Industry"
              },
              {
                title: "Research & Development",
                description: "Cutting-edge R&D projects in collaboration with academic institutions and industry partners.",
                category: "Research"
              },
              {
                title: "Seminars & Workshops",
                description: "Interactive seminars on emerging technologies, robotics, and AI for educational institutions.",
                category: "Education"
              },
              {
                title: "Innovation Consulting",
                description: "Strategic consulting for organizations looking to integrate robotics and AI into their operations.",
                category: "Consulting"
              }
            ].map((project, index) => (
              <Card key={index} className="hover-scale group">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </CardTitle>
                    <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {project.description}
                  </CardDescription>
                  <div className="mt-4">
                    <Button variant="ghost" className="text-blue-600 hover:text-blue-700 p-0 group">
                      Learn More
                      <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Achievements</h2>
            <p className="text-xl text-gray-600">Recognition for our innovation and impact</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Innovation Excellence Award",
                year: "2024",
                description: "Best Robotics Startup"
              },
              {
                icon: Medal,
                title: "Education Impact Award",
                year: "2023",
                description: "Outstanding Contribution to STEM Education"
              },
              {
                icon: Award,
                title: "Tech Entrepreneur Award",
                year: "2023",
                description: "Young Innovator Recognition"
              },
              {
                icon: Medal,
                title: "Research Excellence",
                year: "2022",
                description: "Best AI Research Project"
              }
            ].map((achievement, index) => (
              <Card key={index} className="text-center hover-scale bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full w-fit">
                    <achievement.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg text-gray-900">{achievement.title}</CardTitle>
                  <CardDescription className="text-orange-600 font-semibold">{achievement.year}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Services for Educational Institutions</h2>
            <p className="text-xl text-gray-600">Empowering the next generation through technology education</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                {
                  icon: School,
                  title: "Robotics Lab Setup",
                  description: "Complete laboratory installation with robots, sensors, programming tools, and comprehensive curriculum designed for different educational levels."
                },
                {
                  icon: Users,
                  title: "Training & Workshops",
                  description: "Hands-on training sessions for teachers and students covering robotics fundamentals, AI concepts, and practical programming skills."
                },
                {
                  icon: Brain,
                  title: "AI Education Programs",
                  description: "Structured learning paths introducing artificial intelligence, machine learning, and data science concepts through interactive projects."
                }
              ].map((service, index) => (
                <div key={index} className="flex space-x-4 group">
                  <div className="flex-shrink-0 p-3 bg-indigo-600 rounded-lg group-hover:bg-indigo-700 transition-colors">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h3>
              <ul className="space-y-4">
                {[
                  "Expert team with industry experience",
                  "Customized solutions for your needs",
                  "Ongoing support and maintenance",
                  "Proven track record with 50+ institutions",
                  "Award-winning innovative approach"
                ].map((point, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <Star className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                    <span className="text-gray-600">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Success stories from our educational partners</p>
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
              <Card key={index} className="hover-scale">
                <CardHeader>
                  <div className="flex space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <CardDescription className="text-gray-600 italic">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-blue-100">Ready to transform your educational institution with cutting-edge technology?</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
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
                  <div key={index} className="flex items-center space-x-4">
                    <div className="p-3 bg-blue-600 rounded-lg">
                      <contact.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{contact.title}</h4>
                      <p className="text-blue-100">{contact.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-white">Name</Label>
                    <Input id="name" placeholder="Your name" className="bg-white/10 border-white/20 text-white placeholder:text-white/60" />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-white">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" className="bg-white/10 border-white/20 text-white placeholder:text-white/60" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="subject" className="text-white">Subject</Label>
                  <Input id="subject" placeholder="What can we help you with?" className="bg-white/10 border-white/20 text-white placeholder:text-white/60" />
                </div>
                <div>
                  <Label htmlFor="message" className="text-white">Message</Label>
                  <Textarea id="message" placeholder="Tell us about your project..." className="bg-white/10 border-white/20 text-white placeholder:text-white/60 min-h-[120px]" />
                </div>
                <Button type="submit" className="w-full bg-white text-blue-900 hover:bg-blue-50">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Bot className="h-8 w-8 text-blue-400" />
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
