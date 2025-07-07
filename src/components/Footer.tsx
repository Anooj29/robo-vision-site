
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Phone, Facebook, Instagram, X, Youtube, Linkedin } from 'lucide-react';

interface FooterProps {
  scrollToSection: (sectionId: string) => void;
}

const Footer = ({ scrollToSection }: FooterProps) => {
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/bd0ace43-2a7f-48d6-b49c-ab29e87ddeac.png" 
                alt="VS Tech Horizon Logo" 
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold">VS Tech Horizon</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Pioneering the future of robotics and AI education through innovative solutions.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, X, Youtube, Linkedin].map((Social, index) => (
                <a 
                  key={index}
                  href="#"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                >
                  <Social className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "About Us", action: () => navigate('/about') },
                { name: "Services", action: () => scrollToSection('services') },
                { name: "Contact", action: () => navigate('/contact') },
                { name: "Robotics Lab", action: () => navigate('/services/robotics-lab') }
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={link.action}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                "Robotics Lab Setup",
                "AI Training Programs",
                "Industrial Automation",
                "Technical Consulting"
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-400">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-blue-400 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white">contact@vstechhorizon.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-blue-400 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="text-white">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">&copy; 2024 VS Tech Horizon. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                Privacy Policy
              </button>
              <button className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
