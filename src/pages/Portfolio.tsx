
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Calendar } from 'lucide-react';

const Portfolio = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: "Smart Robotics Lab - Tech University",
      category: "Educational Setup",
      description: "Complete robotics laboratory installation with 20 workstations, featuring advanced robotic arms and AI-powered learning systems.",
      image: "/lovable-uploads/bd0ace43-2a7f-48d6-b49c-ab29e87ddeac.png",
      date: "2024",
      tags: ["Robotics", "Education", "AI"]
    },
    {
      title: "AI Training Program - Innovation College",
      category: "Training Program",
      description: "Comprehensive 6-month AI training program that resulted in 95% job placement rate for participating students.",
      image: "/lovable-uploads/bd0ace43-2a7f-48d6-b49c-ab29e87ddeac.png",
      date: "2024",
      tags: ["AI", "Training", "Career Development"]
    },
    {
      title: "Industrial Automation Solution",
      category: "Industry Project",
      description: "Automated quality control system that improved manufacturing efficiency by 40% and reduced defects by 60%.",
      image: "/lovable-uploads/bd0ace43-2a7f-48d6-b49c-ab29e87ddeac.png",
      date: "2023",
      tags: ["Automation", "Manufacturing", "Quality Control"]
    },
    {
      title: "STEM Workshop Series",
      category: "Educational Program",
      description: "Interactive robotics workshops conducted across 15 schools, engaging over 1000 students in hands-on learning.",
      image: "/lovable-uploads/bd0ace43-2a7f-48d6-b49c-ab29e87ddeac.png",
      date: "2023",
      tags: ["STEM", "Workshops", "Student Engagement"]
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Portfolio</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Explore our successful projects and see how we've transformed education and industry through technology
          </p>
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 group overflow-hidden">
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>{project.date}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
