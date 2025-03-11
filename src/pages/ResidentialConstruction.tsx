
import { useLanguage } from '@/context/LanguageContext';
import { Link } from 'react-router-dom';
import { 
  ShieldAlert, 
  EuroIcon, 
  FileCheck, 
  Cpu, 
  FileText 
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
        : "Identification of critical soil layers (organic inclusions, soft areas) before planning begins. Detection of groundwater problems and prediction of potential settlement differences in heterogeneous building ground."
    },
    {
      icon: <EuroIcon className="h-12 w-12 text-geoblue-800" />,
      title: language === 'de' ? "Erhebliche Kosteneinsparungen" : "Significant Cost Savings",
      description: language === 'de' 
        ? "Optimierung der Anzahl, Tiefe und Position von Baugrunderkundungen. Minimierung unvorhergesehener Mehrkosten während der Bauphase und Vermeidung kostspieliger Planungsänderungen durch frühzeitige Kenntnis des Baugrunds."
        : "Optimization of the number, depth, and position of ground investigations. Minimization of unforeseen additional costs during the construction phase and avoidance of costly planning changes through early knowledge of the building ground."
    },
    {
      icon: <FileCheck className="h-12 w-12 text-geoblue-800" />,
      title: language === 'de' ? "Fundierte Entscheidungsgrundlage" : "Well-founded Decision Basis",
      description: language === 'de' 
        ? "Unterstützung bei der Gründungswahl (Flach-/Tiefgründung, Pfahlgründung). Empfehlung geeigneter Bauverfahren und Bauzeiten. Sichere Dimensionierung von Kellern und Abdichtungssystemen."
        : "Support in foundation selection (shallow/deep foundation, pile foundation). Recommendation of suitable construction methods and construction times. Secure dimensioning of cellars and sealing systems."
    },
    {
      icon: <Cpu className="h-12 w-12 text-geoblue-800" />,
      title: language === 'de' ? "Effizienzsteigerung durch KI-Datenanalyse" : "Efficiency Increase through AI Data Analysis",
      description: language === 'de' 
        ? "Auswertung sämtlicher verfügbarer Bohrdatenbanken im Umkreis. Erstellung präziser Baugrundmodelle auf Basis regionaler geologischer Daten. Reduktion von Unsicherheiten durch statistische Auswertung aller verfügbaren Daten."
        : "Evaluation of all available drilling databases in the area. Creation of precise ground models based on regional geological data. Reduction of uncertainties through statistical evaluation of all available data."
    },
    {
      icon: <FileText className="h-12 w-12 text-geoblue-800" />,
      title: language === 'de' ? "Norm- und rechtskonforme Absicherung" : "Standards and Legal Compliance",
      description: language === 'de' 
        ? "Einhaltung aller relevanten DIN-Normen und Eurocodes. Frühzeitige Klärung von Genehmigungsanforderungen. Vollständige Dokumentation für Behörden und Versicherungen."
        : "Compliance with all relevant DIN standards and Eurocodes. Early clarification of approval requirements. Complete documentation for authorities and insurance companies."
    }
  ];

  const images = [
    {
      src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      alt: language === 'de' ? "Wohnungsbau im Bauzustand" : "Residential construction in building phase",
      caption: language === 'de' ? "Optimierte Gründungslösungen für mehrstöckige Wohngebäude" : "Optimized foundation solutions for multi-story residential buildings"
    },
    {
      src: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      alt: language === 'de' ? "Baugrube für Wohnungskomplex" : "Construction pit for residential complex",
      caption: language === 'de' ? "Umfassende Baugrundanalyse für sichere Baugruben" : "Comprehensive ground analysis for safe construction pits"
    },
    {
      src: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      alt: language === 'de' ? "Hochhaus-Baustelle" : "High-rise construction site",
      caption: language === 'de' ? "Geotechnische Untersuchungen für Hochbauprojekte" : "Geotechnical investigations for building construction projects"
    }
  ];

  return (
    <div className="container-custom py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link 
            to="/sectors" 
            className="text-geoblue-800 hover:text-geoblue-600 flex items-center gap-2"
          >
            ← {language === 'de' ? 'Zurück zu Fachgebiete' : 'Back to Sectors'}
          </Link>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-geoblue-800 mb-6">
          {language === 'de' ? 'Geotechnische Vorstudien für Wohnungs- und Hochbau' : 'Geotechnical Preliminary Studies for Residential and Building Construction'}
        </h1>
        
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
        
        <h2 className="text-2xl md:text-3xl font-semibold text-geoblue-800 mb-8">
          {language === 'de' ? 'Einblicke in unsere Projekte' : 'Insights into our Projects'}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {images.map((image, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-56 object-cover"
              />
              <p className="p-4 text-sm text-gray-600 italic">
                {image.caption}
              </p>
            </div>
          ))}
        </div>
        
        <div className="bg-geoblue-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-semibold text-geoblue-800 mb-4">
            {language === 'de' ? 'Fallbeispiel: Wohnanlage mit herausforderndem Baugrund' : 'Case Study: Residential Complex with Challenging Ground'}
          </h2>
          <p className="text-gray-700 mb-4">
            {language === 'de' 
              ? 'Bei einem Wohnungsbauprojekt in München sollten vier Mehrfamilienhäuser auf einem Grundstück mit stark heterogenem Baugrund errichtet werden. Unsere geotechnische Vorstudie identifizierte einen bisher unbekannten ehemaligen Bachverlauf und eine Torflinse, die punktuell zu erheblichen Setzungsproblemen geführt hätten.'
              : 'In a residential construction project in Munich, four apartment buildings were to be built on a plot with highly heterogeneous ground. Our geotechnical preliminary study identified a previously unknown former stream course and a peat lens, which would have led to significant settlement problems in specific areas.'}
          </p>
          <p className="text-gray-700">
            {language === 'de'
              ? 'Durch die Anpassung der Gebäudeposition und eine gezielte Tiefgründung im betroffenen Bereich konnten Mehrkosten von über 200.000 € vermieden werden. Die Bauzeit verkürzte sich um 3 Wochen, da keine nachträglichen Planungsänderungen erforderlich waren.'
              : 'By adjusting the building position and implementing targeted deep foundation in the affected area, additional costs of over €200,000 were avoided. The construction time was reduced by 3 weeks, as no subsequent planning changes were required.'}
          </p>
        </div>
        
        <div className="flex justify-center mb-16">
          <Button 
            className="bg-geoblue-800 hover:bg-geoblue-700 text-white text-lg py-6 px-8" 
            onClick={() => window.location.href='/contact'}
          >
            {language === 'de' ? 'Jetzt unverbindliches Angebot anfordern' : 'Request a non-binding offer now'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResidentialConstruction;
