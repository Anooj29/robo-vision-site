
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Users, Award, Target, CheckCircle } from 'lucide-react';

const About = () => {
  const navigate = useNavigate();

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
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">VS Tech Horizon</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Learn more about our mission, vision, and the team behind the innovation in robotics education
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded with a vision to revolutionize education through technology, VS Tech Horizon 
                has been at the forefront of robotics and AI integration in educational institutions.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We believe that hands-on learning with cutting-edge technology prepares students 
                for the challenges of tomorrow, fostering innovation and critical thinking skills.
              </p>
              <div className="flex items-center space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span className="text-gray-700 font-medium">Trusted by 100+ institutions worldwide</span>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="leading-relaxed">
                  To bridge the gap between cutting-edge technology and practical education, 
                  empowering the next generation with the skills they need to thrive in a 
                  technology-driven world.
                </p>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full opacity-20"></div>
            </div>
          </div>

          {/* Values */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: Target,
                title: "Innovation",
                description: "We constantly push the boundaries of what's possible in educational technology, staying ahead of industry trends.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: Users,
                title: "Collaboration",
                description: "We work closely with educators to create solutions that truly make a difference in student learning outcomes.",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: Award,
                title: "Excellence",
                description: "We're committed to delivering the highest quality products and services that exceed expectations.",
                color: "from-orange-500 to-red-500"
              }
            ].map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className={`mx-auto mb-4 p-4 bg-gradient-to-br ${value.color} rounded-2xl w-fit shadow-lg`}>
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900 mb-2">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 text-center bg-white/60 backdrop-blur-sm rounded-3xl p-12 shadow-lg">
            {[
              { number: "100+", label: "Institutions", description: "Educational partners" },
              { number: "5000+", label: "Students", description: "Successfully trained" },
              { number: "50+", label: "Experts", description: "Industry professionals" },
              { number: "95%", label: "Success Rate", description: "Project completion" }
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-900">{stat.label}</div>
                <div className="text-gray-600 text-sm">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
