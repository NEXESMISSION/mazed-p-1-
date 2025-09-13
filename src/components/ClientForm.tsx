import { useState } from 'react';

export function ClientForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [alertVisible, setAlertVisible] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // ===================================================
      // GOOGLE SHEETS INTEGRATION
      // ===================================================
      // Google Apps Script Web App URL
      // Deployment ID: AKfycbwoGTigOp6NDSwYhnNvLA9aO5b_VFYXNVp_uosD3YRpNCmcNDvMyL9zrvoghs7vRE_TFg
      // Deployed on: Sep 11, 2025, 7:09 PM
      // ===================================================
      const scriptURL = 'https://script.google.com/macros/s/AKfycbwoGTigOp6NDSwYhnNvLA9aO5b_VFYXNVp_uosD3YRpNCmcNDvMyL9zrvoghs7vRE_TFg/exec';
      
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'no-cors' // This might be needed depending on your CORS setup
      });
      
      // When using no-cors, we can't read the response status
      // So we'll assume success if no error is thrown
      const isSuccessful = response.type === 'opaque' ? true : response.ok;
      
      if (isSuccessful) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: ''
        });
        setAlertVisible(true);
      } else {
        setSubmitStatus('error');
        setAlertVisible(true);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setAlertVisible(true);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Alert component based on status
  const AlertMessage = () => {
    if (!alertVisible) return null;
    
    if (submitStatus === 'success') {
      return (
        <>
          {/* Overlay with blur effect */}
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40" onClick={() => setAlertVisible(false)}></div>
          
          {/* Centered alert */}
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-md w-full bg-green-50 border-l-4 border-green-500 p-4 rounded shadow-lg animate-fade-in z-50">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-green-800">Commande soumise avec succès !</h3>
                <div className="mt-2 text-sm text-green-700">
                  <p>Merci pour votre réservation. Notre équipe vous contactera prochainement.</p>
                </div>
                <button 
                  onClick={() => setAlertVisible(false)}
                  className="mt-2 text-sm font-medium bg-green-100 px-3 py-1 rounded-md text-green-800 hover:bg-green-200 transition-colors"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </>
      );
    }
    
    if (submitStatus === 'error') {
      return (
        <>
          {/* Overlay with blur effect */}
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40" onClick={() => setAlertVisible(false)}></div>
          
          {/* Centered alert */}
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-md w-full bg-red-50 border-l-4 border-red-500 p-4 rounded shadow-lg animate-fade-in z-50">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">Une erreur est survenue</h3>
                <div className="mt-2 text-sm text-red-700">
                  <p>Veuillez réessayer plus tard ou nous contacter directement.</p>
                </div>
                <button 
                  onClick={() => setAlertVisible(false)}
                  className="mt-2 text-sm font-medium bg-red-100 px-3 py-1 rounded-md text-red-800 hover:bg-red-200 transition-colors"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </>
      );
    }
    
    return null;
  }

  return (
    <div id="client-form" className="max-w-4xl mx-auto">
      {/* Alert message that appears on form submission */}
      <AlertMessage />
      
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 lg:p-12 shadow-lg border border-blue-100">
        <div className="space-y-4 mb-8 text-center">
          <h2 className="text-3xl font-semibold" id="client-form">Réserver Votre Appartement S+2</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Complétez ce formulaire pour réserver votre appartement MAZED haut standing S+2 et bénéficier de nos offres exclusives. Un membre de notre équipe vous contactera dans les 24h.
          </p>

          <div className="bg-blue-100 border border-blue-300 rounded-lg p-4 mt-4">
            <p className="text-blue-800 font-medium">🔒 Achat sécurisé • 📋 Documentation légale complète • ✅ Garantie qualité</p>
          </div>

          {/* Phone number display */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
            <a 
              href="tel:+21658415513"
              className="bg-white border border-gray-200 shadow-sm rounded-lg p-4 flex items-center justify-center gap-3 transition-all hover:bg-gray-50 hover:border-gray-300 w-full md:w-auto"
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
              className="bg-white border border-gray-200 shadow-sm rounded-lg p-4 flex items-center justify-center gap-3 transition-all hover:bg-gray-50 hover:border-gray-300 w-full md:w-auto"
            >
              <svg className="w-6 h-6 text-green-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 012.41 5.83c0 4.54-3.7 8.23-8.24 8.23-1.48 0-2.93-.39-4.19-1.15l-.3-.17-3.12.82.83-3.04-.2-.32a8.188 8.188 0 01-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31-.22.25-.87.86-.87 2.07 0 1.22.89 2.39 1 2.56.12.17 1.75 2.67 4.23 3.74.59.27 1.05.42 1.41.53.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.16-.48-.27-.25-.14-1.47-.74-1.69-.82-.23-.08-.37-.12-.56.12-.16.25-.64.81-.78.97-.15.17-.29.19-.53.07-.26-.13-1.06-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.12-.24-.01-.39.11-.5.11-.11.27-.29.37-.44.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.11-.56-1.35-.77-1.84-.2-.48-.4-.42-.56-.43-.14 0-.3-.01-.47-.01z"/>
              </svg>
              <span className="font-semibold text-gray-800">WhatsApp: <span className="text-green-600">58 415 521</span></span>
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Name Field */}
          <div className="space-y-3">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">
              Nom Complet
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Entrez votre nom complet"
            />
          </div>

          {/* Email Field */}
          <div className="space-y-3">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">
              Adresse Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="votre@email.com"
            />
          </div>

          {/* Phone Field */}
          <div className="space-y-3">
            <label htmlFor="phone" className="text-sm font-medium text-gray-700">
              Numéro de Téléphone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="+33 1 23 45 67 89"
            />
          </div>

          {/* Address Field */}
          <div className="space-y-3">
            <label htmlFor="address" className="text-sm font-medium text-gray-700">
              Adresse
            </label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all"
              placeholder="Votre adresse complète"
            />
          </div>

          {/* Buy Now Button - Full width on both columns */}
          <div className="lg:col-span-2 pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all transform hover:scale-[1.02] shadow-lg text-lg ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Traitement en cours...' : 'Réserver Maintenant - Appartement S+2'}
            </button>
          </div>
        </form>

        <div className="text-center mt-6 space-y-2">
          <p className="text-sm text-gray-500">Achat sécurisé • Documentation légale complète • Garantie qualité</p>
          <p className="text-xs text-gray-400">🔒 Achat sécurisé | 📋 Documentation légale complète | ✅ Garantie qualité</p>
        </div>
      </div>
    </div>
  );
}
