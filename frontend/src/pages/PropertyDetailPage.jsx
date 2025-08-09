import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import { mockProperties } from '../data/mockData';
import { 
  ArrowLeft, 
  Heart, 
  Share2, 
  Bed, 
  Bath, 
  Square, 
  MapPin, 
  Phone, 
  Mail,
  Calendar,
  Camera,
  ChevronLeft,
  ChevronRight,
  Euro,
  TrendingUp,
  Home,
  Car
} from 'lucide-react';

const PropertyDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    const foundProperty = mockProperties.find(p => p.id === parseInt(id));
    setProperty(foundProperty);
  }, [id]);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Proprietà non trovata</h2>
          <Button onClick={() => navigate('/')}>Torna alla Home</Button>
        </div>
      </div>
    );
  }

  const formatPrice = (price) => {
    return `€${price.toLocaleString()}`;
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate(-1)}
              className="flex items-center text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Torna ai risultati
            </Button>
            
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsFavorited(!isFavorited)}
                className={isFavorited ? 'bg-red-50 border-red-200 text-red-600' : ''}
              >
                <Heart className={`w-4 h-4 mr-2 ${isFavorited ? 'fill-current' : ''}`} />
                Salva
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Condividi
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Images and Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <Card className="overflow-hidden">
              <div className="relative">
                <div className="h-96 overflow-hidden">
                  <img
                    src={property.images[currentImageIndex]}
                    alt={property.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Navigation Buttons */}
                {property.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm flex items-center">
                  <Camera className="w-4 h-4 mr-1" />
                  {currentImageIndex + 1} / {property.images.length}
                </div>

                {/* Status Badge */}
                {property.status && (
                  <Badge className="absolute top-4 left-4 bg-green-600 text-white">
                    {property.status}
                  </Badge>
                )}
              </div>

              {/* Thumbnail Strip */}
              <div className="p-4">
                <div className="flex space-x-2 overflow-x-auto">
                  {property.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-16 rounded-md overflow-hidden border-2 transition-colors ${
                        index === currentImageIndex ? 'border-red-600' : 'border-gray-200'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Foto ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </Card>

            {/* Property Details */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Dettagli Proprietà</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Bed className="w-6 h-6 text-gray-600 mx-auto mb-2" />
                    <div className="text-lg font-semibold">{property.bedrooms}</div>
                    <div className="text-sm text-gray-600">Camere</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Bath className="w-6 h-6 text-gray-600 mx-auto mb-2" />
                    <div className="text-lg font-semibold">{property.bathrooms}</div>
                    <div className="text-sm text-gray-600">Bagni</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Square className="w-6 h-6 text-gray-600 mx-auto mb-2" />
                    <div className="text-lg font-semibold">{property.area}</div>
                    <div className="text-sm text-gray-600">m²</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Euro className="w-6 h-6 text-gray-600 mx-auto mb-2" />
                    <div className="text-lg font-semibold">{property.pricePerSqm}</div>
                    <div className="text-sm text-gray-600">€/m²</div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-semibold mb-3">Descrizione</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {property.description}
                  </p>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-semibold mb-3">Caratteristiche</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {property.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-red-600" />
                  Posizione
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{property.address}</p>
                <div className="h-64 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-red-600 mx-auto mb-2" />
                    <p className="text-gray-600">
                      Mappa interattiva disponibile nella versione completa
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Price and Contact */}
          <div className="space-y-6">
            {/* Price Card */}
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {formatPrice(property.price)}
                </div>
                <p className="text-gray-600 mb-4">{property.address}</p>
                
                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  <span>{property.views} visualizzazioni questo mese</span>
                </div>

                <div className="space-y-3">
                  <Button className="w-full bg-red-600 hover:bg-red-700" size="lg">
                    <Phone className="w-4 h-4 mr-2" />
                    Chiama Ora
                  </Button>
                  <Button variant="outline" className="w-full" size="lg">
                    <Mail className="w-4 h-4 mr-2" />
                    Invia Messaggio
                  </Button>
                  <Button variant="outline" className="w-full" size="lg">
                    <Calendar className="w-4 h-4 mr-2" />
                    Prenota Visita
                  </Button>
                </div>

                <Separator className="my-6" />

                <div className="text-sm text-gray-600">
                  <p className="font-medium mb-2">Agente Immobiliare</p>
                  <p>Marco Rossi</p>
                  <p>Immobiliare Italia Srl</p>
                  <p className="mt-2">+39 06 1234 5678</p>
                </div>
              </CardContent>
            </Card>

            {/* Mortgage Calculator */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Calcolo Mutuo</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Anticipo (20%)
                    </label>
                    <div className="text-xl font-semibold text-gray-900">
                      {formatPrice(Math.round(property.price * 0.2))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Rata mensile stimata*
                    </label>
                    <div className="text-xl font-semibold text-green-600">
                      €{Math.round((property.price * 0.8 * 0.004)).toLocaleString()}/mese
                    </div>
                  </div>
                  <div className="text-xs text-gray-500">
                    *Stima basata su tasso del 3.5% per 25 anni
                  </div>
                  <Button variant="outline" className="w-full" size="sm">
                    Calcolo Dettagliato
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailPage;