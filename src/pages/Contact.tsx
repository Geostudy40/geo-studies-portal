
import { useLanguage } from '@/context/LanguageContext';
import { MapPin, Phone, Mail } from 'lucide-react';
import { COMPANY_INFO } from '@/constants/companyInfo';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  const { t, language } = useLanguage();

  return (
    <div>
      {/* Header Section */}
      <section className="bg-geoblue-800 text-white py-20">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="heading-primary-light">{t('contactTitle')}</h1>
            <p className="text-xl max-w-3xl mx-auto">{t('contactSubtitle')}</p>
          </div>
        </div>
      </section>

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
              <p className="text-gray-600 mb-4">
                {language === 'en' ? 'Engineering Office for Geological Preliminary Studies' : COMPANY_INFO.subtitle}
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-geoblue-100 flex items-center justify-center text-geoblue-800">
                    <MapPin size={20} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{language === 'en' ? 'Address' : 'Adresse'}</h3>
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
                    <h3 className="text-lg font-medium text-gray-900">{language === 'en' ? 'Phone' : 'Telefon'}</h3>
                    <p className="mt-1 text-gray-600">{COMPANY_INFO.contact.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-geoblue-100 flex items-center justify-center text-geoblue-800">
                    <Mail size={20} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{language === 'en' ? 'Email' : 'E-Mail'}</h3>
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
            <div>
              <h2 className="text-2xl font-semibold text-geoblue-800 mb-6">
                {language === 'en' ? 'Send Message' : 'Nachricht senden'}
              </h2>
              
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
