import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import FilterBar from '../components/FilterBar';
import PropertyCard from '../components/PropertyCard';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { mockProperties, filterProperties } from '../data/mockData';
import { MapPin, Grid3X3, List, Map, SlidersHorizontal } from 'lucide-react';

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState('grid'); // 'grid', 'list', 'map'
  const [sortBy, setSortBy] = useState('newest');
  const [showMap, setShowMap] = useState(false);
  
  // Initialize filters from URL params
  const [filters, setFilters] = useState({
    location: searchParams.get('location') || '',
    type: searchParams.get('type') || 'compra',
    price: searchParams.get('price') || null,
    bedrooms: searchParams.get('bedrooms') || null,
    propertyType: searchParams.get('propertyType') || null,
  });

  const [filteredProperties, setFilteredProperties] = useState([]);

  // Apply filters whenever filters change
  useEffect(() => {
    const filtered = filterProperties(mockProperties, filters);
    setFilteredProperties(filtered);
  }, [filters]);

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value && value !== 'any') {
        params.append(key, value);
      }
    });
    setSearchParams(params);
  }, [filters, setSearchParams]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const sortOptions = [
    { label: 'Più recenti', value: 'newest' },
    { label: 'Prezzo crescente', value: 'price_asc' },
    { label: 'Prezzo decrescente', value: 'price_desc' },
    { label: 'Più visitati', value: 'popular' },
  ];

  const getSortedProperties = () => {
    const sorted = [...filteredProperties];
    
    switch (sortBy) {
      case 'price_asc':
        return sorted.sort((a, b) => a.price - b.price);
      case 'price_desc':
        return sorted.sort((a, b) => b.price - a.price);
      case 'popular':
        return sorted.sort((a, b) => (b.views || 0) - (a.views || 0));
      case 'newest':
      default:
        return sorted;
    }
  };

  const properties = getSortedProperties();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Info */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {filters.location ? `Case in ${filters.location}` : 'Tutte le Proprietà'}
              </h1>
              <p className="text-gray-600 mt-1">
                {properties.length} {properties.length === 1 ? 'proprietà trovata' : 'proprietà trovate'}
              </p>
            </div>
            
            {/* View Controls */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-700">Ordina per:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                >
                  {sortOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-center border border-gray-300 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'grid' ? 'bg-red-600 text-white' : 'text-gray-600 hover:text-red-600'
                  }`}
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'list' ? 'bg-red-600 text-white' : 'text-gray-600 hover:text-red-600'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setShowMap(!showMap)}
                  className={`p-2 rounded-md transition-colors ${
                    showMap ? 'bg-red-600 text-white' : 'text-gray-600 hover:text-red-600'
                  }`}
                >
                  <Map className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <FilterBar 
        onFilterChange={handleFilterChange}
        activeFilters={filters}
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className={`flex gap-8 ${showMap ? 'h-[calc(100vh-300px)]' : ''}`}>
          {/* Properties List */}
          <div className={`${showMap ? 'w-1/2 overflow-y-auto' : 'w-full'}`}>
            {properties.length === 0 ? (
              <Card className="p-12 text-center">
                <CardContent>
                  <SlidersHorizontal className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Nessuna proprietà trovata
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Prova a modificare i tuoi filtri di ricerca per vedere più risultati.
                  </p>
                  <Button 
                    onClick={() => setFilters({ location: '', type: 'compra' })}
                    variant="outline"
                  >
                    Cancella Filtri
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className={`${
                viewMode === 'grid' 
                  ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' 
                  : 'space-y-6'
              }`}>
                {properties.map(property => (
                  <PropertyCard 
                    key={property.id} 
                    property={property}
                  />
                ))}
              </div>
            )}

            {/* Load More Button */}
            {properties.length > 0 && (
              <div className="text-center mt-12">
                <Button variant="outline" size="lg">
                  Carica altre proprietà
                </Button>
              </div>
            )}
          </div>

          {/* Map Section */}
          {showMap && (
            <div className="w-1/2 sticky top-32">
              <Card className="h-full">
                <CardContent className="p-0 h-full">
                  {/* Mock Map Placeholder */}
                  <div className="h-full bg-gradient-to-br from-blue-100 to-green-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-16 h-16 text-red-600 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Mappa Interattiva
                      </h3>
                      <p className="text-gray-600 max-w-sm">
                        La mappa interattiva sarà disponibile nella versione completa con l'integrazione backend
                      </p>
                      <div className="mt-6 flex flex-wrap gap-2 justify-center">
                        {properties.slice(0, 5).map((property, index) => (
                          <Badge key={index} variant="secondary" className="cursor-pointer hover:bg-red-100">
                            €{(property.price / 1000).toFixed(0)}K
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;