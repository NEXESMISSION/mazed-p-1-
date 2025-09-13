import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { WhatsAppButton } from '../components/WhatsAppButton';

// Product Card Component
interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  location: string;
  size: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, title, description, price, image, location, size }) => {
  return (
    <Link 
      to={`/product/${id}`} 
      className="bg-white rounded-lg overflow-hidden shadow-md transition-all hover:shadow-lg border border-gray-200"
    >
      <div className="relative">
        <img 
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">
          Haut Standing
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-lg text-gray-800">{title}</h3>
        <p className="text-gray-600 text-sm line-clamp-2 mt-1">{description}</p>
        
        <div className="flex items-center mt-2 text-sm text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>{location}</span>
        </div>
        
        <div className="flex items-center mt-1 text-sm text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
          </svg>
          <span>{size}</span>
        </div>
        
        <div className="flex items-center justify-between mt-4">
          <span className="text-green-600 font-semibold">{price}</span>
          <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-3 py-1 text-sm transition-all">
            Voir détails
          </button>
        </div>
      </div>
    </Link>
  );
};

export const HomePage = () => {
  // Sample products data
  const products = [
    {
      id: "s-plus-2-gremda",
      title: "Appartement Haut Standing S+2",
      description: "Appartement S+2 idéal pour résidence ou investissement dans l'un des quartiers les plus prisés de Sfax.",
      price: "1 600 TND/m²",
      image: "https://i.ibb.co/HLWJcfdh/a1.png",
      location: "Sfax, Route Gremda km 6",
      size: "126 m²"
    },
    {
      id: "s-plus-3-gremda",
      title: "Appartement Haut Standing S+3",
      description: "Spacieux appartement S+3 avec finitions de haute qualité et emplacement stratégique à Sfax.",
      price: "1 700 TND/m²",
      image: "https://i.ibb.co/QFgjf6S6/2.png",
      location: "Sfax, Route Gremda km 5",
      size: "145 m²"
    },
    {
      id: "s-plus-1-ville",
      title: "Studio Haut Standing S+1",
      description: "Studio moderne avec finitions haut de gamme, parfait pour investissement locatif au centre-ville.",
      price: "1 800 TND/m²",
      image: "https://i.ibb.co/vx5c4nNW/3.png",
      location: "Sfax, Centre-ville",
      size: "65 m²"
    },
    {
      id: "s-plus-4-route-mahdia",
      title: "Villa Haut Standing S+4",
      description: "Magnifique villa avec finitions luxueuses, grand jardin et garage pour 2 voitures.",
      price: "2 200 TND/m²",
      image: "https://i.ibb.co/s9TQT0cm/4.png",
      location: "Sfax, Route Mahdia",
      size: "300 m²"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-8 mb-10 text-white text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Bienvenue chez MAZED Immobilier</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
            Découvrez nos appartements haut standing dans les meilleurs quartiers de Sfax
          </p>
        </div>
        
        {/* Filter Section - Simple version */}
        <div className="bg-white p-4 rounded-lg shadow mb-8">
          <h2 className="text-lg font-semibold mb-4">Filtrer les propriétés</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Type de bien</label>
              <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                <option>Tous les types</option>
                <option>Appartement</option>
                <option>Villa</option>
                <option>Studio</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Quartier</label>
              <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                <option>Tous les quartiers</option>
                <option>Route Gremda</option>
                <option>Centre-ville</option>
                <option>Route Mahdia</option>
                <option>Autres quartiers</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Budget max</label>
              <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                <option>Sans limite</option>
                <option>150 000 TND</option>
                <option>200 000 TND</option>
                <option>250 000 TND</option>
                <option>300 000 TND</option>
              </select>
            </div>
            
            <div className="flex items-end">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md transition-all">
                Rechercher
              </button>
            </div>
          </div>
        </div>
        
        {/* Products Grid */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Nos propriétés à vendre</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard 
                key={product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                price={product.price}
                image={product.image}
                location={product.location}
                size={product.size}
              />
            ))}
          </div>
        </div>
        
        {/* About Section */}
        <div className="mt-16 bg-white p-8 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">À Propos de MAZED</h2>
          <p className="text-gray-700">
            Avec MAZED Immobilier, sécurisez votre futur dans l'un des quartiers les plus prisés de Sfax. 
            Nos appartements sont soigneusement conçus pour allier confort moderne et valeur patrimoniale durable.
            Nous nous engageons à fournir des propriétés de haute qualité avec une documentation légale complète 
            et un service client exceptionnel.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-medium text-blue-700 mb-2">Haut standing</h3>
              <p className="text-sm text-gray-600">
                Des finitions de qualité supérieure et des matériaux premium pour un confort optimal.
              </p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-medium text-blue-700 mb-2">Emplacement stratégique</h3>
              <p className="text-sm text-gray-600">
                Des propriétés situées dans les quartiers les plus recherchés de Sfax.
              </p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-medium text-blue-700 mb-2">Documentation complète</h3>
              <p className="text-sm text-gray-600">
                Titres clairs et enregistrés, garantissant une transaction sécurisée.
              </p>
            </div>
          </div>
        </div>
        
        {/* Contact Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg shadow">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold mb-2">Contactez-nous</h2>
            <p className="text-gray-600">Nous sommes à votre disposition pour toute information supplémentaire</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a 
              href="tel:+21658415513"
              className="bg-white border border-gray-200 shadow-sm rounded-lg p-5 flex items-center justify-center gap-3 transition-all hover:bg-gray-50 hover:border-gray-300 w-full md:w-auto"
            >
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"></path>
              </svg>
              <span className="font-semibold text-gray-800">Appelez-nous: <span className="text-blue-600">58 415 513</span></span>
            </a>
            
            <a 
              href="https://wa.me/+21658415521"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-gray-200 shadow-sm rounded-lg p-5 flex items-center justify-center gap-3 transition-all hover:bg-gray-50 hover:border-gray-300 w-full md:w-auto"
            >
              <svg className="w-6 h-6 text-green-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 012.41 5.83c0 4.54-3.7 8.23-8.24 8.23-1.48 0-2.93-.39-4.19-1.15l-.3-.17-3.12.82.83-3.04-.2-.32a8.188 8.188 0 01-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31-.22.25-.87.86-.87 2.07 0 1.22.89 2.39 1 2.56.12.17 1.75 2.67 4.23 3.74.59.27 1.05.42 1.41.53.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.16-.48-.27-.25-.14-1.47-.74-1.69-.82-.23-.08-.37-.12-.56.12-.16.25-.64.81-.78.97-.15.17-.29.19-.53.07-.26-.13-1.06-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.12-.24-.01-.39.11-.5.11-.11.27-.29.37-.44.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.11-.56-1.35-.77-1.84-.2-.48-.4-.42-.56-.43-.14 0-.3-.01-.47-.01z"/>
              </svg>
              <span className="font-semibold text-gray-800">WhatsApp: <span className="text-green-600">58 415 521</span></span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 mt-20 py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">MAZED Immobilier</h3>
              <p className="text-sm text-gray-400">
                Spécialiste de l'immobilier haut standing à Sfax. Nous offrons des propriétés de qualité exceptionnelle 
                dans les meilleurs quartiers de la ville.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <span>Sfax, Tunisie – Route Gremda km 6, Markaz Kamoun</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  <span>58 415 513</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
                  </svg>
                  <span>contact@mazed-immobilier.tn</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                    À propos
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} MAZED Immobilier. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
      
      {/* WhatsApp Button - Fixed in bottom right corner */}
      <WhatsAppButton />
    </div>
  );
};

export default HomePage;
