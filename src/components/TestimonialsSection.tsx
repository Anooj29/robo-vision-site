
import React from 'react';
import { Card, CardDescription, CardHeader } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
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
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600">Success stories from our partners</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
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
  );
};

export default TestimonialsSection;
