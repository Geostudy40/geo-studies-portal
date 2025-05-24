
import { Map, FileText, Cpu, Ruler } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import LegalNotice from '@/components/LegalNotice';

const Index = () => {
  const { t, language } = useLanguage();

  const services = [
    { 
      title: t('serviceGeologicalRisk'), 
      description: t('serviceGeologicalRiskDesc'),
      icon: <Map size={24} /> 
    },
    { 
      title: t('serviceAiStudies'), 
      description: t('serviceAiStudiesDescUpdated'),
      icon: <Cpu size={24} /> 
    },
    { 
      title: t('serviceDrillingOptimized'), 
      description: t('serviceDrillingOptimizedDesc'),
      icon: <Ruler size={24} /> 
    },
    { 
      title: t('serviceReportsUpdated'), 
      description: t('serviceReportsUpdatedDesc'),
      icon: <FileText size={24} /> 
    },
  ];

  return (
    <div>
      <Hero />
      
      {/* Services Section */}
      <section className="py-20 bg-[#E9ECF5]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-geoblue-800 mb-4">
              {t('servicesTitle')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('servicesSubtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/services" className="btn-secondary">
              {language === 'de' ? 'Alle Leistungen anzeigen' : 'View All Services'}
            </Link>
          </div>
          
          <LegalNotice />
        </div>
      </section>
      
      {/* About Preview Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-geoblue-800 mb-6">
                {t('aboutTitle')}
              </h2>
              <div className="text-gray-600 space-y-4 mb-8">
                {language === 'de' ? (
                  <>
                    <p>
                      Als erfahrene Geologen kombinieren wir traditionelles Fachwissen mit innovativen KI-Technologien, um präzise und kosteneffiziente geotechnische Vorstudien durchzuführen.
                    </p>
                    <p>
                      Unser interdisziplinäres Experten-Netzwerk vereint Fachleute aus den Bereichen Geologie, Hydrologie, Bauingenieurwesen und Datenanalyse mit 10-25 Jahren Berufserfahrung in Deutschland und anderen europäischen Ländern. Diese moderne Netzwerkstruktur ermöglicht es uns, die Projekte unserer Kunden besonders effizient, normgerecht und kostengünstig voranzutreiben.
                    </p>
                    <p>
                      Unsere Expertise ermöglicht es uns, potenzielle Risiken frühzeitig zu identifizieren und Lösungen vorzuschlagen, die Zeit und Kosten sparen.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      As experienced geologists, we combine traditional expertise with innovative AI technologies to conduct precise and cost-effective geotechnical preliminary studies.
                    </p>
                    <p>
                      Our interdisciplinary expert network brings together specialists from geology, hydrology, civil engineering and data analysis with 10-25 years of professional experience in Germany and other European countries. This modern network structure enables us to advance our clients' projects particularly efficiently, in compliance with standards and cost-effectively.
                    </p>
                    <p>
                      Our expertise enables us to identify potential risks early and propose solutions that save time and costs.
                    </p>
                  </>
                )}
              </div>
              <Link to="/about" className="btn-primary">
                {language === 'de' ? 'Mehr erfahren' : 'Learn More'}
              </Link>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop" 
                alt="Geotechnical Engineering"
                className="w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-geoblue-800 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {language === 'de' 
                ? 'Bereit, Ihr Bauprojekt zu optimieren?' 
                : 'Ready to Optimize Your Construction Project?'}
            </h2>
            <p className="text-xl mb-8 text-gray-200">
              {language === 'de'
                ? 'Kontaktieren Sie uns noch heute für eine kostenlose Erstberatung zu Ihrem Projekt.'
                : 'Contact us today for a free initial consultation about your project.'}
            </p>
            <Link to="/contact" className="bg-white text-geoblue-800 hover:bg-gray-100 font-semibold py-3 px-8 rounded-md transition-colors duration-300 text-lg">
              {t('cta')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
