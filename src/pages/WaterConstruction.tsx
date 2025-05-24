
import { useLanguage } from '@/context/LanguageContext';
import { Link } from 'react-router-dom';
import { 
  Dam, 
  Droplets, 
  ShipWheel, 
  CloudRain, 
  Radar,
  ArrowLeft
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const WaterConstruction = () => {
  const { language } = useLanguage();

  const advantageItems = [
    {
      icon: <Dam className="h-12 w-12 text-geoblue-800" />,
      title: language === 'de' ? "Spezialanalyse für wasserbelastete Bauwerke" : "Specialized Analysis for Water-exposed Structures",
      description: language === 'de' 
        ? "Detaillierte Beurteilung der Bodeneigenschaften unter hydraulischer Belastung und wechselnden Wasserständen. Bewertung von Durchströmungs- und Erosionsrisiken bei Deichen, Dämmen und Uferbefestigungen. Analyse der Stabilität von Bauwerken unter Einfluss von Strömung, Wellen und Tide."
        : "Detailed assessment of soil properties under hydraulic loading and changing water levels. Evaluation of seepage and erosion risks for dikes, dams, and bank protection. Analysis of structure stability under the influence of currents, waves, and tides."
    },
    {
      icon: <Droplets className="h-12 w-12 text-geoblue-800" />,
      title: language === 'de' ? "Hydraulische Barrieren und Dichtungssysteme" : "Hydraulic Barriers and Sealing Systems",
      description: language === 'de' 
        ? "Beurteilung natürlicher geologischer Barrieren und ihrer Dichtungseigenschaften. Bewertung von Untergrundabdichtungen und Dichtungswänden gemäß DIN 19712. Empfehlungen für technische Dichtungssysteme unter Berücksichtigung standortspezifischer Randbedingungen und DWA-Merkblätter."
        : "Assessment of natural geological barriers and their sealing properties. Evaluation of underground sealing and cut-off walls according to DIN 19712. Recommendations for technical sealing systems considering site-specific conditions and DWA guidelines."
    },
    {
      icon: <ShipWheel className="h-12 w-12 text-geoblue-800" />,
      title: language === 'de' ? "Küsten- und Hafentechnische Analysen" : "Coastal and Harbor Technical Analyses",
      description: language === 'de' 
        ? "Standsicherheitsberechnungen für Kaianlagen, Molen und Wellenschutzbauten. Bewertung von Baugrundverhältnissen im Übergangsbereich Land-Wasser und in maritimen Sedimenten. Einschätzung von Einbringmöglichkeiten für Spundwände, Pfähle und Offshore-Gründungen gemäß EAU (Empfehlungen des Arbeitsausschusses Ufereinfassungen)."
        : "Stability calculations for quay structures, breakwaters, and wave protection structures. Assessment of subsoil conditions in the land-water transition zone and in maritime sediments. Evaluation of installation possibilities for sheet piles, piles, and offshore foundations according to EAU (Recommendations of the Committee for Waterfront Structures)."
    },
    {
      icon: <CloudRain className="h-12 w-12 text-geoblue-800" />,
      title: language === 'de' ? "Hochwasserschutz und Klimaanpassung" : "Flood Protection and Climate Adaptation",
      description: language === 'de' 
        ? "Ganzheitliche Betrachtung von Baugrundverhältnissen im Kontext des Hochwasserschutzes. Beurteilung der Klimaresilienz wasserbaulicher Anlagen unter Berücksichtigung zukünftiger Extremereignisse. Entwicklung angepasster geotechnischer Lösungen für nachhaltige Hochwasserschutzsysteme gemäß aktueller DIN-Normen und DWA-Regelwerke."
        : "Holistic consideration of subsoil conditions in the context of flood protection. Assessment of climate resilience of hydraulic structures considering future extreme events. Development of adapted geotechnical solutions for sustainable flood protection systems according to current DIN standards and DWA regulations."
    },
    {
      icon: <Radar className="h-12 w-12 text-geoblue-800" />,
      title: language === 'de' ? "KI-gestützte Prognose hydrologischer Wechselwirkungen" : "AI-supported Prediction of Hydrological Interactions",
      description: language === 'de' 
        ? "Einsatz moderner KI-Algorithmen zur Analyse komplexer Wechselwirkungen zwischen Baugrund und Grund-/Oberflächenwasser. Präzise Vorhersage von Sickerwegen und Grundwasserströmungen durch digitale 3D-Modellierung. Optimierung von Erkundungsprogrammen unter Einbeziehung historischer Wasserstands- und Pegelbeobachtungen."
        : "Use of modern AI algorithms to analyze complex interactions between subsoil and ground/surface water. Precise prediction of seepage paths and groundwater flows through digital 3D modeling. Optimization of exploration programs incorporating historical water level and gauge observations."
    }
  ];

  return (
    <div className="bg-[#E9ECF5] min-h-screen">
      <div className="container-custom py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-geoblue-800 mb-6">
            {language === 'de' ? 'Geotechnische Vorstudien für Wasserbau und Wasserwirtschaft' : 'Geotechnical Preliminary Studies for Hydraulic Engineering and Water Management'}
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
              ? 'Unsere KI-gestützte geotechnische Vorstudie für Wasserbau- und Wasserwirtschaftsprojekte liefert Ihnen eine fundierte Grundlage für sichere und nachhaltige Bauvorhaben. Von Deich- und Dammanlagen über Hafenbauwerke bis hin zu wasserwirtschaftlichen Infrastrukturen – wir bieten maßgeschneiderte geotechnische Analysen unter besonderer Berücksichtigung hydraulischer Einflüsse, Erosionssicherheit und Langzeitstabilität.'
              : 'Our AI-supported geotechnical preliminary study for hydraulic engineering and water management projects provides you with a solid foundation for safe and sustainable construction projects. From dikes and dams to harbor structures to water management infrastructures – we offer tailored geotechnical analyses with special consideration of hydraulic influences, erosion protection, and long-term stability.'}
          </p>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-geoblue-800 mb-8">
            {language === 'de' ? 'Vorteile unserer Vorstudien im Wasserbau und der Wasserwirtschaft' : 'Benefits of our Preliminary Studies in Hydraulic Engineering and Water Management'}
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

export default WaterConstruction;
