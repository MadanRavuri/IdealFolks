import React from 'react';
import { MapPin, Phone, Mail, Clock, Users, Building, Wifi, Car, Coffee, Shield } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Offices: React.FC = () => {
  const { translate } = useLanguage();

  const offices = [
    {
      name: 'Singapore Office',
      country: 'Singapore',
      address: '1 Marina Bay Financial Centre, Level 20, Singapore 018985',
      phone: '+65 6123 4567',
      email: 'singapore@idealfolks.com',
      hours: '9:00 AM - 6:00 PM SGT',
      image: 'https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      flag: '🇸🇬',
      timeZone: 'SGT (UTC+8)',
      description: 'Our Singapore headquarters serves as the regional hub for Southeast Asia operations, featuring state-of-the-art facilities and innovation labs.',
      features: [
        'AI Research Lab',
        'Client Experience Center',
        'Innovation Hub',
        'Training Facilities',
        '24/7 Security',
        'High-Speed Internet',
        'Conference Rooms',
        'Parking Available'
      ],
      teamSize: '45+ Professionals',
      established: '2014',
      coordinates: { lat: 1.2966, lng: 103.8558 },
      mapUrl: 'https://www.google.com/maps/place/1+Marina+Bay+Financial+Centre,+Singapore+018985'
    },
    {
      name: 'Japan Office',
      country: 'Japan',
      address: '1-1-1 Shibuya, Shibuya-ku, Tokyo 150-0002, Japan',
      phone: '+81 3-1234-5678',
      email: 'japan@idealfolks.com',
      hours: '9:00 AM - 6:00 PM JST',
      image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      flag: '🇯🇵',
      timeZone: 'JST (UTC+9)',
      description: 'Located in the heart of Tokyo, our Japan office specializes in technology integration and cultural adaptation for the Japanese market.',
      features: [
        'Technology Center',
        'Cultural Integration Lab',
        'Partner Collaboration Space',
        'Local Market Research',
        'Translation Services',
        'Meeting Rooms',
        'Cafeteria',
        'Wellness Area'
      ],
      teamSize: '35+ Professionals',
      established: '2016',
      coordinates: { lat: 35.6598, lng: 139.7036 },
      mapUrl: 'https://www.google.com/maps/place/1-1-1+Shibuya,+Shibuya+City,+Tokyo+150-0002,+Japan'
    },
    {
      name: 'India Office',
      country: 'India',
      address: 'Hitech City, Madhapur, Hyderabad, Telangana 500081, India',
      phone: '+91 40 1234 5678',
      email: 'india@idealfolks.com',
      hours: '9:00 AM - 6:00 PM IST',
      image: 'https://images.pexels.com/photos/1098982/pexels-photo-1098982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      flag: '🇮🇳',
      timeZone: 'IST (UTC+5:30)',
      description: 'Our India office in Hyderabad serves as our development and innovation center, housing our largest team of engineers and developers.',
      features: [
        'Development Center',
        'Quality Assurance Lab',
        'Training Academy',
        'Research & Development',
        'Food Court',
        'Recreation Area',
        'Gym Facilities',
        'Transport Services'
      ],
      teamSize: '70+ Professionals',
      established: '2018',
      coordinates: { lat: 17.4485, lng: 78.3908 },
      mapUrl: 'https://www.google.com/maps/place/Hitech+City,+Hyderabad,+Telangana+500081,+India'
    },
  ];

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
            src="https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1"
            alt="Our Global Offices"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-teal-800/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-6 opacity-0 animate-[fadeInUp_1s_ease-out_0.3s_forwards]">
              Our Global Offices
            </h1>
            <div className="w-24 h-1 bg-white mx-auto mb-8 opacity-0 animate-[fadeInUp_1s_ease-out_0.6s_forwards]"></div>
            <p className="text-xl max-w-4xl mx-auto leading-relaxed opacity-0 animate-[fadeInUp_1s_ease-out_0.9s_forwards]">
              Strategically located across three dynamic business hubs in Asia-Pacific, 
              our offices serve as bridges between innovation and opportunity, connecting 
              diverse markets and cultures.
            </p>
          </div>
        </div>
      </section>

      {/* Global Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">3</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">150+</div>
              <div className="text-gray-600">Team Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Global Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Details */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {offices.map((office, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative">
                    <img
                      src={office.image}
                      alt={office.name}
                      className="w-full h-96 object-cover rounded-lg shadow-2xl"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-2xl">{office.flag}</span>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-4 py-2 rounded-lg">
                      <div className="text-sm font-medium">Est. {office.established}</div>
                    </div>
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">{office.name}</h2>
                      <p className="text-lg text-blue-600 font-medium">{office.country}</p>
                    </div>

                    <p className="text-gray-600 leading-relaxed">{office.description}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-start space-x-3">
                        <MapPin className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                        <div>
                          <p className="text-gray-700 font-medium">Address</p>
                          <p className="text-gray-600 text-sm">{office.address}</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Phone className="text-blue-600 flex-shrink-0" size={20} />
                        <div>
                          <p className="text-gray-700 font-medium">Phone</p>
                          <p className="text-gray-600 text-sm">{office.phone}</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Mail className="text-blue-600 flex-shrink-0" size={20} />
                        <div>
                          <p className="text-gray-700 font-medium">Email</p>
                          <a href={`mailto:${office.email}`} className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
                            {office.email}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Clock className="text-blue-600 flex-shrink-0" size={20} />
                        <div>
                          <p className="text-gray-700 font-medium">Hours</p>
                          <p className="text-gray-600 text-sm">{office.hours}</p>
                          <p className="text-gray-500 text-xs">{office.timeZone}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-6">
                      <div className="flex items-center space-x-2">
                        <Users className="text-blue-600" size={20} />
                        <span className="text-gray-700 font-medium">{office.teamSize}</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Office Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {office.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full"></div>
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-4">
                      <button 
                        onClick={() => handleGetDirections(office)}
                        className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all transform hover:scale-105"
                      >
                        Get Directions
                      </button>
                      <a 
                        href={office.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105"
                      >
                        View on Map
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Find Us on the Map</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Click on any office location to get directions or view detailed maps
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <iframe
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.${Math.random().toString().substr(2, 6)}!2d${office.coordinates.lng}!3d${office.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM${office.coordinates.lat.toFixed(4)}%2C${office.coordinates.lng.toFixed(4)}!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${office.name} Location`}
                  ></iframe>
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
                      className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-blue-700 hover:to-teal-700 transition-all"
                    >
                      Get Directions
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Locations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why These Locations?</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-600 to-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Strategic Business Hubs</h3>
              <p className="text-gray-600 leading-relaxed">
                Located in major financial and technology centers, providing access to key markets and business networks.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-600 to-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Talent Pool Access</h3>
              <p className="text-gray-600 leading-relaxed">
                Access to world-class talent and educational institutions, ensuring we have the best minds working on your projects.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-600 to-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Coverage</h3>
              <p className="text-gray-600 leading-relaxed">
                Time zone coverage ensures continuous support and development cycles, accelerating project delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Visit Us Today</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Schedule a visit to any of our offices and experience our world-class facilities firsthand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105">
              Schedule Visit
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offices;