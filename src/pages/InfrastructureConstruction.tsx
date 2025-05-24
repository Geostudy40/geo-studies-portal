

import { useLanguage } from '@/context/LanguageContext';
import { Link } from 'react-router-dom';
import { 
  Route, 
  Droplets, 
  Award, 
  Leaf, 
  Database,
  ArrowLeft
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const InfrastructureConstruction = () => {
  const { language } = useLanguage();

  const advantageItems = [
    {
      icon: <Route className="h-12 w-12 text-geoblue-800" />,
      title: language === 'de' ? "Umfassende Risikobewertung für lineare Bauwerke" : "Comprehensive Risk Assessment for Linear Structures",
      description: language === 'de' 
        ? "Analyse von Baugrundverhältnissen über lange Strecken mit Identifikation kritischer Bereiche. Bewertung von Streckenverläufen hinsichtlich geologischer Risiken wie Störungszonen, Rutschungen oder Setzungsbereiche. Früherkennung von Bereichen mit erhöhtem Erkundungsbedarf."
        : "Analysis of subsoil conditions over long distances with identification of critical areas. Evaluation of route alignments for geological risks such as fault zones, landslides, or settlement areas. Early detection of areas requiring increased investigation.",
      accentColor: 'border-l-green-600' // #059669
    },
    {
      icon: <Droplets className="h-12 w-12 text-geoblue-800" />,
      title: language === 'de' ? "Hydrologische Gefahrenanalyse" : "Hydrological Hazard Analysis",
      description: language === 'de' 
        ? "Detaillierte Untersuchung der Grundwasserverhältnisse und oberflächennahen Wasserläufe. Bewertung von Hochwasserrisiken und Drainage-Erfordernissen. Planung notwendiger Wasserhaltungsmaßnahmen während der Bauphase unter Berücksichtigung saisonaler Schwankungen."
        : "Detailed investigation of groundwater conditions and near-surface watercourses. Assessment of flood risks and drainage requirements. Planning of necessary water management measures during the construction phase, considering seasonal fluctuations.",
      accentColor: 'border-l-green-600' // #059669
    },
    {
      icon: <Award className="h-12 w-12 text-geoblue-800" />,
      title: language === 'de' ? "Optimierung nach technischen Standards" : "Optimization according to Technical Standards",
      description: language === 'de' 
        ? "Berücksichtigung aller relevanten Eurocodes (insb. EC 7) und DIN-Normen für Verkehrswegebau. Beachtung der ZTV E-StB, RStO und anderer Regelwerke für Erdbau und Verkehrsanlagen. Anpassung an lokale Baustellenverordnungen und behördliche Auflagen."
        : "Consideration of all relevant Eurocodes (especially EC 7) and DIN standards for transport infrastructure. Compliance with ZTV E-StB, RStO, and other regulations for earthworks and transport facilities. Adaptation to local construction site regulations and official requirements.",
      accentColor: 'border-l-green-600' // #059669
    },
    {
      icon: <Leaf className="h-12 w-12 text-geoblue-800" />,
      title: language === 'de' ? "Umweltrelevante Faktoren und Nachhaltigkeit" : "Environmental Factors and Sustainability",
      description: language === 'de' 
        ? "Identifikation von Umweltrisiken wie Altlasten oder Schadstoffbelastungen entlang der Trasse. Berücksichtigung von Schutzgebieten und ökologisch sensiblen Bereichen. Vorschläge für nachhaltige Bauweisen und Ressourcenschonung bei Aushub und Materialeinsatz."
        : "Identification of environmental risks such as contaminated sites or pollutants along the route. Consideration of protected areas and ecologically sensitive zones. Suggestions for sustainable construction methods and resource conservation in excavation and material use.",
      accentColor: 'border-l-green-600' // #059669
    },
    {
      icon: <Database className="h-12 w-12 text-geoblue-800" />,
      title: language === 'de' ? "KI-gestützte Optimierung des Erkundungsprogramms" : "AI-supported Optimization of the Investigation Program",
      description: language === 'de' 
        ? "Effiziente Planung von Bohrungen und Sondierungen auf Basis umfangreicher Datenbanken. Reduzierung der Erkundungskosten durch gezielte Positionierung von Aufschlüssen an kritischen Stellen. Erstellung präziser geologischer Längsprofile mit statistisch abgesicherter Interpolation zwischen Aufschlusspunkten."
        : "Efficient planning of boreholes and soundings based on extensive databases. Reduction of investigation costs through targeted positioning of exploration points at critical locations. Creation of precise geological longitudinal profiles with statistically secured interpolation between exploration points.",
      accentColor: 'border-l-green-600' // #059669
    }
  ];

  return (
    <div className="bg-[#E9ECF5] min-h-screen">
      <div className="container-custom py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-geoblue-800 mb-6">
            {language === 'de' ? 'Geotechnische Vorstudien für Infrastruktur und Verkehrsbau' : 'Geotechnical Preliminary Studies for Infrastructure and Transport Construction'}
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
              ? 'Unsere KI-gestützte geotechnische Vorstudie für Infrastruktur- und Verkehrsbauprojekte liefert Ihnen eine solide Entscheidungsgrundlage für Ihre Planungen. Von Straßen- und Eisenbahntrassen über Brücken bis hin zu Tunnelbauwerken – wir bieten präzise Analysen für technisch anspruchsvolle Infrastrukturvorhaben unter Berücksichtigung aller relevanten Eurocodes und DIN-Normen.'
              : 'Our AI-supported geotechnical preliminary study for infrastructure and transport construction projects provides you with a solid decision-making basis for your planning. From road and railway routes to bridges and tunnel structures – we offer precise analyses for technically demanding infrastructure projects in compliance with all relevant Eurocodes and DIN standards.'}
          </p>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-geoblue-800 mb-8">
            {language === 'de' ? 'Vorteile unserer Vorstudien im Infrastruktur- und Verkehrsbau' : 'Benefits of our Preliminary Studies in Infrastructure and Transport Construction'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {advantageItems.map((item, index) => (
              <div key={index} className={`bg-geolight p-6 rounded-lg shadow-md border border-gray-100 hover:border-geoblue-800 transition-all duration-300 border-l-4 ${item.accentColor}`}>
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

export default InfrastructureConstruction;

