
import { useLanguage } from '@/context/LanguageContext';
import { Link } from 'react-router-dom';
import { 
  Waves, 
  ShieldAlert, 
  Droplets, 
  Timer, 
  Database,
  ArrowLeft
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const WaterConstruction = () => {
  const { language } = useLanguage();

  const advantageItems = [
    {
      icon: <Waves className="h-12 w-12 text-geoblue-800" />,
      title: language === 'de' ? "Optimierte Interaktion zwischen Wasser und Bauwerk" : "Optimized Interaction Between Water and Structure",
      description: language === 'de' 
        ? "Detaillierte Analyse von hydraulischen Gradienten und Strömungsverhältnissen im Untergrund. Präzise Prognose des Verhaltens von Bauwerken unter hydrostatischen und hydrodynamischen Bedingungen. Identifikation kritischer hydraulischer Zustände und deren Auswirkungen auf die Standsicherheit."
        : "Detailed analysis of hydraulic gradients and flow conditions in the subsoil. Precise prediction of the behavior of structures under hydrostatic and hydrodynamic conditions. Identification of critical hydraulic conditions and their effects on stability."
    },
    {
      icon: <ShieldAlert className="h-12 w-12 text-geoblue-800" />,
      title: language === 'de' ? "Frühzeitige Erkennung geotechnischer Risiken" : "Early Detection of Geotechnical Risks",
      description: language === 'de' 
        ? "Identifikation von Erosions- und Kolkrisiken durch präzise Strömungsanalysen. Bewertung der Gefahr von hydraulischem Grundbruch, Piping und innerer Erosion. Analyse der Durchlässigkeitsverhältnisse und deren Einfluss auf die Bauwerksstabilität unter wechselnden Wasserständen."
        : "Identification of erosion and scour risks through precise flow analyses. Assessment of the risk of hydraulic base failure, piping, and internal erosion. Analysis of permeability conditions and their influence on structural stability under changing water levels."
    },
    {
      icon: <Droplets className="h-12 w-12 text-geoblue-800" />,
      title: language === 'de' ? "Hydrogeologische Gesamtbetrachtung" : "Hydrogeological Overall Assessment",
      description: language === 'de' 
        ? "Ganzheitliche Betrachtung des Grundwasserkörpers und seiner Wechselwirkungen mit Oberflächengewässern. Einfluss jahreszeitlicher Schwankungen und extremer Wetterereignisse auf das Bauvorhaben. Berücksichtigung klimawandelbedingter Veränderungen in der langfristigen Planung."
        : "Holistic consideration of the groundwater body and its interactions with surface waters. Influence of seasonal fluctuations and extreme weather events on the construction project. Consideration of climate change-related changes in long-term planning."
    },
    {
      icon: <Timer className="h-12 w-12 text-geoblue-800" />,
      title: language === 'de' ? "Optimierung von Bauablauf und Wasserhaltung" : "Optimization of Construction Process and Water Management",
      description: language === 'de' 
        ? "Planung effizienter Wasserhaltungskonzepte für die Bauphase unter Berücksichtigung regionaler Grundwasserverhältnisse. Prognose des Grundwasserandrangs während der Bauarbeiten. Entwicklung umweltverträglicher Wasserhaltungsstrategien mit optimiertem Energieeinsatz."
        : "Planning of efficient water management concepts for the construction phase, taking into account regional groundwater conditions. Prediction of groundwater inflow during construction work. Development of environmentally friendly water management strategies with optimized energy use."
    },
    {
      icon: <Database className="h-12 w-12 text-geoblue-800" />,
      title: language === 'de' ? "KI-gestützte Analyse historischer Wasserstände" : "AI-supported Analysis of Historical Water Levels",
      description: language === 'de' 
        ? "Intelligente Auswertung historischer Pegeldaten und deren Korrelation mit geologischen Verhältnissen. Statistische Analyse von Extremwasserständen und deren Auftretenswahrscheinlichkeit. Erstellung präziser Prognosen für kritische Wasserstände unter Berücksichtigung regionaler klimatischer Trends."
        : "Intelligent evaluation of historical gauge data and their correlation with geological conditions. Statistical analysis of extreme water levels and their probability of occurrence. Creation of precise forecasts for critical water levels, taking into account regional climatic trends."
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
              ? 'Unsere KI-gestützte geotechnische Vorstudie für wasserbauliche Projekte liefert präzise Grundlagen für die sichere und wirtschaftliche Planung von Bauwerken im und am Wasser. Von Deichen und Dämmen über Hafenbauwerke bis zu Wasserkraftanlagen – wir analysieren die komplexen Wechselwirkungen zwischen Baugrund, Grundwasser und hydraulischen Kräften.'
              : 'Our AI-supported geotechnical preliminary study for hydraulic engineering projects provides precise foundations for the safe and economical planning of structures in and around water. From dikes and dams to port structures to hydropower plants – we analyze the complex interactions between subsoil, groundwater, and hydraulic forces.'}
          </p>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-geoblue-800 mb-8">
            {language === 'de' ? 'Vorteile unserer Vorstudien im Wasserbau' : 'Benefits of our Preliminary Studies in Hydraulic Engineering'}
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
              {language === 'de' ? 'Nachhaltige geotechnische Konzepte für Wasserbauprojekte' : 'Sustainable Geotechnical Concepts for Hydraulic Engineering Projects'}
            </h2>
            <p className="text-gray-700 mb-4">
              {language === 'de' 
                ? 'Wasserbauliche Anlagen wie Deiche, Dämme und Hafenbauwerke erfordern ein umfassendes Verständnis des Zusammenspiels zwischen Baugrund, Grundwasser und hydraulischen Kräften.'
                : 'Hydraulic engineering structures such as dikes, dams, and port facilities require a comprehensive understanding of the interaction between subsoil, groundwater, and hydraulic forces.'}
            </p>
            <p className="text-gray-700 mb-4">
              {language === 'de'
                ? 'Unsere geotechnische Vorstudie kombiniert modernste KI-Algorithmen mit klassischer Hydrogeologie, um komplexe Bodenschichtungen zu identifizieren und deren Verhalten unter hydraulischer Belastung vorherzusagen. Durch die Analyse historischer Wasserstände und regionaler Bodenprofile entwickeln wir präzise Prognosen zu Durchsickerung, Erosion und Stabilität.'
                : 'Our geotechnical preliminary study combines cutting-edge AI algorithms with classical hydrogeology to identify complex soil layering and predict their behavior under hydraulic stress. By analyzing historical water levels and regional soil profiles, we develop precise forecasts of seepage, erosion, and stability.'}
            </p>
            <p className="text-gray-700">
              {language === 'de'
                ? 'Diese vorausschauende Analyse ermöglicht die Entwicklung optimierter Sanierungskonzepte mit vertikalen Dräns und gezielten Bodenverbesserungsmaßnahmen, die typischerweise Baukosten um 20-30% reduzieren können. Unsere Geologen und Wasserbauingenieure mit spezifischer Erfahrung an der Nordseeküste und in Flusstälern validieren alle computergestützten Analysen und passen die Empfehlungen an lokale Gegebenheiten an.'
                : 'This forward-looking analysis enables the development of optimized rehabilitation concepts with vertical drains and targeted soil improvement measures that can typically reduce construction costs by 20-30%. Our geologists and hydraulic engineers with specific experience on the North Sea coast and in river valleys validate all computer-aided analyses and adapt recommendations to local conditions.'}
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

export default WaterConstruction;
