import { Header } from './components/Header';
import { ProductImage } from './components/ProductImage';
import { ProductDetails } from './components/ProductDetails';
import { ProductDescription } from './components/ProductDescription';
import { ClientForm } from './components/ClientForm';
import { WhatsAppButton } from './components/WhatsAppButton';
import { CountdownTimer } from './components/CountdownTimer';

export default function App() {
  const mainProductImage = "https://images.unsplash.com/photo-1685266325930-ffe4937f6eb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsYW5kJTIwcGxvdCUyMHByb3BlcnR5JTIwZGV2ZWxvcG1lbnR8ZW58MXx8fHwxNzU3NjEwOTc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
  
  const thumbnailImages = [
    "https://images.unsplash.com/photo-1659287588324-670572d02cc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YWNhbnQlMjBsYW5kJTIwYWVyaWFsJTIwdmlldyUyMGRldmVsb3BtZW50fGVufDF8fHx8MTc1NzYxMDk4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    mainProductImage,
    "https://images.unsplash.com/photo-1689574666546-75e1036e55fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGxhbmQlMjBkZXZlbG9wbWVudCUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NTc2MTA5ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1606500307322-61cf2c98aab3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9wZXJ0eSUyMHN1cnZleSUyMGxhbmQlMjBtZWFzdXJlbWVudHxlbnwxfHx8fDE3NTc2MTA5ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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
