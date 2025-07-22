
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Calendar, Award, TrendingUp, Users, Target } from 'lucide-react';

const Portfolio = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: "Smart Robotics Lab - Tech University",
      category: "Educational Setup",
      description: "Complete robotics laboratory installation with 20 workstations, featuring advanced robotic arms and AI-powered learning systems.",
      image: "/lovable-uploads/bd0ace43-2a7f-48d6-b49c-ab29e87ddeac.png",
      date: "2024",
      tags: ["Robotics", "Education", "AI"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "AI Training Program - Innovation College",
      category: "Training Program", 
      description: "Comprehensive 6-month AI training program that resulted in 95% job placement rate for participating students.",
      image: "/lovable-uploads/bd0ace43-2a7f-48d6-b49c-ab29e87ddeac.png",
      date: "2024",
      tags: ["AI", "Training", "Career Development"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Industrial Automation Solution",
      category: "Industry Project",
      description: "Automated quality control system that improved manufacturing efficiency by 40% and reduced defects by 60%.",
      image: "/lovable-uploads/bd0ace43-2a7f-48d6-b49c-ab29e87ddeac.png",
      date: "2023",
      tags: ["Automation", "Manufacturing", "Quality Control"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "STEM Workshop Series",
      category: "Educational Program",
      description: "Interactive robotics workshops conducted across 15 schools, engaging over 1000 students in hands-on learning.",
      image: "/lovable-uploads/bd0ace43-2a7f-48d6-b49c-ab29e87ddeac.png",
      date: "2023",
      tags: ["STEM", "Workshops", "Student Engagement"],
      gradient: "from-green-500 to-blue-500"
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
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Explore our successful projects and see how we've transformed education and industry through innovative technology solutions
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {projects.map((project, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden bg-white/80 backdrop-blur-sm">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-6 left-6">
                    <span className={`bg-gradient-to-r ${project.gradient} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg`}>
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink className="h-6 w-6 text-white drop-shadow-lg" />
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <CardTitle className="text-2xl text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                      {project.title}
                    </CardTitle>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                    <Calendar className="h-4 w-4" />
                    <span className="font-medium">{project.date}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium border border-gray-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Success Metrics */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600">Measurable results that speak for themselves</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 bg-white/60 backdrop-blur-sm rounded-3xl p-12 shadow-lg">
            {[
              { 
                icon: Award,
                number: "100+", 
                label: "Projects Completed", 
                description: "Successful implementations",
                color: "from-blue-500 to-cyan-500"
              },
              { 
                icon: Users,
                number: "5000+", 
                label: "Students Impacted", 
                description: "Lives transformed",
                color: "from-purple-500 to-pink-500"
              },
              { 
                icon: TrendingUp,
                number: "95%", 
                label: "Success Rate", 
                description: "Client satisfaction",
                color: "from-orange-500 to-red-500"
              },
              { 
                icon: Target,
                number: "50+", 
                label: "Partner Institutions", 
                description: "Ongoing relationships",
                color: "from-green-500 to-blue-500"
              }
            ].map((metric, index) => (
              <div key={index} className="text-center space-y-4">
                <div className={`mx-auto p-4 bg-gradient-to-br ${metric.color} rounded-2xl w-fit shadow-lg`}>
                  <metric.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">{metric.number}</div>
                <div className="text-lg font-semibold text-gray-900">{metric.label}</div>
                <div className="text-gray-600 text-sm">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
