
import { useLanguage } from '@/context/LanguageContext';
import { Link } from 'react-router-dom';
import { 
  Factory, 
  Droplets, 
  Recycle, 
  Clock, 
  Database,
  ArrowLeft
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const IndustrialConstruction = () => {
  const { language } = useLanguage();

  const advantageItems = [
    {
      icon: <Factory className="h-12 w-12 text-geoblue-800" />,
      title: language === 'de' ? "Tragfähigkeitsanalyse für Großflächen und Schwerlast" : "Load-bearing Analysis for Large Areas and Heavy Loads",
      description: language === 'de' 
        ? "Detaillierte Bewertung der Tragfähigkeit für großflächige Lastverteilungen und Punktlasten aus Maschinen oder Hochregalanlagen. Ermittlung von Bodenkennwerten für wirtschaftliche Dimensionierung von Industrieböden und Fundamenten. Beurteilung der Eignung für dynamische Lasten aus Produktionsprozessen."
        : "Detailed assessment of load-bearing capacity for large-area load distributions and point loads from machinery or high-bay warehouses. Determination of soil parameters for economical dimensioning of industrial floors and foundations. Evaluation of suitability for dynamic loads from production processes."
    },
    {
      icon: <Droplets className="h-12 w-12 text-geoblue-800" />,
      title: language === 'de' ? "Grundwasser- und Entwässerungsmanagement" : "Groundwater and Drainage Management",
      description: language === 'de' 
        ? "Umfassende Analyse der Grundwassersituation und hydrogeologischen Bedingungen am Standort. Planung effizienter Entwässerungssysteme für großflächige versiegelte Flächen. Bewertung potentieller Auswirkungen auf den Grundwasserhaushalt und Empfehlungen für Versickerungsmöglichkeiten gemäß aktueller Wassergesetze."
        : "Comprehensive analysis of groundwater situation and hydrogeological conditions at the site. Planning efficient drainage systems for large sealed surfaces. Assessment of potential impacts on groundwater balance and recommendations for infiltration possibilities according to current water legislation."
    },
    {
      icon: <Recycle className="h-12 w-12 text-geoblue-800" />,
      title: language === 'de' ? "Altlasten- und Brownfield-Bewertung" : "Contamination and Brownfield Assessment",
      description: language === 'de' 
        ? "Gründliche Recherche der Vornutzung industrieller Standorte und Identifikation potentieller Kontaminationen. Einschätzung von Sanierungsaufwand und -kosten bei belasteten Böden. Entwicklung von Strategien für nachhaltige Folgenutzung ehemaliger Industrieflächen unter Berücksichtigung der BBodSchV und aktueller Umweltrichtlinien."
        : "Thorough research of previous use of industrial sites and identification of potential contamination. Estimation of remediation efforts and costs for contaminated soils. Development of strategies for sustainable subsequent use of former industrial areas in compliance with soil protection regulations and current environmental guidelines."
    },
    {
      icon: <Clock className="h-12 w-12 text-geoblue-800" />,
      title: language === 'de' ? "Langzeitstabilität und Nutzungsflexibilität" : "Long-term Stability and Usage Flexibility",
      description: language === 'de' 
        ? "Prognose des Langzeitverhaltens des Baugrundes unter statischen und dynamischen Lasten. Beurteilung von Setzungsverhalten und -unterschieden bei heterogenen Bodenverhältnissen. Planung mit Blick auf zukünftige Erweiterungsmöglichkeiten und Nutzungsänderungen unter Berücksichtigung der DIN EN 1997 (Eurocode 7) und DIN 4019."
        : "Prediction of long-term behavior of the subsoil under static and dynamic loads. Assessment of settlement behavior and differences in heterogeneous soil conditions. Planning with a view to future expansion possibilities and changes in use, considering DIN EN 1997 (Eurocode 7) and DIN 4019."
    },
    {
      icon: <Database className="h-12 w-12 text-geoblue-800" />,
      title: language === 'de' ? "KI-optimierte Baugrunderkundung für Großflächen" : "AI-optimized Ground Investigation for Large Areas",
      description: language === 'de' 
        ? "Effiziente Planung des Erkundungsprogramms für großflächige Industrieareale durch KI-gestützte Analyse regionaler Daten. Reduzierung der Erkundungskosten durch optimierte Positionierung von Bohrungen und Sondierungen. Erstellung präziser 3D-Baugrundmodelle mit statistisch fundierter Interpolation zwischen Aufschlusspunkten."
        : "Efficient planning of the investigation program for large industrial areas through AI-supported analysis of regional data. Reduction of investigation costs through optimized positioning of boreholes and soundings. Creation of precise 3D subsoil models with statistically sound interpolation between exploration points."
    }
  ];

  return (
    <div className="bg-[#E9ECF5] min-h-screen">
      <div className="container-custom py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-geoblue-800 mb-6">
            {language === 'de' ? 'Geotechnische Vorstudien für Industrieanlagen und Logistik' : 'Geotechnical Preliminary Studies for Industrial Facilities and Logistics'}
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
              ? 'Unsere KI-gestützte geotechnische Vorstudie für Industrieanlagen und Logistikzentren bietet eine präzise Grundlage für die Planung und Realisierung Ihres Bauvorhabens. Von Produktionshallen über Logistikzentren bis hin zu Industrieparks – wir liefern maßgeschneiderte geotechnische Analysen unter Berücksichtigung der besonderen Anforderungen an Tragfähigkeit, Langzeitstabilität und Umweltaspekte.'
              : 'Our AI-supported geotechnical preliminary study for industrial facilities and logistics centers provides a precise basis for planning and implementing your construction project. From production halls to logistics centers to industrial parks – we deliver tailored geotechnical analyses considering the special requirements for load-bearing capacity, long-term stability, and environmental aspects.'}
          </p>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-geoblue-800 mb-8">
            {language === 'de' ? 'Vorteile unserer Vorstudien für Industrieanlagen und Logistik' : 'Benefits of our Preliminary Studies for Industrial Facilities and Logistics'}
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
          
          <div className="bg-white rounded-lg p-8 mb-16 shadow-md">
            <h2 className="text-2xl font-semibold text-geoblue-800 mb-4">
              {language === 'de' ? 'Baugrundoptimierung für Industrieanlagen und Logistikzentren' : 'Subsoil Optimization for Industrial Facilities and Logistics Centers'}
            </h2>
            <p className="text-gray-700 mb-4">
              {language === 'de' 
                ? 'Großflächige Industrieanlagen und Logistikzentren stellen besondere Anforderungen an den Baugrund, insbesondere hinsichtlich Tragfähigkeit, gleichmäßiger Setzung und langfristiger Nutzungsflexibilität.'
                : 'Large-scale industrial facilities and logistics centers place special demands on the building ground, particularly in terms of load-bearing capacity, uniform settlement, and long-term flexibility of use.'}
            </p>
            <p className="text-gray-700 mb-4">
              {language === 'de'
                ? 'Unsere KI-gestützte geotechnische Vorstudie identifiziert Baugrundverhältnisse mit unterschiedlichen Tragfähigkeiten und setzungsempfindlichen Bereichen durch die intelligente Analyse regionaler geologischer und hydrogeologischer Daten. Dies ermöglicht eine optimierte Gebäudeanordnung und maßgeschneiderte Gründungslösungen.'
                : 'Our AI-supported geotechnical preliminary study identifies ground conditions with varying load-bearing capacities and settlement-sensitive areas through intelligent analysis of regional geological and hydrogeological data. This enables optimized building arrangement and customized foundation solutions.'}
            </p>
            <p className="text-gray-700">
              {language === 'de'
                ? 'Durch die frühzeitige Optimierung des Gebäudelayouts und gezielte Gründungskonzepte können typischerweise 15-20% der Gründungskosten eingespart werden. Die Kombination modernster Datenanalyseverfahren mit der praktischen Erfahrung unserer Geotechniker im Industriebau gewährleistet sowohl wissenschaftliche Präzision als auch praxisnahe Lösungen für Ihre spezifischen Projektanforderungen.'
                : 'Early optimization of the building layout and targeted foundation concepts can typically save 15-20% of foundation costs. The combination of state-of-the-art data analysis methods with the practical experience of our geotechnicians in industrial construction ensures both scientific precision and practical solutions for your specific project requirements.'}
            </p>
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

export default IndustrialConstruction;
