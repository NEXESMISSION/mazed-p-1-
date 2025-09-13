import React from 'react';
import { Header } from '../components/Header';
import { ProductImage } from '../components/ProductImage';
import { NewProductDetails } from '../components/NewProductDetails';
import { NewProductDescription } from '../components/NewProductDescription';
import { NewClientForm } from '../components/NewClientForm';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { NewCountdownTimer } from '../components/NewCountdownTimer';

export const NewProductDetailPage = () => {
  const mainProductImage = "https://i.ibb.co/jZf9kpw8/14.png";
  
  const thumbnailImages = [
    "https://i.ibb.co/jZf9kpw8/14.png", // Main image
    "https://i.ibb.co/xttS9q0M/15.png",
    "https://i.ibb.co/VYMZQSVf/16.png",
    "https://i.ibb.co/ccFjBFF6/17.png",
    "https://i.ibb.co/b5jC7CrN/18.png",
    "https://i.ibb.co/7Nn5jbnp/19.png",
    "https://i.ibb.co/N6JcWHVJ/20.png",
    "https://i.ibb.co/6RR3yN5g/21.png",
    "https://i.ibb.co/rGJ02frV/22.png",
    "https://i.ibb.co/Ndd30KFT/23.png",
    "https://i.ibb.co/p6S0fbW3/24.png",
    "https://i.ibb.co/G4z9cdWT/13.png"
  ];

  return (
    <div className="min-h-screen bg-white">
      <NewCountdownTimer />
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
            <NewProductDetails />
          </div>
        </div>

        {/* Product description section */}
        <div className="border-t border-gray-200 pt-16">
          <NewProductDescription />
        </div>

        {/* Client Form Section - At the bottom */}
        <div className="border-t border-gray-200 pt-16 mt-16">
          <NewClientForm />
        </div>
      </div>
      
      {/* WhatsApp Button - Fixed in bottom right corner */}
      <WhatsAppButton />
    </div>
  );
};

export default NewProductDetailPage;
