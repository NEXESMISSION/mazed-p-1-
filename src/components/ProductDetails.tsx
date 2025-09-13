import { Star, MapPin } from 'lucide-react';

export function ProductDetails() {
  return (
    <div className="space-y-6 max-w-lg mx-auto lg:mx-0">
      {/* Product header */}
      <div className="space-y-3">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <MapPin className="w-4 h-4" />
          <span>Appartement Haut Standing S+2</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-semibold text-black">MAZED Appartement Haut Standing</h1>
        
        {/* Rating and testimonials */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className="w-4 h-4 text-yellow-400 fill-current"
              />
            ))}
          </div>
          <span className="text-sm">4.9</span>
          <span className="text-sm text-gray-600">500+ Investisseurs Satisfaits</span>
        </div>

        {/* Special offer badge */}
        <div className="flex items-center space-x-2">
          <span className="text-blue-600 font-medium">Appartement Haut Standing S+2</span>
        </div>
      </div>

      {/* Price */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <span className="text-2xl md:text-3xl font-semibold text-black">1 600 TND/m²</span>
          <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm">Haut Standing</span>
        </div>
        

      </div>

      {/* Apartment details */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <span className="text-blue-800 font-medium">Superficie de l'Appartement :</span>
          <span className="text-blue-900 font-semibold text-lg">126 m²</span>
        </div>
        <p className="text-blue-700 text-sm mt-1">Appartement S+2 idéal pour résidence ou investissement</p>
      </div>

      {/* Location details */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="font-semibold text-blue-800 mb-2">📍 Localisation Stratégique</h3>
        <p className="text-blue-700 text-sm">
          Tunisie – Route Gremda km 6, Markaz Kamoun
          <br/>
          <strong>Façade : Route Principale</strong>
        </p>
        <p className="text-blue-600 text-xs mt-2">Emplacement stratégique dans un quartier prisé</p>
      </div>
    </div>
  );
}
