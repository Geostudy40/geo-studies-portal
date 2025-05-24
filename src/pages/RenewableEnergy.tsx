

import { useLanguage } from '@/context/LanguageContext';
import { Link } from 'react-router-dom';
import { ArrowLeft, Wind, Shield, Droplet, FileText, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const RenewableEnergy = () => {
  const { language } = useLanguage();

  const isGerman = language === 'de';
  
  const advantages = [
    {
      title: isGerman 
        ? "Standortoptimierung für maximale Energieeffizienz" 
        : "Site Optimization for Maximum Energy Efficiency",
      icon: <Wind className="w-12 h-12 text-geoblue-800" />,
      description: isGerman
        ? "Gründliche Analyse der geologischen Eignung für unterschiedliche Anlagentypen und Gründungsvarianten. Bewertung der Topographie und Bodenbeschaffenheit für optimale Anlagenausrichtung und -platzierung. Identifikation potenzieller technischer Hindernisse im Untergrund und deren Auswirkungen auf die Energieausbeute."
        : "Thorough analysis of geological suitability for different types of installations and foundation options. Assessment of topography and soil conditions for optimal plant orientation and placement. Identification of potential technical obstacles in the subsoil and their effects on energy yield.",
      accentColor: 'border-l-teal-600' // #0d9488
    },
    {
      title: isGerman 
        ? "Geotechnische Risikoanalyse für langfristige Stabilität" 
        : "Geotechnical Risk Analysis for Long-term Stability",
      icon: <Shield className="w-12 h-12 text-geoblue-800" />,
      description: isGerman
        ? "Umfassende Bewertung von Baugrundrisiken wie Setzungsempfindlichkeit, Bodenverdichtung und Erosionsgefahr. Analyse der Tragfähigkeit für Windkraftfundamente unter Berücksichtigung dynamischer Lasten gemäß DIBt-Richtlinien. Beurteilung der Untergrundstabilität bei PV-Parks in Hanglagen oder auf rekultivierten Flächen."
        : "Comprehensive assessment of ground risks such as settlement sensitivity, soil compaction, and erosion hazards. Analysis of load-bearing capacity for wind power foundations considering dynamic loads according to DIBt guidelines. Evaluation of subsoil stability for PV parks on slopes or recultivated areas.",
      accentColor: 'border-l-teal-600' // #0d9488
    },
    {
      title: isGerman 
        ? "Hydrologische und umweltbezogene Bewertung" 
        : "Hydrological and Environmental Assessment",
      icon: <Droplet className="w-12 h-12 text-geoblue-800" />,
      description: isGerman
        ? "Detaillierte Untersuchung des Grundwasserhaushalts und potenzieller Auswirkungen geothermischer Anlagen. Bewertung der Oberflächenentwässerung bei großflächigen PV-Parks unter Beachtung des WHG und der Niederschlagswasserverordnungen. Einschätzung möglicher Umweltrisiken und Erarbeitung präventiver Maßnahmen gemäß aktueller Umweltrichtlinien."
        : "Detailed investigation of groundwater balance and potential impacts of geothermal systems. Assessment of surface drainage for large-scale PV parks in compliance with water management regulations. Evaluation of possible environmental risks and development of preventive measures according to current environmental guidelines.",
      accentColor: 'border-l-teal-600' // #0d9488
    },
    {
      title: isGerman 
        ? "Genehmigungsoptimierung nach lokalen Vorschriften" 
        : "Permit Optimization According to Local Regulations",
      icon: <FileText className="w-12 h-12 text-geoblue-800" />,
      description: isGerman
        ? "Frühzeitige Identifikation regionaler Genehmigungsanforderungen für erneuerbare Energieprojekte. Erstellung geotechnischer Dokumentation gemäß BImSchG, EEG und länderspezifischen Bauvorschriften. Unterstützung bei Standortnachweisen, Flächennutzungsplänen und behördlichen Anforderungen für Eingriffs-Ausgleichs-Regelungen."
        : "Early identification of regional approval requirements for renewable energy projects. Preparation of geotechnical documentation in accordance with federal emission control regulations, renewable energy laws, and state-specific building codes. Support with site verifications, land use plans, and official requirements for intervention-compensation regulations.",
      accentColor: 'border-l-teal-600' // #0d9488
    },
    {
      title: isGerman 
        ? "KI-gestützte Baubarkeitsanalyse und Erkundungsplanung" 
        : "AI-supported Constructability Analysis and Exploration Planning",
      icon: <Cpu className="w-12 h-12 text-geoblue-800" />,
      description: isGerman
        ? "Einsatz moderner KI-Algorithmen zur Analyse umfangreicher geologischer Datenbanken und historischer Bohrprofile. Präzise Einschätzung der Bohrtiefen und erforderlichen Erkundungsmaßnahmen für Erdwärmesonden. Optimierung des Erkundungsprogramms für großflächige Anlagen bei gleichzeitiger Reduzierung der Erkundungskosten."
        : "Use of modern AI algorithms to analyze extensive geological databases and historical drilling profiles. Precise estimation of drilling depths and required exploration measures for geothermal probes. Optimization of the exploration program for large-scale facilities while reducing exploration costs.",
      accentColor: 'border-l-teal-600' // #0d9488
    }
  ];

  return (
    <div className="bg-[#E9ECF5] min-h-screen">
      <div className="container-custom py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-geoblue-800 mb-8">
            {isGerman 
              ? "Geotechnische Vorstudien für Erneuerbare Energien" 
              : "Geotechnical Preliminary Studies for Renewable Energy"}
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
              ? "Unsere KI-gestützte geotechnische Vorstudie für Projekte im Bereich Erneuerbare Energien bietet Ihnen eine solide Grundlage für Ihre Investitionen und Planungen. Von Photovoltaik-Parks über Windkraftanlagen bis zu Erdwärmeprojekten – wir liefern präzise standortspezifische Analysen unter Berücksichtigung der besonderen Anforderungen regenerativer Energieerzeugung und der jeweiligen lokalen geologischen Bedingungen."
              : "Our AI-supported geotechnical preliminary study for renewable energy projects provides you with a solid foundation for your investments and planning. From photovoltaic parks to wind power plants to geothermal projects – we deliver precise site-specific analyses considering the special requirements of renewable energy generation and the respective local geological conditions."}
          </p>

          <h2 className="text-2xl font-semibold text-geoblue-800 mb-8">
            {isGerman 
              ? "Vorteile unserer Vorstudien für Erneuerbare Energien" 
              : "Benefits of our Preliminary Studies for Renewable Energy"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {advantages.map((advantage, index) => (
              <div key={index} className={`bg-geolight rounded-lg p-6 shadow-md border border-gray-100 hover:border-geoblue-800 transition-all duration-300 border-l-4 ${advantage.accentColor}`}>
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

          <div className="flex justify-center mb-8">
            <Button
              className="bg-geoblue-800 hover:bg-geoblue-700 text-white font-semibold px-6 py-3 rounded-md text-lg"
            >
              {isGerman 
                ? "Jetzt unverbindliches Angebot anfordern" 
                : "Request a Non-binding Offer Now"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenewableEnergy;

