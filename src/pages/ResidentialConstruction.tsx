
import { useLanguage } from '@/context/LanguageContext';
import { Link } from 'react-router-dom';
import { 
  ShieldAlert, 
  EuroIcon, 
  FileCheck, 
  Cpu, 
  FileText,
  ArrowLeft
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const ResidentialConstruction = () => {
  const { language } = useLanguage();

  const advantageItems = [
    {
      icon: <ShieldAlert className="h-12 w-12 text-geoblue-800" />,
      title: language === 'de' ? "Frühzeitige Risikominimierung" : "Early Risk Minimization",
      description: language === 'de' 
        ? "Identifikation kritischer Bodenschichten (organische Einschlüsse, weiche Bereiche) bereits vor Planungsbeginn. Erkennung von Grundwasserproblemen und Prognose potenzieller Setzungsunterschiede bei heterogenem Baugrund."
        : "Identification of critical soil layers (organic inclusions, soft areas) before planning begins. Detection of groundwater problems and prediction of potential differential settlements in heterogeneous subsoil."
    },
    {
      icon: <EuroIcon className="h-12 w-12 text-geoblue-800" />,
      title: language === 'de' ? "Erhebliche Kosteneinsparungen" : "Significant Cost Savings",
      description: language === 'de' 
        ? "Optimierung der Anzahl, Tiefe und Position von Baugrunderkundungen. Minimierung unvorhergesehener Mehrkosten während der Bauphase und Vermeidung kostspieliger Planungsänderungen durch frühzeitige Kenntnis des Baugrunds."
        : "Optimization of the number, depth, and position of ground investigations. Minimization of unforeseen additional costs during the construction phase and avoidance of expensive planning changes through early knowledge of the subsoil."
    },
    {
      icon: <FileCheck className="h-12 w-12 text-geoblue-800" />,
      title: language === 'de' ? "Fundierte Entscheidungsgrundlage" : "Well-founded Decision Basis",
      description: language === 'de' 
        ? "Unterstützung bei der Gründungswahl (Flach-/Tiefgründung, Pfahlgründung). Empfehlung geeigneter Bauverfahren und Bauzeiten. Sichere Dimensionierung von Kellern und Abdichtungssystemen."
        : "Support in foundation selection (shallow/deep foundation, pile foundation). Recommendation of suitable construction methods and construction times. Secure dimensioning of basements and sealing systems."
    },
    {
      icon: <Cpu className="h-12 w-12 text-geoblue-800" />,
      title: language === 'de' ? "Effizienzsteigerung durch KI-Datenanalyse" : "Increased Efficiency through AI Data Analysis",
      description: language === 'de' 
        ? "Auswertung sämtlicher verfügbarer Bohrdatenbanken im Umkreis. Erstellung präziser Baugrundmodelle auf Basis regionaler geologischer Daten. Reduktion von Unsicherheiten durch statistische Auswertung aller verfügbaren Daten."
        : "Evaluation of all available drilling databases in the area. Creation of precise subsoil models based on regional geological data. Reduction of uncertainties through statistical analysis of all available data."
    },
    {
      icon: <FileText className="h-12 w-12 text-geoblue-800" />,
      title: language === 'de' ? "Norm- und rechtskonforme Absicherung" : "Standards and Legal Compliance",
      description: language === 'de' 
        ? "Einhaltung aller relevanten DIN-Normen und Eurocodes. Frühzeitige Klärung von Genehmigungsanforderungen. Vollständige Dokumentation für Behörden und Versicherungen."
        : "Compliance with all relevant DIN standards and Eurocodes. Early clarification of approval requirements. Complete documentation for authorities and insurance companies."
    }
  ];

  return (
    <div className="bg-[#E9ECF5] min-h-screen">
      <div className="container-custom py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-geoblue-800 mb-6">
            {language === 'de' ? 'Geotechnische Vorstudien für Wohnungs- und Hochbau' : 'Geotechnical Preliminary Studies for Residential and Building Construction'}
          </h1>
          
          <div className="mb-8">
            <Link 
              to="/sectors" 
              className="text-geoblue-800 hover:text-geoblue-600 inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white shadow-sm hover:shadow-md transition-all duration-300"
            >
              <ArrowLeft className="h-4 w-4" />
              {language === 'de' ? 'Zurück zu Fachgebiete' : 'Back to Fields of Expertise'}
            </Link>
          </div>
          
          <p className="text-xl text-gray-700 mb-12 font-montserrat">
            {language === 'de' 
              ? 'Unsere KI-gestützte geotechnische Vorstudie für Wohnungsbauprojekte bietet Ihnen eine fundierte Grundlage für Ihre Investition und Planungen. Von Einfamilienhäusern bis zu komplexen Wohnanlagen – wir liefern präzise Daten für sichere Entscheidungen und optimierte Baugrunderkundungen.'
              : 'Our AI-supported geotechnical preliminary study for residential construction projects provides you with a solid foundation for your investment and planning. From single-family homes to complex residential complexes – we deliver precise data for secure decisions and optimized ground investigations.'}
          </p>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-geoblue-800 mb-8">
            {language === 'de' ? 'Vorteile unserer Vorstudien im Wohnungsbau' : 'Benefits of our Preliminary Studies in Residential Construction'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {advantageItems.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:border-geoblue-800 transition-all duration-300">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                  <div className="shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-geoblue-800 mb-2 text-center md:text-left">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mb-16">
            <Button 
              className="bg-geoblue-800 hover:bg-geoblue-700 text-white text-lg py-6 px-8" 
              onClick={() => window.location.href='/contact'}
            >
              {language === 'de' ? 'Jetzt unverbindliches Angebot anfordern' : 'Request a Non-binding Offer Now'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResidentialConstruction;
