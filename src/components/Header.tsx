import React, { useState, useEffect } from 'react';
import { Menu, X, Diamond, User, LogOut, Plus } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import LoginModal from './LoginModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { user, logout, isAdmin } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex items-center space-x-2">
              <Diamond className="h-8 w-8 text-yellow-600" />
              <div>
                <h1 className="text-xl lg:text-2xl font-bold text-gray-900">Tulip Jewels</h1>
                <p className="text-xs text-gray-600 hidden sm:block">Beyond the Luxury</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-yellow-600 transition-colors font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-yellow-600 transition-colors font-medium"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('vision')}
                className="text-gray-700 hover:text-yellow-600 transition-colors font-medium"
              >
                Vision & Mission
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className="text-gray-700 hover:text-yellow-600 transition-colors font-medium"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-yellow-600 transition-colors font-medium"
              >
                Contact Us
              </button>
              
              {user ? (
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-600">
                    Welcome, {user.name} {isAdmin && '(Admin)'}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-1 text-gray-700 hover:text-yellow-600 transition-colors"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowLoginModal(true)}
                  className="flex items-center space-x-1 bg-yellow-600 text-white px-6 py-2 rounded-full hover:bg-yellow-700 transition-colors font-medium"
                >
                  <User className="h-4 w-4" />
                  <span>Login</span>
                </button>
              )}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-yellow-600 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-100 py-4">
              <nav className="flex flex-col space-y-3">
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-left text-gray-700 hover:text-yellow-600 transition-colors font-medium py-2"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-left text-gray-700 hover:text-yellow-600 transition-colors font-medium py-2"
                >
                  About Us
                </button>
                <button
                  onClick={() => scrollToSection('vision')}
                  className="text-left text-gray-700 hover:text-yellow-600 transition-colors font-medium py-2"
                >
                  Vision & Mission
                </button>
                <button
                  onClick={() => scrollToSection('products')}
                  className="text-left text-gray-700 hover:text-yellow-600 transition-colors font-medium py-2"
                >
                  Products
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-left text-gray-700 hover:text-yellow-600 transition-colors font-medium py-2"
                >
                  Contact Us
                </button>
                
                {user ? (
                  <div className="pt-2 border-t border-gray-200">
                    <p className="text-sm text-gray-600 py-2">
                      Welcome, {user.name} {isAdmin && '(Admin)'}
                    </p>
                    <button
                      onClick={handleLogout}
                      className="flex items-center space-x-1 text-gray-700 hover:text-yellow-600 transition-colors py-2"
                    >
                      <LogOut className="h-4 w-4" />
                      <span>Logout</span>
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      setShowLoginModal(true);
                      setIsMenuOpen(false);
                    }}
                    className="text-left bg-yellow-600 text-white px-4 py-2 rounded-full hover:bg-yellow-700 transition-colors font-medium mt-2"
                  >
                    Login
                  </button>
                )}
              </nav>
            </div>
          )}
        </div>
      </header>

      <LoginModal 
        isOpen={showLoginModal} 
        onClose={() => setShowLoginModal(false)} 
      />
    </>
  );
};

export default Header;