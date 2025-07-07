
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Mail, Phone, MapPin, Clock, Facebook, Instagram, Linkedin, Youtube, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
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
              Get In <span className="text-blue-600">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Ready to transform your educational institution? We're here to help you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Send us a Message</CardTitle>
                  <CardDescription>We'll get back to you within 24 hours</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-gray-700 font-medium">First Name *</Label>
                        <Input 
                          id="firstName" 
                          placeholder="John" 
                          className="mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500" 
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-gray-700 font-medium">Last Name *</Label>
                        <Input 
                          id="lastName" 
                          placeholder="Doe" 
                          className="mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500" 
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-gray-700 font-medium">Email *</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="john@example.com" 
                        className="mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500" 
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-gray-700 font-medium">Phone</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="+1 (555) 123-4567" 
                        className="mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500" 
                      />
                    </div>
                    <div>
                      <Label htmlFor="institution" className="text-gray-700 font-medium">Institution Name</Label>
                      <Input 
                        id="institution" 
                        placeholder="Your school or organization" 
                        className="mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500" 
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject" className="text-gray-700 font-medium">Subject *</Label>
                      <Input 
                        id="subject" 
                        placeholder="How can we help you?" 
                        className="mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500" 
                      />
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-gray-700 font-medium">Message *</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us about your requirements and how we can help..." 
                        className="mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500 min-h-[150px]" 
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-medium"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Get in touch with our team of experts. We're here to answer your questions 
                  and help you find the perfect solution for your institution.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    title: "Email",
                    content: "contact@vstechhorizon.com",
                    subtitle: "We'll respond within 24 hours",
                    color: "bg-blue-50 text-blue-600"
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    content: "+1 (555) 123-4567",
                    subtitle: "Mon-Fri, 9AM-6PM EST",
                    color: "bg-green-50 text-green-600"
                  },
                  {
                    icon: MapPin,
                    title: "Address",
                    content: "123 Innovation Drive, Tech City, TC 12345",
                    subtitle: "Visit our state-of-the-art facility",
                    color: "bg-purple-50 text-purple-600"
                  },
                  {
                    icon: Clock,
                    title: "Business Hours",
                    content: "Monday - Friday: 9:00 AM - 6:00 PM",
                    subtitle: "Saturday: 10:00 AM - 2:00 PM",
                    color: "bg-orange-50 text-orange-600"
                  }
                ].map((contact, index) => (
                  <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-xl ${contact.color}`}>
                          <contact.icon className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-1">{contact.title}</h3>
                          <p className="text-gray-800 font-medium mb-1">{contact.content}</p>
                          <p className="text-sm text-gray-500">{contact.subtitle}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {[
                    { icon: Facebook, label: "Facebook", color: "hover:bg-blue-600" },
                    { icon: Instagram, label: "Instagram", color: "hover:bg-pink-600" },
                    { icon: X, label: "X", color: "hover:bg-gray-800" },
                    { icon: Youtube, label: "YouTube", color: "hover:bg-red-600" },
                    { icon: Linkedin, label: "LinkedIn", color: "hover:bg-blue-700" }
                  ].map((social, index) => (
                    <a 
                      key={social.label}
                      href="#"
                      aria-label={social.label}
                      className={`p-3 bg-gray-100 rounded-lg ${social.color} hover:text-white transition-all duration-300 group`}
                    >
                      <social.icon className="h-5 w-5 text-gray-600 group-hover:text-white" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Visit Our Office</h2>
            <p className="text-xl text-gray-600">Come see our state-of-the-art facility and experience our solutions firsthand</p>
          </div>
          
          <Card className="border-0 shadow-xl overflow-hidden">
            <div className="h-96 bg-gray-200 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8 bg-white rounded-lg shadow-lg">
                  <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">VS Tech Horizon HQ</h3>
                  <p className="text-gray-600">123 Innovation Drive<br />Tech City, TC 12345</p>
                  <Button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white">
                    Get Directions
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common questions</p>
          </div>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {[
              {
                question: "How long does lab setup take?",
                answer: "Complete lab setup typically takes 2-3 weeks, including installation, testing, and initial training."
              },
              {
                question: "Do you provide training?",
                answer: "Yes, we provide comprehensive 40-hour training programs for teachers and technical staff."
              },
              {
                question: "What age groups do you serve?",
                answer: "Our solutions are designed for students from middle school through university level."
              },
              {
                question: "Is ongoing support included?",
                answer: "Yes, we provide 12 months of comprehensive technical support with every installation."
              }
            ].map((faq, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-blue-600">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how we can transform your institution with cutting-edge technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4"
            >
              Schedule Consultation
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4"
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
