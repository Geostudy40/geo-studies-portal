
import { Map, FileText, Cpu, Ruler, BarChart, Building, Database, Microscope } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import ServiceCard from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const { t } = useLanguage();
  
  const coreServices = [
    { 
      title: t('serviceGeologicalRisk'), 
      description: t('serviceGeologicalRiskDesc'),
      icon: <Map size={24} />,
      detail: t('serviceGeologicalRiskDetail')
    },
    { 
      title: t('serviceAiStudies'), 
      description: t('serviceAiStudiesDesc'),
      icon: <Cpu size={24} />,
      detail: "Unsere KI-gestützten Vorstudien kombinieren Daten aus geologischen Karten, historischen Bohrungen und regionalen Bodendatenbanken, um präzise Vorhersagen über die Bodenbeschaffenheit zu treffen. Diese Methode spart Zeit und Kosten bei der Felduntersuchung."
    },
    { 
      title: t('serviceDrillingOpt'), 
      description: t('serviceDrillingOptDesc'),
      icon: <Ruler size={24} />,
      detail: "Basierend auf unseren Vorstudien entwickeln wir optimierte Pläne für Bohrungen und CPT-Tests. Durch die strategische Platzierung dieser Tests können wir die Anzahl der notwendigen Bohrungen minimieren und gleichzeitig die Qualität der Informationen maximieren."
    },
    { 
      title: t('serviceReports'), 
      description: t('serviceReportsDesc'),
      icon: <FileText size={24} />,
      detail: "Unsere Berichte entsprechen allen relevanten Eurocode- und DIN-Normen und bieten eine solide Grundlage für die weitere Planung. Wir präsentieren die Ergebnisse in einer klaren und verständlichen Form, die direkt in Ihre Planungsprozesse integriert werden kann."
    },
  ];

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
          
          {coreServices.map((service, index) => (
            <div key={index} className="mb-16 last:mb-0">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="bg-geolight p-8 rounded-lg shadow-md border border-gray-100 h-full">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-geoblue-100 text-geoblue-800 mb-6">
                      {service.icon}
                    </div>
                    <h3 className="heading-secondary">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                  </div>
                </div>
                
                <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h3 className="heading-secondary">Detaillierte Beschreibung</h3>
                  <p className="text-gray-600 mb-4 whitespace-pre-line">{service.detail}</p>
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
          ))}
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
