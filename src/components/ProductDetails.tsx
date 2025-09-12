import { Star, MapPin, Award } from 'lucide-react';
import { AvailableLandCounter } from './AvailableLandCounter';

export function ProductDetails() {
  return (
    <div className="space-y-6 max-w-lg mx-auto lg:mx-0" dir="rtl">
      {/* Product header */}
      <div className="space-y-3">
        <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-gray-600">
          <MapPin className="w-4 h-4" />
          <span>أرض مميزة</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-semibold text-black">أرض أرضي المميزة</h1>
        
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
          <span className="text-sm text-gray-600">+500 مستثمر سعيد</span>
        </div>

        {/* Special offer badge */}
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <Award className="w-5 h-5 text-green-600" />
          <span className="text-green-600 font-medium">عرض إطلاق خاص + دخول السحب</span>
        </div>
        
        {/* Available land counter */}
        <div className="mt-1">
          <AvailableLandCounter count={49} />
        </div>
      </div>

      {/* Price */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <span className="text-2xl md:text-3xl font-semibold text-black">125 000 €</span>
          <span className="text-lg text-gray-500 line-through">150 000 €</span>
          <span className="bg-red-500 text-white px-2 py-1 rounded text-sm">-17%</span>
        </div>
        
        {/* Compact counter for medium/large screens */}
        <div className="hidden md:block">
          <AvailableLandCounter count={49} variant="compact" />
        </div>
      </div>

      {/* Land size */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <span className="text-green-800 font-medium">مساحة الأرض:</span>
          <span className="text-green-900 font-semibold text-lg">10 000 m²</span>
        </div>
        <p className="text-green-700 text-sm mt-1">مثالية للتطوير السكني أو التجاري</p>
      </div>

      {/* Lottery announcement */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <h3 className="font-semibold text-yellow-800 mb-2">🎉 سحب خاص!</h3>
        <p className="text-yellow-700 text-sm">
          كل عملية شراء تسجلك تلقائيًا في سحبنا الحصري للفوز بـ
          <strong> أرض إضافية بمساحة 10 000 m² مجانًا تمامًا!</strong>
        </p>
        <p className="text-yellow-600 text-xs mt-2">سحب شهري. تطبق الشروط والأحكام.</p>
      </div>
    </div>
  );
}
