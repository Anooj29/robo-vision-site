
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, School, Brain, Cog, CheckCircle, ArrowRight } from 'lucide-react';

const Services = () => {
  const navigate = useNavigate();

  const services = [
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
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 pt-20 pb-16">
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-6 hover:bg-blue-50"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Comprehensive robotics and AI solutions designed for educational excellence
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-500 group">
              <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 bg-gradient-to-br ${service.gradient} rounded-xl`}>
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <CardTitle className="text-xl text-gray-900 mb-2">
                  {service.title}
                </CardTitle>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
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
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
