import { Play, MapPin, Shield, Award } from 'lucide-react';

export function ProductDescription() {
  const scrollToForm = () => {
    const formElement = document.getElementById('client-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="space-y-12">
      {/* Product Video - Moved to top */}
      <div className="text-center space-y-8">
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold">Découvrez Votre Futur Investissement Terrain</h2>
          <p className="text-gray-700">
            Regardez notre visite détaillée du terrain et aperçu du développement pour voir l'incroyable potentiel des parcelles ARDHI Terrain Premium.
          </p>
        </div>
        
        <div className="relative bg-gray-900 rounded-xl overflow-hidden aspect-video max-w-4xl mx-auto">
          <img
            src="https://images.unsplash.com/photo-1685266325930-ffe4937f6eb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsYW5kJTIwcGxvdCUyMHByb3BlcnR5JTIwZGV2ZWxvcG1lbnR8ZW58MXx8fHwxNzU3NjEwOTc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Vidéo de développement du terrain"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <button className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-6 transition-all transform hover:scale-110">
              <Play className="w-12 h-12 text-gray-900 ml-1" />
            </button>
          </div>
          <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded text-sm">
            4:15
          </div>
        </div>
      </div>

      {/* Land Overview - Reduced to 2 paragraphs */}
      <div className="text-center space-y-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold">À Propos d'ARDHI Terrain Premium</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          Sécurisez votre avenir avec des opportunités d'investissement terrain premium. ARDHI Terrain Premium offre une 
          valeur exceptionnelle dans des emplacements de choix, parfaits pour le développement résidentiel ou commercial. 
          Chaque parcelle est soigneusement sélectionnée pour son potentiel de croissance et son emplacement stratégique.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Investissez dans la prospérité de demain aujourd'hui. Nos parcelles de terrain premium sont livrées avec des titres 
          clairs, une excellente accessibilité, et sont situées dans des zones en développement rapide avec un fort potentiel 
          d'appréciation. Chaque achat inclut une entrée automatique à notre loterie exclusive pour une chance de gagner une 
          parcelle supplémentaire de 10 000 m².
        </p>
        
        {/* Basic Specifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 bg-gray-50 rounded-lg p-6">
          <div className="space-y-3">
            <h3 className="font-semibold text-lg flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-green-600" />
              <span>Emplacement & Superficie</span>
            </h3>
            <div className="text-gray-700 space-y-1">
              <p>Superficie : 10 000 m² (Emplacement Premium)</p>
              <p>Zonage : Développement Mixte</p>
              <p>Accès : Façade Route Goudronnée</p>
            </div>
          </div>
          
          <div className="space-y-3">
            <h3 className="font-semibold text-lg flex items-center space-x-2">
              <Shield className="w-5 h-5 text-blue-600" />
              <span>Légal & Caractéristiques</span>
            </h3>
            <div className="text-gray-700 space-y-1">
              <p>Titre : Clair & Enregistré</p>
              <p>Services : Disponibles à Proximité</p>
              <p>Développement : Prêt pour Construction</p>
            </div>
          </div>
        </div>
      </div>

      {/* Lottery Section with Buy Button */}
      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-8">
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center space-x-2">
            <Award className="w-8 h-8 text-yellow-600" />
            <h2 className="text-2xl font-semibold text-yellow-800">🎉 Tirage au Sort Spécial !</h2>
          </div>
          <p className="text-yellow-700 text-lg max-w-3xl mx-auto">
            Chaque achat vous inscrit automatiquement à notre tirage au sort exclusif pour gagner un 
            <strong> terrain supplémentaire de 10 000 m² entièrement GRATUIT !</strong>
          </p>
          <p className="text-yellow-600 text-sm">Tirage mensuel. Conditions générales applicables.</p>
          
          {/* Buy Button */}
          <div className="pt-4">
            <button
              onClick={scrollToForm}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-4 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg text-lg"
            >
              Réserver Maintenant - 125 000 €
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
