import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import PropertyCard from '../components/PropertyCard';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { featuredProperties, mockCities } from '../data/mockData';
import { MapPin, TrendingUp, Shield, Heart } from 'lucide-react';

const HomePage = () => {
  const navigate = useNavigate();

  const handleSearch = (location, type) => {
    const searchParams = new URLSearchParams();
    if (location) searchParams.append('location', location);
    if (type) searchParams.append('type', type);
    navigate(`/cerca?${searchParams.toString()}`);
  };

  const features = [
    {
      icon: <MapPin className="w-8 h-8 text-red-600" />,
      title: "Ricerca Precisa",
      description: "Trova la tua casa ideale utilizzando la nostra mappa interattiva e filtri avanzati."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-red-600" />,
      title: "Dati di Mercato",
      description: "Accedi a statistiche aggiornate sui prezzi e le tendenze del mercato immobiliare italiano."
    },
    {
      icon: <Shield className="w-8 h-8 text-red-600" />,
      title: "Acquisti Sicuri",
      description: "Ogni proprietà è verificata e supportata da consulenti esperti per garantire la tua sicurezza."
    },
    {
      icon: <Heart className="w-8 h-8 text-red-600" />,
      title: "Supporto Personalizzato",
      description: "Il nostro team ti accompagna in ogni fase, dall'acquisto alla vendita della tua proprietà."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection onSearch={handleSearch} />

      {/* Featured Properties */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Case in Evidenza
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Scopri le migliori opportunità selezionate dal nostro team di esperti
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              onClick={() => navigate('/cerca')}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3"
            >
              Vedi Tutte le Proprietà
            </Button>
          </div>
        </div>
      </section>

      {/* Popular Cities */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Esplora le Città Italiane
            </h2>
            <p className="text-lg text-gray-600">
              Trova la tua casa ideale nelle principali città d'Italia
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {mockCities.slice(0, 8).map((city, index) => (
              <Card 
                key={index} 
                className="cursor-pointer hover:shadow-lg transition-shadow duration-300 group"
                onClick={() => navigate(`/cerca?location=${city.name}`)}
              >
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                    {city.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">{city.region}</p>
                  <Badge variant="secondary" className="text-xs">
                    {city.properties} proprietà
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Perché Scegliere CasaItalia
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              La piattaforma più completa per il mercato immobiliare italiano
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-none shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Pronto a Trovare la Tua Casa Ideale?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Inizia la tua ricerca oggi stesso e scopri migliaia di proprietà in tutta Italia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => navigate('/cerca')}
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3"
            >
              Inizia la Ricerca
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-3"
            >
              Contattaci
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;