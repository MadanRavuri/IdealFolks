import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, Clock, MessageCircle, Calendar, Users, Navigation } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Contact: React.FC = () => {
  const { translate } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  });

  const offices = [
    {
      name: 'Singapore Office',
      country: 'Singapore',
      address: '1 Marina Bay Financial Centre, Level 20, Singapore 018985',
      phone: '+65 6123 4567',
      email: 'singapore@idealfolks.com',
      hours: '9:00 AM - 6:00 PM SGT',
      flag: '🇸🇬',
      mapUrl: 'https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Regional headquarters for Southeast Asia operations',
      coordinates: { lat: 1.2966, lng: 103.8558 }
    },
    {
      name: 'Japan Office',
      country: 'Japan',
      address: '1-1-1 Shibuya, Shibuya-ku, Tokyo 150-0002, Japan',
      phone: '+81 3-1234-5678',
      email: 'japan@idealfolks.com',
      hours: '9:00 AM - 6:00 PM JST',
      flag: '🇯🇵',
      mapUrl: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Technology integration and cultural adaptation center',
      coordinates: { lat: 35.6598, lng: 139.7036 }
    },
    {
      name: 'India Office',
      country: 'India',
      address: 'Hitech City, Madhapur, Hyderabad, Telangana 500081, India',
      phone: '+91 40 1234 5678',
      email: 'india@idealfolks.com',
      hours: '9:00 AM - 6:00 PM IST',
      flag: '🇮🇳',
      mapUrl: 'https://images.pexels.com/photos/1098982/pexels-photo-1098982.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Development and innovation center',
      coordinates: { lat: 17.4485, lng: 78.3908 }
    }
  ];

  const services = [
    'AI Solutions',
    'Technology Consulting',
    'Software Development',
    'System Integration',
    'Cloud Migration',
    'Digital Transformation',
    'IT Recruitment',
    'Executive Search',
    'Other'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      message: '',
    });
    alert('Thank you for your message! We will get back to you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleGetDirections = (office: typeof offices[0]) => {
    const { lat, lng } = office.coordinates;
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=driving`;
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <div className="pt-16">
      {/* Hero Section with Background Image */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-teal-800/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-6 opacity-0 animate-[fadeInUp_1s_ease-out_0.3s_forwards]">
              Get In Touch
            </h1>
            <div className="w-24 h-1 bg-white mx-auto mb-8 opacity-0 animate-[fadeInUp_1s_ease-out_0.6s_forwards]"></div>
            <p className="text-xl max-w-4xl mx-auto leading-relaxed opacity-0 animate-[fadeInUp_1s_ease-out_0.9s_forwards]">
              Ready to transform your business with AI and cutting-edge technology? 
              Contact us today and let's discuss how we can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-600 to-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Chat with Us</h3>
              <p className="text-gray-600">Get instant answers to your questions</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-600 to-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Schedule Meeting</h3>
              <p className="text-gray-600">Book a consultation with our experts</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-600 to-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Our Office</h3>
              <p className="text-gray-600">Meet us in person at any of our locations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Office Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Enter your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your project or requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-teal-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                  >
                    <span>Send Message</span>
                    <Send size={20} />
                  </button>
                </form>
              </div>
            </div>

            {/* Office Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Global Offices</h2>
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl">{office.flag}</div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{office.name}</h3>
                        <p className="text-blue-600 font-medium mb-3">{office.description}</p>
                        
                        <div className="space-y-2 mb-4">
                          <div className="flex items-start space-x-2">
                            <MapPin className="text-blue-600 mt-1 flex-shrink-0" size={16} />
                            <span className="text-gray-600 text-sm">{office.address}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Phone className="text-blue-600 flex-shrink-0" size={16} />
                            <span className="text-gray-600 text-sm">{office.phone}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Mail className="text-blue-600 flex-shrink-0" size={16} />
                            <a href={`mailto:${office.email}`} className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
                              {office.email}
                            </a>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="text-blue-600 flex-shrink-0" size={16} />
                            <span className="text-gray-600 text-sm">{office.hours}</span>
                          </div>
                        </div>

                        <button 
                          onClick={() => handleGetDirections(office)}
                          className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-blue-700 hover:to-teal-700 transition-all flex items-center space-x-2"
                        >
                          <Navigation size={16} />
                          <span>Get Directions</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations with Maps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Find Us on the Map</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visit any of our offices across Singapore, Japan, and India
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <img
                    src={office.mapUrl}
                    alt={`${office.name} location`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-xl">{office.flag}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{office.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{office.address}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">{office.hours}</div>
                    <button 
                      onClick={() => handleGetDirections(office)}
                      className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-blue-700 hover:to-teal-700 transition-all flex items-center space-x-2"
                    >
                      <Navigation size={16} />
                      <span>Directions</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "What services does IdealFolks offer?",
                answer: "We specialize in AI solutions, technology consulting, software development, system integration, and recruitment services across Singapore, Japan, and India."
              },
              {
                question: "How can I schedule a consultation?",
                answer: "You can schedule a consultation by filling out our contact form, calling any of our offices directly, or using our online booking system."
              },
              {
                question: "Do you work with international clients?",
                answer: "Yes, we work with clients globally, with particular expertise in Asia-Pacific markets including Singapore, Japan, and India."
              },
              {
                question: "What is your typical project timeline?",
                answer: "Project timelines vary based on scope and complexity. We provide detailed timelines during our initial consultation and planning phase."
              },
              {
                question: "Do you provide ongoing support?",
                answer: "Yes, we offer comprehensive ongoing support and maintenance services for all our solutions to ensure optimal performance."
              },
              {
                question: "How do you ensure project quality?",
                answer: "We follow industry best practices, conduct thorough testing, and maintain quality assurance processes throughout the development lifecycle."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how AI can revolutionize your operations across Singapore, Japan, and India markets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105">
              Schedule Free Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105">
              Download Company Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;