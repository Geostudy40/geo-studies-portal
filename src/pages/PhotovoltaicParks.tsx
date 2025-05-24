
import { useLanguage } from '@/context/LanguageContext';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sun, Shield, Droplet, FileText, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';

const PhotovoltaicParks = () => {
  const { language } = useLanguage();

  const isGerman = language === 'de';
  
  const advantages = [
    {
      title: isGerman 
        ? "Standortoptimierung für maximale Energieeffizienz" 
        : "Site Optimization for Maximum Energy Efficiency",
      icon: <Sun className="w-12 h-12 text-geoblue-800" />,
      description: isGerman
        ? "Gründliche Analyse der geologischen Eignung für Solarmodule und Unterkonstruktionen. Bewertung der Topographie und Bodenbeschaffenheit für optimale Modulausrichtung und -neigung. Identifikation potenzieller Hindernisse im Untergrund und deren Auswirkungen auf die Anlagenplanung."
        : "Thorough analysis of geological suitability for solar modules and substructures. Assessment of topography and soil conditions for optimal module orientation and inclination. Identification of potential underground obstacles and their impact on facility planning."
    },
    {
      title: isGerman 
        ? "Tragfähigkeitsanalyse für leichte Konstruktionen" 
        : "Load-bearing Analysis for Lightweight Constructions",
      icon: <Shield className="w-12 h-12 text-geoblue-800" />,
      description: isGerman
        ? "Präzise Bewertung der Tragfähigkeit für unterschiedliche Verankerungssysteme. Analyse von Frost-Tau-Wechseleinflüssen auf die Modulverankerung. Empfehlung optimaler Gründungstiefen für Modulträger unter Berücksichtigung lokaler Bodenparameter."
        : "Precise assessment of load-bearing capacity for different anchoring systems. Analysis of frost-thaw cycle influences on module anchoring. Recommendation of optimal foundation depths for module supports considering local soil parameters."
    },
    {
      title: isGerman 
        ? "Optimierte Entwässerungsplanung" 
        : "Optimized Drainage Planning",
      icon: <Droplet className="w-12 h-12 text-geoblue-800" />,
      description: isGerman
        ? "Detaillierte Analyse der Oberflächenentwässerung und Versickerungseigenschaften. Bewertung potenzieller Erosionsrisiken unter Modulreihen. Entwicklung standortspezifischer Konzepte für nachhaltige Entwässerung und Bodenschutz."
        : "Detailed analysis of surface drainage and infiltration properties. Assessment of potential erosion risks under module rows. Development of site-specific concepts for sustainable drainage and soil protection."
    },
    {
      title: isGerman 
        ? "Umwelt- und Genehmigungsoptimierung" 
        : "Environmental and Permit Optimization",
      icon: <FileText className="w-12 h-12 text-geoblue-800" />,
      description: isGerman
        ? "Frühzeitige Identifikation potenzieller Umweltrisiken und Altlasten. Erstellung geotechnischer Unterlagen für reibungslose Genehmigungsverfahren. Unterstützung bei Umweltverträglichkeitsprüfungen und baurechtlichen Anforderungen."
        : "Early identification of potential environmental risks and contaminated sites. Preparation of geotechnical documents for smooth permitting procedures. Support with environmental impact assessments and building code requirements."
    },
    {
      title: isGerman 
        ? "KI-gestützte Baubarkeitsanalyse" 
        : "AI-supported Feasibility Analysis",
      icon: <Cpu className="w-12 h-12 text-geoblue-800" />,
      description: isGerman
        ? "Einsatz modernster KI-Algorithmen zur Analyse umfangreicher geologischer Datenbanken und historischer Luftbilder. Präzise Einschätzung der notwendigen Erkundungstiefe und -methodik. Optimierung des Erkundungsprogramms für großflächige Anlagen bei gleichzeitiger Reduzierung der Erkundungskosten."
        : "Use of state-of-the-art AI algorithms to analyze extensive geological databases and historical aerial photographs. Precise estimation of necessary exploration depth and methodology. Optimization of the exploration program for large-scale facilities while reducing exploration costs."
    }
  ];

  return (
    <div className="bg-[#E9ECF5] min-h-screen">
      <SEO pagePath="/photovoltaic-parks" />
      <div className="container-custom py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-geoblue-800 mb-8">
            {isGerman 
              ? "Geotechnische Vorstudien für Photovoltaik-Parks" 
              : "Geotechnical Preliminary Studies for Photovoltaic Parks"}
          </h1>

          <div className="mb-8">
            <Link 
              to="/sectors" 
              className="text-geoblue-800 hover:text-geoblue-600 inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white shadow-sm hover:shadow-md transition-all duration-300"
            >
              <ArrowLeft className="h-4 w-4" />
              {isGerman ? 'Zurück zu Fachgebiete' : 'Back to Fields of Expertise'}
            </Link>
          </div>

          <p className="text-xl text-gray-700 mb-12 font-montserrat">
            {isGerman 
              ? "Unsere KI-gestützte geotechnische Vorstudie für Photovoltaik-Projekte bietet Ihnen eine solide Grundlage für Ihre Investitionen und Planungen. Wir liefern präzise standortspezifische Analysen unter Berücksichtigung der besonderen Anforderungen von Solarparks an die Bodenbeschaffenheit und die lokalen Umweltbedingungen."
              : "Our AI-supported geotechnical preliminary study for photovoltaic projects provides you with a solid foundation for your investments and planning. We deliver precise site-specific analyses taking into account the special requirements of solar parks regarding soil conditions and local environmental factors."}
          </p>

          <h2 className="text-2xl font-semibold text-geoblue-800 mb-8">
            {isGerman 
              ? "Vorteile unserer Vorstudien für Photovoltaik-Parks" 
              : "Benefits of our Preliminary Studies for Photovoltaic Parks"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex flex-col items-center mb-4">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-semibold text-geoblue-800 mb-3 text-center">
                  {advantage.title}
                </h3>
                <p className="text-gray-600">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md mb-12">
            <h2 className="text-2xl font-semibold text-geoblue-800 mb-4">
              {isGerman 
                ? "Geotechnische Optimierung für Photovoltaik-Parks" 
                : "Geotechnical Optimization for Photovoltaic Parks"}
            </h2>
            <p className="text-gray-600 mb-4">
              {isGerman 
                ? "Großflächige Photovoltaik-Parks stellen besondere Anforderungen an die geotechnische Planung, insbesondere hinsichtlich flächiger Gründungssysteme und Erosionsschutz."
                : "Large-scale photovoltaic parks place special demands on geotechnical planning, particularly regarding extensive foundation systems and erosion protection."}
            </p>
            <p className="text-gray-600 mb-4">
              {isGerman 
                ? "Unsere KI-gestützte Vorstudie analysiert systematisch historische Luftbilder, regionale Bohrdaten und topografische Informationen, um variierende Bodenverhältnisse und ehemalige Abbaugebiete zu identifizieren, die in konventionellen Karten oft nicht verzeichnet sind. Durch präzise Analyse können wir die Erkundungsmaßnahmen gezielt auf Risikobereiche konzentrieren."
                : "Our AI-supported preliminary study systematically analyzes historical aerial photographs, regional drilling data, and topographic information to identify varying soil conditions and former mining areas that are often not recorded in conventional maps. Through precise analysis, we can focus exploration measures on risk areas."}
            </p>
            <p className="text-gray-600 mb-4">
              {isGerman 
                ? "Die Anpassung des Rammtiefenplans und die Optimierung der Modullayouts können zu Einsparungen von bis zu 15% bei den Gründungskosten führen und teure Verzögerungen während der Bauphase vermeiden. Die technologisch generierten Analysen werden stets durch unsere erfahrenen Geotechniker mit spezifischer Expertise im Bereich Solarenergie validiert und mit praktischem Standortwissen ergänzt."
                : "Adapting the pile driving plan and optimizing the module layouts can lead to savings of up to 15% in foundation costs and avoid expensive delays during the construction phase. The technologically generated analyses are always validated by our experienced geotechnicians with specific expertise in solar energy and supplemented with practical site knowledge."}
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <Button
              className="bg-geoblue-800 hover:bg-geoblue-700 text-white font-semibold px-6 py-3 rounded-md text-lg"
            >
              {isGerman 
                ? "Jetzt unverbindliches Angebot anfordern" 
                : "Request a non-binding quote now"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotovoltaicParks;
