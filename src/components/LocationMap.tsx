import React from 'react';

interface LocationMapProps {
  latitude: number;
  longitude: number;
  googleMapsUrl: string;
}

export function LocationMap({ latitude, longitude, googleMapsUrl }: LocationMapProps) {
  // Create the Google Maps embed URL
  const embedUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${latitude},${longitude}&zoom=15`;
  
  return (
    <div className="space-y-6">
      <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
        <div className="aspect-video w-full">
          <iframe
            title="Location Map"
            className="w-full h-full"
            src={embedUrl}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
        <div className="bg-white p-4 flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-lg">Voir sur Google Maps</h3>
          </div>
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition-colors shadow-md flex items-center space-x-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-map">
              <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
              <line x1="8" y1="2" x2="8" y2="18"></line>
              <line x1="16" y1="6" x2="16" y2="22"></line>
            </svg>
            <span>Ouvrir dans Google Maps</span>
          </a>
        </div>
      </div>
    </div>
  );
}
