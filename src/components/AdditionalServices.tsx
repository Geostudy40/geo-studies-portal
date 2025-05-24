
import { Database, Building, BarChart, Microscope } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import ServiceCard from '@/components/ServiceCard';

const AdditionalServices = () => {
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
  );
};

export default AdditionalServices;
