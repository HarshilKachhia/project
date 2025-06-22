import React from 'react';
import { MapPin, Users, Star } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-yellow-600">Tulip Jewels & Diamond</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Rooted in tradition, crafted for the future
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Heritage</h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Tulip Jewels & Diamond, located in Surat, Gujarat—the diamond capital of the world—has established itself as a leader in luxury jewelry. With Surat responsible for polishing 90% of the world’s diamonds, the brand benefits from direct access to superior gems and a rich heritage of craftsmanship. Tulip Jewels brings a deep understanding of diamonds, from their raw form to their final setting, allowing them to deliver exceptional quality and value. By blending traditional diamond-cutting artistry with contemporary design, they create timeless jewelry pieces that reflect both heritage and modern elegance.
            </p>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <MapPin className="h-12 w-12 text-yellow-600 mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Surat, Gujarat</h4>
                <p className="text-gray-600">The diamond polishing capital where 90% of world's diamonds are processed</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-gray-50 rounded-lg">
            <Users className="h-16 w-16 text-yellow-600 mx-auto mb-4" />
            <h4 className="text-2xl font-bold text-gray-900 mb-2">Expert Team</h4>
            <p className="text-gray-600">Master craftsmen with generations of diamond expertise</p>
          </div>
          <div className="text-center p-8 bg-gray-50 rounded-lg">
            <Star className="h-16 w-16 text-yellow-600 mx-auto mb-4" />
            <h4 className="text-2xl font-bold text-gray-900 mb-2">Quality Promise</h4>
            <p className="text-gray-600">Every piece undergoes rigorous quality checks for perfection</p>
          </div>
          <div className="text-center p-8 bg-gray-50 rounded-lg">
            <MapPin className="h-16 w-16 text-yellow-600 mx-auto mb-4" />
            <h4 className="text-2xl font-bold text-gray-900 mb-2">Global Reach</h4>
            <p className="text-gray-600">Serving customers worldwide with authentic craftsmanship</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;