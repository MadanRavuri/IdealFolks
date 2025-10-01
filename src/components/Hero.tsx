
import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/idealfolks hero image copy.webp"
          alt="IdealFolks Hero Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-blue-900/60 to-blue-900/80"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 py-24 flex flex-col items-center justify-center text-center">
        <img src="/idealfolks hero image.webp" alt="IdealFolks Logo" className="w-28 h-28 mb-8 rounded-full shadow-lg border-4 border-white bg-white/80 object-cover" />
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-xl tracking-tight">
          Welcome to IdealFolks
        </h1>
        <h2 className="text-2xl md:text-3xl text-blue-100 font-semibold mb-6 drop-shadow">
          Your trusted partner in bridging the technological gap between Japan and India.
        </h2>
        <p className="text-lg md:text-xl text-blue-100 mb-10 leading-relaxed max-w-2xl mx-auto">
          At IdealFolks, we are on a mission to bridge Japan and India through the power of language, technology, and inclusive talent. We specialize in enabling cross-border collaboration by equipping individuals with Japanese language skills and delivering world-class IT services and solutions.
        </p>
        <Link
          to="/services"
          className="inline-block bg-gradient-to-r from-blue-600 to-teal-600 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:from-blue-700 hover:to-teal-700 transition-all mb-4"
        >
          Discover Our Services
        </Link>
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-6">
          <Link
            to="/about"
            className="inline-block border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-700 transition-all"
          >
            Learn About Us
          </Link>
          <Link
            to="/contact"
            className="inline-block border-2 border-teal-400 text-white px-8 py-3 rounded-xl font-semibold hover:bg-teal-400 hover:text-white transition-all"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;