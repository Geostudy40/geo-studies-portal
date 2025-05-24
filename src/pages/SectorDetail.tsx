
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowLeft } from 'lucide-react';
import SEO from '@/components/SEO';

const SectorDetail = () => {
  const { sectorId } = useParams();
  const { language } = useLanguage();
  const isGerman = language === 'de';
  
  // Define all sector-specific data
  const sectors = {
    residential: {
      title: isGerman ? "Wohnungsbau" : "Residential Construction",
      image: "https://images.unsplash.com/photo-1482731215275-a1f151646268?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      intro: isGerman
        ? "Der Wohnungsbau stellt eigene Anforderungen an geotechnische Vorstudien."
        : "Residential construction has its own requirements for geotechnical preliminary studies.",
      path: "/residential-construction",
      description: isGerman
        ? "Für Wohngebäude, Hochhäuser und Gewerbeobjekte bieten wir maßgeschneiderte geotechnische Vorstudien, die alle relevanten Faktoren wie Baugrundtragfähigkeit, Setzungspotenzial und Grundwassereinflüsse berücksichtigen. Unsere Analysen liefern eine solide Grundlage für eine kosteneffiziente und sichere Projektplanung."
        : "For residential buildings, high-rises, and commercial properties, we offer customized geotechnical preliminary studies that take into account all relevant factors such as ground load-bearing capacity, settlement potential, and groundwater influences. Our analyses provide a solid foundation for cost-efficient and safe project planning."
    },
    infrastructure: {
      title: isGerman ? "Infrastrukturbau" : "Infrastructure Construction",
      image: "https://images.unsplash.com/photo-1622877599486-a8c4a9f590fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      intro: isGerman
        ? "Infrastrukturprojekte erfordern umfangreiche geotechnische Voruntersuchungen."
        : "Infrastructure projects require extensive geotechnical preliminary investigations.",
      path: "/infrastructure-construction",
      description: isGerman
        ? "Bei Infrastrukturprojekten wie Straßen, Brücken und Tunneln spielen geotechnische Analysen eine entscheidende Rolle. Wir untersuchen Bodenverhältnisse entlang der gesamten Trasse, bewerten Risiken und entwickeln optimierte Gründungslösungen. Mit modernen KI-gestützten Analysemethoden identifizieren wir kritische Bereiche frühzeitig."
        : "For infrastructure projects such as roads, bridges, and tunnels, geotechnical analyses play a crucial role. We examine soil conditions along the entire route, assess risks, and develop optimized foundation solutions. With modern AI-supported analysis methods, we identify critical areas early on."
    },
    industrial: {
      title: isGerman ? "Industriebau" : "Industrial Construction",
      image: "https://images.unsplash.com/photo-1481934633871-a5e663fa84ed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      intro: isGerman
        ? "Industriebauten stellen besondere Anforderungen an die Baugrunduntersuchung."
        : "Industrial buildings place special demands on ground investigation.",
      path: "/industrial-construction",
      description: isGerman
        ? "Bei Industriebauten, Logistikzentren und Produktionsanlagen berücksichtigen wir die spezifischen Anforderungen hinsichtlich Tragfähigkeit, dynamischer Lasten und chemischer Beständigkeit des Baugrunds. Unsere Vorstudien sind auf die besonderen Herausforderungen von Industriebauten zugeschnitten und liefern präzise Daten für eine sichere und wirtschaftliche Bauausführung."
        : "For industrial buildings, logistics centers, and production facilities, we take into account the specific requirements regarding load-bearing capacity, dynamic loads, and chemical resistance of the building ground. Our preliminary studies are tailored to the special challenges of industrial buildings and provide precise data for safe and economical construction."
    },
    water: {
      title: isGerman ? "Wasserbau" : "Water Construction",
      image: "https://images.unsplash.com/photo-1511179556955-e447d5f13886?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      intro: isGerman
        ? "Wasserbauwerke erfordern spezialisierte geotechnische Vorstudien."
        : "Hydraulic structures require specialized geotechnical preliminary studies.",
      path: "/water-construction",
      description: isGerman
        ? "Für Wasserbauprojekte wie Häfen, Deiche, Schleusen oder Wasserkraftwerke bieten wir spezialisierte geotechnische Vorstudien, die auf die besonderen Anforderungen dieser Bauwerke eingehen. Unsere Analysen umfassen die Bewertung von Durchlässigkeiten, Strömungsverhältnissen, Erosionsrisiken und der Stabilität unter verschiedenen hydrostatischen und hydrodynamischen Bedingungen."
        : "For hydraulic engineering projects such as ports, dikes, locks, or hydropower plants, we offer specialized geotechnical preliminary studies that take into account the special requirements of these structures. Our analyses include the evaluation of permeabilities, flow conditions, erosion risks, and stability under various hydrostatic and hydrodynamic conditions."
    },
    wind: {
      title: language === 'de' ? "Windkraftanlagen" : "Wind Turbines",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      intro: language === 'de'
        ? "Windkraftanlagen stellen spezifische Anforderungen an die geotechnische Planung und Ausführung."
        : "Wind turbines place specific demands on geotechnical planning and implementation.",
      path: "/wind-turbines",
      description: language === 'de'
        ? "Bei Windkraftanlagen führen wir detaillierte Baugrunduntersuchungen durch, um die optimale Fundamentauslegung zu bestimmen. Unsere KI-gestützten Analysen berücksichtigen die besonderen dynamischen Belastungen und die erforderliche Langzeitstabilität der Anlagen. Durch frühzeitige Erkennung kritischer Bodenschichten helfen wir, Gründungskosten zu optimieren und die Standsicherheit zu erhöhen."
        : "For wind turbines, we conduct detailed ground investigations to determine the optimal foundation design. Our AI-supported analyses consider the special dynamic loads and required long-term stability of the turbines. By early detection of critical soil layers, we help optimize foundation costs and increase stability."
    },
    photovoltaic: {
      title: language === 'de' ? "Photovoltaik-Parks" : "Photovoltaic Parks",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      intro: language === 'de'
        ? "Photovoltaik-Parks erfordern eine besondere geotechnische Betrachtung der Flächeneignung."
        : "Photovoltaic parks require special geotechnical assessment of site suitability.",
      path: "/photovoltaic-parks",
      description: language === 'de'
        ? "Für großflächige Photovoltaik-Anlagen bieten wir spezialisierte geotechnische Vorstudien, die auf die besonderen Anforderungen von Solarparks eingehen. Durch präzise Analyse der Bodenverhältnisse, Tragfähigkeit und Entwässerungseigenschaften optimieren wir die Gründung und reduzieren Projektrisiken. Unsere KI-gestützten Methoden identifizieren Herausforderungen wie variierende Bodenverhältnisse frühzeitig."
        : "For large-scale photovoltaic systems, we offer specialized geotechnical preliminary studies that address the special requirements of solar parks. Through precise analysis of soil conditions, load-bearing capacity, and drainage properties, we optimize the foundation and reduce project risks. Our AI-supported methods identify challenges such as varying soil conditions at an early stage."
    }
  };

  // Map URL params to sector keys
  const sectorMapping: Record<string, keyof typeof sectors> = {
    'residential-construction': 'residential',
    'infrastructure-construction': 'infrastructure',
    'industrial-construction': 'industrial',
    'water-construction': 'water',
    'wind-turbines': 'wind',
    'photovoltaic-parks': 'photovoltaic',
  };

  const sectorKey = sectorMapping[sectorId as string] || 'residential';
  const sector = sectors[sectorKey];

  return (
    <div className="bg-[#E9ECF5] min-h-screen">
      <SEO pagePath={sector.path} />
      <div className="container-custom py-16 md:py-24">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <Link 
              to="/sectors" 
              className="text-geoblue-800 hover:text-geoblue-600 inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-md bg-white shadow-sm hover:shadow-md transition-all duration-300"
            >
              <ArrowLeft className="h-4 w-4" />
              {isGerman ? 'Zurück zu Fachgebiete' : 'Back to Fields of Expertise'}
            </Link>

            <h1 className="text-3xl md:text-4xl font-bold text-geoblue-800 mb-6">
              {sector.title}
            </h1>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <p className="text-xl text-gray-700 font-montserrat">
                {sector.intro}
              </p>
            </div>

            <div className="prose max-w-none bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-700">
                {sector.description}
              </p>

              <div className="mt-8 flex justify-center">
                <Link
                  to={sector.path}
                  className="bg-geoblue-800 hover:bg-geoblue-700 text-white px-6 py-3 rounded-lg shadow-sm transition-all duration-300 inline-flex items-center font-medium"
                >
                  {isGerman ? 'Mehr erfahren' : 'Learn more'}
                </Link>
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-xl h-80 md:h-[500px] bg-gray-100">
              <img 
                src={sector.image} 
                alt={sector.title} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectorDetail;
