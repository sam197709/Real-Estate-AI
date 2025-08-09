import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Heart, Search, Menu, User } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="text-2xl font-bold text-gray-900">
              Casa<span className="text-red-600">Italia</span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/compra" 
              className={`text-sm font-medium px-3 py-2 rounded-md transition-colors ${
                isActive('/compra') ? 'bg-red-50 text-red-600' : 'text-gray-700 hover:text-red-600'
              }`}
            >
              Compra
            </Link>
            <Link 
              to="/affitta" 
              className={`text-sm font-medium px-3 py-2 rounded-md transition-colors ${
                isActive('/affitta') ? 'bg-red-50 text-red-600' : 'text-gray-700 hover:text-red-600'
              }`}
            >
              Affitta
            </Link>
            <Link 
              to="/venduto" 
              className={`text-sm font-medium px-3 py-2 rounded-md transition-colors ${
                isActive('/venduto') ? 'bg-red-50 text-red-600' : 'text-gray-700 hover:text-red-600'
              }`}
            >
              Venduto
            </Link>
            <Link 
              to="/mutuo" 
              className={`text-sm font-medium px-3 py-2 rounded-md transition-colors ${
                isActive('/mutuo') ? 'bg-red-50 text-red-600' : 'text-gray-700 hover:text-red-600'
              }`}
            >
              Mutuo
            </Link>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <Link 
              to="/salvati" 
              className="hidden sm:flex items-center text-sm text-gray-700 hover:text-red-600 transition-colors"
            >
              <Heart className="w-4 h-4 mr-1" />
              Case Salvate
            </Link>
            <Link 
              to="/ricerche-salvate" 
              className="hidden sm:flex items-center text-sm text-gray-700 hover:text-red-600 transition-colors"
            >
              <Search className="w-4 h-4 mr-1" />
              Ricerche Salvate
            </Link>
            <Button variant="outline" size="sm" className="hidden sm:inline-flex">
              <User className="w-4 h-4 mr-2" />
              Accedi
            </Button>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;