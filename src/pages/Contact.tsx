
import { useLanguage } from '@/context/LanguageContext';
import { MapPin, Phone, Mail } from 'lucide-react';
import { COMPANY_INFO } from '@/constants/companyInfo';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <div className="py-12 md:py-20 bg-[#E9ECF5]">
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
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-geoblue-800 mb-6">{COMPANY_INFO.name}</h2>
            <p className="text-gray-600 mb-4">{COMPANY_INFO.subtitle}</p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-geoblue-100 flex items-center justify-center text-geoblue-800">
                  <MapPin size={20} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Adresse</h3>
                  <p className="mt-1 text-gray-600">
                    {COMPANY_INFO.address.street}<br />
                    {COMPANY_INFO.address.postcode} {COMPANY_INFO.address.city}<br />
                    {COMPANY_INFO.address.country}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-geoblue-100 flex items-center justify-center text-geoblue-800">
                  <Phone size={20} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Telefon</h3>
                  <p className="mt-1 text-gray-600">{COMPANY_INFO.contact.phone}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-geoblue-100 flex items-center justify-center text-geoblue-800">
                  <Mail size={20} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">E-Mail</h3>
                  <p className="mt-1 text-gray-600">{COMPANY_INFO.contact.email}</p>
                </div>
              </div>
            </div>
            
            {/* Google Maps */}
            <div className="mt-8 h-64 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2430.5897247882747!2d13.283013776807416!3d52.41899997209145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a85a657d832a69%3A0x4a4d5f4ea6d62d46!2sAm%20Stichkanal%202-4%2C%2014167%20Berlin!5e0!3m2!1sen!2sde!4v1709669153811!5m2!1sen!2sde"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
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
