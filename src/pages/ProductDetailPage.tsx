import React from 'react';
import { Header } from '../components/Header';
import { ProductImage } from '../components/ProductImage';
import { ProductDetails } from '../components/ProductDetails';
import { ProductDescription } from '../components/ProductDescription';
import { ClientForm } from '../components/ClientForm';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { CountdownTimer } from '../components/CountdownTimer';

export const ProductDetailPage = () => {
  const mainProductImage = "https://i.ibb.co/HLWJcfdh/a1.png";
  
  const thumbnailImages = [
    "https://i.ibb.co/HLWJcfdh/a1.png", // a1 as first image
    "https://i.ibb.co/QFgjf6S6/2.png",
    "https://i.ibb.co/vx5c4nNW/3.png",
    "https://i.ibb.co/s9TQT0cm/4.png",
    "https://i.ibb.co/spZ67rWd/5.png",
    "https://i.ibb.co/CKpVCQb9/6.png",
    "https://i.ibb.co/chR8MfzH/8.png"
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
};

export default ProductDetailPage;
