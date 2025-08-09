import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Search, MapPin } from 'lucide-react';

const HeroSection = ({ onSearch }) => {
  const [activeTab, setActiveTab] = useState('compra');
  const [searchLocation, setSearchLocation] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchLocation, activeTab);
    }
  };

  return (
    <div className="relative h-[500px] bg-gradient-to-r from-gray-900/70 to-gray-900/30 flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Italian Architecture" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-gray-900/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Scopri una casa che
          <br />
          amerai per sempre
        </h1>
        <p className="text-xl text-gray-200 mb-8">
          Trova la tua casa dei sogni in tutta Italia
        </p>

        {/* Search Form */}
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
          {/* Tabs */}
          <div className="flex space-x-1 mb-6 bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab('compra')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'compra'
                  ? 'bg-white text-red-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Compra
            </button>
            <button
              onClick={() => setActiveTab('affitta')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'affitta'
                  ? 'bg-white text-red-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Affitta
            </button>
            <button
              onClick={() => setActiveTab('venduto')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'venduto'
                  ? 'bg-white text-red-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Venduto
            </button>
          </div>

          {/* Search Input */}
          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="flex-1 relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Roma, Milano, Napoli..."
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
                className="pl-10 h-12 text-base"
              />
            </div>
            <Button type="submit" className="h-12 px-6 bg-red-600 hover:bg-red-700">
              <Search className="w-5 h-5" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;