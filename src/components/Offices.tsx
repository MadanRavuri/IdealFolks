import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Offices: React.FC = () => {
  const { translate } = useLanguage();

  const offices = [
    {
      name: translate('singapore_office'),
      country: 'Singapore',
      address: '1 Marina Bay Financial Centre, Singapore 018985',
      phone: '+65 6123 4567',
      email: 'singapore@idealfolks.com',
      hours: '9:00 AM - 6:00 PM SGT',
      image: 'https://images.pexels.com/photos/2031833/pexels-photo-2031833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      flag: '🇸🇬',
      timeZone: 'SGT (UTC+8)',
      features: [
        'AI Research Lab',
        'Client Experience Center',
        'Innovation Hub',
        'Training Facilities',
      ],
    },
    {
      name: translate('japan_office'),
      country: 'Japan',
      address: '1-1-1 Shibuya, Shibuya-ku, Tokyo 150-0002, Japan',
      phone: '+81 3-1234-5678',
      email: 'japan@idealfolks.com',
      hours: '9:00 AM - 6:00 PM JST',
      image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      flag: '🇯🇵',
      timeZone: 'JST (UTC+9)',
      features: [
        'Technology Center',
        'Cultural Integration Lab',
        'Partner Collaboration Space',
        'Local Market Research',
      ],
    },
  ];

  return (
    <section id="offices" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {translate('offices_title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Strategically located in two of Asia's most dynamic business hubs, 
            our offices serve as bridges between innovation and opportunity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {offices.map((office, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <img
                  src={office.image}
                  alt={office.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-2xl">{office.flag}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold">{office.name}</h3>
                  <p className="text-lg">{office.country}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="space-y-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <MapPin className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="text-gray-700 font-medium">Address</p>
                      <p className="text-gray-600">{office.address}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="text-blue-600 flex-shrink-0" size={20} />
                    <div>
                      <p className="text-gray-700 font-medium">Phone</p>
                      <p className="text-gray-600">{office.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Mail className="text-blue-600 flex-shrink-0" size={20} />
                    <div>
                      <p className="text-gray-700 font-medium">Email</p>
                      <p className="text-gray-600">{office.email}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Clock className="text-blue-600 flex-shrink-0" size={20} />
                    <div>
                      <p className="text-gray-700 font-medium">Business Hours</p>
                      <p className="text-gray-600">{office.hours}</p>
                      <p className="text-sm text-gray-500">{office.timeZone}</p>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
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

                <button className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all transform hover:scale-105">
                  Visit Office
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Global Presence Map */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Our Global Presence
          </h3>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/335393/pexels-photo-335393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Global map"
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <h4 className="text-3xl font-bold mb-2">2 Countries</h4>
                <p className="text-lg">Bridging Asia-Pacific Innovation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offices;