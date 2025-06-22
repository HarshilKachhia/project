import React from 'react';
import { Eye, Target, Heart, Shield } from 'lucide-react';

const VisionMission = () => {
  return (
    <section id="vision" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Vision & <span className="text-yellow-600">Mission</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Guiding principles that drive our commitment to excellence
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
            <div className="flex items-center mb-6">
              <Eye className="h-12 w-12 text-yellow-600 mr-4" />
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              To be the world's most trusted name in diamond jewelry, making luxury accessible while preserving 
              the timeless art of diamond craftsmanship for future generations.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We envision a world where exceptional quality and affordability go hand in hand, where every 
              person can experience the joy of owning a piece of eternity - a perfectly crafted diamond.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
            <div className="flex items-center mb-6">
              <Target className="h-12 w-12 text-yellow-600 mr-4" />
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              To deliver the finest diamond jewelry by combining traditional Surat craftsmanship with modern 
              design innovation, ensuring every piece tells a story of love, celebration, and timeless beauty.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We are committed to transparency, ethical sourcing, and creating lasting relationships with our 
              customers through uncompromising quality and exceptional service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;