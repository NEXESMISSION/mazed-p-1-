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
        <div className="text-center space-y-4 mb-8">
          <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900">Réservez Votre Terrain Maintenant</h2>
          <p className="text-gray-600 text-lg">Remplissez vos informations pour sécuriser votre ARDHI Terrain Premium</p>
          <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4 inline-block">
            <p className="text-yellow-800 font-medium">🎯 Entrée automatique au tirage au sort incluse !</p>
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
              className={`w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-semibold py-4 px-8 rounded-lg transition-all transform hover:scale-[1.02] shadow-lg text-lg ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Traitement en cours...' : 'Acheter Maintenant - 125 000 € + Entrée Loterie'}
            </button>
          </div>
        </form>

        <div className="text-center mt-6 space-y-2">
          <p className="text-sm text-gray-500">Achat sécurisé • Documentation légale • Garantie 30 jours</p>
          <p className="text-xs text-gray-400">🔒 Paiement 100% sécurisé | 📋 Tous documents légaux inclus | 🎁 Entrée loterie automatique</p>
        </div>
      </div>
    </div>
  );
}
