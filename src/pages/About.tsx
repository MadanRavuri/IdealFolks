import React from 'react';
import { Award, Users, Globe, Zap, Target, Heart, Shield, Lightbulb, Play } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const About: React.FC = () => {
  const { translate } = useLanguage();

  const stats = [
    { icon: Award, value: '10+', label: 'Years Experience' },
    { icon: Users, value: '150+', label: 'Expert Team' },
    { icon: Globe, value: '3', label: 'Countries' },
    { icon: Zap, value: '500+', label: 'Projects Completed' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Innovation Excellence',
      description: 'We push the boundaries of technology to deliver cutting-edge solutions that transform businesses.'
    },
    {
      icon: Heart,
      title: 'Client-Centric Approach',
      description: 'Our clients success is our success. We build lasting partnerships through trust and exceptional service.'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'We maintain the highest standards of quality in every project, ensuring reliable and scalable solutions.'
    },
    {
      icon: Lightbulb,
      title: 'Continuous Learning',
      description: 'We stay ahead of technology trends and continuously evolve our expertise to serve you better.'
    }
  ];

  const team = [
    {
      name: 'Rajesh Kumar',
      position: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Visionary leader with 15+ years in AI and technology consulting across Asia-Pacific markets.'
    },
    {
      name: 'Yuki Tanaka',
      position: 'CTO',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Technology expert specializing in AI implementation and system architecture.'
    },
    {
      name: 'Priya Sharma',
      position: 'Head of Operations',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Operations leader ensuring seamless project delivery across all our global offices.'
    },
    {
      name: 'David Lim',
      position: 'Head of Business Development',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Strategic business leader driving growth and partnerships in Singapore and beyond.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section with Background Image */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1"
            alt="About IdealFolks"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-teal-800/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-6 opacity-0 animate-[fadeInUp_1s_ease-out_0.3s_forwards]">
              About IdealFolks
            </h1>
            <div className="w-24 h-1 bg-white mx-auto mb-8 opacity-0 animate-[fadeInUp_1s_ease-out_0.6s_forwards]"></div>
            <p className="text-xl max-w-4xl mx-auto leading-relaxed opacity-0 animate-[fadeInUp_1s_ease-out_0.9s_forwards]">
              Founded with a vision to bridge technological innovation across Asia-Pacific, IdealFolks has grown 
              into a leading AI and technology consulting firm with offices in Singapore, Japan, and India.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview Video */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Discover IdealFolks</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch our company overview to learn about our journey, values, and commitment to excellence.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="relative bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-blue-600 to-teal-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 mb-4 inline-flex">
                    <Play size={48} className="text-white ml-2" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">IdealFolks Company Overview</h3>
                  <p className="text-blue-100 mb-6">
                    Discover how we're transforming businesses across Asia-Pacific with innovative AI and technology solutions.
                  </p>
                  <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105">
                    Watch Video
                  </button>
                </div>
              </div>
              
              {/* Video placeholder - In production, this would be replaced with actual video */}
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
                <div className="text-white text-center">
                  <Play size={64} className="mx-auto mb-4" />
                  <p className="text-lg">Click to play video</p>
                </div>
              </div>
            </div>

            {/* Video Description */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="bg-blue-100 rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <Target className="text-blue-600" size={24} />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Our Mission</h4>
                <p className="text-gray-600 text-sm">Empowering businesses with innovative AI solutions</p>
              </div>
              <div>
                <div className="bg-teal-100 rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <Globe className="text-teal-600" size={24} />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Global Reach</h4>
                <p className="text-gray-600 text-sm">Offices in Singapore, Japan, and India</p>
              </div>
              <div>
                <div className="bg-purple-100 rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <Zap className="text-purple-600" size={24} />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Innovation</h4>
                <p className="text-gray-600 text-sm">Cutting-edge technology solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Our Journey</h2>
              <p className="text-gray-600 leading-relaxed">
                Since our inception in 2014, IdealFolks has been at the forefront of technological innovation, 
                helping businesses across Singapore, Japan, and India harness the power of artificial intelligence 
                and advanced technology solutions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our unique multi-cultural approach, combined with deep technical expertise, enables us to deliver 
                solutions that not only meet technical requirements but also respect cultural nuances and business 
                practices across different markets.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we proudly serve over 200 clients worldwide, from startups to Fortune 500 companies, 
                helping them navigate digital transformation and achieve sustainable growth through innovative 
                technology solutions.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Our journey"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-600 to-teal-600 p-6 rounded-lg shadow-lg">
                <div className="text-white text-center">
                  <div className="text-3xl font-bold">2014</div>
                  <div className="text-sm">Founded</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
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

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower businesses across Asia-Pacific with innovative AI and technology solutions that drive 
                sustainable growth, enhance operational efficiency, and create meaningful impact in their respective 
                markets while fostering cross-cultural collaboration and understanding.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading bridge for technological innovation across Asia-Pacific, recognized for our 
                expertise in AI solutions, cultural sensitivity, and commitment to creating a more connected 
                and technologically advanced business ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-blue-600 to-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the visionaries driving IdealFolks forward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join hundreds of companies that trust IdealFolks to drive their digital transformation journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105">
              Get Started Today
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;