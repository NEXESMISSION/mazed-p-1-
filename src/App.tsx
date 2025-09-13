import { Header } from './components/Header';
import { ProductImage } from './components/ProductImage';
import { ProductDetails } from './components/ProductDetails';
import { ProductDescription } from './components/ProductDescription';
import { ClientForm } from './components/ClientForm';
import { WhatsAppButton } from './components/WhatsAppButton';
import { CountdownTimer } from './components/CountdownTimer';

export default function App() {
  const mainProductImage = "https://i.ibb.co/NngLLn3f/Whats-App-Image-2025-09-13-at-15-37-06.jpg";
  
  const thumbnailImages = [
    "https://i.ibb.co/NngLLn3f/Whats-App-Image-2025-09-13-at-15-37-06.jpg",
    mainProductImage,
    "https://i.ibb.co/NngLLn3f/Whats-App-Image-2025-09-13-at-15-37-06.jpg",
    "https://i.ibb.co/NngLLn3f/Whats-App-Image-2025-09-13-at-15-37-06.jpg"
  ];

  return (
    <div className="min-h-screen bg-white">
      <CountdownTimer />
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Product section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-16 items-start">
          {/* Product image - centered alignment */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-full max-w-lg">
              <ProductImage 
                mainImage={mainProductImage}
                thumbnails={thumbnailImages}
              />
            </div>
          </div>

          {/* Product details - centered alignment */}
          <div className="flex justify-center lg:justify-start">
            <ProductDetails />
          </div>
        </div>

        {/* Product description section */}
        <div className="border-t border-gray-200 pt-16">
          <ProductDescription />
        </div>

        {/* Client Form Section - At the bottom */}
        <div className="border-t border-gray-200 pt-16 mt-16">
          <ClientForm />
        </div>
      </div>
      
      {/* WhatsApp Button - Fixed in bottom right corner */}
      <WhatsAppButton />
    </div>
  );
}
