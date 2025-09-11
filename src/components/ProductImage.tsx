import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductImageProps {
  mainImage: string;
  thumbnails?: string[];
}

export function ProductImage({ mainImage, thumbnails = [] }: ProductImageProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : thumbnails.length - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev < thumbnails.length - 1 ? prev + 1 : 0));
  };

  const currentImage = thumbnails.length > 0 ? thumbnails[currentImageIndex] : mainImage;

  return (
    <div className="space-y-4">
      {/* Main product image */}
      <div className="relative bg-gray-50 rounded-lg overflow-hidden aspect-square">
        <img
          src={currentImage}
          alt="ARDHI Premium Land"
          className="w-full h-full object-cover"
        />
        
        {/* Navigation arrows */}
        {thumbnails.length > 1 && (
          <>
            <button
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnail images */}
      <div className="flex space-x-2 overflow-x-auto pb-2">
        <button
          onClick={() => setCurrentImageIndex(0)}
          className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
            currentImageIndex === 0 ? 'border-black' : 'border-gray-200'
          }`}
        >
          <img src={mainImage} alt="Aerial view" className="w-full h-full object-cover" />
        </button>
        
        {thumbnails.map((thumbnail, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
              currentImageIndex === index ? 'border-black' : 'border-gray-200'
            }`}
          >
            <img src={thumbnail} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
