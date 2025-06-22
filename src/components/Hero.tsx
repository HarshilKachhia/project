import React from 'react';
import { Sparkles, Award, Globe } from 'lucide-react';
import ImageSlider from './ImageSlider';
import { HeroSlide } from '../types';

const Hero = () => {
  const heroSlides: HeroSlide[] = [
    {
      id: '1',
      image: 'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Exquisite Diamond Rings',
      subtitle: 'Crafted with precision and passion'
    },
    {
      id: '2',
      image: 'https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Elegant Necklaces',
      subtitle: 'Timeless beauty for every occasion'
    },
    {
      id: '3',
      image: 'https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Luxury Collections',
      subtitle: 'From Surat, the diamond capital of the world'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-16 lg:pt-20 min-h-screen bg-gradient-to-br from-gray-50 via-white to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Tulip Jewels
            <span className="block text-yellow-600">& Diamond</span>
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 font-light mb-8">
            Beyond the Luxury
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
            Experience the finest diamond jewelry crafted with precision and passion. From Surat, the diamond capital 
            of the world, we bring you luxury at affordable prices with unmatched quality and craftsmanship.
          </p>
        </div>

        {/* Image Slider */}
        <div className="mb-16">
          <ImageSlider slides={heroSlides} />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onClick={() => scrollToSection('products')}
            className="bg-yellow-600 text-white px-8 py-4 rounded-full hover:bg-yellow-700 transition-all duration-300 transform hover:scale-105 font-semibold text-lg shadow-lg"
          >
            Explore Collection
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="border-2 border-yellow-600 text-yellow-600 px-8 py-4 rounded-full hover:bg-yellow-600 hover:text-white transition-all duration-300 transform hover:scale-105 font-semibold text-lg"
          >
            Our Story
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white/60 rounded-lg backdrop-blur-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
            <Sparkles className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Quality</h3>
            <p className="text-gray-600">Finest diamonds sourced and crafted with meticulous attention to detail</p>
          </div>
          <div className="text-center p-6 bg-white/60 rounded-lg backdrop-blur-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
            <Award className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Craftsmanship</h3>
            <p className="text-gray-600">Decades of experience in diamond cutting and jewelry making</p>
          </div>
          <div className="text-center p-6 bg-white/60 rounded-lg backdrop-blur-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
            <Globe className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Heritage</h3>
            <p className="text-gray-600">From Surat, where 90% of world's diamonds are polished</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;