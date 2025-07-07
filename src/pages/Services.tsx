
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, School, Brain, Cog, CheckCircle, ArrowRight, Users, Target, Zap } from 'lucide-react';

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: School,
      title: "Robotics Lab Setup",
      description: "Complete laboratory installation with cutting-edge robots, sensors, and programming environments tailored for educational excellence.",
      features: ["Hardware Setup", "Software Integration", "Curriculum Design", "Teacher Training"],
      link: "/services/robotics-lab",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50"
    },
    {
      icon: Brain,
      title: "AI Training Programs",
      description: "Comprehensive artificial intelligence workshops with hands-on robotics integration and machine learning applications.",
      features: ["Machine Learning", "Neural Networks", "Computer Vision", "Practical Projects"],
      link: "/services/ai-training",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50"
    },
    {
      icon: Cog,
      title: "Industrial Automation",
      description: "Custom intelligent robotics solutions for manufacturing optimization and quality control systems.",
      features: ["Process Automation", "Quality Control", "System Integration", "Maintenance Support"],
      link: "/services/industrial-automation",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="text-gray-700 hover:text-blue-600 hover:bg-blue-50"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/bf4614f9-4165-4a87-b5e4-9004f19c4109.png" 
                alt="VS Tech Horizon Logo" 
                className="h-8 w-8"
              />
              <span className="text-xl font-bold text-gray-900">VS TECH HORIZON</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Services</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Comprehensive robotics and AI solutions designed for educational excellence and industrial innovation
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 group bg-white/80 backdrop-blur-sm overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>
                <div className={`bg-gradient-to-br ${service.bgGradient} p-6`}>
                  <div className={`p-4 bg-gradient-to-br ${service.gradient} rounded-2xl w-fit shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    {service.title}
                  </CardTitle>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className={`w-full bg-gradient-to-r ${service.gradient} hover:shadow-lg text-white rounded-xl py-3 font-semibold transition-all duration-300`}
                    onClick={() => navigate(service.link)}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Why Choose Us */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose VS Tech Horizon?</h2>
            <p className="text-xl text-gray-600">Experience the difference with our comprehensive approach</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Expert Team",
                description: "Our experienced professionals bring decades of industry knowledge to every project."
              },
              {
                icon: Target,
                title: "Proven Results", 
                description: "95% success rate with measurable improvements in learning outcomes and efficiency."
              },
              {
                icon: Zap,
                title: "Cutting-Edge Technology",
                description: "Latest robotics and AI innovations integrated seamlessly into practical solutions."
              }
            ].map((benefit, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/60 backdrop-blur-sm">
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl w-fit shadow-lg">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900 mb-2">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
