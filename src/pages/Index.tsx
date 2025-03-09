
import { Map, FileText, Cpu, Ruler } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';

const Index = () => {
  const { t } = useLanguage();

  const services = [
    { 
      title: t('serviceGeologicalMap'), 
      description: t('serviceGeologicalMapDesc'),
      icon: <Map size={24} /> 
    },
    { 
      title: t('serviceAiStudies'), 
      description: t('serviceAiStudiesDesc'),
      icon: <Cpu size={24} /> 
    },
    { 
      title: t('serviceDrillingOpt'), 
      description: t('serviceDrillingOptDesc'),
      icon: <Ruler size={24} /> 
    },
    { 
      title: t('serviceReports'), 
      description: t('serviceReportsDesc'),
      icon: <FileText size={24} /> 
    },
  ];

  return (
    <div>
      <Hero />
      
      {/* Services Section */}
      <section className="py-20 bg-geolight">
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
              Alle Leistungen anzeigen
            </Link>
          </div>
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
              <p className="text-gray-600 mb-8">
                {t('aboutContent')}
              </p>
              <Link to="/about" className="btn-primary">
                Mehr erfahren
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
              Bereit, Ihr Bauprojekt zu optimieren?
            </h2>
            <p className="text-xl mb-8 text-gray-200">
              Kontaktieren Sie uns noch heute für eine kostenlose Erstberatung zu Ihrem Projekt.
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
