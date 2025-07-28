import React, { useState, useEffect } from 'react';

const RealEstateAI = () => {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [filters, setFilters] = useState({
    location: '',
    minPrice: '',
    maxPrice: '',
    bedrooms: ''
  });
  const [loading, setLoading] = useState(true);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [adRotation, setAdRotation] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock data for properties - ONLY ESSENTIAL PROPERTIES
  const mockProperties = [
    {
      id: 1,
      title: "Lussuoso Appartamento a Milano",
      price: 850000,
      location: "Milano, Centro Storico",
      bedrooms: 3,
      bathrooms: 2,
      size: 145,
      type: "Appartamento",
      image: "https://placehold.co/400x300/4f46e5/ffffff?text=Milano+Luxury",
      description: "Elegante appartamento nel cuore di Milano con vista sul Duomo. Ristrutturato nel 2022 con finiture di lusso.",
      features: ["Ascensore", "Cantina", "Aria Condizionata", "Terrazzo"],
      views: 1247,
      published: "2 ore fa"
    },
    {
      id: 2,
      title: "Villa Esclusiva a Roma",
      price: 1200000,
      location: "Roma, Parioli",
      bedrooms: 4,
      bathrooms: 3,
      size: 280,
      type: "Villa",
      image: "https://placehold.co/400x300/059669/ffffff?text=Roma+Villa",
      description: "Villa signorile con giardino privato di 500mq e piscina. Posizione tranquilla ma vicina al centro città.",
      features: ["Giardino", "Piscina", "Garage", "Sistema di Sicurezza"],
      views: 983,
      published: "4 ore fa"
    },
    {
      id: 3,
      title: "Attico Panoramico a Firenze",
      price: 680000,
      location: "Firenze, Oltrarno",
      bedrooms: 2,
      bathrooms: 2,
      size: 110,
      type: "Attico",
      image: "https://placehold.co/400x300/dc2626/ffffff?text=Firenze+Attico",
      description: "Attico ristrutturato con vista mozzafiata sulla cupola del Duomo e sui tetti storici di Firenze.",
      features: ["Terrazza", "Tettoia", "Climatizzazione", "Finiture d'epoca"],
      views: 876,
      published: "6 ore fa"
    }
  ];

  // Advertising data - ONLY ESSENTIAL ADS
  const ads = [
    {
      id: 1,
      title: "Investi nel Mercato Immobiliare Italiano",
      description: "Scopri le migliori opportunità di investimento con il nostro team esperto",
      image: "https://placehold.co/600x300/059669/ffffff?text=Investment+Opportunity",
      cta: "Scopri di più",
      url: "https://example.com/investments"
    },
    {
      id: 2,
      title: "Mutui Casa con Tassi Agevolati",
      description: "Finanzia la tua casa dei sogni con i nostri mutui a tasso agevolato",
      image: "https://placehold.co/600x300/4f46e5/ffffff?text=Mortgage+Rates",
      cta: "Calcola il tuo mutuo",
      url: "https://example.com/mortgages"
    }
  ];

  // SIMPLIFIED: Only essential initialization
  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setProperties(mockProperties);
      setFilteredProperties(mockProperties);
      setLoading(false);
    }, 1000);

    // Set up ad rotation
    const adInterval = setInterval(() => {
      setAdRotation(prev => (prev + 1) % ads.length);
    }, 5000);

    return () => clearInterval(adInterval);
  }, []);

  // SIMPLIFIED: Auto-refresh every 5 minutes with new properties
  useEffect(() => {
    if (!loading) {
      const refreshInterval = setInterval(() => {
        console.log("Auto-refreshing properties...");
        
        // Generate a new property with random data
        const newProperty = {
          id: properties.length + 1,
          title: `Nuova Proprietà Aggiunta ${new Date().toLocaleTimeString()}`,
          price: Math.floor(Math.random() * 1000000) + 200000,
          location: ["Milano", "Roma", "Firenze", "Torino", "Venezia", "Napoli"][Math.floor(Math.random() * 6)],
          bedrooms: Math.floor(Math.random() * 4) + 1,
          bathrooms: Math.floor(Math.random() * 3) + 1,
          size: Math.floor(Math.random() * 200) + 80,
          type: ["Appartamento", "Villa", "Attico", "Casa Storica"][Math.floor(Math.random() * 4)],
          image: `https://placehold.co/400x300/${Math.floor(Math.random()*16777215).toString(16)}/ffffff?text=New+Property`,
          description: "Nuova proprietà aggiunta automaticamente dal sistema di aggiornamento in tempo reale.",
          features: ["Ascensore", "Cantina", "Aria Condizionata", "Terrazzo"].slice(0, Math.floor(Math.random() * 4) + 1),
          views: Math.floor(Math.random() * 1000),
          published: "Adesso"
        };
        
        // Add new property to the top of the list
        setProperties(prev => [newProperty, ...prev]);
        setFilteredProperties(prev => [newProperty, ...prev]);
      }, 300000); // 5 minutes

      return () => clearInterval(refreshInterval);
    }
  }, [loading, properties]);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('it-IT', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const applyFilters = () => {
    const filtered = properties.filter(property => {
      return (
        (filters.location === '' || property.location.toLowerCase().includes(filters.location.toLowerCase())) &&
        (filters.minPrice === '' || property.price >= parseInt(filters.minPrice)) &&
        (filters.maxPrice === '' || property.price <= parseInt(filters.maxPrice)) &&
        (filters.bedrooms === '' || property.bedrooms >= parseInt(filters.bedrooms))
      );
    });
    setFilteredProperties(filtered);
  };

  const PropertyCard = ({ property }) => (
    <div 
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
      onClick={() => setSelectedProperty(property)}
    >
      <div className="relative">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {formatPrice(property.price)}
        </div>
        <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
          {property.type}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{property.title}</h3>
        <p className="text-gray-600 mb-4 flex items-center">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {property.location}
        </p>
        
        <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
          <div className="flex items-center text-gray-700">
            <svg className="w-4 h-4 mr-1 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" />
            </svg>
            {property.bedrooms} camere
          </div>
          <div className="flex items-center text-gray-700">
            <svg className="w-4 h-4 mr-1 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
            </svg>
            {property.bathrooms} bagni
          </div>
          <div className="flex items-center text-gray-700">
            <svg className="w-4 h-4 mr-1 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5-5M4 16v4m0 4h4m-4 0l-5-5m11 5v-4m0 4h-4m4 0l-5-5" />
            </svg>
            {property.size} mq
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {property.features.slice(0, 3).map((feature, index) => (
            <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
              {feature}
            </span>
          ))}
          {property.features.length > 3 && (
            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
              +{property.features.length - 3}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-gray-500">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            {property.views.toLocaleString()}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2m-6 9l2 2 4-4m6-18v18a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2z" />
            </svg>
            {property.published}
          </div>
        </div>
      </div>
    </div>
  );

  const PropertyDetail = ({ property, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-screen overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 z-10">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Dettagli Proprietà</h2>
            <button 
              onClick={onClose}
              className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="relative mb-4">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-80 object-cover rounded-xl"
                />
              </div>
            </div>

            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{property.title}</h1>
              <p className="text-gray-600 mb-4 flex items-center text-lg">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {property.location}
              </p>
              
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl mb-6">
                <div className="text-3xl font-bold text-gray-900 mb-2">{formatPrice(property.price)}</div>
                <div className="text-sm text-gray-600">Prezzo richiesto</div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900">{property.bedrooms}</div>
                  <div className="text-sm text-gray-600">Camere da letto</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900">{property.bathrooms}</div>
                  <div className="text-sm text-gray-600">Bagni</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900">{property.size}</div>
                  <div className="text-sm text-gray-600">Metri quadrati</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900">{property.type}</div>
                  <div className="text-sm text-gray-600">Tipo di proprietà</div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Descrizione</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">{property.description}</p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Caratteristiche</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {property.features.map((feature, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const PropertyFilters = () => (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Cerca la Tua Prossima Casa</h3>
      
      <form className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Dove</label>
          <input
            type="text"
            name="location"
            value={filters.location}
            onChange={handleFilterChange}
            placeholder="Città, quartiere..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Prezzo Minimo</label>
          <input
            type="number"
            name="minPrice"
            value={filters.minPrice}
            onChange={handleFilterChange}
            placeholder="€"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Prezzo Massimo</label>
          <input
            type="number"
            name="maxPrice"
            value={filters.maxPrice}
            onChange={handleFilterChange}
            placeholder="€"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Camere da Letto</label>
          <select
            name="bedrooms"
            value={filters.bedrooms}
            onChange={handleFilterChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Qualsiasi</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
          </select>
        </div>
      </form>
      
      <div className="mt-4 flex justify-end">
        <button
          onClick={applyFilters}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
        >
          Cerca
        </button>
      </div>
    </div>
  );

  const AdRotation = () => (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-gray-900">Spazio Pubblicitario</h3>
        <div className="flex space-x-2">
          {ads.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === adRotation ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="relative">
        <img
          src={ads[adRotation].image}
          alt={ads[adRotation].title}
          className="w-full h-48 object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center">
          <div className="text-center text-white">
            <h4 className="text-xl font-bold mb-2">{ads[adRotation].title}</h4>
            <p className="mb-4">{ads[adRotation].description}</p>
            <a
              href={ads[adRotation].url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {ads[adRotation].cta}
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-4 border-blue-600 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">RealEstateAI</h1>
                <p className="text-sm text-blue-600">Mercato Immobiliare Italiano</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Accedi
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl
