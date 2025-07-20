import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ExternalLink } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import ScrollToTop from './ScrollToTop';
import ScrollToTopButton from './ScrollToTopButton';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { user, signOut } = useAuth();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Insights', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <div className="min-h-screen bg-stone-50 mosaic-pattern">
      {/* Scroll to top on route change */}
      <ScrollToTop />
      
      {/* Skip to main content link for accessibility */}
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>

      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm border-b border-stone-200 sticky top-0 z-40" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link 
              to="/" 
              className="text-xl font-serif font-semibold text-sage-700 hover:text-sage-800 transition-colors duration-200"
              aria-label="Maraam Haque Therapy - Home"
            >
              Maraam Haque
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-sage-600 ${
                    isActive(item.href)
                      ? 'text-sage-700 border-b-2 border-sage-700'
                      : 'text-gray-700'
                  }`}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Book Consultation Button */}
              <a
                href="https://healingpaththerapy.janeapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 text-sm"
                aria-label="Book a free 30-minute consultation (opens in new tab)"
              >
                Book Consultation
                <ExternalLink size={16} aria-hidden="true" />
              </a>

              {/* Admin Link (if authenticated) */}
              {user && (
                <div className="flex items-center gap-4">
                  <Link
                    to="/me/admin"
                    className="text-sm font-medium text-sage-600 hover:text-sage-700"
                  >
                    Admin
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="text-sm font-medium text-gray-600 hover:text-gray-700"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-sage-700 hover:bg-stone-100 transition-colors duration-200"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden" id="mobile-menu">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-stone-200">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                      isActive(item.href)
                        ? 'text-sage-700 bg-sage-50'
                        : 'text-gray-700 hover:text-sage-700 hover:bg-stone-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                    aria-current={isActive(item.href) ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
                
                <a
                  href="https://healingpaththerapy.janeapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-3 py-2 text-base font-medium text-sage-600 hover:text-sage-700 hover:bg-stone-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book Consultation ↗
                </a>

                {user && (
                  <>
                    <Link
                      to="/me/admin"
                      className="block px-3 py-2 text-base font-medium text-sage-600 hover:text-sage-700 hover:bg-stone-50 rounded-md"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Admin
                    </Link>
                    <button
                      onClick={() => {
                        handleSignOut();
                        setIsMenuOpen(false);
                      }}
                      className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-700 hover:bg-stone-50 rounded-md"
                    >
                      Sign Out
                    </button>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main id="main-content" role="main">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-sage-800 text-white" role="contentinfo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-serif font-semibold mb-4">Contact</h3>
              <p className="text-sage-200 mb-2">
                Maraam Haque, RP (Qualifying)
              </p>
              <p className="text-sage-200 mb-4">
                Registered Psychotherapist
              </p>
              <a
                href="https://healingpaththerapy.janeapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sage-300 hover:text-white transition-colors duration-200"
              >
                Book Consultation
                <ExternalLink size={16} />
              </a>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-serif font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navigation.slice(1).map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-sage-200 hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Practice Info */}
            <div>
              <h3 className="text-lg font-serif font-semibold mb-4">Practice</h3>
              <p className="text-sage-200 mb-2">
                Serving Ontario, Canada
              </p>
              <p className="text-sage-200 mb-2">
                Virtual Sessions Available
              </p>
              <p className="text-sage-200">
                2SLGBTQIA+ & Neurodivergent Affirming
              </p>
            </div>
          </div>

          <div className="border-t border-sage-700 mt-8 pt-8 text-center">
            <p className="text-sage-300 text-sm">
              © {new Date().getFullYear()} Maraam Haque. All rights reserved.
            </p>
            <p className="text-sage-400 text-xs mt-2">
              This website is not for emergencies. If you are in crisis, please contact 911 or go to your nearest emergency room.
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <ScrollToTopButton />
    </div>
  );
};

export default Layout;