
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Cog, 
  Settings, 
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
  TrendingUp,
  Shield,
  Wrench
} from 'lucide-react';

const IndustrialAutomation = () => {
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
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-blue-50 via-white to-orange-50 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-red-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float delay-300"></div>
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Smart 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                  Industrial
                </span>
                Automation
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Custom intelligent robotics solutions for manufacturing optimization, quality control systems, 
                and complete industrial automation that drives efficiency and productivity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl group"
                >
                  Get Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-gray-300 hover:border-orange-600 text-gray-700 hover:text-orange-600 px-8 py-4 text-lg rounded-full group"
                >
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  View Solutions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Automation Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive industrial automation solutions tailored to your manufacturing needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Cog,
                title: "Process Automation",
                description: "Intelligent automation systems that optimize manufacturing processes and reduce manual intervention.",
                benefits: ["40% efficiency increase", "Reduced errors", "24/7 operation"],
                gradient: "from-orange-500 to-red-500"
              },
              {
                icon: Shield,
                title: "Quality Control Systems",
                description: "Advanced AI-powered quality control with computer vision and automated testing protocols.",
                benefits: ["99.5% accuracy", "Real-time monitoring", "Defect prevention"],
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: Settings,
                title: "System Integration",
                description: "Seamless integration of robotics with existing manufacturing infrastructure and ERP systems.",
                benefits: ["Plug-and-play setup", "Minimal downtime", "Scalable solutions"],
                gradient: "from-green-500 to-emerald-500"
              }
            ].map((solution, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 group">
                <div className={`h-2 bg-gradient-to-r ${solution.gradient}`}></div>
                <CardHeader className="text-center pb-4">
                  <div className={`mx-auto mb-4 p-4 bg-gradient-to-br ${solution.gradient} rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300`}>
                    <solution.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                    {solution.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center leading-relaxed group-hover:text-gray-700 transition-colors duration-300 mb-6">
                    {solution.description}
                  </CardDescription>
                  <div className="space-y-2 mb-6">
                    {solution.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-gray-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-600">
              Our automation solutions serve diverse manufacturing industries
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center">
                  <Wrench className="mr-3 h-6 w-6 text-orange-600" />
                  Manufacturing Industries
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    "Automotive Assembly Lines",
                    "Electronics Manufacturing",
                    "Food Processing & Packaging",
                    "Pharmaceutical Production",
                    "Textile and Garment Industry",
                    "Metal Fabrication & Machining"
                  ].map((industry, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{industry}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center">
                  <Target className="mr-3 h-6 w-6 text-blue-600" />
                  Key Benefits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    "Increased Production Efficiency",
                    "Reduced Operating Costs",
                    "Improved Product Quality",
                    "Enhanced Worker Safety",
                    "Real-time Data Analytics",
                    "Predictive Maintenance"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-600 to-red-600 text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50+", label: "Manufacturing Plants", icon: Cog },
              { number: "40%", label: "Efficiency Increase", icon: TrendingUp },
              { number: "99.5%", label: "Quality Accuracy", icon: Shield },
              { number: "24/7", label: "System Uptime", icon: Zap }
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
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-orange-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Transform Your Manufacturing Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get a custom automation solution designed specifically for your industry needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl flex items-center"
              >
                <Mail className="mr-2 h-5 w-5" />
                Request Quote
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg rounded-full flex items-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Schedule Visit
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustrialAutomation;
