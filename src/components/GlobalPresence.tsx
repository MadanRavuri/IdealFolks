import React from 'react';
import { MapPin, Users, Building } from 'lucide-react';

const GlobalPresence: React.FC = () => {
  const offices = [
    {
      name: 'Singapore',
      flag: '🇸🇬',
      description: 'Regional headquarters and innovation hub',
      team: '45+ Professionals',
      established: '2014'
    },
    {
      name: 'Japan',
      flag: '🇯🇵',
      description: 'Technology integration and cultural adaptation center',
      team: '35+ Professionals',
      established: '2016'
    },
    {
      name: 'India',
      flag: '🇮🇳',
      description: 'Development and innovation center',
      team: '70+ Professionals',
      established: '2018'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Global Presence
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Strategically positioned across three dynamic business hubs to serve you better
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.pexels.com/photos/335393/pexels-photo-335393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Global presence map"
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Connecting Asia-Pacific Markets
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our strategic presence across Singapore, Japan, and India enables us to provide 
              round-the-clock support and deep local market insights. This unique positioning 
              allows us to bridge cultural and technological gaps, ensuring your solutions 
              are perfectly adapted to each market's specific needs.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600">3</div>
                <div className="text-sm text-gray-600">Countries</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">150+</div>
                <div className="text-sm text-gray-600">Team Members</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offices.map((office, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">{office.flag}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{office.name}</h3>
              <p className="text-gray-600 mb-4">{office.description}</p>
              <div className="space-y-2">
                <div className="flex items-center justify-center space-x-2">
                  <Users size={16} className="text-blue-600" />
                  <span className="text-sm text-gray-700">{office.team}</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Building size={16} className="text-blue-600" />
                  <span className="text-sm text-gray-700">Est. {office.established}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;