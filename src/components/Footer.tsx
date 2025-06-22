import React from 'react';
import { Diamond, Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Diamond className="h-8 w-8 text-yellow-600" />
              <div>
                <h3 className="text-xl font-bold">Tulip Jewels & Diamond</h3>
                <p className="text-sm text-gray-400">Beyond the Luxury</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              From the diamond capital of Surat, we bring you exquisite jewelry that combines 
              traditional craftsmanship with modern elegance. Experience luxury at its finest.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-600 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-600 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-600 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-600 transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-yellow-600 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-yellow-600 transition-colors">About Us</a></li>
              <li><a href="#vision" className="text-gray-300 hover:text-yellow-600 transition-colors">Vision & Mission</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-yellow-600 transition-colors">Products</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-yellow-600 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>Diamond Market, Ring Road</p>
              <p>Surat, Gujarat 395002</p>
              <p>+91 98765 43210</p>
              <p>info@tulipjewels.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Tulip Jewels & Diamond. All rights reserved. | Crafted with ❤️ in Surat, Gujarat
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;