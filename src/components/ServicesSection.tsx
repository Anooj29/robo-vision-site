
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { School, Brain, Cog, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const navigate = useNavigate();
  
  const services = [
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
  ];

  return (
    <section id="services" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions for modern education
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
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
  );
};

export default ServicesSection;
