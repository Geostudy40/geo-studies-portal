
import { useParams } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';

const SectorDetail = () => {
  const { sectorId } = useParams<{ sectorId: string }>();
  const { t, language } = useLanguage();

  // Define sector-specific content
  const sectorContent = {
    residential: {
      title: t('sectorResidential'),
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      intro: language === 'de' 
        ? "Geotechnische Vorstudien für Wohn- und Hochbauprojekte sind entscheidend für den Erfolg Ihrer Bauvorhaben."
        : "Geotechnical preliminary studies for residential and building construction projects are crucial for the success of your construction projects.",
      benefits: language === 'de'
        ? [
            "Frühzeitige Identifikation von Baugrundrisiken",
            "Optimierung der Fundamentierung und Kosteneinsparungen",
            "Beschleunigung von Genehmigungsverfahren durch fundierte Gutachten",
            "Vermeidung von Bauverzögerungen und Nachtragskosten"
          ]
        : [
            "Early identification of soil risks",
            "Optimization of foundations and cost savings",
            "Acceleration of approval procedures through well-founded reports",
            "Avoidance of construction delays and additional costs"
          ],
      description: language === 'de'
        ? "Unsere spezialisierten geotechnischen Analysen für Wohnungs- und Hochbauprojekte berücksichtigen die besonderen Anforderungen an Fundamente, Kellerbereiche und die Interaktion mit benachbarten Gebäuden. Durch den Einsatz modernster KI-Technologie können wir bereits in frühen Planungsphasen präzise Vorhersagen zur Bodenbeschaffenheit treffen und optimale Gründungslösungen vorschlagen."
        : "Our specialized geotechnical analyses for residential and high-rise building projects take into account the special requirements for foundations, basement areas, and interaction with neighboring buildings. By using state-of-the-art AI technology, we can make precise predictions about soil conditions and suggest optimal foundation solutions in early planning phases."
    },
    infrastructure: {
      title: t('sectorInfrastructure'),
      image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      intro: language === 'de'
        ? "Infrastruktur- und Verkehrsbauprojekte stellen besondere Anforderungen an die geotechnische Planung."
        : "Infrastructure and transportation construction projects place special demands on geotechnical planning.",
      benefits: language === 'de'
        ? [
            "Detaillierte Analyse von Bodenverhältnissen entlang linearer Strukturen",
            "Identifikation kritischer Bereiche für gezielte Untersuchungen",
            "Optimierung von Ausführungsvarianten und Bauverfahren",
            "Reduzierung von Risiken im Untergrund"
          ]
        : [
            "Detailed analysis of soil conditions along linear structures",
            "Identification of critical areas for targeted investigations",
            "Optimization of execution variants and construction methods",
            "Reduction of subsurface risks"
          ],
      description: language === 'de'
        ? "Bei Infrastrukturprojekten wie Straßen, Brücken und Tunneln ist eine präzise Kenntnis der geotechnischen Bedingungen entlang der gesamten Trasse entscheidend. Unsere spezialisierten Vorstudien ermöglichen eine effiziente Planung von Baugrunderkundungen und liefern wertvolle Erkenntnisse für die Wahl optimaler Gründungs- und Bauverfahren."
        : "For infrastructure projects such as roads, bridges, and tunnels, precise knowledge of the geotechnical conditions along the entire route is crucial. Our specialized preliminary studies enable efficient planning of ground investigations and provide valuable insights for choosing optimal foundation and construction methods."
    },
    industrial: {
      title: t('sectorIndustrial'),
      image: "https://images.unsplash.com/photo-1565949173209-1201c8e1b031?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      intro: language === 'de'
        ? "Industrieanlagen und Logistikzentren stellen hohe Anforderungen an die Tragfähigkeit und Setzungsempfindlichkeit des Baugrundes."
        : "Industrial facilities and logistics centers place high demands on the load-bearing capacity and settlement sensitivity of the building ground.",
      benefits: language === 'de'
        ? [
            "Analyse von Lasteinträgen und Setzungsverhalten",
            "Berücksichtigung dynamischer Lasten aus Maschinen und Anlagen",
            "Bewertung von Erschütterungs- und Vibrationsrisiken",
            "Beurteilung von Boden-Bauwerk-Interaktionen"
          ]
        : [
            "Analysis of load inputs and settlement behavior",
            "Consideration of dynamic loads from machines and equipment",
            "Assessment of shock and vibration risks",
            "Evaluation of soil-structure interactions"
          ],
      description: language === 'de'
        ? "Für Industrieanlagen und Logistikzentren führen wir spezialisierte geotechnische Vorstudien durch, die insbesondere die hohen Anforderungen an Tragfähigkeit, gleichmäßiges Setzungsverhalten und die Beständigkeit gegenüber dynamischen Lasten berücksichtigen. Unsere KI-gestützten Analysen helfen, den Baugrund optimal zu bewerten und wirtschaftliche Gründungslösungen zu entwickeln."
        : "For industrial facilities and logistics centers, we conduct specialized geotechnical preliminary studies that particularly take into account the high requirements for load-bearing capacity, uniform settlement behavior, and resistance to dynamic loads. Our AI-supported analyses help to optimally evaluate the building ground and develop economical foundation solutions."
    },
    water: {
      title: t('sectorWater'),
      image: "https://images.unsplash.com/photo-1561643241-9abf82d76a68?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      intro: language === 'de'
        ? "Wasserbauliche Projekte erfordern besondere geotechnische Expertise aufgrund der komplexen Interaktion zwischen Bauwerk, Boden und Wasser."
        : "Hydraulic engineering projects require special geotechnical expertise due to the complex interaction between structure, soil, and water.",
      benefits: language === 'de'
        ? [
            "Analyse von Wasserständen und hydraulischen Gradienten",
            "Bewertung von Durchlässigkeiten und Strömungsverhältnissen",
            "Untersuchung von Erosions- und Kolkrisiken",
            "Beurteilung der Standsicherheit unter hydrostatischen und hydrodynamischen Bedingungen"
          ]
        : [
            "Analysis of water levels and hydraulic gradients",
            "Evaluation of permeabilities and flow conditions",
            "Investigation of erosion and scour risks",
            "Assessment of stability under hydrostatic and hydrodynamic conditions"
          ],
      description: language === 'de'
        ? "Bei wasserbaulichen Projekten wie Häfen, Deichen, Schleusen oder Wasserkraftanlagen bieten wir spezialisierte geotechnische Vorstudien, die die besonderen Anforderungen dieser Bauwerke berücksichtigen. Unsere Analysen umfassen die Bewertung von Durchlässigkeiten, Strömungsverhältnissen, Erosionsrisiken und der Standsicherheit unter verschiedenen hydrostatischen und hydrodynamischen Bedingungen."
        : "For hydraulic engineering projects such as ports, dikes, locks, or hydropower plants, we offer specialized geotechnical preliminary studies that take into account the special requirements of these structures. Our analyses include the evaluation of permeabilities, flow conditions, erosion risks, and stability under various hydrostatic and hydrodynamic conditions."
    },
    renewable: {
      title: t('sectorRenewable'),
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      intro: language === 'de'
        ? "Projekte im Bereich erneuerbarer Energien stellen spezifische Anforderungen an die geotechnische Planung und Ausführung."
        : "Renewable energy projects place specific demands on geotechnical planning and execution.",
      benefits: language === 'de'
        ? [
            "Standortspezifische Analyse von Windkraft-, Solar- und anderen Energieerzeugungsanlagen",
            "Bewertung von dynamischen Lasten bei Windkraftanlagen",
            "Optimierung von Flächennutzung bei Solarparks",
            "Berücksichtigung von Umweltaspekten und nachhaltiger Bauweise"
          ]
        : [
            "Site-specific analysis of wind power, solar, and other energy generation facilities",
            "Assessment of dynamic loads in wind turbines",
            "Optimization of land use in solar parks",
            "Consideration of environmental aspects and sustainable construction"
          ],
      description: language === 'de'
        ? "Für Projekte im Bereich erneuerbarer Energien bieten wir maßgeschneiderte geotechnische Vorstudien, die die besonderen Anforderungen dieser Anlagen berücksichtigen. Bei Windkraftanlagen analysieren wir insbesondere die dynamischen Lasten und die Interaktion mit dem Baugrund, während wir bei Solarparks den Fokus auf optimale Flächennutzung und erosionssichere Gründungen legen."
        : "For renewable energy projects, we offer customized geotechnical preliminary studies that take into account the special requirements of these facilities. For wind turbines, we particularly analyze the dynamic loads and the interaction with the building ground, while for solar parks, we focus on optimal land use and erosion-resistant foundations."
    }
  };

  // Map sector ID from URL parameter to content object key
  const sectorMap: {[key: string]: keyof typeof sectorContent} = {
    'residential': 'residential',
    'infrastructure': 'infrastructure',
    'industrial': 'industrial',
    'water': 'water',
    'renewable': 'renewable'
  };

  const currentSector = sectorId ? sectorMap[sectorId] : 'residential';
  const content = sectorContent[currentSector];

  if (!content) {
    return <div className="container-custom py-16">Content not found</div>;
  }

  return (
    <div className="container-custom py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-geoblue-800 mb-8">
          {content.title}
        </h1>

        <div className="rounded-lg overflow-hidden shadow-xl mb-10">
          <img 
            src={content.image} 
            alt={content.title}
            className="w-full h-auto object-cover object-center" 
          />
        </div>

        <p className="text-xl text-gray-700 mb-8 font-montserrat">
          {content.intro}
        </p>

        <div className="bg-geoblue-50 rounded-lg p-6 mb-10">
          <h3 className="text-xl font-semibold text-geoblue-800 mb-4">
            {language === 'de' ? 'Vorteile für Ihre Branche' : 'Benefits for Your Sector'}
          </h3>
          <ul className="space-y-3">
            {content.benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <span className="text-geoblue-800 mr-2">•</span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="prose prose-lg max-w-none">
          <p>{content.description}</p>
        </div>

        <div className="mt-12 flex justify-center">
          <a href="/contact" className="btn-primary">
            {language === 'de' ? 'Beratungsgespräch vereinbaren' : 'Schedule a consultation'}
          </a>
        </div>
      </div>
    </div>
  );
};

export default SectorDetail;
