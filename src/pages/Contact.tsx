
import { useLanguage } from '@/context/LanguageContext';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <div className="py-12 md:py-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-geoblue-800 mb-4">
            {t('contactTitle')}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('contactSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-geoblue-800 mb-6">Kontaktinformationen</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-geoblue-100 flex items-center justify-center text-geoblue-800">
                  <MapPin size={20} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Adresse</h3>
                  <p className="mt-1 text-gray-600">
                    GeoStudy GmbH<br />
                    Musterstraße 123<br />
                    10115 Berlin<br />
                    Deutschland
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-geoblue-100 flex items-center justify-center text-geoblue-800">
                  <Phone size={20} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Telefon</h3>
                  <p className="mt-1 text-gray-600">+49 (0) 30 1234567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-geoblue-100 flex items-center justify-center text-geoblue-800">
                  <Mail size={20} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">E-Mail</h3>
                  <p className="mt-1 text-gray-600">info@geostudy.de</p>
                </div>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="mt-8 bg-gray-200 h-64 rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                Google Maps Karte (In Produktionsversion einbinden)
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-geoblue-800 mb-6">Nachricht senden</h2>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">{t('nameLabel')}</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-geoblue-500 focus:border-geoblue-500"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">{t('emailLabel')}</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-geoblue-500 focus:border-geoblue-500"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">{t('phoneLabel')}</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-geoblue-500 focus:border-geoblue-500"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">{t('messageLabel')}</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-geoblue-500 focus:border-geoblue-500"
                ></textarea>
              </div>
              
              <div>
                <label htmlFor="files" className="block text-sm font-medium text-gray-700 mb-1">{t('fileUploadLabel')}</label>
                <input 
                  type="file" 
                  id="files" 
                  multiple
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-geoblue-500 focus:border-geoblue-500 text-sm text-gray-500"
                />
                <p className="mt-1 text-sm text-gray-500">
                  Max. Dateigröße: 10MB pro Datei
                </p>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-geoblue-800 text-white py-3 px-6 rounded-md hover:bg-geoblue-700 transition-colors font-medium"
              >
                {t('sendButton')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
