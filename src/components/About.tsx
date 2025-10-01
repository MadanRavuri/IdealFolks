import React from 'react';
import { Award, Users, Globe, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const About: React.FC = () => {
  const { translate } = useLanguage();

  const stats = [
    { icon: Award, value: '10+', label: 'Years Experience' },
    { icon: Users, value: '50+', label: 'Expert Team' },
    { icon: Globe, value: '2', label: 'Countries' },
    { icon: Zap, value: '100+', label: 'Projects Completed' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {translate('about_title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {translate('about_description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">
                Innovation Across Borders
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our unique position with offices in both Singapore and Japan allows us to understand 
                the nuances of both markets, providing tailored solutions that bridge cultural and 
                technological gaps.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">
                AI-First Approach
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We leverage cutting-edge artificial intelligence technologies to create solutions 
                that not only meet today's needs but anticipate tomorrow's challenges.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">
                Proven Excellence
              </h3>
              <p className="text-gray-600 leading-relaxed">
                With a track record of successful implementations across diverse industries, 
                we bring both technical expertise and strategic insight to every project.
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Team collaboration"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-600 to-teal-600 p-6 rounded-lg shadow-lg">
              <div className="text-white text-center">
                <div className="text-3xl font-bold">2024</div>
                <div className="text-sm">Innovation Leader</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-r from-blue-600 to-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-white" size={32} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;