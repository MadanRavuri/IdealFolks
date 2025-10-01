import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Users, Globe, Award, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { translate } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Transforming Business Through AI Innovation",
      subtitle: "Leading Technology Solutions Across Asia-Pacific",
      description: "Empowering enterprises in Singapore, Japan, and India with cutting-edge artificial intelligence solutions that drive measurable business growth and operational excellence.",
      cta: "Explore AI Solutions",
      ctaLink: "/services",
      image: "/idealfolks hero image.webp",
      stats: [
        { value: "500+", label: "AI Projects Delivered" },
        { value: "98%", label: "Client Success Rate" },
        { value: "40%", label: "Average ROI Increase" }
      ]
    },
    {
      title: "Expert Talent Acquisition Across Asia-Pacific",
      subtitle: "Building World-Class Teams for Tomorrow",
      description: "Connect with top-tier technology professionals across Singapore, Japan, and India. Our recruitment expertise spans AI engineers, software developers, and executive leadership.",
      cta: "Find Talent",
      ctaLink: "/services",
      image: "/singapore1.jpg",
      stats: [
        { value: "1000+", label: "Successful Placements" },
        { value: "95%", label: "Retention Rate" },
        { value: "30", label: "Days Average Hire Time" }
      ]
    },
    {
      title: "Digital Transformation That Delivers Results",
      subtitle: "Modernize Your Business for the Future",
      description: "From legacy system modernization to cloud migration, we help organizations across Asia-Pacific embrace digital transformation with proven methodologies and measurable outcomes.",
      cta: "Start Transformation",
      ctaLink: "/services",
      image: "/tokyo.jpg",
      stats: [
        { value: "60%", label: "Cost Reduction" },
        { value: "3x", label: "Faster Deployment" },
        { value: "24/7", label: "Global Support" }
      ]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const currentHero = heroSlides[currentSlide];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={currentHero.image}
          alt="Hero background"
          className="w-full h-full object-cover transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-teal-800/90"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-teal-400 rounded-full animate-pulse opacity-40 animation-delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-white rounded-full animate-pulse opacity-50 animation-delay-2000"></div>
        <div className="absolute bottom-20 right-10 w-5 h-5 bg-blue-300 rounded-full animate-pulse opacity-30"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6 opacity-0 animate-[fadeInUp_1s_ease-out_0.3s_forwards]">
              <Award className="w-4 h-4 mr-2" />
              Asia-Pacific Technology Leader
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight opacity-0 animate-[fadeInUp_1s_ease-out_0.6s_forwards]">
              {currentHero.title}
            </h1>

            {/* Subtitle */}
            <h2 className="text-xl md:text-2xl text-blue-100 font-medium mb-6 opacity-0 animate-[fadeInUp_1s_ease-out_0.9s_forwards]">
              {currentHero.subtitle}
            </h2>

            {/* Description */}
            <p className="text-lg text-blue-100 mb-8 leading-relaxed max-w-2xl opacity-0 animate-[fadeInUp_1s_ease-out_1.2s_forwards]">
              {currentHero.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 opacity-0 animate-[fadeInUp_1s_ease-out_1.5s_forwards]">
              <Link
                to={currentHero.ctaLink}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-teal-700 transition-all transform hover:scale-105 shadow-lg"
              >
                <span>{currentHero.cta}</span>
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105"
              >
                <Play size={20} />
                <span>Watch Demo</span>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 opacity-0 animate-[fadeInUp_1s_ease-out_1.8s_forwards]">
              {currentHero.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-blue-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Video/Image Placeholder */}
          <div className="relative opacity-0 animate-[fadeInUp_1s_ease-out_1.2s_forwards]">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-blue-600/20 to-teal-600/20 rounded-xl flex items-center justify-center mb-6">
                <div className="text-center text-white">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 mb-4 inline-flex">
                    <Play size={48} className="text-white ml-2" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">See Our Impact</h3>
                  <p className="text-blue-100 text-sm">
                    Discover how we're transforming businesses across Asia-Pacific
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-3">
                  <Users className="w-6 h-6 text-blue-300 mx-auto mb-2" />
                  <div className="text-sm text-white font-medium">150+ Experts</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <Globe className="w-6 h-6 text-teal-300 mx-auto mb-2" />
                  <div className="text-sm text-white font-medium">3 Countries</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <Award className="w-6 h-6 text-blue-300 mx-auto mb-2" />
                  <div className="text-sm text-white font-medium">10+ Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-2 mt-12 opacity-0 animate-[fadeInUp_1s_ease-out_2.1s_forwards]">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white opacity-0 animate-[fadeInUp_1s_ease-out_2.4s_forwards]">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll to explore</span>
          <ChevronRight className="w-6 h-6 rotate-90 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;