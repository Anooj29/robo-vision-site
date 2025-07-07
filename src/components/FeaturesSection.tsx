
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Rocket, Users } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
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
  ];

  return (
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
          {features.map((feature, index) => (
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
  );
};

export default FeaturesSection;
