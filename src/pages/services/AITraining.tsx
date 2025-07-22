
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Brain, 
  Cpu, 
  Users, 
  BookOpen, 
  Award,
  CheckCircle,
  Star,
  Play,
  ArrowRight,
  Mail,
  Phone,
  Zap,
  Target,
  TrendingUp
} from 'lucide-react';

const AITraining = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/fdc0c3ef-d2b3-4ae6-b208-5aa7c1730f95.png" 
                alt="VS Tech Horizon Logo" 
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold text-gray-800" style={{fontFamily: 'Times, serif'}}>VS Tech Horizon Pvt. Ltd.</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                onClick={() => navigate('/')}
                className="flex items-center space-x-2"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Home</span>
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float delay-300"></div>
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Advanced 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  AI Training
                </span>
                Programs
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Comprehensive artificial intelligence training programs designed to prepare students and professionals 
                for the future of technology with hands-on robotics integration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl group"
                >
                  Enroll Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-gray-300 hover:border-purple-600 text-gray-700 hover:text-purple-600 px-8 py-4 text-lg rounded-full group"
                >
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  View Curriculum
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Training Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of AI training programs tailored for different skill levels
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Machine Learning Fundamentals",
                description: "Introduction to ML algorithms, data processing, and model training with practical robotics applications.",
                duration: "8 weeks",
                level: "Beginner",
                color: "text-blue-600",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: Zap,
                title: "Deep Learning & Neural Networks",
                description: "Advanced neural network architectures, computer vision, and natural language processing integration.",
                duration: "12 weeks",
                level: "Intermediate",
                color: "text-purple-600",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                icon: Target,
                title: "AI in Robotics Applications",
                description: "Specialized program focusing on AI implementation in robotic systems and autonomous decision making.",
                duration: "16 weeks",
                level: "Advanced",
                color: "text-green-600",
                gradient: "from-green-500 to-emerald-500"
              }
            ].map((program, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 group">
                <div className={`h-2 bg-gradient-to-r ${program.gradient}`}></div>
                <CardHeader className="text-center pb-4">
                  <div className={`mx-auto mb-4 p-4 bg-gradient-to-br ${program.gradient} rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300`}>
                    <program.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                    {program.title}
                  </CardTitle>
                  <div className="flex justify-center space-x-4 text-sm text-gray-500 mt-2">
                    <span>{program.duration}</span>
                    <span>•</span>
                    <span>{program.level}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center leading-relaxed group-hover:text-gray-700 transition-colors duration-300 mb-6">
                    {program.description}
                  </CardDescription>
                  <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Comprehensive Curriculum
            </h2>
            <p className="text-xl text-gray-600">
              Our AI training curriculum covers all essential aspects of artificial intelligence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center">
                  <Brain className="mr-3 h-6 w-6 text-purple-600" />
                  Core AI Concepts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    "Introduction to Artificial Intelligence",
                    "Machine Learning Algorithms",
                    "Deep Learning and Neural Networks",
                    "Computer Vision and Image Processing",
                    "Natural Language Processing",
                    "Reinforcement Learning"
                  ].map((topic, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{topic}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center">
                  <Cpu className="mr-3 h-6 w-6 text-blue-600" />
                  Practical Applications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    "Robotics Integration Projects",
                    "Real-world Problem Solving",
                    "Industry Case Studies",
                    "Hands-on Coding Sessions",
                    "Team Collaboration Projects",
                    "Portfolio Development"
                  ].map((application, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{application}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stats */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "2000+", label: "Students Trained", icon: Users },
              { number: "50+", label: "AI Specialists", icon: Brain },
              { number: "95%", label: "Job Placement Rate", icon: TrendingUp },
              { number: "25+", label: "Industry Partners", icon: Award }
            ].map((stat, index) => (
              <div key={index} className="animate-fade-in" style={{animationDelay: `${index * 200}ms`}}>
                <div className="mb-4">
                  <stat.icon className="h-12 w-12 mx-auto mb-4 opacity-80" />
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                  <div className="text-lg opacity-90">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Start Your AI Journey Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join our comprehensive AI training programs and become an expert in artificial intelligence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl flex items-center"
              >
                <Mail className="mr-2 h-5 w-5" />
                Enroll Now
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg rounded-full flex items-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Get Info
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AITraining;
