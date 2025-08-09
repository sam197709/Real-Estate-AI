import React, { useState } from 'react';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { ChevronDown, X, SlidersHorizontal } from 'lucide-react';

const FilterBar = ({ onFilterChange, activeFilters = {} }) => {
  const [showAllFilters, setShowAllFilters] = useState(false);

  const priceRanges = [
    { label: 'Qualsiasi prezzo', value: 'any' },
    { label: 'Fino a €150K', value: '0-150000' },
    { label: '€150K - €300K', value: '150000-300000' },
    { label: '€300K - €500K', value: '300000-500000' },
    { label: '€500K - €750K', value: '500000-750000' },
    { label: '€750K - €1M', value: '750000-1000000' },
    { label: 'Oltre €1M', value: '1000000-' }
  ];

  const bedrooms = [
    { label: 'Qualsiasi', value: 'any' },
    { label: '1+', value: '1' },
    { label: '2+', value: '2' },
    { label: '3+', value: '3' },
    { label: '4+', value: '4' },
    { label: '5+', value: '5' }
  ];

  const propertyTypes = [
    { label: 'Tutti i tipi', value: 'any' },
    { label: 'Appartamento', value: 'appartamento' },
    { label: 'Casa indipendente', value: 'casa' },
    { label: 'Villa', value: 'villa' },
    { label: 'Attico', value: 'attico' },
    { label: 'Loft', value: 'loft' }
  ];

  const handleFilterChange = (filterType, value) => {
    onFilterChange({
      ...activeFilters,
      [filterType]: value === 'any' ? null : value
    });
  };

  const getActiveFilterCount = () => {
    return Object.values(activeFilters).filter(value => value && value !== 'any').length;
  };

  const clearFilter = (filterType) => {
    const newFilters = { ...activeFilters };
    delete newFilters[filterType];
    onFilterChange(newFilters);
  };

  return (
    <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-4">
          {/* Main Filter Row */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {/* Price Filter */}
            <Select 
              value={activeFilters.price || 'any'} 
              onValueChange={(value) => handleFilterChange('price', value)}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Qualsiasi prezzo" />
                <ChevronDown className="w-4 h-4 ml-2" />
              </SelectTrigger>
              <SelectContent>
                {priceRanges.map((range) => (
                  <SelectItem key={range.value} value={range.value}>
                    {range.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Bedrooms Filter */}
            <Select 
              value={activeFilters.bedrooms || 'any'} 
              onValueChange={(value) => handleFilterChange('bedrooms', value)}
            >
              <SelectTrigger className="w-[130px]">
                <SelectValue placeholder="Camere" />
                <ChevronDown className="w-4 h-4 ml-2" />
              </SelectTrigger>
              <SelectContent>
                {bedrooms.map((bed) => (
                  <SelectItem key={bed.value} value={bed.value}>
                    {bed.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Property Type Filter */}
            <Select 
              value={activeFilters.propertyType || 'any'} 
              onValueChange={(value) => handleFilterChange('propertyType', value)}
            >
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Tipo di casa" />
                <ChevronDown className="w-4 h-4 ml-2" />
              </SelectTrigger>
              <SelectContent>
                {propertyTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* More Filters Button */}
            <Button
              variant="outline"
              onClick={() => setShowAllFilters(!showAllFilters)}
              className="relative"
            >
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              Altri filtri
              {getActiveFilterCount() > 0 && (
                <Badge 
                  variant="destructive" 
                  className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
                >
                  {getActiveFilterCount()}
                </Badge>
              )}
            </Button>

            {/* Save Search Button */}
            <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
              Salva ricerca
            </Button>
          </div>

          {/* Active Filters Display */}
          {Object.entries(activeFilters).some(([_, value]) => value && value !== 'any') && (
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-sm font-medium text-gray-700 mr-2">Filtri attivi:</span>
              {Object.entries(activeFilters).map(([key, value]) => {
                if (!value || value === 'any') return null;
                
                let displayValue = value;
                if (key === 'price') {
                  const range = priceRanges.find(r => r.value === value);
                  displayValue = range ? range.label : value;
                } else if (key === 'bedrooms') {
                  const bed = bedrooms.find(b => b.value === value);
                  displayValue = bed ? bed.label : value;
                } else if (key === 'propertyType') {
                  const type = propertyTypes.find(t => t.value === value);
                  displayValue = type ? type.label : value;
                }
                
                return (
                  <Badge 
                    key={key} 
                    variant="secondary" 
                    className="cursor-pointer hover:bg-gray-200 pr-1"
                    onClick={() => clearFilter(key)}
                  >
                    {displayValue}
                    <X className="w-3 h-3 ml-1" />
                  </Badge>
                );
              })}
            </div>
          )}

          {/* Extended Filters (when expanded) */}
          {showAllFilters && (
            <div className="border-t border-gray-200 pt-4 mt-4">
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {/* Additional filters can be added here */}
                <div className="text-sm text-gray-500">
                  Filtri aggiuntivi disponibili a breve...
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;