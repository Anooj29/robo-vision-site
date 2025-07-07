
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Users, Award, Target, CheckCircle } from 'lucide-react';

const About = () => {
  const navigate = useNavigate();

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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About VS Tech Horizon</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Learn more about our mission, vision, and the team behind the innovation
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded with a vision to revolutionize education through technology, VS Tech Horizon 
              has been at the forefront of robotics and AI integration in educational institutions.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We believe that hands-on learning with cutting-edge technology prepares students 
              for the challenges of tomorrow, fostering innovation and critical thinking skills.
            </p>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="leading-relaxed">
                To bridge the gap between cutting-edge technology and practical education, 
                empowering the next generation with the skills they need to thrive in a 
                technology-driven world.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: Target,
              title: "Innovation",
              description: "We constantly push the boundaries of what's possible in educational technology."
            },
            {
              icon: Users,
              title: "Collaboration",
              description: "We work closely with educators to create solutions that truly make a difference."
            },
            {
              icon: Award,
              title: "Excellence",
              description: "We're committed to delivering the highest quality products and services."
            }
          ].map((value, index) => (
            <Card key={index} className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="mx-auto mb-4 p-4 bg-blue-50 rounded-full w-fit">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
