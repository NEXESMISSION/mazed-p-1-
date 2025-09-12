import { Play, MapPin, Shield, Award } from 'lucide-react';
import { LocationMap } from './LocationMap';

export function ProductDescription() {
  const scrollToForm = () => {
    const formElement = document.getElementById('client-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="space-y-12" dir="rtl">
      {/* Product Video - Moved to top */}
      <div className="text-center space-y-8">
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold">اكتشف استثمارك العقاري المستقبلي</h2>
          <p className="text-gray-700">
            شاهد جولتنا التفصيلية للأرض ونظرة عامة عن التطوير لمشاهدة الإمكانات المذهلة لقطع أراضي أرضي المميزة.
          </p>
        </div>
        
        {/* Location Map */}
        <div className="max-w-4xl mx-auto">
          <LocationMap 
            latitude={34.9375278}
            longitude={10.6767778}
            googleMapsUrl="https://www.google.com/maps?q=34.9375278,10.6767778&entry=gps&lucs=,94284487,94224825,94227247,94227248,94231188,47071704,47069508,94218641,94282134,94203019,47084304&g_ep=CAISEjI1LjM1LjAuNzk5MDg4MzU1MBgAINeCAypjLDk0Mjg0NDg3LDk0MjI0ODI1LDk0MjI3MjQ3LDk0MjI3MjQ4LDk0MjMxMTg4LDQ3MDcxNzA0LDQ3MDY5NTA4LDk0MjE4NjQxLDk0MjgyMTM0LDk0MjAzMDE5LDQ3MDg0MzA0QgJUTg%3D%3D&skid=40203e5a-0f81-4f37-8c8e-8436da22dea2&g_st=ipc"
          />
        </div>
        
        <div className="relative bg-gray-900 rounded-xl overflow-hidden aspect-video max-w-4xl mx-auto mt-8">
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
        <h2 className="text-3xl font-semibold">عن أرض أرضي المميزة</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          أمّن مستقبلك مع فرص الاستثمار المميزة في الأراضي. تقدم أرض أرضي المميزة قيمة استثنائية في مواقع مختارة بعناية، مثالية للتطوير السكني أو التجاري. 
          يتم اختيار كل قطعة بعناية لإمكانات نموها وموقعها الاستراتيجي.
        </p>
        <p className="text-gray-700 leading-relaxed">
          استثمر في ازدهار الغد اليوم. تأتي قطع أراضينا المميزة مع صكوك ملكية واضحة، وسهولة وصول ممتازة، وتقع في مناطق سريعة النمو ذات إمكانيات عالية لارتفاع قيمتها. 
          كل عملية شراء تشمل دخولًا تلقائيًا في قرعتنا الحصرية للحصول على فرصة للفوز بقطعة أرض إضافية بمساحة 10 000 m².
        </p>
        
        {/* Basic Specifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 bg-gray-50 rounded-lg p-6">
          <div className="space-y-3">
            <h3 className="font-semibold text-lg flex items-center space-x-2 rtl:space-x-reverse">
              <MapPin className="w-5 h-5 text-green-600" />
              <span>الموقع والمساحة</span>
            </h3>
            <div className="text-gray-700 space-y-1">
              <p>المساحة: 10 000 m² (موقع مميز)</p>
              <p>التصنيف: تطوير متعدد الاستخدامات</p>
              <p>الوصول: واجهة على طريق معبد</p>
            </div>
          </div>
          
          <div className="space-y-3">
            <h3 className="font-semibold text-lg flex items-center space-x-2 rtl:space-x-reverse">
              <Shield className="w-5 h-5 text-blue-600" />
              <span>الجانب القانوني والخصائص</span>
            </h3>
            <div className="text-gray-700 space-y-1">
              <p>الصك: واضح ومسجل</p>
              <p>الخدمات: متوفرة في الجوار</p>
              <p>التطوير: جاهز للبناء</p>
            </div>
          </div>
        </div>
      </div>

      {/* Lottery Section with Buy Button */}
      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-8">
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse">
            <Award className="w-8 h-8 text-yellow-600" />
            <h2 className="text-2xl font-semibold text-yellow-800">🎉 سحب خاص ومميز!</h2>
          </div>
          <p className="text-yellow-700 text-lg max-w-3xl mx-auto">
            كل عملية شراء تسجلك تلقائيًا في سحبنا الحصري للفوز بـ
            <strong> قطعة أرض إضافية بمساحة 10 000 m² مجانًا تمامًا!</strong>
          </p>
          <p className="text-yellow-600 text-sm">سحب شهري. تطبق الشروط والأحكام.</p>
          
          {/* Buy Button */}
          <div className="pt-4">
            <button
              onClick={scrollToForm}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-4 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg text-lg"
            >
              احجز الآن - 125 000 €
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
