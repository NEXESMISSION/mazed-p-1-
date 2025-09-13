import { useState } from 'react';

export function NewClientForm() {
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
      // Deployment ID: AKfycbwAxW4aZT_YRqN3UtsmzHwLN4aabH1zja6iQ9_Ji4IGSHS7cJYk2a9nMRQ94xNmd07IKg
      // Version 2 on Sep 13, 2025, 9:54 PM
      // ===================================================
      const scriptURL = 'https://script.google.com/macros/s/AKfycbwAxW4aZT_YRqN3UtsmzHwLN4aabH1zja6iQ9_Ji4IGSHS7cJYk2a9nMRQ94xNmd07IKg/exec';
      
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
                <p>Désolé, nous n'avons pas pu traiter votre demande. Veuillez réessayer ou nous contacter directement.</p>
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
  };

  return (
    <div id="client-form" className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-8">Réservez Votre Appartement</h2>
      
      <AlertMessage />

      <div className="bg-blue-50 p-6 rounded-lg mb-6">
        <div className="flex items-center mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <span className="font-semibold text-blue-700">Pour toute assistance</span>
        </div>
        <div className="flex gap-4 flex-col sm:flex-row">
          <a href="tel:+21658415521" className="flex items-center hover:text-blue-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span className="font-semibold text-gray-800">Appelez-nous: <span className="text-blue-600">58 415 521</span></span>
          </a>
          <a href="https://wa.me/21658415521" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-green-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
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
            placeholder="+216 XX XXX XXX"
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
            {isSubmitting ? 'Traitement en cours...' : 'Réserver Maintenant - Appartement S+2 Bouasida'}
          </button>
        </div>
      </form>

      <div className="text-center mt-6 space-y-2">
        <p className="text-sm text-gray-500">Achat sécurisé • Documentation légale complète • Garantie qualité</p>
        <p className="text-xs text-gray-400">🔒 Achat sécurisé | 📋 Documentation légale complète | ✅ Garantie qualité</p>
      </div>
    </div>
  );
}
