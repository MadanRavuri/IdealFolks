import React from 'react';
import { Star, Quote, ArrowLeft, ArrowRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = React.useState(0);

  const testimonials = [
    {
      name: 'Sarah Chen',
      position: 'CTO, TechCorp Singapore',
      company: 'TechCorp',
      location: 'Singapore',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'The team transformed our business with their AI solutions. Their expertise across Singapore and Japan markets was invaluable for our expansion. The results exceeded our expectations.',
      rating: 5,
      project: 'AI-Powered Analytics Platform'
    },
    {
      name: 'Hiroshi Tanaka',
      position: 'CEO, Innovation Labs Tokyo',
      company: 'Innovation Labs',
      location: 'Tokyo, Japan',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'Exceptional results with perfect cultural understanding. Their technical expertise made our digital transformation seamless and efficient. Highly recommended for any technology initiative.',
      rating: 5,
      project: 'Digital Transformation Initiative'
    },
    {
      name: 'Priya Sharma',
      position: 'Director, Global Solutions India',
      company: 'Global Solutions',
      location: 'Hyderabad, India',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'Working with them has been a game-changer for our organization. Their innovative approach and dedication to quality exceeded our expectations in every aspect.',
      rating: 5,
      project: 'Cloud Migration & Integration'
    },
    {
      name: 'David Lim',
      position: 'VP Technology, FinanceFirst',
      company: 'FinanceFirst',
      location: 'Singapore',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'Outstanding service delivery and technical expertise. They helped us modernize our entire technology stack while ensuring zero downtime. Truly professional team.',
      rating: 5,
      project: 'Legacy System Modernization'
    },
    {
      name: 'Yuki Matsumoto',
      position: 'CTO, RetailTech Japan',
      company: 'RetailTech',
      location: 'Osaka, Japan',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'Their AI solutions revolutionized our retail operations. The team understood our unique market needs and delivered solutions that drove real business value.',
      rating: 5,
      project: 'AI-Driven Retail Analytics'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real stories from real clients who have transformed their businesses with our solutions.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="bg-white rounded-2xl p-8 shadow-2xl mb-12 max-w-4xl mx-auto">
          <div className="flex items-center mb-6">
            {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
              <Star key={i} className="text-yellow-400 fill-current" size={24} />
            ))}
            <span className="ml-3 text-gray-600 font-medium">{testimonials[currentTestimonial].project}</span>
          </div>
          
          <div className="mb-6">
            <Quote className="text-blue-600 mb-4" size={32} />
            <p className="text-xl text-gray-700 leading-relaxed italic">
              "{testimonials[currentTestimonial].content}"
            </p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                className="w-16 h-16 rounded-full object-cover shadow-lg"
              />
              <div>
                <h4 className="font-bold text-gray-900 text-lg">{testimonials[currentTestimonial].name}</h4>
                <p className="text-gray-600">{testimonials[currentTestimonial].position}</p>
                <p className="text-blue-600 font-medium">{testimonials[currentTestimonial].company} • {testimonials[currentTestimonial].location}</p>
              </div>
            </div>
            
            <div className="flex space-x-2">
              <button
                onClick={prevTestimonial}
                className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors"
              >
                <ArrowLeft size={20} className="text-gray-600" />
              </button>
              <button
                onClick={nextTestimonial}
                className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors"
              >
                <ArrowRight size={20} className="text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 cursor-pointer ${
                index === currentTestimonial ? 'ring-2 ring-blue-600' : ''
              }`}
              onClick={() => setCurrentTestimonial(index)}
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              
              <div className="mb-4">
                <p className="text-gray-600 leading-relaxed text-sm line-clamp-3">"{testimonial.content.substring(0, 120)}..."</p>
              </div>

              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover shadow-md"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-gray-600">{testimonial.position}</p>
                  <p className="text-xs text-blue-600">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-gray-600">Client Retention</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Global Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;