
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Bot, School, Users, Target, CheckCircle, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const RoboticsLab = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-md z-50 border-b border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Button 
                variant="ghost" 
                onClick={() => navigate('/')}
                className="text-gray-300 hover:text-blue-400 p-2"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Home
              </Button>
            </div>
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/bd0ace43-2a7f-48d6-b49c-ab29e87ddeac.png" 
                alt="VS Tech Horizon Logo" 
                className="h-8 w-auto"
              />
              <span className="text-white font-bold">VS Tech Horizon</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-blue-400/30">
                <School className="h-12 w-12 text-blue-400" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Robotics Lab <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Setup</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your educational institution with state-of-the-art robotics laboratories designed to inspire the next generation of innovators.
            </p>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 px-4 bg-gray-800/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Complete Laboratory Solutions</h2>
              <p className="text-gray-300 mb-6">
                Our robotics lab setup service provides everything your institution needs to launch a comprehensive robotics education program.
              </p>
              <ul className="space-y-4">
                {[
                  "Advanced robotic kits and components",
                  "Programming software and development tools",
                  "Sensor arrays and measurement equipment",
                  "3D printing and prototyping stations",
                  "Interactive learning management system",
                  "Comprehensive curriculum and lesson plans"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Lab Specifications</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-300">Capacity:</span>
                  <span className="text-white font-semibold">20-30 Students</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Setup Time:</span>
                  <span className="text-white font-semibold">2-3 Weeks</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Training Included:</span>
                  <span className="text-white font-semibold">40 Hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Support Period:</span>
                  <span className="text-white font-semibold">12 Months</span>
                </div>
              </div>
            </div>
          </div>

          {/* Package Options */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Basic Package",
                price: "$15,000",
                features: ["10 Robot Kits", "Basic Sensors", "Programming Software", "Initial Training"]
              },
              {
                title: "Advanced Package",
                price: "$25,000",
                features: ["20 Robot Kits", "Advanced Sensors", "AI Software Suite", "Extended Training", "3D Printer"]
              },
              {
                title: "Premium Package",
                price: "$40,000",
                features: ["30 Robot Kits", "Complete Sensor Array", "Full AI Platform", "Comprehensive Training", "Multiple 3D Printers", "IoT Integration"]
              }
            ].map((pkg, index) => (
              <Card key={index} className="bg-gray-800/60 border-gray-700 hover:bg-gray-700/60 transform hover:scale-105 transition-all duration-300">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl text-white">{pkg.title}</CardTitle>
                  <CardDescription className="text-3xl font-bold text-blue-400">{pkg.price}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-yellow-400" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                    Get Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Institution?</h2>
          <p className="text-xl text-gray-300 mb-8">Contact us today to discuss your robotics lab requirements</p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-6 text-lg"
            onClick={() => navigate('/#contact')}
          >
            Contact Us Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default RoboticsLab;
