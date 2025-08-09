// Mock data for Italian real estate

export const mockProperties = [
  {
    id: 1,
    title: "Elegante appartamento nel centro storico",
    price: 485000,
    pricePerSqm: 6062,
    bedrooms: 2,
    bathrooms: 2,
    area: 80,
    address: "Via del Corso, Roma, RM",
    city: "Roma",
    region: "Lazio",
    type: "Appartamento",
    status: "NUOVO",
    images: [
      "https://images.unsplash.com/photo-1560448204-e1a3ecb4d5ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560449752-b5d6e7c08a9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    views: 245,
    description: "Magnifico appartamento ristrutturato nel cuore di Roma, a pochi passi dal Pantheon. Finiture di pregio e posizione esclusiva.",
    features: ["Ascensore", "Balcone", "Ristrutturato", "Centro storico"],
    coordinates: { lat: 41.9028, lng: 12.4964 }
  },
  {
    id: 2,
    title: "Villa moderna con giardino",
    price: 750000,
    pricePerSqm: 3750,
    bedrooms: 4,
    bathrooms: 3,
    area: 200,
    address: "Via dei Platani, Milano, MI",
    city: "Milano",
    region: "Lombardia",
    type: "Villa",
    status: "DISPONIBILE",
    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    views: 189,
    description: "Splendida villa di nuova costruzione in zona residenziale tranquilla. Grande giardino e finiture di lusso.",
    features: ["Giardino privato", "Garage", "Nuova costruzione", "Zona tranquilla"],
    coordinates: { lat: 45.4642, lng: 9.1900 }
  },
  {
    id: 3,
    title: "Attico con terrazza panoramica",
    price: 920000,
    pricePerSqm: 7384,
    bedrooms: 3,
    bathrooms: 2,
    area: 125,
    address: "Lungarno Corsini, Firenze, FI",
    city: "Firenze",
    region: "Toscana",
    type: "Attico",
    status: "ESCLUSIVA",
    images: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600047509415-8d9f5d6b4e0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    views: 312,
    description: "Esclusivo attico con vista mozzafiato sull'Arno e il centro storico di Firenze. Terrazza di 50mq.",
    features: ["Terrazza panoramica", "Vista fiume", "Ascensore", "Centro storico"],
    coordinates: { lat: 43.7696, lng: 11.2558 }
  },
  {
    id: 4,
    title: "Appartamento vicino al mare",
    price: 380000,
    pricePerSqm: 5429,
    bedrooms: 2,
    bathrooms: 1,
    area: 70,
    address: "Via Partenope, Napoli, NA",
    city: "Napoli",
    region: "Campania",
    type: "Appartamento",
    status: "NUOVO",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    views: 156,
    description: "Incantevole appartamento a due passi dal lungomare napoletano. Vista sul golfo e posizione strategica.",
    features: ["Vista mare", "Vicino al centro", "Balcone", "Ristrutturato"],
    coordinates: { lat: 40.8518, lng: 14.2681 }
  },
  {
    id: 5,
    title: "Casa di campagna in Toscana",
    price: 650000,
    pricePerSqm: 4062,
    bedrooms: 5,
    bathrooms: 3,
    area: 160,
    address: "Via della Vigna, Chianti, SI",
    city: "Siena",
    region: "Toscana",
    type: "Casa",
    status: "DISPONIBILE",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    views: 198,
    description: "Splendida casa di campagna immersa nelle colline del Chianti. Ideale per chi cerca tranquillità e natura.",
    features: ["Giardino", "Camino", "Cantina", "Vista panoramica"],
    coordinates: { lat: 43.3188, lng: 11.3307 }
  },
  {
    id: 6,
    title: "Loft moderno in zona Navigli",
    price: 540000,
    pricePerSqm: 6750,
    bedrooms: 1,
    bathrooms: 1,
    area: 80,
    address: "Via Naviglio Grande, Milano, MI",
    city: "Milano",
    region: "Lombardia",
    type: "Loft",
    status: "NUOVO",
    images: [
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753104-ec51d738a88e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    views: 278,
    description: "Esclusivo loft di design nella vivace zona Navigli. Soffitti alti e spazi aperti per uno stile di vita moderno.",
    features: ["Design moderno", "Soffitti alti", "Zona Navigli", "Open space"],
    coordinates: { lat: 45.4516, lng: 9.1727 }
  }
];

export const mockCities = [
  { name: "Roma", region: "Lazio", properties: 1245 },
  { name: "Milano", region: "Lombardia", properties: 892 },
  { name: "Napoli", region: "Campania", properties: 567 },
  { name: "Torino", region: "Piemonte", properties: 423 },
  { name: "Firenze", region: "Toscana", properties: 334 },
  { name: "Bologna", region: "Emilia-Romagna", properties: 298 },
  { name: "Palermo", region: "Sicilia", properties: 256 },
  { name: "Genova", region: "Liguria", properties: 189 }
];

export const mockRegions = [
  "Lazio", "Lombardia", "Campania", "Sicilia", "Veneto", 
  "Emilia-Romagna", "Piemonte", "Puglia", "Toscana", "Calabria"
];

export const featuredProperties = mockProperties.slice(0, 3);

// Filter properties based on search criteria
export const filterProperties = (properties, filters) => {
  return properties.filter(property => {
    // Price filter
    if (filters.price && filters.price !== 'any') {
      const [min, max] = filters.price.split('-').map(p => p === '' ? null : parseInt(p));
      if (min && property.price < min) return false;
      if (max && property.price > max) return false;
    }
    
    // Bedrooms filter
    if (filters.bedrooms && filters.bedrooms !== 'any') {
      if (property.bedrooms < parseInt(filters.bedrooms)) return false;
    }
    
    // Property type filter
    if (filters.propertyType && filters.propertyType !== 'any') {
      if (property.type.toLowerCase() !== filters.propertyType.toLowerCase()) return false;
    }
    
    // City/location search
    if (filters.location) {
      const searchTerm = filters.location.toLowerCase();
      if (!property.city.toLowerCase().includes(searchTerm) && 
          !property.address.toLowerCase().includes(searchTerm) &&
          !property.region.toLowerCase().includes(searchTerm)) {
        return false;
      }
    }
    
    return true;
  });
};