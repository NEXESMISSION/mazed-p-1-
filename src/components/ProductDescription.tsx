import React, { useState } from 'react';
import { Play, MapPin, Shield } from 'lucide-react';
import { LocationMap } from './LocationMap';

export function ProductDescription() {
  const scrollToForm = () => {
    const formElement = document.getElementById('client-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // State for video modal
  const [showVideoModal, setShowVideoModal] = useState(false);

  // Video popup handlers
  const openVideoModal = () => setShowVideoModal(true);
  const closeVideoModal = () => setShowVideoModal(false);

  return (
    <div className="space-y-12">
      {/* Product Video - Moved to top */}
      <div className="text-center space-y-8">
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold">Découvrez Votre Futur Appartement</h2>
          <p className="text-gray-700">
            Regardez notre visite détaillée de l'appartement MAZED Haut Standing S+2 et découvrez son emplacement stratégique.
          </p>
        </div>
        
        {/* Location Map */}
        <div className="max-w-4xl mx-auto">
          <LocationMap 
            latitude={34.9375278}
            longitude={10.6767778}
            googleMapsUrl="https://maps.app.goo.gl/j2AkNNmTekQx4EFB6"
          />
        </div>
        
        <div className="relative bg-gray-900 rounded-xl overflow-hidden max-w-md mx-auto mt-8" style={{ aspectRatio: '9/16' }}>
          <img
            src="https://i.ibb.co/PGJW3XBn/8.png"
            alt="Vidéo de l'appartement"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <button 
              onClick={openVideoModal}
              className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-6 transition-all transform hover:scale-110"
            >
              <Play className="w-12 h-12 text-gray-900 ml-1" />
            </button>
          </div>
        </div>

        {/* Video Modal */}
        {showVideoModal && (
          <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
            <div className="relative w-full" style={{ maxWidth: '350px' }}>
              <div style={{ aspectRatio: '9/16' }} className="w-full relative">
                <button 
                  onClick={closeVideoModal}
                  className="absolute -top-3 -right-3 z-10 bg-white hover:bg-gray-200 text-black font-bold rounded-full w-8 h-8 flex items-center justify-center shadow-md"
                  aria-label="Close video"
                >
                  &times;
                </button>
                <iframe
                  className="w-full h-full"
                  src="https://youtube.com/embed/q5TjS03MQvQ"
                  title="Vidéo de l'appartement"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Land Overview - Reduced to 2 paragraphs */}
      <div className="text-center space-y-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold">À Propos de MAZED</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          Avec MAZED Immobilier, sécurisez votre futur dans l'un des quartiers les plus prisés de Sfax. Nos appartements sont soigneusement conçus pour allier confort moderne et valeur patrimoniale durable.
        </p>
        
        {/* Basic Specifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 bg-gray-50 rounded-lg p-6">
          <div className="space-y-3">
            <h3 className="font-semibold text-lg flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-green-600" />
              <span>Emplacement & Superficie</span>
            </h3>
            <div className="text-gray-700 space-y-1">
              <p>Localisation : Tunisie, Sfax – Route Gremda km 6, Markaz Kamoun</p>
              <p>Superficie : 126 m²</p>
              <p>Façade : Route Gremda</p>
            </div>
          </div>
          
          <div className="space-y-3">
            <h3 className="font-semibold text-lg flex items-center space-x-2">
              <Shield className="w-5 h-5 text-blue-600" />
              <span>Caractéristiques</span>
            </h3>
            <div className="text-gray-700 space-y-1">
              <p>Haut standing</p>
              <p>Emplacement stratégique</p>
              <p>Idéal pour résidence ou investissement</p>
              <p>Titre : Clair & Enregistré</p>
            </div>
          </div>
        </div>
      </div>

      {/* Reservation Button */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
        <div className="text-center space-y-6">
          {/* Buy Button */}
          <div className="pt-4">
            <button
              onClick={scrollToForm}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-4 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg text-lg"
            >
              Réserver Maintenant
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
