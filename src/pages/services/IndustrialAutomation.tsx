
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Cog, Settings, Zap, CheckCircle, TrendingUp, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const IndustrialAutomation = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-orange-900/20 to-red-900/20">
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
              <div className="w-24 h-24 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-orange-400/30">
                <Cog className="h-12 w-12 text-orange-400" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Industrial <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">Automation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Precision robotics solutions for manufacturing processes and quality control systems that drive efficiency and reduce costs.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-16 px-4 bg-gray-800/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Revolutionary Manufacturing Solutions</h2>
              <p className="text-gray-300 mb-6">
                Our industrial automation systems integrate cutting-edge robotics with AI-driven quality control to optimize your manufacturing processes.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-orange-600/20 rounded-lg">
                  <div className="text-2xl font-bold text-orange-400">85%</div>
                  <div className="text-gray-300 text-sm">Cost Reduction</div>
                </div>
                <div className="text-center p-4 bg-red-600/20 rounded-lg">
                  <div className="text-2xl font-bold text-red-400">99.5%</div>
                  <div className="text-gray-300 text-sm">Accuracy Rate</div>
                </div>
                <div className="text-center p-4 bg-yellow-600/20 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-400">24/7</div>
                  <div className="text-gray-300 text-sm">Operation</div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              {[
                {
                  title: "Robotic Assembly Lines",
                  description: "Automated assembly systems with precision robotics",
                  icon: Settings,
                  color: "from-orange-500 to-red-500"
                },
                {
                  title: "Quality Control Systems", 
                  description: "AI-powered inspection and testing automation",
                  icon: Shield,
                  color: "from-red-500 to-pink-500"
                },
                {
                  title: "Process Optimization",
                  description: "Data-driven efficiency improvements and monitoring",
                  icon: TrendingUp,
                  color: "from-yellow-500 to-orange-500"
                }
              ].map((solution, index) => (
                <div key={index} className="flex space-x-4 p-6 bg-gray-800/60 rounded-lg hover:bg-gray-700/60 transition-all duration-300 group">
                  <div className={`p-3 bg-gradient-to-r ${solution.color} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                    <solution.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">{solution.title}</h3>
                    <p className="text-gray-300">{solution.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Industry Applications */}
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "Automotive",
                applications: ["Assembly Line Automation", "Paint Shop Robotics", "Quality Inspection", "Parts Handling"]
              },
              {
                title: "Electronics",
                applications: ["PCB Assembly", "Component Testing", "Packaging Automation", "Precision Soldering"]
              },
              {
                title: "Food & Beverage",
                applications: ["Packaging Systems", "Quality Sorting", "Bottling Lines", "Safety Monitoring"]
              },
              {
                title: "Pharmaceuticals",
                applications: ["Sterile Processing", "Drug Packaging", "Quality Testing", "Batch Tracking"]
              }
            ].map((industry, index) => (
              <Card key={index} className="bg-gray-800/60 border-gray-700 hover:bg-gray-700/60 transform hover:scale-105 transition-all duration-300">
                <CardHeader className="text-center">
                  <CardTitle className="text-lg text-white">{industry.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {industry.applications.map((app, i) => (
                      <li key={i} className="flex items-center space-x-2">
                        <Zap className="h-4 w-4 text-orange-400" />
                        <span className="text-gray-300 text-sm">{app}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-600/10 to-red-600/10">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our Automation Solutions?</h2>
            <p className="text-xl text-gray-300">Experience the future of manufacturing today</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Increased Efficiency",
                description: "Up to 300% improvement in production speed",
                icon: TrendingUp
              },
              {
                title: "Reduced Costs", 
                description: "Significant reduction in labor and operational costs",
                icon: CheckCircle
              },
              {
                title: "Enhanced Quality",
                description: "Consistent, high-quality output with minimal defects",
                icon: Shield
              },
              {
                title: "24/7 Operation",
                description: "Continuous production with minimal downtime",
                icon: Zap
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-gray-800/60 rounded-lg hover:bg-gray-700/60 transition-all duration-300 group">
                <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-600/20 to-red-600/20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Automate Your Manufacturing?</h2>
          <p className="text-xl text-gray-300 mb-8">Let's discuss how our solutions can transform your production line</p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-6 text-lg"
            onClick={() => navigate('/#contact')}
          >
            Schedule Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default IndustrialAutomation;
