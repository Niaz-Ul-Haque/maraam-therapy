import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Plus, Settings, LogOut, Calendar, ExternalLink } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import ScrollToTop from './ScrollToTop';
import ScrollToTopButton from './ScrollToTopButton';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { user, signOut } = useAuth();

  const navigation = [
    { name: 'Dashboard', href: '/me/admin/dashboard', icon: Home },
    { name: 'Create Post', href: '/me/admin/create', icon: Plus },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleSignOut = async () => {
    await signOut();
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Scroll to top on route change */}
      <ScrollToTop />
      
      {/* Admin Header */}
      <header className="bg-white shadow-sm border-b border-stone-200 sticky top-0 z-40">
        <div className="max-w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo and Title */}
            <div className="flex items-center gap-4">
              <Link
                to="/"
                className="text-xl font-serif font-semibold text-sage-700 hover:text-sage-800 transition-colors duration-200"
              >
                Maraam Haque
              </Link>
              <span className="text-gray-400 hidden sm:inline">|</span>
              <span className="text-gray-600 hidden sm:inline">Admin Panel</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navigation.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`inline-flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                      isActive(item.href)
                        ? 'text-sage-700 bg-sage-50'
                        : 'text-gray-700 hover:text-sage-700 hover:bg-stone-50'
                    }`}
                  >
                    <IconComponent size={16} aria-hidden="true" />
                    {item.name}
                  </Link>
                );
              })}

              <div className="border-l border-gray-300 pl-6 ml-6">
                <div className="flex items-center gap-4">
                  <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200"
                  >
                    <ExternalLink size={16} aria-hidden="true" />
                    <span className="hidden lg:inline">View Site</span>
                  </Link>

                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-600 hidden lg:inline">
                      {user?.email}
                    </span>
                    <button
                      onClick={handleSignOut}
                      className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200"
                    >
                      <LogOut size={16} aria-hidden="true" />
                      <span className="hidden lg:inline">Sign Out</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-sage-700 hover:bg-stone-100 transition-colors duration-200"
              aria-expanded={isMobileMenuOpen}
              aria-controls="admin-mobile-menu"
              aria-label="Toggle admin navigation menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-stone-200" id="admin-mobile-menu">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
                {navigation.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`flex items-center gap-3 px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                        isActive(item.href)
                          ? 'text-sage-700 bg-sage-50'
                          : 'text-gray-700 hover:text-sage-700 hover:bg-stone-50'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <IconComponent size={20} aria-hidden="true" />
                      {item.name}
                    </Link>
                  );
                })}

                <div className="border-t border-gray-200 pt-3 mt-3">
                  <Link
                    to="/"
                    className="flex items-center gap-3 px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-stone-50 rounded-md transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <ExternalLink size={20} aria-hidden="true" />
                    View Main Site
                  </Link>

                  <a
                    href="https://healingpaththerapy.janeapp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-stone-50 rounded-md transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Calendar size={20} aria-hidden="true" />
                    Booking Platform
                  </a>

                  <div className="px-3 py-2">
                    <p className="text-sm text-gray-500 mb-2">{user?.email}</p>
                    <button
                      onClick={handleSignOut}
                      className="flex items-center gap-3 w-full px-3 py-2 text-base font-medium text-red-600 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors duration-200"
                    >
                      <LogOut size={20} aria-hidden="true" />
                      Sign Out
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="min-h-screen">
        {children}
      </main>

      {/* Scroll to top button */}
      <ScrollToTopButton />
    </div>
  );
};

export default AdminLayout;