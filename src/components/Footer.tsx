import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { translate } = useLanguage();

  const offices = [
    {
      name: 'Singapore Office',
      address: '1 Marina Bay Financial Centre, Singapore 018985',
      phone: '+65 6123 4567',
      email: 'singapore@idealfolks.com'
    },
    {
      name: 'Japan Office',
      address: '1-1-1 Shibuya, Shibuya-ku, Tokyo 150-0002, Japan',
      phone: '+81 3-1234-5678',
      email: 'japan@idealfolks.com'
    },
    {
      name: 'India Office',
      address: 'Hitech City, Madhapur, Hyderabad, Telangana 500081, India',
      phone: '+91 40 1234 5678',
      email: 'india@idealfolks.com'
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex items-center space-x-2">
                <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-2 rounded-lg">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 2L20 10H28L22 16L24 24L16 20L8 24L10 16L4 10H12L16 2Z" fill="white"/>
                    <circle cx="16" cy="16" r="3" fill="white" opacity="0.8"/>
                  </svg>
                </div>
                <div className="text-white">
                  <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                    IDEAL
                  </div>
                  <div className="text-xs text-gray-300 -mt-1">FOLKS</div>
                </div>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Bridging innovation across Singapore, Japan, and India through cutting-edge AI solutions 
              and technology consulting services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors">
                <Linkedin size={20} className="text-blue-400" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors">
                <Twitter size={20} className="text-blue-400" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors">
                <Facebook size={20} className="text-blue-400" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors">
                <Instagram size={20} className="text-blue-400" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/offices" className="text-gray-400 hover:text-white transition-colors">Offices</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">AI Solutions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Technology Consulting</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">System Integration</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">IT Recruitment</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Executive Search</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Global Offices</h3>
            <div className="space-y-4">
              {offices.map((office, index) => (
                <div key={index} className="text-sm">
                  <h4 className="font-medium text-white mb-1">{office.name}</h4>
                  <div className="flex items-start space-x-2 text-gray-400 mb-1">
                    <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                    <span className="text-xs">{office.address}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400 mb-1">
                    <Phone size={12} />
                    <span className="text-xs">{office.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Mail size={12} />
                    <a href={`mailto:${office.email}`} className="text-xs hover:text-white transition-colors">
                      {office.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2024 IdealFolks. {translate('footer_rights')}
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;