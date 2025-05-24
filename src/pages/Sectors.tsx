
import { useLanguage } from '@/context/LanguageContext';
import { Link } from 'react-router-dom';
import { Building2, Route, Factory, Droplets, Wind } from 'lucide-react';

const Sectors = () => {
  const { t, language } = useLanguage();

  const sectors = [
    { 
      title: t('sectorResidential'), 
      path: '/residential-construction',
      icon: <Building2 className="w-12 h-12 text-geoblue-800" />,
      description: language === 'de' ? 
        "Optimierte Baugrunduntersuchungen für Wohngebäude, Hochhäuser und Gewerbeobjekte." :
        "Optimized ground investigations for residential buildings, high-rises, and commercial properties.",
      accentColor: 'border-l-blue-700' // #1e40af
    },
    { 
      title: t('sectorInfrastructure'), 
      path: '/infrastructure-construction',
      icon: <Route className="w-12 h-12 text-geoblue-800" />,
      description: language === 'de' ?
        "Geotechnische Analysen für Straßen, Brücken, Tunnel und andere Infrastrukturprojekte." :
        "Geotechnical analyses for roads, bridges, tunnels, and other infrastructure projects.",
      accentColor: 'border-l-green-600' // #059669
    },
    { 
      title: t('sectorIndustrial'), 
      path: '/industrial-construction',
      icon: <Factory className="w-12 h-12 text-geoblue-800" />,
      description: language === 'de' ?
        "Spezialisierte Untersuchungen für Industriebauten, Logistikzentren und Produktionsanlagen." :
        "Specialized investigations for industrial buildings, logistics centers, and production facilities.",
      accentColor: 'border-l-orange-600' // #ea580c
    },
    { 
      title: t('sectorWater'), 
      path: '/water-construction',
      icon: <Droplets className="w-12 h-12 text-geoblue-800" />,
      description: language === 'de' ?
        "Geotechnische Vorstudien für Wasserbauwerke, Häfen, Deiche und wasserwirtschaftliche Anlagen." :
        "Geotechnical preliminary studies for hydraulic structures, ports, dikes, and water management facilities.",
      accentColor: 'border-l-purple-600' // #9333ea
    },
    { 
      title: t('sectorRenewable'), 
      path: '/renewable-energy',
      icon: <Wind className="w-12 h-12 text-geoblue-800" />,
      description: language === 'de' ?
        "Standortanalysen für Windparks, Solaranlagen und andere erneuerbare Energieprojekte." :
        "Site analyses for wind farms, solar plants, and other renewable energy projects.",
      accentColor: 'border-l-teal-600' // #0d9488
    }
  ];

  return (
    <div className="bg-[#E9ECF5] min-h-screen">
      <section className="bg-geoblue-800 text-white py-20">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="heading-primary-light">{t('sectorsTitle')}</h1>
            <p className="text-xl max-w-3xl mx-auto">{t('sectorsSubtitle')}</p>
          </div>
        </div>
      </section>

      <div className="container-custom py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-geoblue-800 mb-6">
            {t('sectorsTitle')}
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {t('sectorsSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector, index) => (
            <Link 
              key={index} 
              to={sector.path}
              className={`bg-geolight rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl border border-gray-100 hover:border-geoblue-800 border-l-4 ${sector.accentColor}`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  {sector.icon}
                </div>
                <h3 className="text-xl font-semibold text-geoblue-800 mb-3">
                  {sector.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {sector.description}
                </p>
                <span className="text-geoblue-800 font-medium">
                  {language === 'de' ? 'Mehr erfahren →' : 'Learn more →'}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sectors;
