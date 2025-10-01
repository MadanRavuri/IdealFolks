import React, { useState } from 'react';
import { Award, Users, Globe, Zap, Shield, Heart } from 'lucide-react';

import { ArrowRight } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const reasons = [
    {
      icon: Award,
      title: 'Proven Track Record',
      description: 'Over a decade of delivering transformational AI and technology solutions with measurable business impact.',
      stat: '500+',
      statLabel: 'Projects Delivered',
      color: 'from-blue-600 to-blue-700',
      highlight: '98% Success Rate'
    },
    {
      icon: Users,
      title: 'World-Class Expertise',
      description: '150+ certified professionals with deep expertise in AI, cloud technologies, and enterprise solutions.',
      stat: '150+',
      statLabel: 'Expert Professionals',
      color: 'from-teal-600 to-teal-700',
      highlight: 'Top 1% Talent'
    },
    {
      icon: Globe,
      title: 'Strategic Locations',
      description: 'Strategically positioned across Singapore, Japan, and India for 24/7 support and deep market insights.',
      stat: '3',
      statLabel: 'Global Offices',
      color: 'from-purple-600 to-purple-700',
      highlight: '24/7 Coverage'
    },
    {
      icon: Zap,
      title: 'Innovation Leadership',
      description: 'Pioneering AI technologies and innovative methodologies that deliver competitive advantages.',
      stat: '50+',
      statLabel: 'AI Patents',
      color: 'from-orange-600 to-orange-700',
      highlight: 'Industry Leading'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security protocols and compliance standards ensuring your data and systems are protected.',
      stat: '99.9%',
      statLabel: 'Uptime SLA',
      color: 'from-green-600 to-green-700',
      highlight: 'ISO Certified'
    },
    {
      icon: Heart,
      title: 'Partnership Approach',
      description: 'Long-term partnerships built on trust, transparency, and shared success with dedicated account management.',
      stat: '95%',
      statLabel: 'Client Retention',
      color: 'from-pink-600 to-pink-700',
      highlight: 'Lifetime Value'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-teal-400 rounded-full animate-pulse opacity-30"></div>
        <div className="absolute bottom-40 left-20 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-orange-400 rounded-full animate-pulse opacity-35"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-teal-100 rounded-full text-blue-700 text-sm font-semibold mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
            Why Choose Us
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Your Success is Our Mission
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We combine deep technical expertise with cultural intelligence to deliver solutions 
            that create measurable business value across diverse global markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100 relative overflow-hidden"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Hover Background Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${reason.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Highlight Badge */}
              <div className={`absolute top-4 right-4 px-3 py-1 bg-gradient-to-r ${reason.color} text-white text-xs font-semibold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                {reason.highlight}
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className={`bg-gradient-to-r ${reason.color} w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <reason.icon className="text-white" size={28} />
                  </div>
                  <div className="text-right">
                    <div className={`text-3xl font-bold bg-gradient-to-r ${reason.color} bg-clip-text text-transparent`}>
                      {reason.stat}
                    </div>
                    <div className="text-xs text-gray-500 font-medium">{reason.statLabel}</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                  {reason.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors">
                  {reason.description}
                </p>
                
                <div className="pt-4 border-t border-gray-100 group-hover:border-gray-200 transition-colors">
                  <div className={`flex items-center text-sm font-semibold bg-gradient-to-r ${reason.color} bg-clip-text text-transparent group-hover:translate-x-1 transition-transform duration-300`}>
                    <span>Learn more</span>
                    <ArrowRight size={16} className="ml-2" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-3xl p-12 border border-blue-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join industry leaders who trust us to deliver exceptional results. Let's discuss how we can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-teal-700 transition-all transform hover:scale-105 shadow-lg">
                Schedule Consultation
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;