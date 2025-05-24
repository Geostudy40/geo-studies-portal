

import { Map, FileText, Cpu, Ruler, BarChart, Building, Database, Microscope } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import ServiceCard from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { getServicesData } from '../data/servicesData';

const Services = () => {
  console.log('[Services] Component loading...');
  
  const { t, language } = useLanguage();
  
  console.log('[Services] Language:', language);
  
  let servicesData;
  let coreServices;
  
  try {
    servicesData = getServicesData(language);
    coreServices = servicesData;
    console.log('[Services] Services data loaded successfully:', coreServices.length, 'services');
  } catch (error) {
    console.error('[Services] Error loading services data:', error);
    coreServices = [];
  }

  const additionalServices = [
    { 
      title: "Datenintegration und -analyse", 
      description: "Zusammenführung verschiedener Datenquellen für umfassende geotechnische Analysen.",
      icon: <Database size={24} /> 
    },
    { 
      title: "Baubegleitung", 
      description: "Geotechnische Unterstützung während der Bauphase zur Lösung unerwarteter Probleme.",
      icon: <Building size={24} /> 
    },
    { 
      title: "Risikobewertung", 
      description: "Identifikation und Quantifizierung geotechnischer Risiken für Ihr Projekt.",
      icon: <BarChart size={24} /> 
    },
    { 
      title: "Spezialuntersuchungen", 
      description: "Maßgeschneiderte Untersuchungen für besondere geotechnische Herausforderungen.",
      icon: <Microscope size={24} /> 
    },
  ];

  // Accent colors for gray blocks
  const accentColors = [
    'border-blue-700', // #1e40af
    'border-green-600', // #059669  
    'border-orange-600', // #ea580c
    'border-purple-600' // #9333ea
  ];

  return (
    <div>
      {/* Header Section */}
      <section className="bg-geoblue-800 text-white py-20">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="heading-primary-light">{t('servicesTitle')}</h1>
            <p className="text-xl max-w-3xl mx-auto">{t('servicesSubtitle')}</p>
          </div>
        </div>
      </section>
      
      {/* Core Services Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-heading">
            Unsere Kernleistungen
          </h2>
          
          {coreServices && coreServices.length > 0 ? (
            coreServices.map((service, index) => (
              <div key={index} className="mb-16 last:mb-0">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className={`bg-geolight p-8 rounded-lg shadow-md border border-gray-100 border-l-4 ${accentColors[index % accentColors.length]} h-full`}>
                      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-geoblue-100 text-geoblue-800 mb-6 mx-auto">
                        {service.icon}
                      </div>
                      <h3 className="heading-secondary text-center">{service.title}</h3>
                      <div 
                        className="text-gray-600 mb-4 text-left"
                        dangerouslySetInnerHTML={{ __html: service.description?.replace(/-/g, '•') || '' }}
                      />
                    </div>
                  </div>
                  
                  <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <h3 className="heading-secondary">Detaillierte Beschreibung</h3>
                    <div 
                      className="text-gray-600 mb-4"
                      dangerouslySetInnerHTML={{ __html: service.detail?.replace(/-/g, '•') || '' }}
                    />
                    <div className="bg-geoblue-50 border-l-4 border-geoblue-800 p-4 mb-6">
                      <p className="text-gray-700 italic">
                        "Unsere {service.title} bietet eine solide Grundlage für kosteneffiziente und sichere Bauprojekte."
                      </p>
                    </div>
                    
                    {index === 0 && (
                      <div className="mt-6">
                        <Button asChild className="bg-geoblue-800 hover:bg-geoblue-900">
                          <Link to="/contact">{t('contactForConsultation')}</Link>
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-600">Dienstleistungen werden geladen...</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Additional Services Section */}
      <section className="py-16 bg-geolight">
        <div className="container-custom">
          <h2 className="section-heading">
            Zusätzliche Dienstleistungen
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>

          {/* CPT-Analyse Highlight */}
          <div className="mt-12">
            <div className="bg-gradient-to-r from-geoblue-700 to-geoblue-800 text-white rounded-lg shadow-lg p-8 text-center">
              <div className="flex justify-center mb-4">
                <BarChart size={48} className="text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Spezialisierte CPT-Analyse</h3>
              <p className="mb-6 text-lg">
                KI-gestützte Auswertung von Drucksondierungen nach internationalen Standards
              </p>
              <p className="mb-8 text-sm opacity-90">
                Automatische Bodenklassifikation • Geotechnische Parameterbewertung • Projektspezifische Methodenauswahl
              </p>
              <Button asChild className="bg-white text-geoblue-600 hover:bg-gray-100 font-medium">
                <Link to="/cpt-analysis">
                  CPT-Analyse entdecken →
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Service Process Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-heading">
            Unser Prozess
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="relative">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-geoblue-800 text-white text-xl font-bold mb-6 z-10 relative mx-auto">
                1
              </div>
              <div className="hidden md:block absolute top-8 left-1/2 w-full h-1 bg-geoblue-200 -z-10"></div>
              <h3 className="text-xl font-semibold text-geoblue-800 mb-3 text-center">Anfrage & Beratung</h3>
              <p className="text-gray-600 text-center">
                Wir besprechen Ihr Projekt und Ihre spezifischen Anforderungen.
              </p>
            </div>
            
            <div className="relative">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-geoblue-800 text-white text-xl font-bold mb-6 z-10 relative mx-auto">
                2
              </div>
              <div className="hidden md:block absolute top-8 left-1/2 w-full h-1 bg-geoblue-200 -z-10"></div>
              <h3 className="text-xl font-semibold text-geoblue-800 mb-3 text-center">Datensammlung</h3>
              <p className="text-gray-600 text-center">
                Wir sammeln alle relevanten Daten und führen erste Analysen durch.
              </p>
            </div>
            
            <div className="relative">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-geoblue-800 text-white text-xl font-bold mb-6 z-10 relative mx-auto">
                3
              </div>
              <div className="hidden md:block absolute top-8 left-1/2 w-full h-1 bg-geoblue-200 -z-10"></div>
              <h3 className="text-xl font-semibold text-geoblue-800 mb-3 text-center">KI-Analyse & Planung</h3>
              <p className="text-gray-600 text-center">
                Unsere KI-Systeme analysieren die Daten und erstellen optimierte Untersuchungspläne.
              </p>
            </div>
            
            <div className="relative">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-geoblue-800 text-white text-xl font-bold mb-6 z-10 relative mx-auto">
                4
              </div>
              <h3 className="text-xl font-semibold text-geoblue-800 mb-3 text-center">Berichterstellung</h3>
              <p className="text-gray-600 text-center">
                Wir erstellen detaillierte, normkonforme Berichte mit klaren Handlungsempfehlungen.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

