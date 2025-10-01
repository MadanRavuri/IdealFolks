import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Code, Users, Globe, Zap } from 'lucide-react';

export default function FeaturedServices() {
  const { translate } = useLanguage();

  const services = [
    {
      icon: Code,
      title: translate('service_ai_title'),
      description: translate('service_ai_desc'),
      stats: "500+ Projects",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Globe,
      title: translate('service_software_title'),
      description: translate('service_software_desc'),
      stats: "98% Success Rate",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: translate('service_recruitment_title'),
      description: translate('service_recruitment_desc'),
      stats: "1000+ Placements",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: Zap,
      title: translate('service_consulting_title'),
      description: translate('service_consulting_desc'),
      stats: "24/7 Support",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {translate('services_title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {translate('services_subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8 group"
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block">
                  {service.stats}
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            {translate('cta_view_all_services')}
          </button>
        </div>
      </div>
    </section>
  );
}