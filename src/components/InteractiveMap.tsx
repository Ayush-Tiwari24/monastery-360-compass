import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Navigation } from 'lucide-react';

interface Monastery {
  id: string;
  name: string;
  coordinates: [number, number];
  description: string;
  established: string;
  type: string;
}

const monasteries: Monastery[] = [
  {
    id: '1',
    name: 'Rumtek Monastery',
    coordinates: [88.5569, 27.3389],
    description: 'The largest monastery in Sikkim and seat of the Karmapa',
    established: '1960',
    type: 'Kagyu'
  },
  {
    id: '2', 
    name: 'Pemayangtse Monastery',
    coordinates: [88.2651, 27.2849],
    description: 'One of the oldest and most important monasteries in Sikkim',
    established: '1705',
    type: 'Nyingma'
  },
  {
    id: '3',
    name: 'Enchey Monastery',
    coordinates: [88.6067, 27.3314],  
    description: 'Beautiful monastery with panoramic views of Gangtok',
    established: '1909',
    type: 'Nyingma'
  },
  {
    id: '4',
    name: 'Tashiding Monastery',
    coordinates: [88.2167, 27.3167],
    description: 'Sacred monastery on a hilltop between two rivers',
    established: '1641',
    type: 'Nyingma'
  },
  {
    id: '5',
    name: 'Dubdi Monastery',
    coordinates: [88.2833, 27.2833],
    description: 'The oldest monastery in Sikkim',
    established: '1701',
    type: 'Nyingma'
  }
];

const InteractiveMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [selectedMonastery, setSelectedMonastery] = useState<Monastery | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [isMapInitialized, setIsMapInitialized] = useState(false);

  const initializeMap = () => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/satellite-streets-v12',
      center: [88.4, 27.3], // Center on Sikkim
      zoom: 10,
      pitch: 45,
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    map.current.on('load', () => {
      // Add monastery markers
      monasteries.forEach((monastery) => {
        // Create custom marker element
        const markerElement = document.createElement('div');
        markerElement.className = 'monastery-marker';
        markerElement.innerHTML = `
          <div class="w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg border-2 border-white cursor-pointer hover:scale-110 transition-transform">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
              <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
            </svg>
          </div>
        `;

        // Add click event to marker
        markerElement.addEventListener('click', () => {
          setSelectedMonastery(monastery);
          map.current?.flyTo({
            center: monastery.coordinates,
            zoom: 14,
            pitch: 60
          });
        });

        new mapboxgl.Marker(markerElement)
          .setLngLat(monastery.coordinates)
          .addTo(map.current!);

        // Add popup on hover
        const popup = new mapboxgl.Popup({
          closeButton: false,
          closeOnClick: false,
          offset: 25
        }).setHTML(`
          <div class="text-sm font-medium">${monastery.name}</div>
          <div class="text-xs text-muted-foreground">${monastery.type} • Est. ${monastery.established}</div>
        `);

        markerElement.addEventListener('mouseenter', () => {
          popup.setLngLat(monastery.coordinates).addTo(map.current!);
        });

        markerElement.addEventListener('mouseleave', () => {
          popup.remove();
        });
      });
    });

    setIsMapInitialized(true);
  };

  const flyToMonastery = (monastery: Monastery) => {
    setSelectedMonastery(monastery);
    map.current?.flyTo({
      center: monastery.coordinates,
      zoom: 14,
      pitch: 60,
      duration: 2000
    });
  };

  if (!isMapInitialized && !mapboxToken) {
    return (
      <div className="w-full h-[600px] flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="p-6 space-y-4">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Initialize Interactive Map</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Enter your Mapbox public token to explore monastery locations
              </p>
            </div>
            <div className="space-y-2">
              <Input
                type="text"
                placeholder="pk.eyJ1IjoieW91ci11c2VybmFtZSIsImEiOiJjbGF..."
                value={mapboxToken}
                onChange={(e) => setMapboxToken(e.target.value)}
                className="font-mono text-xs"
              />
              <p className="text-xs text-muted-foreground">
                Get your token from{' '}
                <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  mapbox.com
                </a>
              </p>
              <Button 
                onClick={initializeMap} 
                disabled={!mapboxToken}
                className="w-full"
              >
                <Navigation className="w-4 h-4 mr-2" />
                Initialize Map
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[600px] rounded-lg overflow-hidden border">
      <div ref={mapContainer} className="absolute inset-0" />
      
      {/* Monastery selector sidebar */}
      <div className="absolute left-4 top-4 w-80 max-h-96 overflow-y-auto">
        <Card className="bg-background/95 backdrop-blur-sm">
          <CardContent className="p-4">
            <h3 className="font-semibold mb-3 flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              Monastery Locations
            </h3>
            <div className="space-y-2">
              {monasteries.map((monastery) => (
                <div
                  key={monastery.id}
                  className={`p-3 rounded-md cursor-pointer transition-colors ${
                    selectedMonastery?.id === monastery.id
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted hover:bg-muted/80'
                  }`}
                  onClick={() => flyToMonastery(monastery)}
                >
                  <div className="font-medium text-sm">{monastery.name}</div>
                  <div className="text-xs opacity-80">
                    {monastery.type} • Est. {monastery.established}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Selected monastery details */}
      {selectedMonastery && (
        <div className="absolute right-4 bottom-4 w-80">
          <Card className="bg-background/95 backdrop-blur-sm">
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">{selectedMonastery.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">
                {selectedMonastery.description}
              </p>
              <div className="flex justify-between items-center text-xs text-muted-foreground">
                <span>{selectedMonastery.type} Tradition</span>
                <span>Est. {selectedMonastery.established}</span>
              </div>
              <Button className="w-full mt-3" size="sm">
                Start Virtual Tour
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default InteractiveMap;