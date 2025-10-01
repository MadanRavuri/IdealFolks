import React from 'react';
import Hero from '../components/Hero';
import FeaturedServices from '../components/FeaturedServices';
import WhyChooseUs from '../components/WhyChooseUs';
import GlobalPresence from '../components/GlobalPresence';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <FeaturedServices />
      <WhyChooseUs />
      <GlobalPresence />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default Home;