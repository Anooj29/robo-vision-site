
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Users, Target, Award, CheckCircle, Calendar, Linkedin, Mail, Trophy, Star, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Button 
                variant="ghost" 
                onClick={() => navigate('/')}
                className="text-gray-600 hover:text-blue-600 p-2"
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
              <span className="text-xl font-bold text-gray-900">VS Tech Horizon</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-blue-600">VS Tech Horizon</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We are pioneers in robotics and AI education, transforming how institutions 
              prepare students for the technology-driven future.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="/lovable-uploads/5dd43a45-f220-485c-af03-55662435643e.png"
                alt="Our Mission"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To bridge the gap between cutting-edge technology and practical education, 
                  empowering institutions to prepare students for tomorrow's challenges through 
                  innovative robotics and AI solutions.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To be the global leader in educational technology transformation, 
                  making advanced robotics and AI accessible to every educational institution worldwide.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600">8+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600">25+</div>
                  <div className="text-gray-600">Countries Served</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Innovation",
                description: "We constantly push the boundaries of what's possible in educational technology."
              },
              {
                icon: Users,
                title: "Excellence",
                description: "We deliver superior quality in every solution and service we provide."
              },
              {
                icon: Globe,
                title: "Impact",
                description: "We measure success by the positive transformation we create in education."
              }
            ].map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 bg-blue-50 rounded-2xl w-fit">
                    <value.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Key milestones in our growth</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  year: "2016",
                  title: "Company Founded",
                  description: "Started with a vision to transform robotics education globally."
                },
                {
                  year: "2018",
                  title: "First 50 Installations",
                  description: "Successfully deployed robotics labs in 50 educational institutions."
                },
                {
                  year: "2020",
                  title: "AI Training Launch",
                  description: "Introduced comprehensive AI training programs with hands-on robotics integration."
                },
                {
                  year: "2022",
                  title: "Global Expansion",
                  description: "Expanded operations to serve institutions across 25+ countries."
                },
                {
                  year: "2024",
                  title: "Innovation Leader",
                  description: "Recognized as the leading provider of educational robotics solutions worldwide."
                }
              ].map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6 group">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-700 transition-colors duration-300">
                      <Calendar className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-2xl font-bold text-blue-600">{milestone.year}</span>
                      <h3 className="text-xl font-semibold text-gray-900">{milestone.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">The experts behind our success</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Vikram Sharma",
                role: "Founder & CEO",
                bio: "PhD in Robotics Engineering with 15+ years of experience in educational technology.",
                image: "VS"
              },
              {
                name: "Sarah Chen",
                role: "Head of AI Research",
                bio: "Leading AI researcher specializing in machine learning applications in education.",
                image: "SC"
              },
              {
                name: "Michael Rodriguez",
                role: "Director of Operations",
                bio: "Expert in scaling educational programs with a track record of successful implementations.",
                image: "MR"
              }
            ].map((member, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardHeader>
                  <div className="mx-auto mb-4">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-xl">{member.image}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl text-gray-900">{member.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-semibold">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed mb-4">{member.bio}</p>
                  <div className="flex justify-center space-x-3">
                    <Button variant="outline" size="sm" className="p-2">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="p-2">
                      <Mail className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Awards & Recognition</h2>
            <p className="text-xl text-gray-600">Industry recognition for our excellence</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Best EdTech Innovation 2023", org: "Global Education Awards" },
              { title: "Top Robotics Provider", org: "Tech Excellence Summit" },
              { title: "Innovation Leader", org: "Education Technology Review" },
              { title: "Excellence in STEM Education", org: "International STEM Council" }
            ].map((award, index) => (
              <Card key={index} className="text-center p-6 border-0 shadow-md hover:shadow-lg transition-all duration-300">
                <Trophy className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">{award.title}</h3>
                <p className="text-sm text-gray-600">{award.org}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-blue-600">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join Our Mission</h2>
          <p className="text-xl text-blue-100 mb-8">
            Partner with us to transform education through technology
          </p>
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4"
            onClick={() => navigate('/contact')}
          >
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
