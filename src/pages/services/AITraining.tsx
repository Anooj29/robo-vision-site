
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Brain, Users, Target, CheckCircle, Clock, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AITraining = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900">
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
              <div className="w-24 h-24 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-purple-400/30">
                <Brain className="h-12 w-12 text-purple-400" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Training <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Programs</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive artificial intelligence workshops with hands-on robotics integration and cutting-edge machine learning techniques.
            </p>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 px-4 bg-gray-800/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Master AI & Machine Learning</h2>
              <p className="text-gray-300 mb-6">
                Our AI training programs combine theoretical knowledge with practical robotics applications, giving participants real-world experience in artificial intelligence.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-purple-600/20 rounded-lg">
                  <div className="text-2xl font-bold text-purple-400">50+</div>
                  <div className="text-gray-300">Hours of Training</div>
                </div>
                <div className="text-center p-4 bg-blue-600/20 rounded-lg">
                  <div className="text-2xl font-bold text-blue-400">15+</div>
                  <div className="text-gray-300">AI Projects</div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              {[
                {
                  title: "Machine Learning Fundamentals",
                  description: "Core concepts, algorithms, and practical implementations",
                  icon: Brain
                },
                {
                  title: "Neural Networks & Deep Learning",
                  description: "Building and training neural networks for robotics applications",
                  icon: Target
                },
                {
                  title: "Computer Vision",
                  description: "Image recognition and processing for robotic systems",
                  icon: Users
                }
              ].map((module, index) => (
                <div key={index} className="flex space-x-4 p-4 bg-gray-800/60 rounded-lg hover:bg-gray-700/60 transition-all duration-300">
                  <div className="p-2 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg">
                    <module.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{module.title}</h3>
                    <p className="text-gray-300 text-sm">{module.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Training Tracks */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Beginner Track",
                duration: "4 Weeks",
                level: "Entry Level",
                topics: ["AI Basics", "Python Programming", "Simple ML Models", "Robot Control"]
              },
              {
                title: "Intermediate Track", 
                duration: "8 Weeks",
                level: "Intermediate",
                topics: ["Advanced ML", "Neural Networks", "Computer Vision", "AI-Robot Integration"]
              },
              {
                title: "Expert Track",
                duration: "12 Weeks", 
                level: "Advanced",
                topics: ["Deep Learning", "Reinforcement Learning", "Custom AI Models", "Research Projects"]
              }
            ].map((track, index) => (
              <Card key={index} className="bg-gray-800/60 border-gray-700 hover:bg-gray-700/60 transform hover:scale-105 transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <Clock className="h-5 w-5 text-purple-400" />
                    <span className="text-purple-400 font-semibold">{track.duration}</span>
                  </div>
                  <CardTitle className="text-xl text-white">{track.title}</CardTitle>
                  <CardDescription className="text-gray-400">
                    <Award className="h-4 w-4 inline mr-1" />
                    {track.level}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {track.topics.map((topic, i) => (
                      <li key={i} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span className="text-gray-300">{topic}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700">
                    Enroll Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Start Your AI Journey Today</h2>
          <p className="text-xl text-gray-300 mb-8">Join hundreds of students who have mastered AI through our programs</p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white px-8 py-6 text-lg"
            onClick={() => navigate('/#contact')}
          >
            Get Started
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AITraining;
