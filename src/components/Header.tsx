import { useLocation, Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

export function Header() {
  // Get current location to check if we're on a product page
  const location = useLocation();
  const isProductPage = location.pathname.includes('/product/');
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 py-4">
          {/* Back button - only shown on product pages */}
          <div className="w-24">
            {isProductPage && (
              <Link to="/" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                <ChevronLeft className="w-5 h-5 mr-1" />
                <span>Retour</span>
              </Link>
            )}
          </div>
          {/* Logo with image and text */}
          <div className="flex items-center space-x-3">
            <img 
              src="https://i.ibb.co/wZy2Cnjz/459279692-907587088073691-400628220378730618-n-removebg-preview.png" 
              alt="MAZED Logo" 
              className="h-16 w-auto"
            />
            <span className="text-2xl font-semibold text-black">MAZED</span>
          </div>
          
          {/* Empty div to balance the layout */}
          <div className="w-24"></div>
        </div>
      </div>
    </header>
  );
}
