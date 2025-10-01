import React, { useState } from 'react';
import { Brain, Lightbulb, Network, Building } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Services: React.FC = () => {
  const { translate } = useLanguage();
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: Brain,
      title: translate('service_ai_title'),
      description: translate('service_ai_desc'),
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      features: [
        'Machine Learning Implementation',
        'Natural Language Processing',
        'Computer Vision Solutions',
        'Predictive Analytics',
      ],
    },
    {
      icon: Lightbulb,
      title: translate('service_consulting_title'),
      description: translate('service_consulting_desc'),
      image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      features: [
        'Digital Strategy Planning',
        'Technology Assessment',
        'Innovation Workshops',
        'Change Management',
      ],
    },
    {
      icon: Network,
      title: translate('service_integration_title'),
      description: translate('service_integration_desc'),
      image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      features: [
        'API Development',
        'Cloud Integration',
        'Legacy System Modernization',
        'Data Pipeline Architecture',
      ],
    },
    {
      icon: Building,
      title: translate('service_market_title'),
      description: translate('service_market_desc'),
      image: 'https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      features: [
        'Market Entry Strategy',
        'Cultural Adaptation',
        'Partner Network Development',
        'Regulatory Compliance',
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {translate('services_title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology solutions designed to accelerate your business growth 
            across Singapore and Japan markets.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Service Navigation */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              {services.map((service, index) => (
                <button
                  key={index}
                  onClick={() => setActiveService(index)}
                  className={`w-full text-left p-6 rounded-lg transition-all transform hover:scale-105 ${
                    activeService === index
                      ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-lg'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg ${
                      activeService === index ? 'bg-white/20' : 'bg-white'
                    }`}>
                      <service.icon
                        size={24}
                        className={activeService === index ? 'text-white' : 'text-blue-600'}
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{service.title}</h3>
                      <p className={`text-sm ${
                        activeService === index ? 'text-blue-100' : 'text-gray-500'
                      }`}>
                        {service.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Service Details */}
          <div className="lg:col-span-2">
            <div className="bg-gray-50 rounded-lg p-8 h-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-3 rounded-lg">
                      {(() => {
                        const IconComponent = services[activeService].icon;
                        return <IconComponent className="text-white" size={32} />;
                      })()}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {services[activeService].title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {services[activeService].description}
                  </p>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Key Features:</h4>
                    <ul className="space-y-2">
                      {services[activeService].features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full"></div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all transform hover:scale-105">
                    Learn More
                  </button>
                </div>

                <div className="relative">
                  <img
                    src={services[activeService].image}
                    alt={services[activeService].title}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;