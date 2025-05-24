import { Map, FileText, Cpu, Ruler, HardHat } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import LegalNotice from '@/components/LegalNotice';
import SEO from '@/components/SEO';

const Index = () => {
  const { t, language } = useLanguage();

  const services = [
    { 
      title: language === 'de' ? "Geotechnische Vorstudien" : "Geotechnical Preliminary Studies", 
      description: t('serviceGeologicalRiskDesc'),
      icon: <Map size={24} />,
      bulletPoints: language === 'de' ? 
        [
          "ResNet-basierte Kartenanalyse & GNN-Technologie",
          "Digitale Geländemodelle & Satellitenbildauswertung",
          "Optimierte Baugrunderkundung mit 40% Kostenreduktion"
        ] : 
        [
          "ResNet-based map analysis & GNN technology",
          "Digital terrain models & satellite imagery evaluation",
          "Optimized ground investigation with 40% cost reduction"
        ]
    },
    { 
      title: language === 'de' ? "KI-gestützte Einzelleistungen" : "AI-Supported Individual Services", 
      description: t('serviceAiStudiesDescUpdated'),
      icon: <Cpu size={24} />,
      bulletPoints: language === 'de' ? 
        [
          "Automatisierte Stratigrafie-Identifikation",
          "XGBoost-Regression für qc/qT-Parameter",
          "Clusteranalyse für Bodenzonen-Klassifikation"
        ] : 
        [
          "Automated stratigraphy identification",
          "XGBoost regression for qc/qT parameters",
          "Cluster analysis for soil zone classification"
        ]
    },
    { 
      title: language === 'de' ? "Baugrundgutachten und Erkundungsplanung" : "Soil Investigation Reports and Exploration Planning", 
      description: language === 'de' 
        ? "Nahtlose Überführung von Vorstudien-Ergebnissen in klassische Baugrundgutachten mit optimierter Erkundungstiefe." 
        : "Seamless transition from preliminary studies to classic soil investigation reports with optimized exploration depth.",
      icon: <FileText size={24} />,
      bulletPoints: language === 'de' ? 
        [
          "DIN EN 1997/4020 & Eurocode-konforme Gutachten",
          "Erkundungsoptimierung & Effizienzsteigerung",
          "Integration von KI-Analyseergebnissen"
        ] : 
        [
          "DIN EN 1997/4020 & Eurocode-compliant reports",
          "Exploration optimization & efficiency improvement",
          "Integration of AI analysis results"
        ]
    },
    { 
      title: language === 'de' ? "Baufachliche Begleitung" : "Construction Support", 
      description: language === 'de'
        ? "KI-gestützte Begleitung der Bauausführungen für Bauunternehmen und Bohrfirmen mit Fokus auf Risikominimierung."
        : "AI-supported guidance for construction companies and drilling firms with a focus on risk minimization.",
      icon: <HardHat size={24} />,
      bulletPoints: language === 'de' ? 
        [
          "Abweichungsanalyse Prognose/Ist-Baugrund",
          "Optimierte Bohrverlaufsplanung",
          "Lückenlose Dokumentation für Nachträge"
        ] : 
        [
          "Deviation analysis between prediction and actual ground",
          "Optimized drilling path planning",
          "Comprehensive documentation for supplements"
        ]
    },
  ];

  return (
    <div>
      <SEO pagePath="/" />
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
                bulletPoints={service.bulletPoints}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/services" className="bg-geoblue-800 hover:bg-geoblue-900 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300">
              {language === 'de' ? 'Alle Leistungen anzeigen' : 'View all services'}
            </Link>
          </div>
          
          <LegalNotice />
        </div>
      </section>
      
      {/* About Preview Section - Modified to span full width */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-geoblue-800 mb-6">
              {t('aboutTitle')}
            </h2>
            <div className="text-gray-600 space-y-4 mb-8">
              <p>
                Als erfahrene Geologen kombinieren wir traditionelles Fachwissen mit innovativen KI-Technologien, um präzise und kosteneffiziente geotechnische Vorstudien durchzuführen.
              </p>
              <p>
                Unser interdisziplinäres Experten-Netzwerk vereint Fachleute aus den Bereichen Geologie, Hydrologie, Bauingenieurwesen und Datenanalyse mit 10-25 Jahren Berufserfahrung in Deutschland und anderen europäischen Ländern. Diese moderne Netzwerkstruktur ermöglicht es uns, die Projekte unserer Kunden besonders effizient, normgerecht und kostengünstig voranzutreiben.
              </p>
              <p>
                Unsere Expertise ermöglicht es uns, potenzielle Risiken frühzeitig zu identifizieren und Lösungen vorzuschlagen, die Zeit und Kosten sparen.
              </p>
            </div>
            <div className="flex justify-start">
              <Link to="/about" className="bg-geoblue-800 hover:bg-geoblue-900 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300">
                Mehr erfahren
              </Link>
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
