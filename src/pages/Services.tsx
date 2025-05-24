
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import ServiceCard from '@/components/ServiceCard';
import DetailedServiceCard from '@/components/DetailedServiceCard';
import ServicesHeader from '@/components/ServicesHeader';
import ServiceProcess from '@/components/ServiceProcess';
import { getServices } from '@/data/servicesData';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const { language, t } = useLanguage();
  const { coreServices, additionalServices } = getServices(language);
  
  return (
    <div className="page-transition">
      {/* Header Section */}
      <ServicesHeader />
      
      {/* Core Services Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12 text-geoblue-800">
            {language === 'de' ? 'Unsere Kernleistungen' : 'Our Core Services'}
          </h2>
          
          {coreServices.map((service, index) => (
            <DetailedServiceCard 
              key={index} 
              service={service} 
              index={index} 
            />
          ))}
        </div>
      </section>
      
      {/* Additional Services Section */}
      <section className="py-16 bg-geolight">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12 text-geoblue-800">
            {language === 'de' ? 'Zusätzliche Dienstleistungen' : 'Additional Services'}
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Final Call-to-Action Section */}
      <section className="py-16 bg-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6 text-geoblue-800">
            {language === 'de' ? 'Bereit für Ihr nächstes Projekt?' : 'Ready for your next project?'}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
            {language === 'de' 
              ? 'Kontaktieren Sie uns noch heute für ein unverbindliches Beratungsgespräch zu Ihrem Bauvorhaben.'
              : 'Contact us today for a no-obligation consultation about your construction project.'}
          </p>
          <Button asChild size="lg" className="bg-geoblue-800 hover:bg-geoblue-700 text-white px-8 py-6 text-lg font-medium">
            <Link to="/contact">
              {language === 'de' ? 'Beratungsgespräch vereinbaren' : 'Schedule a consultation'}
            </Link>
          </Button>
        </div>
      </section>
      
      {/* Service Process Section */}
      <ServiceProcess />
    </div>
  );
};

export default Services;
